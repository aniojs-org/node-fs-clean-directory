import type {ScandirEntry as CleanScandirEntry} from "@anio-fs/scandir"

declare type CleanOptions = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve(entry : CleanScandirEntry) : boolean;
	preserve(entry : CleanScandirEntry) : Promise<boolean>;
};

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
export function clean(dir_path : string, options? : CleanOptions) : Promise<void>

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
export function cleanSync(dir_path : string, options? : CleanOptions) : void
