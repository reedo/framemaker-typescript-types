// Type definitions for the Value FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A single integer or string value. */
interface Value {

	/** The integer value. */
	ival: number;

	/** The string value. */
	sval: string;

	/** The type of the value. FT_Integer or FT_String. */
	valType: Constants['FT_Integer'] | Constants['FT_String'];

}

interface ValueConstructor {
	new(): Value;
	new(value: number | string): Value;
	readonly prototype: Value;
}

declare const Value: ValueConstructor;