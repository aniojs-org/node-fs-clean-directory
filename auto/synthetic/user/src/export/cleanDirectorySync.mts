import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
import type {CleanDirectorySyncOptions as Options} from "#~synthetic/async.sync/export/CleanDirectorySyncOptions.d.mts"
import type {ScandirEntry} from "@aniojs/node-fs-scandir"
// ^^^--- types needed for implementation

import {cleanDirectorySyncFactory as factory} from "#~synthetic/user/export/cleanDirectorySyncFactory.mts"

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
export function cleanDirectorySync(input_path: string, options?: Options) : undefined {
	const __fnImplementation = factory(createContext())

	return __fnImplementation(input_path, options)
}
