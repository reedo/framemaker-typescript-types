// Type definitions for the Points FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** An Array of Point objects with integer indexing and a length property. */
interface Points {

	/**
	 * The original array is unchanged. If an array is provided as a parameter to `concat()`, each of its elements are appended as separate array elements at the end of the new array.
	 * 
	 * @param value Can also be arrays.
	 * 
	 * @returns A new array, the result of concatenation the given values to the end of the original array.
	 */
	concat(value: Points | Point[]): Points;

	/** The length of the array. */
	len: number;

	/** The length of the array. */
	length: number;

	/**
	 * @returns The last element from the array.
	 */
	pop(): Point | undefined;

	/**
	 * Appends a new element to an array.
	 * 
	 * @param value The value to push into the array.
	 * 
	 * @returns The new length of the array.
	 */
	push(value: Point): number;

	/**
	 * @returns A string representation of an array.
	 */
	toString(): string;

	[n: number]: Point;
}

interface PointsConstructor {
	new(): Points;
	new(...items: Point[]): Point[];
	readonly prototype: Points;
}

declare var Points: PointsConstructor;