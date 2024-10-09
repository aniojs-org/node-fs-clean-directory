import type {ScandirEntryType} from "@anio-fs/scandir"

export type CleanOptionsType = {
//export type CleanSyncOptionsType = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve(entry : ScandirEntryType) : Promise<boolean>;
//	preserve(entry : ScandirEntryType) : boolean;
}
