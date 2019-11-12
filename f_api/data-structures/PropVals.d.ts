// Type definitions for the PropVals FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** An Array of PropVal objects with integer indexing and a length property. */
interface PropVals {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: PropVals | PropVal[]): PropVals;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): PropVal | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: PropVal): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: PropVal;
}

interface PropValsConstructor {
	new(): PropVals;
	new(items: PropVal[]): PropVal[];
	new(...items: PropVal[]): PropVal[];
	readonly prototype: PropVals;
}

declare var PropVals: PropValsConstructor;