import type {UsableContextType, FunctionTypeFromFactoryType, ContextInstanceType} from "@fourtune/realm-js"
import {useContext } from "@fourtune/realm-js"
import type {ScandirEntryType} from "@anio-fs/scandir"

import {scandirSyncFactory as scandirFactory} from "@anio-fs/scandir"
import {removeSyncFactory as removeFactory} from "@anio-fs/remove"

import {cleanSync as fn} from "./cleanSync.mts"

import type {CleanSyncOptionsType} from "./CleanSyncOptionsType.d.mts"

interface Dependencies {
	scandir: FunctionTypeFromFactoryType<typeof scandirFactory>,
	remove: FunctionTypeFromFactoryType<typeof removeFactory>
}

function cleanImplementation(
	dir_path : string,
	{
		preserve = null
	} : CleanSyncOptionsType = {},
	context : ContextInstanceType,
	dependencies : Dependencies
) {
	const {scandir, remove} = dependencies

	context.log.trace(`cleaning "${dir_path}"`)

	let filter = null

	if (preserve) {
		filter = (entry : ScandirEntryType) => {
			const keep = preserve(entry)

			return keep !== true
		}
	}

	scandir(dir_path, {
		reverse: true,

		filter,

		callback(entry) {
			remove(entry.absolute_path)
		}
	})
}

export function cleanSyncFactory(context_or_options : UsableContextType = {}) : typeof fn {

	const context = useContext(context_or_options)

	const dependencies : Dependencies = {
		scandir: scandirFactory(context_or_options),
		remove: removeFactory(context_or_options)
	}

	return function cleanSync(dir_path : string, options : CleanSyncOptionsType = {}) : ReturnType<typeof fn> {
		cleanImplementation(dir_path, options, context, dependencies)
	}
}
