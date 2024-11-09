import type {ScandirEntry} from "@anio-fs/scandir"

type Preserve = {
	(entry : ScandirEntry) : boolean
}

export type CleanSyncOptions = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : Preserve | null
}