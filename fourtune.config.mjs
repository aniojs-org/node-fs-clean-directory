import {generateAsyncSyncVariant} from "fourtune/autogenerate"

export default {
	realm: "js",
	type: "package:async/sync",

	autogenerate: {
		"export/CleanOptions.d.mts": generateAsyncSyncVariant("src/template/CleanOptions.d.mts", "async"),
		"export/CleanSyncOptions.d.mts": generateAsyncSyncVariant("src/template/CleanOptions.d.mts", "sync"),
	},

	target: {
		function_name: "clean",

		dependencies: {
			"@anio-fs/scandir": "scandir",
			"@anio-fs/remove": "remove"
		}
	}
}
