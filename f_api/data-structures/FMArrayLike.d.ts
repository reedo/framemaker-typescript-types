// Type definitions for array-like FrameMaker data structures
// Definitions by: Dan Reed <http://danreed.dev>

/** Array-like collection of FrameMaker objects or data structures. */
interface FMObjectArray<T> {
	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 *
	 * @param value Can also be arrays.
	 *
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: T | T[] | FMObjectArray<T>): FMObjectArray<T>;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): T | undefined;

	/**
	 * Appends a new element to an array.
	 *
	 * @param value The value to push into the array.
	 *
	 * @returns The new length of the array.
	 */
	push(value: T): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: T;
}

interface FMObjectArrayConstructor<T> {
	new (): FMObjectArray<T>;
	new (items: T[] | FMObjectArray<T>): FMObjectArray<T>;
	new (...items: T[]): FMObjectArray<T>;
	readonly prototype: FMObjectArray<T>;
}

type Attributes = FMObjectArray<Attribute>;
type AttributesConstructor = FMObjectArrayConstructor<Attribute>;
declare const Attributes: AttributesConstructor;

type AttributeDefs = FMObjectArray<AttributeDef>;
type AttributeDefsConstructor = FMObjectArrayConstructor<AttributeDef>;
declare const AttributeDefs: AttributeDefsConstructor;

type AttributesEx = FMObjectArray<AttributeEx>;
type AttributesExConstructor = FMObjectArrayConstructor<AttributeEx>;
declare const AttributesEx: AttributesExConstructor;

type ElementCatalogEntries = FMObjectArray<ElementCatalogEntry>;
type ElementCatalogEntriesConstructor =
	FMObjectArrayConstructor<ElementCatalogEntry>;
declare const ElementCatalogEntries: ElementCatalogEntriesConstructor;

type IdValuePairs = FMObjectArray<IdValuePair>;
type IdValuePairsConstructor = FMObjectArrayConstructor<IdValuePair>;
declare const IdValuePairs: IdValuePairsConstructor;

type Ints = FMObjectArray<number>;
type IntsConstructor = FMObjectArrayConstructor<number>;
declare const Ints: IntsConstructor;

type Metrics = FMObjectArray<number>;
type MetricsConstructor = FMObjectArrayConstructor<number>;
declare const Metrics: MetricsConstructor;

type Points = FMObjectArray<Point>;
type PointsConstructor = FMObjectArrayConstructor<Point>;
declare const Points: PointsConstructor;

type PropVals = FMObjectArray<PropVal>;
type PropValsConstructor = FMObjectArrayConstructor<PropVal>;
declare const PropVals: PropValsConstructor;

type Strings = FMObjectArray<string>;
type StringsConstructor = FMObjectArrayConstructor<string>;
declare const Strings: StringsConstructor;

type Tabs = FMObjectArray<Tab>;
type TabsConstructor = FMObjectArrayConstructor<Tab>;
declare const Tabs: TabsConstructor;

type TextItems = FMObjectArray<TextItem>;
type TextItemsConstructor = FMObjectArrayConstructor<TextItem>;
declare const TextItems: TextItemsConstructor;

type TypedVals = FMObjectArray<TypedVal>;
type TypedValsConstructor = FMObjectArrayConstructor<TypedVal>;
declare const TypedVals: TypedValsConstructor;

type UBytes = FMObjectArray<number>;
type UBytesConstructor = FMObjectArrayConstructor<number>;
declare const UBytes: UBytesConstructor;

type UInts = FMObjectArray<number>;
type UIntsConstructor = FMObjectArrayConstructor<number>;
declare const UInts: UIntsConstructor;
