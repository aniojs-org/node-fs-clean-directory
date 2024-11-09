/* -------- required imports by template -------- */
import type {ContextInstance} from "@fourtune/realm-js/v0/runtime"
import type {DependenciesType} from "#~auto/DependenciesType.d.mts"

import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"
/* -------- required imports by template -------- */

import type {CleanOptions} from "#~auto/export/CleanOptions.d.mts"

import type {ScandirEntry} from "@anio-fs/scandir"

async function cleanImplementation(
	context : ContextInstance,
	dependencies : DependenciesType,
	dir_path : string,
	{
		preserve = null
	} : CleanOptions = {},
) {
	const {scandir, remove} = dependencies

	context.log.trace(`cleaning "${dir_path}"`)

	let filter = null

	if (preserve) {
		filter = async (entry : ScandirEntry) => {
			const keep = await preserve(entry)

			return keep !== true
		}
	}

	await scandir(dir_path, {
		reverse: true,

		filter,

		async callback(entry) {
			await remove(entry.absolute_path)
		}
	})
}

export default async function(
	context : ContextInstance,
	dependencies : DependenciesType,
	/* add additional parameters here */
	dir_path : string,
	options? : CleanOptions
) : ReturnType<ImplementationDocType> {

	await cleanImplementation(context, dependencies, dir_path, options)

}
