import {useContext, type RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"

import type {CleanDirectorySyncOptions as Options} from "#~synthetic/async.sync/export/CleanDirectorySyncOptions.d.mts"

import {scandirSyncCallback as scandirCallback} from "@aniojs/node-fs-scandir"

import type {ScandirEntry} from "@aniojs/node-fs-scandir"

import {removeSync as remove} from "@aniojs/node-fs-remove"

export type AnioJsDependencies = {
	scandirCallback: typeof scandirCallback,
	remove: typeof remove
}

/**
 * @brief Synchronously clean a directory.
 * @description
 * Synchronously cleans the directory `dir_path`.
 * This means everything inside the directory is removed.
 * A function can be specified with `options.preserve` to dynamically
 * determine whether an entry should be removed or not.
 * @param dir_path The directory to be cleaned.
 * @param options Optional options.
 */
export function implementation(
	wrapped_context: RuntimeWrappedContextInstance,
	dependencies: AnioJsDependencies,
	input_path: string,
	options?: Options
) : undefined {
	if (typeof options === "undefined") {
		options = {}
	}

	const context = useContext(wrapped_context, 0)

	const {scandirCallback, remove} = dependencies

	context.log.trace(`cleaning "${input_path}"`)

	let filter = undefined

	if (typeof options.preserve === "function") {
		filter = (entry : ScandirEntry) => {
			if (!options.preserve) return false

			const keep = options.preserve(entry)

			return keep !== true
		}
	}

	scandirCallback(input_path, {
		reverse: true,

		filter,

		callback(entry) {
			remove(entry.absolute_path)
		}
	})
}
