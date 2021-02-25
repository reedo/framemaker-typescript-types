// Type definitions for the TypedVal FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** Specifies an individual property value. */
interface TypedVal {

	/** Indicates the type of value the structure provides. */
	valType: TypedValConstant;

	/** An integer. */
	ival: number;

	/** String value. */
	sval: string;

	/** Set of metrics. */
	msval: Metrics;

	/** Set of strings. */
	ssval: Strings;

	/** Set of points. */
	psval: Points;

	/** Set of tabs. */
	tsval: Tabs;

	/** Text location. */
	tlval: TextLoc;

	/** Text range. */
	trval: TextRange;

	/** Element Catalog values. */
	csval: ElementCatalogEntries;

	/** Set of integers. */
	isval: Ints;

	/** Set of unsigned integers. */
	uisval: UInts;

	/** Set of attribute definitions. */
	adsval: AttributeDefs;

	/** Set of attribute values. */
	asval: Attributes;
}

interface TypedValConstructor {
	new(): TypedVal;
	new(item: number | string | Metrics | Strings | Points | Tabs | TextLoc | TextRange | ElementCatalogEntries | Ints | UInts | AttributeDefs | Attributes): TypedVal;

}

declare const TypedVal: TypedValConstructor;