// Type definitions for FrameMaker RulingFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface RulingFmt extends FMNamedObject {
  readonly NextRulingFmtInDoc: RulingFmt;

  Pen: number;

  RulingGap: number;

  RulingLines: number;

  RulingPenWidth: number;

  RulingSep: Color;

  UserString: string;

  Delete(): FrameErrorCode;
}
