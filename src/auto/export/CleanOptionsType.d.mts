import type {ScandirEntryType} from "@anio-fs/scandir"

export type CleanOptionsType = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve(entry : ScandirEntryType) : Promise<boolean>;
}
