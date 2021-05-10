// Type definitions for FrameMaker AttributeDef object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a single attribute definition. */
interface AttributeDef {

	/** Denotes the attribute value’s type. */
	attrType: FV_AT_Constant;

	/** The choices from which to select, if the `attrType` parameter is set to `Constants.FV_AT_CHOICES` (2). */
	choices: Strings;

	/** Default value of the attribute. */
	defValues: Strings;

	/** The flag value determines whether an attribute is hidden, read-only or neither. */
	flags: FV_AF_Constant;

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
	new(name: string, required: 0 | 1, flags: FV_AF_Constant, attrType: FV_AT_Constant, choices: Strings, defValues: Strings, rangeMin: string, rangeMax: string): AttributeDef;
	readonly prototype: AttributeDef;
}

declare const AttributeDef: AttributeDefConstructor;

/**
 * Can be one of:
 * * Constants.FV_AT_STRING (0)
 * * Constants.FV_AT_STRINGS (1)
 * * Constants.FV_AT_CHOICES (2)
 * * Constants.FV_AT_INTEGER (3)
 * * Constants.FV_AT_INTEGERS (4)
 * * Constants.FV_AT_REAL (5)
 * * Constants.FV_AT_REALS (6)
 * * Constants.FV_AT_UNIQUE_ID (7)
 * * Constants.FV_AT_UNIQUE_IDREF (8)
 * * Constants.FV_AT_UNIQUE_IDREFS (9)
 * * Constants.FV_AT_NUMTYPES (10)
 */
type FV_AT_Constant =
	Constants['FV_AT_STRING'] |
	Constants['FV_AT_STRINGS'] |
	Constants['FV_AT_CHOICES'] |
	Constants['FV_AT_INTEGER'] |
	Constants['FV_AT_INTEGERS'] |
	Constants['FV_AT_REAL'] |
	Constants['FV_AT_REALS'] |
	Constants['FV_AT_UNIQUE_ID'] |
	Constants['FV_AT_UNIQUE_IDREF'] |
	Constants['FV_AT_UNIQUE_IDREFS'] |
	Constants['FV_AT_NUMTYPES'];

/**
 * Can be one of:
 * * null (0)
 * * Constants.FV_AF_READ_ONLY (1)
 * * Constants.FV_AF_HIDDEN (2)
 * * Constants.FV_AF_FIXED (4)
 */
type FV_AF_Constant =
	0 |
	Constants['FV_AF_READ_ONLY'] |
	Constants['FV_AF_HIDDEN'] |
	Constants['FV_AF_FIXED'] |
	null;