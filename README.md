# @anio-fs/clean

Clean a directory.

```js
import {clean, cleanSync} from "@anio-fs/clean"

await clean("./dir/")

//
// delete everything except root .gitkeep file
//
await clean("./dir/", {
	preserve(entry) {
		return entry.relative_path === ".gitkeep"
	}
})
```
