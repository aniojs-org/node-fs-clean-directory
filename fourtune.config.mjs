import {generateFactoryFiles} from "@fourtune/realm-js/v0/autogenerate"

export default {
	realm: {
		name: "js",
		type: "package",

		options: {
			runtime: "node"
		}
	},

	autogenerate: {
		...generateFactoryFiles({
			source_file: "src/__cleanDirectoryXXX.as.mts",
			export_name: "cleanDirectoryXXX",
			destination: "src/export"
		})
	}
}
