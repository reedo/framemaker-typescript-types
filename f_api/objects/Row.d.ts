// Type definitions for FrameMaker Row object
// Definitions by Dan Reed <https://danreed.dev>

interface Row extends FMObject {
  CondFmtIsShown: boolean;

  readonly Element: Element;

  readonly FirstCellInRow: Cell;

  readonly Height: number;

  InCond: FMObjectArray<CondFmt>;

  readonly LocX: number;

  readonly LocY: number;

  readonly NextRowInTbl: Row;

  readonly PrevRowInTbl: Row;

  readonly RowIsShown: boolean;

  RowKeepWithNext: boolean;

  RowKeepWithPrev: boolean;

  RowMaxHeight: number;

  RowMinHeight: number;

  RowStart: number;

  readonly RowTbl: Tbl;

  readonly RowType: number;

  SepOverride: Color;

  StyleOverrides: number;

  UseSepOverride: boolean;

  UserString: string;

  readonly Width: number;

  AddRows(direction: number, numNewRows: number): FrameErrorCode;

  Delete(): FrameErrorCode;
}
