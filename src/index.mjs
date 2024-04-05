import async_impl from "./auto/async.mjs"
import sync_impl from "./auto/sync.mjs"

export function clean(dir_path, options) {
	return async_impl(dir_path, options)
}

export function cleanSync(dir_path, options) {
	return sync_impl(dir_path, options)
}
