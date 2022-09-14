// Type definitions for FrameMaker HiddenPage object
// Definitions by Dan Reed <https://danreed.dev>

interface HiddenPage extends FMNamedObject {
  readonly PageFrame: UnanchoredFrame;

  readonly PageHeight: number;

  readonly PageWidth: number;

  ApplyPageLayout(srcPage: Page): FrameErrorCode;
}
