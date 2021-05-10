// Type definitions for the TextItem FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A single unit of text in a document. */
interface TextItem {

	/** Offset from the beginning of the paragraph or the text line. */
	offset: number;

	/** Type of the text item. */
	dataType: TextItemType;

	/** Denotes the text item if the text item is a string. */
	sdata: string;

	/** ID of the object if the text item is an object. */
	idata: number;

	/** Denotes the text item if the text item is an object. */
	obj: FMObject;

}

interface TextItemConstructor {
	new(): TextItem;
	new(dataType: TextItemType, data: number | string | FMObject): TextItem;
	readonly prototype: TextItem;
}

declare const TextItem: TextItemConstructor;

/**
 * Can be one of:
 * * Constants.FTI_HardLineEnd (1)
 * * Constants.FTI_HyphenLineEnd (2)
 * * Constants.FTI_String (0x00000001)
 * * Constants.FTI_LineBegin (0x00000002)
 * * Constants.FTI_LineEnd (0x00000004)
 * * Constants.FTI_PgfBegin (0x00000008)
 * * Constants.FTI_PgfEnd (0x00000010)
 * * Constants.FTI_FlowBegin (0x00000020)
 * * Constants.FTI_FlowEnd (0x00000040)
 * * Constants.FTI_PageBegin (0x00000080)
 * * Constants.FTI_PageEnd (0x00000100)
 * * Constants.FTI_SubColBegin (0x00000200)
 * * Constants.FTI_SubColEnd (0x00000400)
 * * Constants.FTI_FrameAnchor (0x00000800)
 * * Constants.FTI_FnAnchor (0x00001000)
 * * Constants.FTI_TblAnchor (0x00002000)
 * * Constants.FTI_MarkerAnchor (0x00004000)
 * * Constants.FTI_XRefBegin (0x00008000)
 * * Constants.FTI_XRefEnd (0x00010000)
 * * Constants.FTI_VarBegin (0x00020000)
 * * Constants.FTI_VarEnd (0x00040000)
 * * Constants.FTI_ElementBegin (0x00080000)
 * * Constants.FTI_ElementEnd (0x00100000)
 * * Constants.FTI_CharPropsChange (0x00200000)
 * * Constants.FTI_TextFrameBegin (0x00400000)
 * * Constants.FTI_TextFrameEnd (0x00800000)
 * * Constants.FTI_TextObjId (0x01000000)
 * * Constants.FTI_TextInsetBegin (0x02000000)
 * * Constants.FTI_TextInsetEnd (0x04000000)
 * * Constants.FTI_ElemPrefixBegin (0x08000000)
 * * Constants.FTI_ElemPrefixEnd (0x10000000)
 * * Constants.FTI_ElemSuffixBegin (0x20000000)
 * * Constants.FTI_ElemSuffixEnd (0x40000000)
 * * Constants.FTI2_RubiTextBegin (0x80000001)
 * * Constants.FTI2_RubiTextEnd (0x80000002)
 * * Constants.FTI2_RubiCompositeBegin (0x80000004)
 * * Constants.FTI2_RubiCompositeEnd (0x80000008)
 * * Constants.FTI2_InlineComponentBegin (0x80000010)
 * * Constants.FTI2_InlineComponentEnd (0x80000020)
 */
type TextItemType =
	Constants['FTI_HardLineEnd'] |
	Constants['FTI_HyphenLineEnd'] |
	Constants['FTI_String'] |
	Constants['FTI_LineBegin'] |
	Constants['FTI_LineEnd'] |
	Constants['FTI_PgfBegin'] |
	Constants['FTI_PgfEnd'] |
	Constants['FTI_FlowBegin'] |
	Constants['FTI_FlowEnd'] |
	Constants['FTI_PageBegin'] |
	Constants['FTI_PageEnd'] |
	Constants['FTI_SubColBegin'] |
	Constants['FTI_SubColEnd'] |
	Constants['FTI_FrameAnchor'] |
	Constants['FTI_FnAnchor'] |
	Constants['FTI_TblAnchor'] |
	Constants['FTI_MarkerAnchor'] |
	Constants['FTI_XRefBegin'] |
	Constants['FTI_XRefEnd'] |
	Constants['FTI_VarBegin'] |
	Constants['FTI_VarEnd'] |
	Constants['FTI_ElementBegin'] |
	Constants['FTI_ElementEnd'] |
	Constants['FTI_CharPropsChange'] |
	Constants['FTI_TextFrameBegin'] |
	Constants['FTI_TextFrameEnd'] |
	Constants['FTI_TextObjId'] |
	Constants['FTI_TextInsetBegin'] |
	Constants['FTI_TextInsetEnd'] |
	Constants['FTI_ElemPrefixBegin'] |
	Constants['FTI_ElemPrefixEnd'] |
	Constants['FTI_ElemSuffixBegin'] |
	Constants['FTI_ElemSuffixEnd'] |
	Constants['FTI2_RubiTextBegin'] |
	Constants['FTI2_RubiTextEnd'] |
	Constants['FTI2_RubiCompositeBegin'] |
	Constants['FTI2_RubiCompositeEnd'] |
	Constants['FTI2_InlineComponentBegin'] |
	Constants['FTI2_InlineComponentEnd'];