// Type definitions for FrameMaker CharFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface CharFmt extends FMNamedObject {
	BkColor: Color;

	Capitalization: number;

	ChangeBar: boolean;

	CharTag: string;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

	FontVariation: number;

	FontWeight: number;

	KernX: number;

	KernY: number;

	Language: number;

	readonly NextCharFmtInDoc: CharFmt;

	Overline: boolean;

	PairKern: boolean;

	Position: number;

	ReviewTime: number;

	ReviewerName: object;

	Spread: number;

	Stretch: number;

	Strikethrough: boolean;

	Underlining: number;

	UseBkColor: boolean;

	UseCapitalization: boolean;

	UseChangeBar: boolean;

	UseColor: boolean;

	UseFontAngle: boolean;

	UseFontFamily: boolean;

	UseFontSize: boolean;

	UseFontVariation: boolean;

	UseFontWeight: boolean;

	UseKernX: boolean;

	UseKernY: boolean;

	UseOverline: boolean;

	UsePairKern: boolean;

	UsePosition: boolean;

	UseSpread: boolean;

	UseStretch: boolean;

	UseStrikethrough: boolean;

	UseUnderlining: boolean;

	UserString: string;

	WesternFontPlatformName: string;

	WesternFontPostScriptName: string;

	Delete(): FrameErrorCode;
}
