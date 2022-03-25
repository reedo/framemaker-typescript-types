// Type definitions for generic properties of FrameMaker unique objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any FrameMaker object. */
interface FMUniqueObject extends FMObject {
	/** UID. Persists between sessions and is written into the file. */
	Unique: number;
}
