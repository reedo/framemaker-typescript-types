// Type definitions for generic properties of FrameMaker objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any FrameMaker object. */
interface FMObject {
	/** Retrieves the complete property list for a specified object. */
	GetProps(): PropVals;

	/** Temporary ID. Lasts until the object leaves the FM session. */
	id: number;

	/** Indicates whether an object is valid or not. */
	ObjectValid(): 0 | 1;

	/**
	 * Sets the properties of a specified object.
	 *
	 * @param setVal An array containing the values of the object to be set.
	 */
	SetProps(setVal: PropVals): void;

	/** Constant representing the object type. */
	type: FO_Constant;
}
