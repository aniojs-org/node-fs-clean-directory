import type {UserContextType} from "@fourtune/realm-js"
import {useContext} from "@fourtune/realm-js"

import type {DependenciesType} from "#/auto/DependenciesType.d.mts"

import implementation from "#/auto/implementation.mts"

/* needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#/auto/ImplementationDocType.d.mts"

import {scandirFactory} from "@anio-fs/scandir"
import {removeFactory} from "@anio-fs/remove"

/* ImplementationDocType is needed to make doctypes work in LSP */
export function cleanFactory(user : UserContextType = {}) : ImplementationDocType {
	const context = useContext(user)

	const dependencies : DependenciesType = {
		scandir: scandirFactory(user),
		remove: removeFactory(user),
	}

	return async function clean(...args: Parameters<ImplementationDocType>) : ReturnType<ImplementationDocType> {
		return await implementation(context, dependencies, ...args)
	}
}
