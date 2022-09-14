// Type definitions for FrameMaker Cell object
// Definitions by Dan Reed <https://danreed.dev>

interface Cell extends FMUniqueObject {
  readonly CellAboveInCol: Cell;

  CellAngle: number;

  readonly CellBelowInCol: Cell;

  readonly CellColNum: number;

  readonly CellColumn: Column;

  readonly CellDefaultBottomRuling: RulingFmt;

  readonly CellDefaultLeftRuling: RulingFmt;

  readonly CellDefaultRightRuling: RulingFmt;

  readonly CellDefaultTopRuling: RulingFmt;

  readonly CellIsShown: boolean;

  readonly CellIsStraddled: boolean;

  readonly CellNumColsStraddled: number;

  readonly CellNumRowsStraddled: number;

  CellOverrideBottomRuling: RulingFmt;

  CellOverrideFill: number;

  CellOverrideLeftRuling: RulingFmt;

  CellOverrideRightRuling: RulingFmt;

  CellOverrideShading: Color;

  CellOverrideTopRuling: RulingFmt;

  readonly CellRow: Row;

  CellUseOverrideBRuling: boolean;

  CellUseOverrideFill: boolean;

  CellUseOverrideLRuling: boolean;

  CellUseOverrideRRuling: boolean;

  CellUseOverrideShading: boolean;

  CellUseOverrideTRuling: boolean;

  readonly ContentHeight: number;

  readonly Element: Element;

  readonly FirstPgf: Pgf;

  readonly HighestLevelElement: Element;

  readonly InTextFrame: TextFrame;

  readonly InTextObj: SubCol;

  readonly LastPgf: Pgf;

  readonly LocX: number;

  readonly LocY: number;

  NextCell: Cell;

  readonly NextCellInRow: Cell;

  readonly NextCellInTbl: Cell;

  readonly Overflowed: boolean;

  readonly PrevCell: Cell;

  readonly PrevCellInRow: Cell;

  UserString: string;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;

  StraddleCells(heightInRows: number, widthInCols: number): FrameErrorCode;

  UnStraddleCells(heightInRows: number, widthInCols: number): FrameErrorCode;
}
