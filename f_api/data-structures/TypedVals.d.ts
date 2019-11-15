// Type definitions for the TypedVals FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** An Array of `TypedVal` objects with integer indexing and a length property. */
interface TypedVals {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: TypedVal | TypedVal[]): TypedVal;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): TypedVal | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: TypedVal): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: TypedVal;
}

interface TypedValsConstructor {
	new(): TypedVals;
	new(items: TypedVal[]): TypedVal[];
	new(...items: TypedVal[]): TypedVal[];
	readonly prototype: TypedVals;
}

declare var TypedVals: TypedValsConstructor;