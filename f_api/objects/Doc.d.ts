// Type definitions for FrameMaker Doc object
// Definitions by Dan Reed <https://danreed.dev>

interface Doc extends FMNamedObject {
	AcrobatBookmarkDisplayTags: boolean;

	AutoChangeBars: boolean;

	BannerTextDisplay: boolean;

	BooleanConditionExpression: string;

	BooleanConditionExpressionTag: string;

	BooleanConditionState: number;

	BottomMargin: number;

	Capitalization: number;

	ChangeBar: number;

	ChangeBarColor: Color;

	ChangeBarDistance: number;

	ChangeBarPosition: number;

	ChangeBarThickness: number;

	ChapNumComputeMethod: number;

	ChapterNumStyle: number;

	ChapterNumText: string;

	ChapterNumber: number;

	CharTag: string;

	ColGap: number;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	CondFmtIsShown: number;

	CurrentPage: BodyPage | MasterPage | RefPage;

	readonly CustomCharFmtList: Strings;

	CustomElementList: Strings;

	readonly CustomPgfFmtList: Strings;

	readonly CustomTblFmtList: Strings;

	DefaultExclusions: Strings;

	DefaultInclusions: Strings;

	Dictionary: Strings;

	Direction: number;

	DocAcrobatColumnArticleThreads: number;

	DocAcrobatDefaultsChanged: number;

	DocAcrobatElementList: Strings;

	DocAcrobatElements: number;

	DocAcrobatNoArticleThreads: number;

	DocFluidFlow: Flow;

	readonly DocFonts: Strings;

	DocIsDoubleSided: number;

	readonly DocIsModified: number;

	DocIsViewOnly: number;

	readonly DocOpenType: number;

	readonly DocSaveType: number;

	DontUpdateTextInsets: number;

	DontUpdateXRefs: number;

	DownloadFonts: number;

	ElementBoundaryDisplay: number;

	readonly ElementCatalog: ElementCatalogEntries;

	ElementCatalogDisplay: number;

	ElementSelection: ElementRange;

	EqnIntegralSizeLarge: number;

	EqnIntegralSizeMed: number;

	EqnIntegralSizeSmall: number;

	EqnLevel1SizeLarge: number;

	EqnLevel1SizeMed: number;

	EqnLevel1SizeSmall: number;

	EqnLevel2SizeLarge: number;

	EqnLevel2SizeMed: number;

	EqnLevel2SizeSmall: number;

	EqnLevel3SizeLarge: number;

	EqnLevel3SizeMed: number;

	EqnLevel3SizeSmall: number;

	EqnSigmaSizeLarge: number;

	EqnSigmaSizeMed: number;

	EqnSigmaSizeSmall: number;

	readonly FirstAttrCondExprInDoc: AttrCondExpr;

	readonly FirstBodyPageInDoc: BodyPage;

	readonly FirstCharFmtInDoc: CharFmt;

	readonly FirstColorInDoc: Color;

	readonly FirstCombinedFontDefnInDoc: CombinedFontDefn;

	readonly FirstCondFmtInDoc: CondFmt;

	readonly FirstDITAConrefElementInDoc: Element;

	readonly FirstDITALinkElementInDoc: Element;

	readonly FirstDITATopicrefElementInDoc: Element;

	readonly FirstDITATopicsetrefElementInDoc: Element;

	readonly FirstDITAXrefElementInDoc: Element;

	readonly FirstElementDefInDoc: ElementDef;

	readonly FirstFlowInDoc: Flow;

	FirstFmtChangeListInDoc: FmtChangeList;

	readonly FirstFnInDoc: Fn;

	readonly FirstGraphicInDoc: FMGraphic;

	readonly FirstGraphicsFmtInDoc: GraphicsFmt;

	readonly FirstInlineComponentInDoc: InlineComponent;

	readonly FirstMarkerInDoc: Marker;

	readonly FirstMarkerTypeInDoc: MarkerType;

	readonly FirstMasterPageInDoc: MasterPage;

