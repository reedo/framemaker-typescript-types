// Type definitions for FrameMaker Math object
// Definitions by Dan Reed <https://danreed.dev>

interface Math extends FMGraphic {
	BasePointX: number;

	BasePointY: number;

	MathFullForm: string;

	MathSize: FV_MATH_SMALL | FV_MATH_MEDIUM | FV_MATH_LARGE;

	TextLineType:
		| FV_TEXTLINE_LEFT
		| FV_TEXTLINE_RIGHT
		| FV_TEXTLINE_CENTER
		| FV_TEXTLINE_MATH;
}
