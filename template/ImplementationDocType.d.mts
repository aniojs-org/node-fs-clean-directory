/* define and describe your function api here */
import type {CleanOptionsType} from "#/auto/export/CleanOptionsType.d.mts"
//import type {CleanSyncOptionsType} from "#/auto/export/CleanSyncOptionsType.d.mts"

export type ImplementationDocType = {
	/**
	 * @brief Asynchronously clean a directory.
//	 * @brief Synchronously clean a directory.
	 * @description
	 * Asynchronously cleans the directory `dir_path`.
//	 * Synchronously cleans the directory `dir_path`.
	 * This means everything inside the directory is removed.
	 * A function can be specified with `options.preserve` to dynamically
	 * determine whether an entry should be removed or not.
	 * @param dir_path The directory to be cleaned.
	 * @param options Optional options.
	 */
       (dir_path : string, options? : CleanOptionsType) : Promise<void>
//     (dir_path : string, options? : CleanSyncOptionsType) : void
}
