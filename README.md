# @aniojs/node-fs-clean-directory

Clean a directory.

```js
import {cleanDirectory, cleanDirectorySync} from "@aniojs/node-fs-clean-directory"

await cleanDirectory("./dir/")

//
// delete everything except root .gitkeep file
//
await cleanDirectory("./dir/", {
	preserve(entry) {
		return entry.relative_path === ".gitkeep"
	}
})
```
