// Type definitions for the Strings FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** An Array of objects with integer indexing and a length property. */
interface Strings {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: Strings | string[]): Strings;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): string | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: string): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: string;
}

interface StringsConstructor {
	new(): Strings;
	new(items: string[]): string[];
	new(...items: string[]): string[];
	readonly prototype: Strings;
}

declare var Strings: StringsConstructor;