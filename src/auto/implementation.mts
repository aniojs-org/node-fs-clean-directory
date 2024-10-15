/* -------- required imports by template -------- */
import type {ContextInstanceType} from "@fourtune/realm-js"
import type {DependenciesType} from "#/auto/DependenciesType.d.mts"

import type {ImplementationDocType} from "#/auto/ImplementationDocType.d.mts"
/* -------- required imports by template -------- */

import type {CleanOptionsType} from "#/auto/export/CleanOptionsType.d.mts"

import type {ScandirEntryType} from "@anio-fs/scandir"

async function cleanImplementation(
	context : ContextInstanceType,
	dependencies : DependenciesType,
	dir_path : string,
	{
		preserve = null
	} : CleanOptionsType = {},
) {
	const {scandir, remove} = dependencies

	context.log.trace(`cleaning "${dir_path}"`)

	let filter = null

	if (preserve) {
		filter = async (entry : ScandirEntryType) => {
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
	context : ContextInstanceType,
	dependencies : DependenciesType,
	/* add additional parameters here */
	dir_path : string,
	options? : CleanOptionsType
) : ReturnType<ImplementationDocType> {

		await cleanImplementation(context, dependencies, dir_path, options)

}
