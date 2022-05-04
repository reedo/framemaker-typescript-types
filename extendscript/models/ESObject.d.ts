// Type definitions for generic properties of all ExtendScript objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any ExtendScript object. */
interface ESObject {
	/** An object containing details about this object. */
	readonly reflect: Reflection;
}
