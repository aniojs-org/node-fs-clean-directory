import type {ScandirEntryType} from "@anio-fs/scandir"

type PreserveType = {
	(entry : ScandirEntryType) : boolean
}

export type CleanSyncOptionsType = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : PreserveType | null
}
