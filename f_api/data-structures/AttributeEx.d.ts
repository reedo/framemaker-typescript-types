// Type definitions for FrameMaker AttributeEx object
// Definitions by Dan Reed <https://danreed.dev>

/** @todo UNDOCUMENTED */
interface AttributeEx extends Attribute {
	/** @todo UNDOCUMENTED */
	originalValues: Strings;

	/** @todo UNDOCUMENTED */
	overriddenFlags: number;
}

interface AttributeExConstructor {
	new (): AttributeEx;
	new (
		name: string,
		values: Strings,
		valflags: number,
		allow: 0 | 1
	): AttributeEx;
	readonly prototype: AttributeEx;
}

declare const AttributeEx: AttributeExConstructor;
