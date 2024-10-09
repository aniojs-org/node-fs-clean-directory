import type {UsableContextType, FunctionTypeFromFactoryType, ContextInstanceType} from "@fourtune/realm-js"
import {useContext } from "@fourtune/realm-js"
import type {ScandirEntryType} from "@anio-fs/scandir"

import {scandirFactory} from "@anio-fs/scandir"
//import {scandirSyncFactory as scandirFactory} from "@anio-fs/scandir"
import {removeFactory} from "@anio-fs/remove"
//import {removeSyncFactory as removeFactory} from "@anio-fs/remove"

import {clean as fn} from "./clean.mts"
//import {cleanSync as fn} from "./cleanSync.mts"

import type {CleanOptionsType} from "./CleanOptionsType.d.mts"
//import type {CleanSyncOptionsType} from "./CleanSyncOptionsType.d.mts"

interface Dependencies {
	scandir: FunctionTypeFromFactoryType<typeof scandirFactory>,
	remove: FunctionTypeFromFactoryType<typeof removeFactory>
}

async function cleanImplementation(
//function cleanImplementation(
	dir_path : string,
	{
		preserve = null
	} : CleanOptionsType = {},
//	} : CleanSyncOptionsType = {},
	context : ContextInstanceType,
	dependencies : Dependencies
) {
	const {scandir, remove} = dependencies

	context.log.trace(`cleaning "${dir_path}"`)

	let filter = null

	if (preserve) {
		filter = async (entry : ScandirEntryType) => {
//		filter = (entry : ScandirEntryType) => {
			const keep = await preserve(entry)
//			const keep = preserve(entry)

			return keep !== true
		}
	}

	await scandir(dir_path, {
//	scandir(dir_path, {
		reverse: true,

		filter,

		async callback(entry) {
//		callback(entry) {
			await remove(entry.absolute_path)
//			remove(entry.absolute_path)
		}
	})
}

export function cleanFactory(context_or_options : UsableContextType = {}) : typeof fn {
//export function cleanSyncFactory(context_or_options : UsableContextType = {}) : typeof fn {

	const context = useContext(context_or_options)

	const dependencies : Dependencies = {
		scandir: scandirFactory(context_or_options),
		remove: removeFactory(context_or_options)
	}

	return async function clean(dir_path : string, options : CleanOptionsType = {}) : ReturnType<typeof fn> {
//	return function cleanSync(dir_path : string, options : CleanSyncOptionsType = {}) : ReturnType<typeof fn> {
		await cleanImplementation(dir_path, options, context, dependencies)
//		cleanImplementation(dir_path, options, context, dependencies)
	}
}
