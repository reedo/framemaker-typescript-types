// Type definitions for FrameMaker Tbl object
// Definitions by Dan Reed <https://danreed.dev>

interface Tbl extends FMUniqueObject {
  readonly BottomRowSelection: Row;

  readonly ContentHeight: number;

  Direction: number;

  readonly Element: Element;

  readonly FirstColumnInSelection: Column;

  readonly FirstColumnInTbl: Column;

  readonly FirstPgf: Pgf;

  readonly FirstRowInTbl: Row;

  readonly FirstVisibleColumnInTbl: Column;

  readonly HighestLevelElement: Element;

  readonly LastColumnInSelection: Column;

  readonly LastColumnInTbl: Column;

  readonly LastPgf: Pgf;

  readonly LastRowInTbl: Row;

  readonly LastVisibleColumnInTbl: Column;

  readonly LeftColNum: number;

  Locked: boolean;

  readonly NextTblInDoc: Tbl;

  OrphanRows: number;

  readonly Overflowed: boolean;

  readonly ResolvedDirection: number;

  readonly RightColNum: number;

  TblAlignment: number;

  readonly TblBodyElement: Element;

  TblBodyFirstColor: Color;

  TblBodyFirstFill: number;

  TblBodyFirstPeriod: number;

  TblBodyNextColor: Color;

  TblBodyNextFill: number;

  TblBodyNextPeriod: number;

  TblBodyRowRuling: RulingFmt;

  TblBodyRowRulingPeriod: number;

  TblBodyShadeBy: boolean;

  TblBottomRuling: number;

  readonly TblCatalogEntry: number;

  TblCellBottomMargin: number;

  TblCellLeftMargin: number;

  TblCellRightMargin: number;

  TblCellTopMargin: number;

  TblColRuling: RulingFmt;

  TblColRulingPeriod: number;

  TblColWidths: Metrics;

  readonly TblElement: Element;

  readonly TblFooterElement: Element;

  TblHFColor: Color;

  TblHFFill: number;

  TblHFRowRuling: RulingFmt;

  TblHFSeparatorRuling: RulingFmt;

  readonly TblHeaderElement: Element;

  TblInLockedTi: boolean;

  TblLastBodyRuling: boolean;

  TblLeftIndent: number;

  TblLeftRuling: RulingFmt;

  readonly TblNumCols: number;

  readonly TblNumRows: number;

  TblNumbering: number;

  TblOtherBodyRowRuling: RulingFmt;

  TblOtherColRuling: RulingFmt;

  TblPlacement: number;

  TblRightIndent: number;

  TblRightRuling: RulingFmt;

  TblSpaceAbove: number;

  TblSpaceBelow: number;

  TblTag: string;

  readonly TblTitleElement: Element;

  TblTitleGap: number;

  TblTitlePosition: number;

  readonly TblTitleSelected: boolean;

  TblTopRuling: RulingFmt;

  readonly TblWidth: number;

  TextLoc: TextLoc;

  readonly TopRowSelection: Row;

  UserString: string;

  AddCols(
    refColNum: number,
    direction: number,
    numNewCols: number
  ): FrameErrorCode;

  Delete(): FrameErrorCode;

  DeleteCols(delColNum: number, numDelCols: number): FrameErrorCode;

  DeleteRows(refRow: Row, numDelRows: number): FrameErrorCode;

  GetTableColumnByColNum(table: Tbl, colNum: number): Column;

  MakeTblSelection(
    topRow: number,
    bottomRow: number,
    leftCol: number,
    rightCol: number
  ): FrameErrorCode;
}
