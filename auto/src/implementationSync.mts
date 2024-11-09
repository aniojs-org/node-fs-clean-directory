/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesSyncType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationSyncDocType.d.mts"
/* -------- required imports by template -------- */

import type {CleanSyncOptions} from "#~auto/export/CleanSyncOptions.d.mts"

import type {ScandirEntry} from "@anio-fs/scandir"

function cleanImplementation(
	context : ContextInstance,
	dependencies : DependenciesType,
	dir_path : string,
	{
		preserve = null
	} : CleanSyncOptions = {}
) {
	const {scandir, remove} = dependencies

	context.log.trace(`cleaning "${dir_path}"`)

	let filter = null

	if (preserve) {
		filter = (entry : ScandirEntry) => {
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
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	dir_path : string,
	options? : CleanSyncOptions
) : ReturnType<ImplementationDocType> {

	cleanImplementation(context, dependencies, dir_path, options)

}
