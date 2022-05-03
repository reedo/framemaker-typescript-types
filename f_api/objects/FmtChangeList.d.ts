// Type definitions for FrameMaker FmtChangeList object
// Definitions by Dan Reed <https://danreed.dev>

interface FmtChangeList extends FMNamedObject {
	AdjHyphens: number;

	AutoNumChar: string;

	AutoNumString: string;

	BkColor: Color;

	BlockLines: number;

	BottomSepAtIndent: boolean;

	BottomSeparator: string;

	Capitalization: number;

	CellBottomMargin: number;

	CellBottomMarginChange: number;

	CellBottomMarginFixed: boolean;

	CellLeftMargin: number;

	CellLeftMarginChange: number;

	CellLeftMarginFixed: boolean;

	CellRightMargin: number;

	CellRightMarginFixed: boolean;

	CellTopMargin: number;

	CellTopMarginChange: number;

	CellTopMarginFixed: boolean;

	CellVAlignment: number;

	ChangeBar: boolean;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	FirstIndent: number;

	FirstIndentChange: number;

	FirstIndentIsRelative: boolean;

	FirstIndentRelPos: number;

	FmtChangeListInCatalog: boolean;

	FontAngle: number;

	FontFamily: number;

	FontSize: number;

	FontSizeChange: number;

	FontVariation: number;

	FontWeight: number;

	HyphMinPrefix: number;

	HyphMinSuffix: number;

	HyphMinWord: number;

	Hyphenate: boolean;

	KeepWithNext: boolean;

	KeepWithPrev: boolean;

	KernX: number;

	KernY: number;

	Language: number;

	Leading: number;

	LeadingChange: number;

	LeftIndent: number;

	LeftIndentChange: number;

	LetterSpace: boolean;

	LineSpacingFixed: boolean;

	MaxJLetSpace: number;

	MaxJRomSpace: number;

	MaxSpace: number;

	MinJLetSpace: number;

	MinJRomSpace: number;

	MinSpace: number;

	MoveTabs: number;

	NextFmtChangeListInDoc: FmtChangeList;

	NumAtEnd: boolean;

	NumTabs: number;

	OptJLetSpace: number;

	OptJRomSpace: number;

	OptSpace: number;

	Overline: boolean;

	PairKern: boolean;

	PgfAlignment: number;

	PgfBoxColor: Color;

	PgfCatalogReference: string;

	PgfIsAutoNum: boolean;

	Placement: number;

	Position: number;

	RightIndent: number;

	RightIndentChange: number;

	RunInSeparator: string;

	SpaceAbove: number;

	SpaceAboveChange: number;

	SpaceBelow: number;

	SpaceBelowChange: number;

	Spread: number;

	SpreadChange: number;

	Start: number;

	Stretch: number;

	StretchChange: number;

	Strikethrough: boolean;

	Tabs: Tabs;

	TopSepAtIndent: boolean;

	TopSeparator: string;

	Underlining: number;

	YakumonoType: number;

	Delete(): FrameErrorCode;
}
