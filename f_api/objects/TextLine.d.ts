// Type definitions for FrameMaker TextLine object
// Definitions by Dan Reed <https://danreed.dev>

interface TextLine extends FMGraphic {
	BasePointX: number;

	BasePointY: number;

	Direction: number;

	Language: number;

	readonly ResolvedDirection: number;

	TextLineType: number;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;
}
