// Type definitions for array-like FrameMaker data structures
// Definitions by: Dan Reed <http://danreed.dev>

/** Array-like collection of FrameMaker objects or data structures. */
interface FMArrayLike<T> {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: T | T[] | FMArrayLike<T>): FMArrayLike<T>;

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

interface FMArrayLikeConstructor<T> {
	new(): FMArrayLike<T>;
	new(items: T[] | FMArrayLike<T>): FMArrayLike<T>;
	new(...items: T[]): FMArrayLike<T>;
	readonly prototype: FMArrayLike<T>;
}

type Attributes = FMArrayLike<Attribute>;
type AttributesConstructor = FMArrayLikeConstructor<Attribute>;
declare const Attributes: AttributesConstructor;

type AttributeDefs = FMArrayLike<AttributeDef>;
type AttributeDefsConstructor = FMArrayLikeConstructor<AttributeDef>;
declare const AttributeDefs: AttributeDefsConstructor;

type AttributesEx = FMArrayLike<AttributeEx>;
type AttributesExConstructor = FMArrayLikeConstructor<AttributeEx>;
declare const AttributesEx: AttributesExConstructor;

type IdValuePairs = FMArrayLike<IdValuePair>;
type IdValuePairsConstructor = FMArrayLikeConstructor<IdValuePair>;
declare const IdValuePairs: IdValuePairsConstructor;

type Ints = FMArrayLike<number>;
type IntsConstructor = FMArrayLikeConstructor<number>;
declare const Ints: IntsConstructor;

type Metrics = FMArrayLike<number>;
type MetricsConstructor = FMArrayLikeConstructor<number>;
declare const Metrics: MetricsConstructor;

type Points = FMArrayLike<Point>;
type PointsConstructor = FMArrayLikeConstructor<Point>;
declare const Points: PointsConstructor;

type PropVals = FMArrayLike<PropVal>;
type PropValsConstructor = FMArrayLikeConstructor<PropVal>;
declare const PropVals: PropValsConstructor;

type Strings = FMArrayLike<string>;
type StringsConstructor = FMArrayLikeConstructor<string>;
declare const Strings: StringsConstructor;

type Tabs = FMArrayLike<Tab>;
type TabsConstructor = FMArrayLikeConstructor<Tab>;
declare const Tabs: TabsConstructor;

type TextItems = FMArrayLike<TextItem>;
type TextItemsConstructor = FMArrayLikeConstructor<TextItem>;
declare const TextItems: TextItemsConstructor;

type TypedVals = FMArrayLike<TypedVal>;
type TypedValsConstructor = FMArrayLikeConstructor<TypedVal>;
declare const TypedVals: TypedValsConstructor;

type UBytes = FMArrayLike<number>;
type UBytesConstructor = FMArrayLikeConstructor<number>;
declare const UBytes: UBytesConstructor;

type UInts = FMArrayLike<number>;
type UIntsConstructor = FMArrayLikeConstructor<number>;
declare const UInts: UIntsConstructor;