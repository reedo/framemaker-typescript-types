// Type definitions for FrameMaker RefPage object
// Definitions by Dan Reed <https://danreed.dev>

interface RefPage extends FMNamedObject {
	readonly PageFrame: UnanchoredFrame;

	readonly PageHeight: number;

	readonly PageNext: RefPage;

	readonly PageNum: number;

	readonly PagePrev: RefPage;

	readonly PageWidth: number;

	ApplyPageLayout(srcPage: Page): FrameErrorCode;

	Delete(): FrameErrorCode;
}
