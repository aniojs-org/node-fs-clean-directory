/* -------- required imports by template -------- */
import type {ContextInstanceType} from "@fourtune/realm-js"
import type {DependenciesType} from "#/auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#/auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import type {CleanSyncOptionsType} from "#/auto/export/CleanSyncOptionsType.d.mts"

import type {ScandirEntryType} from "@anio-fs/scandir"

function cleanImplementation(
	context : ContextInstanceType,
	dependencies : DependenciesType,
	dir_path : string,
	{
		preserve = null
	} : CleanSyncOptionsType = {}
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

export default function(
	context : ContextInstanceType,
	dependencies : DependenciesType,
	/* add additional parameters here */
	dir_path : string,
	options? : CleanSyncOptionsType
) : ReturnType<ImplementationDocType> {

	cleanImplementation(context, dependencies, dir_path, options)

}
