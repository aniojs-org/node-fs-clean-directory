import {createContext} from "@fourtune/realm-js/v0/runtime"

// vvv--- types needed for implementation
import type {CleanDirectoryOptions as Options} from "#~synthetic/async.sync/export/CleanDirectoryOptions.d.mts"
/* couldn't find a user defined type named 'Promise' at the top level */
import type {ScandirEntry} from "@aniojs/node-fs-scandir"
// ^^^--- types needed for implementation

import {cleanDirectoryFactory as factory} from "#~synthetic/user/export/cleanDirectoryFactory.mts"

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
export async function cleanDirectory(input_path: string, options?: Options) : Promise<undefined> {
	const __fnImplementation = factory(createContext())

	return await __fnImplementation(input_path, options)
}
