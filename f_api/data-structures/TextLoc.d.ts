// Type definitions for the TextLoc FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** Specifies a location within the text of a paragraph or a graphic text line. */
interface TextLoc {
  /** `FO_Pgf` (31) or `FO_TextLine` (18) object. */

  obj: Pgf | TextLine;

  /** Characters from the beginning of the object. */
  offset: number;
}

interface TextLocConstructor {
  new (): TextLoc;

  new (obj: Pgf | TextLine, offset: number): TextLoc;
  readonly prototype: TextLoc;
}

declare const TextLoc: TextLocConstructor;
