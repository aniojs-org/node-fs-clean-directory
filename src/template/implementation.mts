/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesType.d.mts"
//import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"
//import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import type {CleanOptions} from "#~auto/export/CleanOptions.d.mts"
//import type {CleanSyncOptions} from "#~auto/export/CleanSyncOptions.d.mts"

import type {ScandirEntry} from "@anio-fs/scandir"

async function cleanImplementation(
//function cleanImplementation(
	context : ContextInstance,
	dependencies : DependenciesType,
	dir_path : string,
	{
		preserve = null
	} : CleanOptions = {},
//	} : CleanSyncOptions = {}
) {
	const {scandir, remove} = dependencies

	context.log.trace(`cleaning "${dir_path}"`)

	let filter = null

	if (preserve) {
		filter = async (entry : ScandirEntry) => {
//		filter = (entry : ScandirEntry) => {
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

export default async function(
//export default function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	dir_path : string,
	options? : CleanOptions
//	options? : CleanSyncOptions
) : ReturnType<ImplementationDocType> {

	await cleanImplementation(context, dependencies, dir_path, options)
//	cleanImplementation(context, dependencies, dir_path, options)

}
