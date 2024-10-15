import {cleanSyncFactory as factory} from "#/auto/export/cleanSyncFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#/auto/ImplementationSyncDocType.d.mts"

const impl = factory()

export const cleanSync : ImplementationDocType = impl
