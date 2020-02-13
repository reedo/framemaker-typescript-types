// Type definitions for the TextRange FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * A text range can span paragraphs. However, it cannot span graphic text lines or flows.
 * 
 * __NOTE__: `beg.offset` and `end.offset` fields of a `TextRange` object can specify offsets relative to the beginning and end of an object.
 * 
 * In addition, they can use the special value `Constants.FV_OBJ_END_OFFSET` (0x50000000).
 * 
 * __NOTE__: `Constants.FV_OBJ_END_OFFSET` (0x50000000) specifies the offset of the last character in the object containing the text range.
 */
interface TextRange {

	/** The beginning of the text range. */
	beg: TextLoc;

	/** The end of the text range. */
	end: TextLoc;
}

interface TextRangeConstructor {
	new(): TextRange;
	new(beg: TextLoc, end: TextLoc): TextRange;
	readonly prototype: TextRange;

}

declare const TextRange: TextRangeConstructor;