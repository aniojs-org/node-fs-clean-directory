import type {ScandirEntry} from "@aniojs/node-fs-scandir"

type Preserve = {
	(entry : ScandirEntry) : Promise<boolean> | boolean
//>	(entry : ScandirEntry) : boolean
}

export type __XX__ = {
	/**
	 * @brief Function to determine whether to keep an entry or not.
	 */
	preserve? : Preserve
}
