// Type definitions for FrameMaker XRef object
// Definitions by Dan Reed <https://danreed.dev>

interface XRef extends FMUniqueObject {
  readonly Element: Element;

  Locked: boolean;

  readonly NextXRefInDoc: XRef;

  readonly TextRange: TextRange;

  UserString: string;

  XRefAltText: string;

  XRefClientName: string;

  XRefClientType: string;

  XRefFile: string;

  XRefFmt: XRefFmt;

  readonly XRefIsUnresolved: boolean;

  XRefSrcElemNonUniqueId: string;

  XRefSrcIsElem: boolean;

  XRefSrcText: string;

  Delete(): FrameErrorCode;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;
}
