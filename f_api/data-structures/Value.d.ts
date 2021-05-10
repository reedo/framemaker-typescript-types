// Type definitions for the Value FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A single integer or string value. */
interface Value {

	/** The integer value. */
	ival: number;

	/** The string value. */
	sval: string;

	/** The type of the value. `FT_Integer` or `FT_String`. */
	valType: ValueValType;

}

interface ValueConstructor {
	new(): Value;
	new(value: number | string): Value;
	readonly prototype: Value;
}

declare const Value: ValueConstructor;

/**
 * Can be one of:
 * * Constants.FT_Integer (1)
 * * Constants.FT_String (3)
 */
type ValueValType =
	Constants['FT_Integer'] |
	Constants['FT_String'];