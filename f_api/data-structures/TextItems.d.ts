// Type definitions for the TextItems FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** An Array of `TextItem` objects with integer indexing and a length property. */
interface TextItems {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: TextItem | TextItem[]): TextItems;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): TextItem | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: TextItem): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: TextItem;
}

interface TextItemsConstructor {
	new(): TextItems;
	new(items: TextItem[]): TextItem[];
	new(...items: TextItem[]): TextItem[];
	readonly prototype: TextItems;
}

declare var TextItems: TextItemsConstructor;