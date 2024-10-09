import type {CleanOptionsType} from "./CleanOptionsType.d.mts"
//import type {CleanSyncOptionsType} from "./CleanSyncOptionsType.d.mts"

import {cleanFactory as factory} from "./cleanFactory.mts"
//import {cleanSyncFactory as factory} from "./cleanSyncFactory.mts"

const impl = factory()

/**
 * @brief Asynchronously clean a directory.
// * @brief Synchronously clean a directory.
 * @description
 * Asynchronously cleans the directory `dir_path`.
// * Synchronously cleans the directory `dir_path`.
 * This means everything inside the directory is removed.
 * A function can be specified with `options.preserve` to dynamically
 * determine whether an entry should be removed or not.
 * @param dir_path The directory to be cleaned.
 * @param options Optional options.
 */
export async function clean(dir_path : string, options? : CleanOptionsType) : Promise<void> {
//export function cleanSync(dir_path : string, options? : CleanSyncOptionsType) : void {
	await impl(dir_path, options)
//	impl(dir_path, options)
}
