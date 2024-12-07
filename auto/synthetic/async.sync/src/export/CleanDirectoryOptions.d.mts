import type {ScandirEntry} from "@aniojs/node-fs-scandir"

type Preserve = {
	(entry : ScandirEntry) : Promise<boolean> | boolean
}

export type CleanDirectoryOptions = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : Preserve
}
