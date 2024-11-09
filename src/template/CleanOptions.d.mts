import type {ScandirEntryType} from "@anio-fs/scandir"

type PreserveType = {
	(entry : ScandirEntryType) : Promise<boolean>
//	(entry : ScandirEntryType) : boolean
}

export type CleanOptions = {
//export type CleanSyncOptions = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : PreserveType | null
}
