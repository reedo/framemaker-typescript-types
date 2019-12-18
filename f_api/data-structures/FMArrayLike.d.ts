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

type Attributes = FMArrayLikeConstructor<Attribute>;
declare const Attributes: Attributes;

type AttributeDefs = FMArrayLikeConstructor<AttributeDef>;
declare const AttributeDefs: AttributeDefs;

type IdValuePairs = FMArrayLikeConstructor<IdValuePair>;
declare const IdValuePairs: IdValuePairs;

type Ints = FMArrayLikeConstructor<number>;
declare const Ints: Ints;

type Metrics = FMArrayLikeConstructor<number>
declare const Metrics: Metrics;

type Points = FMArrayLikeConstructor<Point>;
declare const Points: Points;

type PropVals = FMArrayLikeConstructor<PropVal>;
declare const PropVals: PropVals;

type Strings = FMArrayLikeConstructor<string>;
declare const Strings: Strings;

type Tabs = FMArrayLikeConstructor<Tab>;
declare const Tabs: Tabs;

type TextItems = FMArrayLikeConstructor<TextItem>;
declare const TextItems: TextItems;

type TypedVals = FMArrayLikeConstructor<TypedVal>;
declare const TypedVals: TypedVals;

type UBytes = FMArrayLikeConstructor<number>;
declare const UBytes: UBytes;

type UInts = FMArrayLikeConstructor<number>;
declare const UInts: UInts;