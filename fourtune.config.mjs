import {generateSyncAsyncVariant} from "fourtune/autogenerate"

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"export/CleanOptionsType.d.mts": generateSyncAsyncVariant("template/CleanOptionsType.d.mts", "async"),
		"export/CleanSyncOptionsType.d.mts": generateSyncAsyncVariant("template/CleanOptionsType.d.mts", "sync"),

		"export/clean.mts": generateSyncAsyncVariant("template/clean.mts", "async"),
		"export/cleanSync.mts": generateSyncAsyncVariant("template/clean.mts", "sync"),

		"export/cleanFactory.mts": generateSyncAsyncVariant("template/cleanFactory.mts", "async"),
		"export/cleanSyncFactory.mts": generateSyncAsyncVariant("template/cleanFactory.mts", "sync"),
	}
}
