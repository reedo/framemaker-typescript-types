// Type definitions for FrameMaker TblFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface TblFmt extends FMNamedObject {
  Direction: number;

  readonly NextTblFmtInDoc: TblFmt;

  OrphanRows: number;

  readonly ResolvedDirection: number;

  TblAlignment: number;

  TblBodyFirstColor: Color;

  TblBodyFirstFill: number;

  TblBodyFirstPeriod: number;

  TblBodyNextColor: Color;

  TblBodyNextFill: number;

  TblBodyNextPeriod: number;

  TblBodyRowRuling: RulingFmt;

  TblBodyRowRulingPeriod: number;

  TblBodyShadeBy: boolean;

  TblBottomRuling: RulingFmt;

  TblCatalogEntry: boolean;

  TblCellBottomMargin: number;

  TblCellLeftMargin: number;

  TblCellRightMargin: number;

  TblCellTopMargin: number;

  TblColRuling: RulingFmt;

  TblColRulingPeriod: number;

  TblHFColor: Color;

  TblHFFill: number;

  TblHFRowRuling: RulingFmt;

  TblHFSeparatorRuling: RulingFmt;

  TblInitNumBodyRows: number;

  TblInitNumCols: number;

  TblInitNumFRows: number;

  TblInitNumHRows: number;

  TblLastBodyRuling: boolean;

  TblLeftIndent: number;

  TblLeftRuling: RulingFmt;

  TblNumbering: number;

  TblOtherBodyRowRuling: RulingFmt;

  TblOtherColRuling: RulingFmt;

  TblPlacement: number;

  TblRightIndent: number;

  TblRightRuling: RulingFmt;

  TblSpaceAbove: number;

  TblSpaceBelow: number;

  TblTag: string;

  TblTitleGap: number;

  TblTitlePosition: number;

  TblTopRuling: RulingFmt;

  UserString: string;

  Delete(): FrameErrorCode;
}
