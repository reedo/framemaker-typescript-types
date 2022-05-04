// Type definitions for generic properties of FrameMaker objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any FrameMaker object. */
interface FMObject extends ESObject {
	/** Retrieves the complete property list for a specified object. */
	GetProps(): PropVals;

	/** Temporary ID. Lasts until the object leaves the FM session. */
	readonly id: number;

	/** Indicates whether an object is valid or not. */
	ObjectValid(): boolean;

	/**
	 * Sets the properties of a specified object.
	 *
	 * @param props An array containing the values of the object to be set.
	 */
	SetProps(props: PropVals): void;

	/** Constant representing the object type. */
	readonly type: FO_Constant;

	/** An object containing details about this object. */
	readonly reflect: Reflection;
}