	FirstPageNum: number;

	FirstPageVerso: number;

	readonly FirstPgfFmtInDoc: PgfFmt;

	readonly FirstPgfInDoc: Pgf;

	readonly FirstRefPageInDoc: RefPage;

	readonly FirstRubiInDoc: Rubi;

	readonly FirstRulingFmtInDoc: RulingFmt;

	readonly FirstSelectedGraphicInDoc: FMGraphic;

	readonly FirstSelectedTiInDoc: FMObject;

	readonly FirstTblFmtInDoc: TblFmt;

	readonly FirstTblInDoc: Tbl;

	readonly FirstTiInDoc: InvalidObject;

	readonly FirstVarFmtInDoc: VarFmt;

	readonly FirstVarInDoc: Var;

	readonly FirstXRefFmtInDoc: XRefFmt;

	readonly FirstXRefInDoc: XRef;

	FnCustNumString: string;

	FnFirstNum: number;

	FnFmt: string;

	FnHeightPerCol: number;

	FnInstancePosition: number;

	FnInstancePrefix: string;

	FnInstanceSuffix: string;

	FnNumComputeMethod: number;

	FnNumStyle: number;

	FnNumberingPerPage: number;

	FnRefPosition: number;

	FnRefPrefix: string;

	FnRefSuffix: string;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

	FontVariation: number;

	FontWeight: number;

	FormatOverride: number;

	Functions: string;

	GenerateAcrobatInfo: number;

	readonly HiddenPage: HiddenPage;

	HypertextCommandText: string;

	HypertextDoValidate: boolean;

	readonly HypertextParseBadParam: number;

	readonly HypertextParseErr: number;

	readonly HypertextParseErrMsg: string;

	readonly HypertextParsedClientName: string;

	readonly HypertextParsedCmdCode: number;

	readonly HypertextParsedCmdDest: number;

	readonly HypertextParsedCmdDestObjID: number;

	readonly HypertextParsedCmdDestObjType: number;

	readonly HypertextParsedCmdMatrixColumns: number;

	readonly HypertextParsedCmdMatrixRows: number;

	readonly HypertextParsedDIFileName: string;

	readonly HypertextParsedFlowName: string;

	readonly HypertextParsedLinkName: string;

	readonly HypertextParsedMessage: string;

	readonly HypertextParsedPageName: string;

	readonly HypertextParsedTitle: string;

	readonly HypertextValidateErr: number;

	InCond: CondFmt[];

	IsIconified: boolean;

	IsInFront: boolean;

	IsOnScreen: boolean;

	KernX: number;

	KernY: number;

	readonly KeyCatalog: KeyCatalog;

	KeyCatalogType: number;

	Label: string;

	readonly LastBodyPageInDoc: BodyPage;

	readonly LastMasterPageInDoc: MasterPage;

	readonly LastRefPageInDoc: RefPage;

	LeftMargin: number;

	readonly LeftMasterPage: MasterPage;

	LineBreakAfter: string;

	LineNumDistance: number;

	LineNumRestart: boolean;

	LineNumShow: boolean;

	readonly MainFlowInDoc: Flow;

	readonly MarkerTypeNames: Strings;

	MaxBottomMargin: number;

	MaxFirstIndent: number;

	MaxFontSize: number;

	MaxLeading: number;

	MaxLeftIndent: number;

	MaxLeftMargin: number;

	MaxRightIndent: number;

	MaxRightMargin: number;

	MaxSpaceAbove: number;

	MaxSpaceBelow: number;

	MaxSpread: number;

	MaxStretch: number;

	MaxTabPosition: number;

	MaxTopMargin: number;

	MenuBar: Menu;

	MinBottomMargin: number;

	MinFirstIndent: number;

	MinFontSize: number;

	MinLeading: number;

	MinLeftIndent: number;

	MinLeftMargin: number;

	MinRightIndent: number;

	MinRightMargin: number;

	MinSpaceAbove: number;

	MinSpaceBelow: number;

