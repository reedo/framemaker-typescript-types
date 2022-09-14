// Type definitions for FrameMaker Var object
// Definitions by Dan Reed <https://danreed.dev>

interface Var extends FMUniqueObject {
  readonly Element: Element;

  Locked: boolean;

  readonly NextVarInDoc: Var;

  readonly TextRange: TextRange;

  UserString: string;

  VarFmt: VarFmt;

  Delete(): FrameErrorCode;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;
}
