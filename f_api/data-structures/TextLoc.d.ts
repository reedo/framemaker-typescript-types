// Type definitions for the TextLoc FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** Specifies a location within the text of a paragraph or a graphic text line. */
interface TextLoc {

	/** `FO_Pgf` (31) or `FO_TextLine` (18) object. */
	obj: TextLocObjType;

	/** Characters from the beginning of the object. */
	offset: number;
}

interface TextLocConstructor {
	new(): TextLoc;
	new(obj: TextLocObjType, offset: number): TextLoc;
	readonly prototype: TextLoc;
}

declare const TextLoc: TextLocConstructor;

/**
 * Can be one of:
 * * Constants.FO_TextLine (18)
 * * Constants.FO_Pgf (31)
 */
type TextLocObjType =
	Constants['FO_TextLine'] |
	Constants['FO_Pgf'];