	MinSpread: number;

	MinStretch: number;

	MinTabPosition: number;

	MinTopMargin: number;

	NarrowRubiSpaceForOther: number;

	NewElemAttrDisplay: number;

	NewElemAttrEditing: number;

	readonly NextOpenDocInSession: Doc;

	readonly NumCols: number;

	Numbers: string;

	Overline: number;

	PDFAllNamedDestinations: number;

	PDFBookmark: boolean;

	PDFBookmarksOpenLevel: number;

	PDFConvertCMYKtoRGB: number;

	PDFDestsMarked: number;

	readonly PDFDistillerAbsent: number;

	PDFDocInfo: Strings;

	PDFEndPage: string;

	PDFGenerateForReview: number;

	PDFJobOption: string;

	readonly PDFJobOptionsAbsent: number;

	PDFOpenPage: string;

	PDFPageHeight: number;

	PDFPageWidth: number;

	PDFPrintPageRange: number;

	PDFRegistrationMarks: number;

	PDFSeparateFiles: number;

	PDFStartPage: string;

	PDFStructure: number;

	PDFViewPDF: number;

	PDFZoomFactor: number;

	PDFZoomType: number;

	PageHeight: number;

	PageNumComputeMethod: number;

	PageNumStyle: number;

	PageRounding: number;

	PageWidth: number;

	PairKern: number;

	PgfNumComputeMethod: number;

	PointPageNumStyle: number;

	Position: number;

	PreviewState: number;

	PrintBlankPages: number;

	PrintCollated: number;

	PrintCols: number;

	PrintDitavalFileName: string;

	PrintEmulsion: number;

	PrintEndPage: number;

	PrintEndPageName: number;

	PrintEndPoint: number;

	PrintEvenPages: number;

	PrintFileName: string;

	PrintImaging: number;

	PrintLastSheetFirst: number;

	PrintLowRes: number;

	PrintManualFeed: number;

	PrintNumCopies: number;

	PrintOddPages: number;

	PrintPaperHeight: number;

	PrintPaperWidth: number;

	PrintRegistrationMarks: number;

	PrintRows: number;

	PrintScale: number;

	PrintScope: number;

	PrintSeps: number;

	PrintStartPage: number;

	PrintStartPageName: number;

	PrintStartPoint: number;

	PrintThumbnails: number;

	PrintToFile: number;

	PrinterName: string;

	readonly ResolvedDirection: number;

	ReviewerName: string;

	readonly ReviewerNameList: Strings;

	RightMargin: number;

	readonly RightMasterPage: MasterPage;

	RubiFixedSize: number;

	RubiOverhang: number;

	RubiSize: number;

	ScreenHeight: number;

	ScreenWidth: number;

	ScreenX: number;

	ScreenY: number;

	SecNumComputeMethod: number;

	SectionNumStyle: number;

	SectionNumText: string;

	SectionNumber: number;

	readonly SelectedTbl: Tbl;

	SepOverride: Color;

	SeparateInclusions: number;

	ShowAll: number;

	ShowCondIndicators: number;

	ShowElementDescriptiveNames: boolean;

	SkipBlankSeps: number;

	SmallCapsSize: number;

	SmallCapsStretch: number;

	SmartQuotes: number;

	SmartSpaces: number;

	SnapAngle: number;

	SnapGridUnits: number;

	SpecifiedKeyCatalog: KeyCatalog;

	SpotColorView: number;

	Spread: number;

	StatusLine: string;

	Stretch: number;

	Strikethrough: number;

	Strings: string;

	StructuredApplication: string;

	StructuredApplicationForOpen: string;

	readonly StyleOverrides: number;

	SubScriptShift: number;

	SubScriptSize: number;

	SubScriptStretch: number;

	SubsecNumComputeMethod: number;

	SubsectionNumStyle: number;

	SubsectionNumText: string;

	SubsectionNumber: number;

	SuperScriptShift: number;

	SuperScriptSize: number;

