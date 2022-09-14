// Type definitions for FrameMaker Pgf object
// Definitions by Dan Reed <https://danreed.dev>

interface Pgf extends FMSeriesObject {
  AdjHyphens: number;

  AsianComposer: boolean;

  AutoNumChar: string;

  AutoNumString: string;

  BkColor: Color;

  BlockLines: number;

  BottomSeparator: string;

  Capitalization: number;

  CellBottomMargin: number;

  CellLeftMargin: number;

  CellMarginsFixed: number;

  CellRightMargin: number;

  CellTopMargin: number;

  CellVAlignment: number;

  ChangeBar: boolean;

  Color: Color;

  CombinedFontFamily: CombinedFontDefn;

  Direction: number;

  FirstIndent: number;

  FontAngle: number;

  readonly FontEncodingName: string;

  FontFamily: number;

  FontPlatformName: string;

  FontPostScriptName: string;

  FontSize: number;

  FontVariation: number;

  FontWeight: number;

  FormatOverride: boolean;

  HyphMinPrefix: number;

  HyphMinSuffix: number;

  HyphMinWord: number;

  Hyphenate: boolean;

  readonly InTextFrame: TextFrame;

  readonly InTextObj: Cell | Fn | SubCol;

  KeepWithNext: boolean;

  KeepWithPrev: boolean;

  KernX: number;

  KernY: number;

  Language: number;

  Leading: number;

  LeftIndent: number;

  LetterSpace: boolean;

  LineSpacing: number;

  Locked: boolean;

  MaxJLetSpace: number;

  MaxJRomSpace: number;

  MaxSpace: number;

  MinJLetSpace: number;

  MinJRomSpace: number;

  MinSpace: number;

  Name: string;

  readonly NextPgfInDoc: Pgf;

  readonly NextPgfInFlow: Pgf;

  NextTag: string;

  NumAtEnd: number;

  readonly NumTabs: number;

  OptJLetSpace: number;

  OptJRomSpace: number;

  OptSpace: number;

  Overline: boolean;

  PairKern: boolean;

  PgfAlignment: number;

  PgfBoxColor: Color;

  PgfIsAutoNum: boolean;

  readonly PgfNumber: string;

  PgfSpellChecked: boolean;

  Placement: number;

  Position: number;

  readonly PrevPgfInFlow: Pgf;

  readonly ResolvedDirection: number;

  RightIndent: number;

  RunInSeparator: string;

  SpaceAbove: number;

  SpaceBelow: number;

  Spread: number;

  Start: number;

  Stretch: number;

  Strikethrough: boolean;

  Tabs: Tabs;

  TopSeparator: string;

  Underlining: number;

  readonly Unique: number;

  UseNextTag: boolean;

  UserString: string;

  YakumonoType: number;

  Delete(): FrameErrorCode;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;
}
