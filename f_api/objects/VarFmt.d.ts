// Type definitions for FrameMaker VarFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface VarFmt extends FMNamedObject {
  Fmt: string;

  readonly NextVarFmtInDoc: VarFmt;

  readonly SystemVar: number;

  Delete(): FrameErrorCode;
}
