// Type definitions for FrameMaker Attribute object
// Definitions by Dan Reed <https://danreed.dev>

interface Attribute {

	/** Allow error as special case to suppress reporting by validation. */
	allow: 0 | 1;

	/** The name of the attribute. */
	name: string;

	/** The validation error flags. */
	readonly valflags: number;

	/** The attribute values. */
	values: Strings;

}

interface AttributeConstructor {
	new(): Attribute;
	new(name: string, values: Strings, valflags: number, allow: 0 | 1): Attribute;
	readonly prototype: Attribute;
}

declare const Attribute: AttributeConstructor;