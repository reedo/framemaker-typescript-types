// Type definitions for FrameMaker PgfFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface PgfFmt extends FMNamedObject {
	AcrobatLevel: number;

	AdjHyphens: number;

	AsianComposer: boolean;

	AutoNumChar: string;

	AutoNumString: string;

	BkColor: Color;

	BlockLines: number;

	BottomSeparator: string;

	Capitalization: number;

	CellBottomMargin: number;

	CellLeftMargin: number;

	CellMarginsFixed: number;

	CellRightMargin: number;

	CellTopMargin: number;

	CellVAlignment: number;

	ChangeBar: boolean;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	Direction: number;

	FirstIndent: number;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

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

	LeftIndent: number;

	LetterSpace: boolean;

	LineSpacing: number;

	MaxJLetSpace: number;

	MaxJRomSpace: number;

	MaxSpace: number;

	MinJLetSpace: number;

	MinJRomSpace: number;

	MinSpace: number;

	readonly NextPgfFmtInDoc: PgfFmt;

	NextTag: string;

	NumAtEnd: boolean;

	readonly NumTabs: number;

	OptJLetSpace: number;

	OptJRomSpace: number;

	OptSpace: number;

	Overline: boolean;

	PDFStructureLevel: number;

	PairKern: boolean;

	PgfAlignment: number;

	PgfBoxColor: Color;

	PgfIsAutoNum: boolean;

	PgfMarkedForNamedDestination: boolean;

	Placement: number;

	Position: number;

	readonly ResolvedDirection: number;

	RightIndent: number;

	RunInSeparator: string;

	SpaceAbove: number;

	SpaceBelow: number;

	Spread: number;

	Start: number;

	Stretch: number;

	Strikethrough: boolean;

	Tabs: Tabs;

	TopSeparator: string;

	Underlining: number;

	UseBkColor: boolean;

	UseNextTag: boolean;

	UserString: string;

	YakumonoType: number;

	Delete(): FrameErrorCode;
}
