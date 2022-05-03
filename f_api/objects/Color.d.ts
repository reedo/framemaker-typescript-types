// Type definitions for FrameMaker Color object
// Definitions by Dan Reed <https://danreed.dev>

interface Color extends FMNamedObject {
	Black: number;

	ColorOverprint: number;

	ColorPrintCtl: number;

	ColorTintPercent: number;

	ColorViewCtl: number;

	Cyan: number;

	FamilyName: string;

	InkName: string;

	Magenta: number;

	readonly NextColorInDoc: Color;

	ReservedColor: number;

	TintBaseColor: Color;

	UserString: string;

	Yellow: number;

	Delete(): FrameErrorCode;
}
