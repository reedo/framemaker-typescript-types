// Type definitions for FrameMaker MasterPage object
// Definitions by Dan Reed <https://danreed.dev>

interface MasterPage extends FMNamedObject {
  readonly PageFrame: UnanchoredFrame;

  readonly PageHeight: number;

  readonly PageNext: MasterPage;

  readonly PageNum: number;

  readonly PagePrev: MasterPage;

  readonly PageWidth: number;

  ApplyPageLayout(srcPage: Page): FrameErrorCode;

  Delete(): FrameErrorCode;
}
