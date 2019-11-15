// Type definitions for the Tabs FMObject
// Definitions by: Dan Reed <http://danreed.dev>

interface Tabs {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: Tabs | Tab[]): Tabs;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): Tab | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: Tab): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: Tab;
}

interface TabsConstructor {
	new(): Tabs;
	new(items: Tab[]): Tab[];
	new(...items: Tab[]): Tab[];
	readonly prototype: Tabs;
}

declare var Tabs: TabsConstructor;