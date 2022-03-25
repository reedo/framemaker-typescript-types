// Type definitions for generic properties of FrameMaker named objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any FrameMaker object. */
interface FMNamedObject extends FMObject {
	/** The name of the object. */
	Name: string;
}