	SuperScriptStretch: number;

	Symbols: string;

	readonly SymbolsList: Strings;

	TblFnCellPosition: number;

	TblFnCellPrefix: string;

	TblFnCellSuffix: string;

	TblFnCustNumString: string;

	TblFnFmt: string;

	TblFnNumStyle: number;

	TblFnPosition: number;

	TblFnPrefix: string;

	TblFnSuffix: string;

	TextSelection: TextRange;

	TopMargin: number;

	TrackChangesAddedColor: Color;

	TrackChangesDeletedColor: Color;

	TrackChangesOn: boolean;

	TrapwiseCompatibility: boolean;

	Underlining: number;

	Untouchable: number;

	UseInitialStructure: number;

	UseInitialStructureOfAutoInsertedElements: boolean;

	UseSepOverride: number;

	UserString: string;

	Variables: string;

	ViewBorders: number;

	ViewDisplayUnits: number;

	ViewFontSizeUnits: number;

	ViewGrid: number;

	ViewGridUnits: number;

	ViewHotspotIndicators: number;

	ViewNoGraphics: number;

	ViewOnlyDeadCodes: UInts;

	ViewOnlyMenuBar: Menu;

	ViewOnlySelect: number;

	ViewOnlyWinBorders: number;

	ViewOnlyWinMenubar: number;

	ViewOnlyWinPalette: number;

	ViewOnlyWinPopup: number;

	ViewOnlyXRef: number;

	ViewPageScrolling: number;

	ViewRulerUnits: number;

	ViewRulers: number;

	ViewTextSymbols: number;

	VolNumComputeMethod: number;

	VolumeNumStyle: number;

	VolumeNumText: string;

	VolumeNumber: number;

	WideRubiSpaceForOther: number;

	XmlDocType: string;

	XmlEncoding: string;

	XmlFileEncoding: string;

	XmlPublicId: string;

	XmlStandAlone: number;

	XmlStyleSheet: string;

	XmlStyleSheetList: Strings;

	XmlSystemId: string;

	XmlUseBOM: number;

	XmlVersion: string;

	XmlWellFormed: number;

	Zoom: number;

	AddText(textLoc: TextLoc, text: string): TextLoc | FrameErrorCode;

	AddNewBuildExpr(exprName: string, exprCondition: string): FrameErrorCode;

	AddTableVariables(...args: any): unknown;

	CenterOnText(textRange: TextRange): FrameErrorCode;

	Clear(flags: number): FrameErrorCode;

	ClearAllChangebars(): FrameErrorCode;

	Close(flags: number): FrameErrorCode;

	Compare(
		newerDoc: Doc,
		flags: number,
		insertCondTag: string,
		deleteCondTag: string,
		replaceText: string,
		compareThreshold: number
	): CompareRet | FrameErrorCode;

	Copy(flags?: number): FrameErrorCode;

	Cut(flags?: number): FrameErrorCode;

	DeleteBuildExpr(exprName: string): FrameErrorCode;

	DeleteText(textRange: TextRange): FrameErrorCode;

	DeleteUndefinedAttribute(...args: any): unknown;

	DeleteUnusedCharFmt(): FrameErrorCode;

	DeleteUnusedFmts(objType: FO_Constant): FrameErrorCode;

	DeleteUnusedGraphicsFmt(...args: any): unknown;

	DeleteUnusedPgfFmt(): FrameErrorCode;

	DeleteUnusedTblFmt(): FrameErrorCode;

	DemoteElement(): FrameErrorCode;

	ElementLocToTextLoc(eloc: ElementLoc): TextLoc;

	EmbedAttachFileInFMAtCursor(...args: any): unknown;

	Export(...args: any): unknown;

	Find(textLoc: TextLoc, findParams: PropVals): TextRange;

	GenerateQrCode(...args: any): unknown;

	GetActiveBuildExpr(): string;

	GetBuildExpr(exprName: string): string;

	GetBuildExprCatalog(): Strings;

	GetDependencies(...args: any): unknown;

