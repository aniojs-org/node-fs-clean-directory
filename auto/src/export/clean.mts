import {cleanFactory as factory} from "#~auto/export/cleanFactory.mts"

/* ImplementationDocType is needed to make doctypes work in LSP */
import type {ImplementationDocType} from "#~auto/ImplementationDocType.d.mts"

const impl = factory()

export const clean : ImplementationDocType = impl
