// Type definitions for the PropIdent FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * PropIdent provides a property identifier.
 * 
 * Properties can be identified by either a name or a number (integer constant).
 * 
 * ESTK provides defined constants for property numbers (for example, Fill and Height).
 * 
 * Only inset properties (facets) are identified by names.
 * 
 * If a property is identified by a name, `PropIdent.num` is set to 0.
 * 
 * If a property is identified by a number, `PropIdent.name` is set to a null string.
 */
interface PropIdent {

	/** The property number. */
	num: number;

	/** The property name. */
	name: string;
}

interface PropIdentConstructor {
	new(): PropIdent;
	new(val: number | string): PropIdent;
	new(num: number, name: string): PropIdent;
	readonly prototype: PropIdent;
}

declare const PropIdent: PropIdentConstructor;