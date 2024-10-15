import type {ScandirEntryType} from "@anio-fs/scandir"

type PreserveType = {
	(entry : ScandirEntryType) : Promise<boolean>
}

export type CleanOptionsType = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : PreserveType | null
}