	GetNamedAttrCondExpr(name: string): AttrCondExpr;

	GetNamedCharFmt(name: string): CharFmt;

	GetNamedColor(name: string): Color;

	GetNamedCombinedFontDefn(name: string): CombinedFontDefn;

	GetNamedCondFmt(name: string): CondFmt;

	GetNamedElementDef(name: string): ElementDef;

	GetNamedFmtChangeList(name: string): FmtChangeList;

	GetNamedGraphicsFmt(name: string): GraphicsFmt;

	GetNamedMarkerType(name: string): MarkerType;

	GetNamedMasterPage(name: string): MasterPage;

	GetNamedObject(objType: FO_Constant, name: string): FMNamedObject;

	GetNamedPgfFmt(name: string): PgfFmt;

	GetNamedRefPage(name: string): RefPage;

	GetNamedRulingFmt(name: string): RulingFmt;

	GetNamedTblFmt(name: string): TblFmt;

	GetNamedUnanchoredFrame(name: string): UnanchoredFrame;

	GetNamedVarFmt(name: string): VarFmt;

	GetNamedXRefFmt(name: string): XRefFmt;

	GetTextForRange(tr: TextRange, flags: number): TextItems;

	GetTextForRange2(tr: TextRange, flags: number, flags2: number): TextItems;

	GetTextPropVal(textLoc: TextLoc, propNum: number): PropVal;

	GetTextProps(textLoc: TextLoc): PropVals;

	GetTextVal(textLoc: TextLoc, propNum: number): TypedVal;

	GetUniqueObject(objType: FO_Constant): FMUniqueObject;

	HypertextCommand(hypertext: string): FrameErrorCode;

	Import(
		textLocP: TextLoc,
		filename: string,
		importParams: PropVals,
		importReturnParams: PropVals
	): FMObject;

	MergeIntoFirst(): FrameErrorCode;

	MergeIntoLast(): FrameErrorCode;

	NewAnchoredAFrame(textLoc: TextLoc): AFrame;

	NewAnchoredFn(textLoc: TextLoc): Fn;

	NewAnchoredFormattedObject(
		objType: FO_Constant,
		format: string,
		textLoc: TextLoc
	): Tbl | Var | XRef;

	NewAnchoredFormattedTbl(format: string, textLoc: TextLoc): Tbl;

	NewAnchoredFormattedVar(format: string, textLoc: TextLoc): Var;

	NewAnchoredFormattedXRef(format: string, textLoc: TextLoc): XRef;

	NewAnchoredMarker(textLoc: TextLoc): Marker;

	NewAnchoredObject(
		objType: FO_Constant,
		textLoc: TextLoc
	): AFrame | Fn | Marker | Tbl | TiApiClient;

	NewAnchoredTbl(textLoc: TextLoc): Tbl;

	NewAnchoredTiApiClient(textLoc: TextLoc): TiApiClient;

	NewArc(parent: FMGraphic): Arc;

	NewEllipse(parent: FMGraphic): Ellipse;

	NewFlow(parent: FMGraphic): Flow;

	NewGraphicObject(objType: FO_Constant, parent: FMGraphic): FMGraphic;

	NewGroup(parent: FMGraphic): Group;

	NewInlineComponentOfType(
		inlineCompType: number,
		tags: Strings,
		hyperLinks: number,
		textLocP: TextLoc
	): void;

	NewInset(parent: FMGraphic): Inset;

	NewIterator(...args: any): unknown;

	NewLine(parent: FMGraphic): Line;

	NewMath(parent: FMGraphic): Math;

	NewMathML(parent: FMGraphic): MathML;

	NewNamedAttrCondExpr(name: string): AttrCondExpr;

	NewNamedCharFmt(name: string): CharFmt;

	NewNamedColor(name: string): Color;

	NewNamedCombinedFontDefn(name: string): CombinedFontDefn;

	NewNamedCondFmt(name: string): CondFmt;

	NewNamedElementDef(name: string): ElementDef;

