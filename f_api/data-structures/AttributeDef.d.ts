// Type definitions for FrameMaker AttributeDef object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a single attribute definition. */
interface AttributeDef {

	/** Denotes the attribute value’s type. */
	attrType: AttributeType;

	/** The choices from which to select, if the `attrType` parameter is set to `Constants.FV_AT_CHOICES` (2). */
	choices: Strings;

	/** Default value of the attribute. */
	defValues: Strings;

	/** The flag value determines whether an attribute is hidden, read-only or neither. */
	flags: Constants['FV_AF_READ_ONLY'] | Constants['FV_AF_HIDDEN'] | null;

	/** Name of the attribute. */
	name: string;

	/** The maximum permissible value, if any. */
	rangeMax: string;

	/** The minimum permissible value, if any. */
	rangeMin: string;

	/**
	 * Set to 1 if the attribute is required.
	 * 
	 * Else, set to 0.
	 */
	required: 0 | 1;

}

interface AttributeDefConstructor {
	new(): AttributeDef;
	new(name: string, required: 0 | 1, flags: Constants['FV_AF_READ_ONLY'] | Constants['FV_AF_HIDDEN'] | null, attrType: AttributeType, choices: Strings, defValues: Strings, rangeMin: string, rangeMax: string): AttributeDef;
	readonly prototype: AttributeDef;
}

declare const AttributeDef: AttributeDefConstructor;