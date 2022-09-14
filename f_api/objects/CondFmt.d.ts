// Type definitions for FrameMaker CondFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface CondFmt extends FMNamedObject {
  BkColor: Color;

  CondFmtIsShown: boolean;

  readonly NextCondFmtInDoc: CondFmt;

  SepOverride: Color;

  StyleOverride: number;

  UseBkColor: boolean;

  UseSepOverride: boolean;

  UserString: string;

  Delete(): FrameErrorCode;

  DeleteCondTag(...args: any): unknown;
}
