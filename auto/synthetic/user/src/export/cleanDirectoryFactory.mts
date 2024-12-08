import {implementation, type AnioJsDependencies} from "#~synthetic/async.sync/cleanDirectory.mts"
import type {RuntimeWrappedContextInstance} from "@fourtune/realm-js/runtime"
import {getProject} from "@fourtune/realm-js/v0/project"

// vvv dependencies declared via AnioJsDependencies type
import {removeFactory} from "@aniojs/node-fs-remove"
import {scandirCallbackFactory} from "@aniojs/node-fs-scandir"
// ^^^ dependencies declared via AnioJsDependencies type

// vvv--- types needed for implementation
import type {CleanDirectoryOptions as Options} from "#~synthetic/async.sync/export/CleanDirectoryOptions.d.mts"
/* couldn't find a user defined type named 'Promise' at the top level */
import type {ScandirEntry} from "@aniojs/node-fs-scandir"
// ^^^--- types needed for implementation

/**
 * @brief Asynchronously clean a directory.
 * @description
 * Asynchronously cleans the directory `dir_path`.
 * This means everything inside the directory is removed.
 * A function can be specified with `options.preserve` to dynamically
 * determine whether an entry should be removed or not.
 * @param dir_path The directory to be cleaned.
 * @param options Optional options.
 */
declare function cleanDirectory(
	input_path: string,
	options: Options
) : Promise<undefined>

/**
 * @brief
 * Create an instance of the function 'cleanDirectory'.
 *
 * @param user
 * Options object (see @fourtune/realm-js/v0/runtime) or an already
 * created context with createContext().
 * This parameter is optional.
 *
 * @return
 * An instance of the function 'cleanDirectory'.
 */
export function cleanDirectoryFactory(context: RuntimeWrappedContextInstance) : typeof cleanDirectory {
	const dependencies : AnioJsDependencies = {
		remove: removeFactory(context),
		scandirCallback: scandirCallbackFactory(context)
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

	return async function cleanDirectory(input_path: string, options: Options) : Promise<undefined> {
		return await implementation(local_context, dependencies, input_path, options)
	}
}
