// Type definitions for the TextLoc FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** TextLoc specifies a location within the text of a paragraph or a graphic text line. */
interface TextLoc {

	/** FO_Pgf (31) or FO_TextLine (18) object. */
	obj: Constants['FO_TextLine'] | Constants['FO_Pgf'];

	/** Characters from the beginning of the object. */
	offset: number;
}

interface TextLocConstructor {
	new(): TextLoc;
	new(obj: Constants['FO_TextLine'] | Constants['FO_Pgf'], offset: number): TextLoc;
	readonly prototype: TextLoc;
}

declare var TextLoc: TextLocConstructor;