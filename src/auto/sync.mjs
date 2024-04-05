import {scandirSync} from "@anio-fs/scandir"
import {removeSync} from "@anio-fs/remove"

export default function(dir_path, options = {}) {
	let filter = null

	if (options.preserve) {
		filter = (entry) => {
			const keep = options.preserve(entry)

			return keep !== true
		}
	}

	scandirSync(dir_path, {
		reverse: true,

		filter,

		callback(entry) {
			removeSync(entry.absolute_path)
		}
	})
}
