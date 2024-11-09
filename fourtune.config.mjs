import {generateAsyncSyncVariant} from "fourtune/autogenerate"

export default {
	realm: "js",
	type: "package:async/sync",

	autogenerate: {
		"export/CleanOptionsType.d.mts": generateAsyncSyncVariant("src/template/CleanOptionsType.d.mts", "async"),
		"export/CleanSyncOptionsType.d.mts": generateAsyncSyncVariant("src/template/CleanOptionsType.d.mts", "sync"),
	},

	target: {
		function_name: "clean",

		dependencies: {
			"@anio-fs/scandir": "scandir",
			"@anio-fs/remove": "remove"
		}
	}
}
