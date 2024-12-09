import {implementation, type AnioJsDependencies} from "#~synthetic/async.sync/cleanDirectorySync.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv dependencies declared via AnioJsDependencies type
import {removeSyncFactory} from "@aniojs/node-fs-remove"
import {scandirSyncCallbackFactory} from "@aniojs/node-fs-scandir"
// ^^^ dependencies declared via AnioJsDependencies type

// vvv--- types needed for implementation
import type {CleanDirectorySyncOptions as Options} from "#~synthetic/async.sync/export/CleanDirectorySyncOptions.d.mts"
import type {ScandirEntry} from "@aniojs/node-fs-scandir"
// ^^^--- types needed for implementation

/**
 * @brief Synchronously clean a directory.
 * @description
 * Synchronously cleans the directory `dir_path`.
 * This means everything inside the directory is removed.
 * A function can be specified with `options.preserve` to dynamically
 * determine whether an entry should be removed or not.
 * @param dir_path The directory to be cleaned.
 * @param options Optional options.
 */
declare function cleanDirectorySync(
	input_path: string,
	options?: Options
) : undefined

/**
 * @brief
 * Create an instance of the function 'cleanDirectorySync'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'cleanDirectorySync'.
 */
export function cleanDirectorySyncFactory(context: RuntimeWrappedContextInstance) : typeof cleanDirectorySync {
	const dependencies : AnioJsDependencies = {
		remove: removeSyncFactory(context),
		scandirCallback: scandirSyncCallbackFactory(context)
	}

	const project = getProject()
	const local_context : RuntimeWrappedContextInstance = {
		...context,
		_package: {
			name: project.package_json.name,
			version: project.package_json.version,
			author: project.package_json.author,
			license: project.package_json.license
		}
	}

	return function cleanDirectorySync(input_path: string, options?: Options) : undefined {
		return implementation(local_context, dependencies, input_path, options)
	}
}
