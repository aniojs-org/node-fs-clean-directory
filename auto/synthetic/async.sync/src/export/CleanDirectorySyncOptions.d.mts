import type {ScandirEntry} from "@aniojs/node-fs-scandir"

type Preserve = {
	(entry : ScandirEntry) : boolean
}

export type CleanDirectorySyncOptions = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : Preserve
}
