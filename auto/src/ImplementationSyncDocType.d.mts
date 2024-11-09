/* define and describe your function api here */
import type {CleanSyncOptions} from "#~auto/export/CleanSyncOptions.d.mts"

export type ImplementationDocType = {
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
     (dir_path : string, options? : CleanSyncOptions) : void
}
