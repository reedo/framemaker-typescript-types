// Type definitions for the IdValuePairs FMObject
// Definitions by: Dan Reed <http://danreed.dev>

interface IdValuePairs {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: IdValuePair | IdValuePair[]): IdValuePairs;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): IdValuePair | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: IdValuePair): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: IdValuePairs;
}

interface IdValuePairsConstructor {
	new(): IdValuePairs;
	new(items: IdValuePair[]): IdValuePair[];
	new(...items: IdValuePair[]): IdValuePair[];
	readonly prototype: IdValuePairs;
}

declare var IdValuePairs: IdValuePairsConstructor;