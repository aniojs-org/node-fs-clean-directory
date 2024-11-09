import {scandirSync} from "@anio-fs/scandir"
import {removeSync} from "@anio-fs/remove"
export type DependenciesType = {
	scandir: typeof scandirSync,
	remove: typeof removeSync,
}
