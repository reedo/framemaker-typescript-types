// Type definitions for FrameMaker XRefFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface XRefFmt extends FMNamedObject {
	Fmt: string;

	readonly NextXRefFmtInDoc: XRefFmt;

	Delete(): FrameErrorCode;
}
