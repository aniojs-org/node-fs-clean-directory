import {generateFromTemplate} from "fourtune/autogenerate"

const asyncToSync = {
	"import {scandir} from \"@anio-fs/scandir\"": "import {scandirSync} from \"@anio-fs/scandir\"",
	"import {remove} from \"@anio-fs/remove\"": "import {removeSync} from \"@anio-fs/remove\"",
	"export default async function(": "export default function(",
	"filter = async (entry) => {": "filter = (entry) => {",
	"const keep = await options.preserve(entry)": "const keep = options.preserve(entry)",
	"await scandir": "scandirSync",
	"async callback(entry) {": "callback(entry) {",
	"await remove(": "removeSync("
}

export default {
	realm: "js",
	type: "package",

	autogenerate: {
		"sync.mjs": generateFromTemplate("src/template.mjs", asyncToSync),
		"async.mjs": generateFromTemplate("src/template.mjs", {})
	}
}