	NewNamedFmtChangeList(name: string): FmtChangeList;

	NewNamedGraphicsFmt(name: string): GraphicsFmt;

	NewNamedMarkerType(name: string): MarkerType;

	NewNamedMasterPage(name: string): MasterPage;

	NewNamedObject(objType: FO_Constant, name: string): FMNamedObject;

	NewNamedPgfFmt(name: string): PgfFmt;

	NewNamedRefPage(name: string): RefPage;

	NewNamedRulingFmt(name: string): RulingFmt;

	NewNamedTblFmt(name: string): TblFmt;

	NewNamedVarFmt(name: string): VarFmt;

	NewNamedXRefFmt(name: string): XRefFmt;

	NewPolygon(parent: FMGraphic): Polygon;

	NewPolyline(parent: FMGraphic): Polyline;

	NewRectangle(parent: FMGraphic): Rectangle;

	NewRoundRect(parent: FMGraphic): RoundRect;

	NewSeriesBodyPage(previous: BodyPage): BodyPage;

	NewSeriesObject(
		objType: FO_Constant,
		previous: FMSeriesObject
	): FMSeriesObject;

	NewSeriesPgf(previous: Pgf): Pgf;

	NewTable(
		format: string,
		numCols: number,
		numBodyRows: number,
		numHeaderRows: number,
		numFooterRows: number,
		textLoc: TextLoc
	): Tbl | FrameErrorCode;

	NewTextFrame(parent: FMGraphic): TextFrame;

	NewTextLine(parent: FMGraphic): TextLine;

	NewUnanchoredFrame(parent: FMGraphic): UnanchoredFrame;

	Paste(): FrameErrorCode;

	PromoteElement(): FrameErrorCode;

	QuickSelect(prompt: string, stringlist: Strings): number | FrameErrorCode;

	ReEvaluateConditions(): FrameErrorCode;

	Redisplay(): FrameErrorCode;

	Reformat(): FrameErrorCode;

	Rehyphenate(): FrameErrorCode;

	ResetEqnSettings(): FrameErrorCode;

	ResetReferenceFrames(): FrameErrorCode;

	RestartPgfNumbering(): FrameErrorCode;

	Save(
		saveAsName: string,
		saveParams: PropVals,
		saveReturnParams: PropVals
	): Doc;

	SaveAsHtml(...args: any): unknown;

	ScrollToText(textRange: TextRange): FrameErrorCode;

	SetActiveBuildExpr(exprName: string): FrameErrorCode;

	SetAttributeSimple(...args: any): unknown;

	SetElementRange(propNum: number, setVal: ElementRange): void;

	SetTextPropVal(textRange: TextRange, setVal: PropVals): void;

	SetTextProps(textRange: TextRange, setVal: PropVals): void;

	SetTextVal(textRange: TextRange, propNum: number, setVal: PropVals): void;

	SilentPrintDoc(): FrameErrorCode;

	SimpleImportElementDefs(
		fromDocOrBook: Book | Doc,
		importFlags: number
	): FrameErrorCode;

	SimpleImportFormats(fromDoc: Doc, formatFlags: number): FrameErrorCode;

	SimpleSave(saveAsName: string, interactive: boolean): Doc;

	SplitElement(): void;

	TextLocToElementLoc(tloc: TextLoc): ElementLoc;

	TrackChangesAcceptAll(): FrameErrorCode;

	TrackChangesRejectAll(): FrameErrorCode;

	UnWrapElement(): void;

	UndoCancel(...args: any): unknown;

	UndoEndCheckPoint(...args: any): unknown;

	UndoStartCheckPoint(...args: any): unknown;

	UpdateDITAReference(type: number, flags: number): void;

	UpdateDITAReferences(flags: number): void;

	UpdateVariables(): FrameErrorCode;

	UpdateXRef(srcDoc: Doc, xref: XRef): FrameErrorCode;

	UpdateXRefs(updateXRefFlags: number): FrameErrorCode;
}
