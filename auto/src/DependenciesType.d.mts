import {scandir} from "@anio-fs/scandir"
import {remove} from "@anio-fs/remove"
export type DependenciesType = {
	scandir: typeof scandir,
	remove: typeof remove,
}
