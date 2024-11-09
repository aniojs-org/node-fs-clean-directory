import type {ScandirEntry} from "@anio-fs/scandir"

type Preserve = {
	(entry : ScandirEntry) : Promise<boolean>
}

export type CleanOptions = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : Preserve | null
}
