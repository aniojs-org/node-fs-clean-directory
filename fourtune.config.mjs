import {generateSyncAsyncVariant} from "fourtune/autogenerate"

export default {
	realm: "js",
	type: "package:async/sync",

	autogenerate: {
		"export/CleanOptionsType.d.mts": generateSyncAsyncVariant("template/CleanOptionsType.d.mts", "async"),
		"export/CleanSyncOptionsType.d.mts": generateSyncAsyncVariant("template/CleanOptionsType.d.mts", "sync"),
	},

	target: {
		function_name: "clean",

		dependencies: {
			"@anio-fs/scandir": "scandir",
			"@anio-fs/remove": "remove"
		}
	}
}
