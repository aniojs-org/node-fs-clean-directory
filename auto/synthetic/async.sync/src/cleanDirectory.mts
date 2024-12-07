import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {CleanDirectoryOptions as Options} from "#~synthetic/async.sync/export/CleanDirectoryOptions.d.mts"

import {scandirCallback} from "@aniojs/node-fs-scandir"

import type {ScandirEntry} from "@aniojs/node-fs-scandir"

import {remove} from "@aniojs/node-fs-remove"

export type AnioJsDependencies = {
	scandirCallback: typeof scandirCallback,
	remove: typeof remove
}

/**
 * @brief Asynchronously clean a directory.
 * @description
 * Asynchronously cleans the directory `dir_path`.
 * This means everything inside the directory is removed.
 * A function can be specified with `options.preserve` to dynamically
 * determine whether an entry should be removed or not.
 * @param dir_path The directory to be cleaned.
 * @param options Optional options.
 */
export async function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	input_path: string,
	options?: Options
) : Promise<undefined> {
	if (typeof options === "undefined") {
		options = {}
	}

	const context = useContext(wrapped_context, 0)

	const {scandirCallback, remove} = dependencies

	context.log.trace(`cleaning "${input_path}"`)

	let filter = undefined

	if (typeof options.preserve === "function") {
		filter = async (entry : ScandirEntry) => {
			if (!options.preserve) return false

			const keep = await options.preserve(entry)

			return keep !== true
		}
	}

	await scandirCallback(input_path, {
		reverse: true,

		filter,

		async callback(entry) {
			await remove(entry.absolute_path)
		}
	})
}
