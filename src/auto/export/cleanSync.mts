import type {CleanSyncOptionsType} from "./CleanSyncOptionsType.d.mts"

import {cleanSyncFactory as factory} from "./cleanSyncFactory.mts"

const impl = factory()

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
export function cleanSync(dir_path : string, options? : CleanSyncOptionsType) : void {
	impl(dir_path, options)
}
