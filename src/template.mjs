import {scandir} from "@anio-fs/scandir"
import {remove} from "@anio-fs/remove"

export default async function(dir_path, options = {}) {
	let filter = null

	if (options.preserve) {
		filter = async (entry) => {
			const keep = await options.preserve(entry)

			return keep !== true
		}
	}

	await scandir(dir_path, {
		filter,

		async callback(entry) {
			await remove(entry.absolute_path)
		}
	})
}
