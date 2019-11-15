// Type definitions for the UBytes FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** An Array of numbers with integer indexing and a length property. */
interface UBytes {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: UBytes | number[]): UBytes;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): number | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns Returns the new length of the array.
	 */
	push(value: number): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: number;
}

interface UBytesConstructor {
	new(): UBytes;
	new(items: number[]): number[];
	new(...items: number[]): number[];
	readonly prototype: UBytes;
}

declare var UBytes: UBytesConstructor;