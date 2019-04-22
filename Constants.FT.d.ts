// Type definitions for FrameMaker Constants object
// Definitions by: Dan Reed <https://danreed.dev>

declare namespace Constants {
	// --------------------------------------------------
	// Frame Types
	// --------------------------------------------------
	const FT_AttributeDefs: 17;
	const FT_Attributes: 18;
	const FT_AttributesEx: 21;
	const FT_Bad: 0;
	const FT_ElementCatalog: 12;
	const FT_ElementRange: 19;
	const FT_FormatBranches: 16;
	const FT_Id: 4;
	const FT_Integer: 1;
	const FT_Ints: 13;
	const FT_Metric: 2;
	const FT_Metrics: 5;
	const FT_Num: 23;
	const FT_Points: 7;
	const FT_String: 3;
	const FT_Strings: 6;
	const FT_Tabs: 8;
	const FT_TemplateDatas: 22;
	const FT_TextLoc: 9;
	const FT_TextRange: 10;
	const FT_UBytes: 14;
	const FT_UInts: 15;
	const FT_Vals: 20;

	// --------------------------------------------------
	// Frame Text Flags
	// --------------------------------------------------
	const FTF_ALL: 0xFFFFFE03;
	const FTF_ANGLE: 0x10000000;
	const FTF_CAPITALIZATION: 0x00004000;
	const FTF_CHANGEBAR: 0x01000000;
	const FTF_CHARTAG: 0x00008000;
	const FTF_COLOR: 0x00010000;
	const FTF_CONDITIONTAG: 0x00000001;
	const FTF_ENCODING: 0x00000200;
	const FTF_FAMILY: 0x80000000;
	const FTF_IIF: 0x00000002;
	const FTF_KERNX: 0x00080000;
	const FTF_KERNY: 0x00040000;
	const FTF_LANGUAGE: 0x00000800;
	const FTF_OUTLINE: 0x00800000;
	const FTF_OVERLINE: 0x02000000;
	const FTF_PAIRKERN: 0x00200000;
	const FTF_POSITION: 0x00002000;
	const FTF_SHADOW: 0x00400000;
	const FTF_SIZE: 0x00100000;
	const FTF_SPREAD: 0x00020000;
	const FTF_STRETCH: 0x00001000;
	const FTF_STRIKETHROUGH: 0x04000000;
	const FTF_TSUME: 0x00000400;
	const FTF_UNDERLINING: 0x08000000;
	const FTF_VARIATION: 0x40000000;
	const FTF_WEIGHT: 0x20000000;

	// --------------------------------------------------
	// Frame Text Item codes
	// --------------------------------------------------
	const FTI_CharPropsChange: 0x00200000;
	const FTI_ElemPrefixBegin: 0x08000000;
	const FTI_ElemPrefixEnd: 0x10000000;
	const FTI_ElemSuffixBegin: 0x20000000;
	const FTI_ElemSuffixEnd: 0x40000000;
	const FTI_ElementBegin: 0x00080000;
	const FTI_ElementEnd: 0x00100000;
	const FTI_FlowBegin: 0x00000020;
	const FTI_FlowEnd: 0x00000040;
	const FTI_FnAnchor: 0x00001000;
	const FTI_FrameAnchor: 0x00000800;
	const FTI_HardLineEnd: 1;
	const FTI_HyphenLineEnd: 2;
	const FTI_LineBegin: 0x00000002;
	const FTI_LineEnd: 0x00000004;
	const FTI_MarkerAnchor: 0x00004000;
	const FTI_PageBegin: 0x00000080;
	const FTI_PageEnd: 0x00000100;
	const FTI_PgfBegin: 0x00000008;
	const FTI_PgfEnd: 0x00000010;
	const FTI_String: 0x00000001;
	const FTI_SubColBegin: 0x00000200;
	const FTI_SubColEnd: 0x00000400;
	const FTI_TblAnchor: 0x00002000;
	const FTI_TextFrameBegin: 0x00400000;
	const FTI_TextFrameEnd: 0x00800000;
	const FTI_TextInsetBegin: 0x02000000;
	const FTI_TextInsetEnd: 0x04000000;
	const FTI_TextObjId: 0x01000000;
	const FTI_VarBegin: 0x00020000;
	const FTI_VarEnd: 0x00040000;
	const FTI_XRefBegin: 0x00008000;
	const FTI_XRefEnd: 0x00010000;

	const FTI2_InlineComponentBegin: 0x80000010;
	const FTI2_InlineComponentEnd: 0x80000020;
	const FTI2_RubiCompositeBegin: 0x80000004;
	const FTI2_RubiCompositeEnd: 0x80000008;
	const FTI2_RubiTextBegin: 0x80000001;
	const FTI2_RubiTextEnd: 0x80000002;
}