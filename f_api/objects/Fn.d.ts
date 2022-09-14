// Type definitions for FrameMaker Fn object
// Definitions by Dan Reed <https://danreed.dev>

interface Fn extends FMUniqueObject {
  readonly ContentHeight: number;

  readonly Element: Element;

  readonly FirstPgf: Pgf;

  readonly FnAnchorString: string;

  readonly FnNum: number;

  readonly InTextFrame: TextFrame;

  readonly InTextObj: SubCol;

  readonly LastPgf: Pgf;

  readonly NextFn: Fn;

  readonly NextFnInDoc: Fn;

  readonly Overflowed: boolean;

  readonly PrevFn: Fn;

  readonly TextLoc: TextLoc;

  UserString: string;

  Delete(): FrameErrorCode;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;
}
