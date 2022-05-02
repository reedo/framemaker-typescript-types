// Type definitions for FrameMaker ElementCatalogEntry object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a single element catalog entry. */
interface ElementCatalogEntry {
	/** The element definition. */
	obj: ElementDef;

	/**
	 * The type of validation returned.
	 *
	 * The value is one of the following:
	 * - Constants.FV_STRICTLY_VALID (0x01) - Catalog entry is strictly valid.
	 * - Constants.FV_LOOSELY_VALID (0x02) - Catalog entry is loosely valid.
	 * - Constants.FV_ALTERNATIVE (0x04) - Catalog entry is an alternative.
	 * - Constants.FV_INCLUSION (0x08) - Catalog entry is valid because it is an inclusion.
	 *
	 * __NOTE__: If none of the flags are set, then the element is invalid at the current position.
	 */
	flags: number;
}

interface ElementCatalogEntryConstructor {
	new (): ElementCatalogEntry;
	new (obj: ElementDef, flags: number): ElementCatalogEntry;
	readonly prototype: ElementCatalogEntry;
}

declare const ElementCatalogEntry: ElementCatalogEntryConstructor;
