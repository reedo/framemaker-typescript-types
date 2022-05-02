// Type definitions for FrameMaker Book object
// Definitions by Dan Reed <https://danreed.dev>

interface Book extends FMNamedObject {
	AcrobatBookmarkDisplayTags: number;

	BookDontUpdateReferences: boolean;

	readonly BookIsModified: boolean;

	BookIsSelected: boolean;

	BookIsViewOnly: boolean;

	BookOverrideBookmarkLevelWithDocument: boolean;

	CustomElementList: Strings;

	DocAcrobatColumnArticleThreads: boolean;

	DocAcrobatDefaultsChanged: boolean;

	DocAcrobatElementList: Strings;

	DocAcrobatElements: boolean;

	DocAcrobatNoArticleThreads: boolean;

	readonly ElementCatalog: ElementCatalogEntries;

	ElementCatalogDisplay: number;

	ElementSelection: ElementRange;

	FileExtensionOverride: string;

	FirstComponentInBook: BookComponent;

	readonly FirstElementDefInDoc: ElementDef;

	FirstFmtChangeListInDoc: FmtChangeList;

	FirstSelectedComponentInBook: BookComponent;

	GenerateAcrobatInfo: boolean;

	readonly HighestLevelElement: Element;

	IsIconified: boolean;

	IsInFront: boolean;

	IsOnScreen: boolean;

	Label: string;

	NewElemAttrDisplay: number;

	NewElemAttrEditing: number;

	readonly NextOpenBookInSession: Book;

	PDFAllNamedDestinations: boolean;

	PDFBookmark: boolean;

	PDFBookmarksOpenLevel: number;

	PDFConvertCMYKtoRGB: boolean;

	PDFDestsMarked: boolean;

	readonly PDFDistillerAbsent: boolean;

	PDFDocInfo: Strings;

	PDFEndPage: string;

	PDFGenerateForReview: boolean;

	PDFJobOption: string;

	readonly PDFJobOptionsAbsent: boolean;

	PDFOpenPage: string;

	PDFPageHeight: number;

	PDFPageWidth: number;

	PDFPrintPageRange: number;

	PDFRegistrationMarks: number;

	PDFSeparateFiles: boolean;

	PDFStartPage: string;

	PDFZoomFactor: number;

	PDFZoomType: number;

	PrintBlankPages: boolean;

	PrintCollated: boolean;

	PrintDownloadAsianFonts: boolean;

	PrintDownloadTrueTypeAsType1: boolean;

	PrintEmulsion: number;

	PrintEvenPages: boolean;

	PrintFileName: string;

	PrintImaging: number;

	PrintLastSheetFirst: boolean;

	PrintLowRes: boolean;

	PrintNumCopies: number;

	PrintOddPages: boolean;

	PrintPaperHeight: number;

	PrintPaperWidth: number;

	PrintRegistrationMarks: boolean;

	PrintScale: number;

	PrintSeps: boolean;

	PrintToFile: boolean;

	PrinterName: string;

	ScreenHeight: number;

	ScreenWidth: number;

	ScreenX: number;

	ScreenY: number;

	SeparateInclusions: boolean;

	ShowElementDescriptiveNames: boolean;

	SkipBlankSeps: boolean;

	StatusLine: string;

	StructuredApplication: string;

	TypeOfDisplayText: number;

	UseInitialStructure: boolean;

	UseInitialStructureOfAutoInsertedElements: boolean;

	ViewOnlyDeadCodes: UInts;

	ViewOnlyWinBorders: boolean;

	ViewOnlyWinMenubar: boolean;

	ViewOnlyWinPopup: boolean;

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

	ApplyConditionalSettings(settings: PropVals): FrameErrorCode;

	Close(flags: number): FrameErrorCode;

	Compare(
		newerDoc: Doc,
		flags: number,
		deleteCondTag: string,
		replaceText: string,
		compareThreshold: number
	): CompareRet;

	EmbedAttachFileInFMAtCursor(...args: any): unknown;

	Export(...args: any): unknown;

	GetConditionalExpression(exprName: string): unknown;

	GetConditionalSettings(): PropVals;

	GetDependencies(...args: any): unknown;

	GetUniqueObject(
		objType: FO_Constant,
		unique: number
	): FMUniqueObject | FrameErrorCode;

	Import(
		textLocP: TextLoc,
		filename: string,
		importParams: PropVals,
		importReturnParams: PropVals
	): FMObject | FrameErrorCode;

	ManageConditionalExpressions(settings: PropVals): FrameErrorCode;

	NewBookComponentInHierarchy(compName: string, elemLoc: ElementLoc): Element;

	NewBookComponentOfTypeInHierarchy(
		compName: string,
		compType: BookComponentType,
		elemLoc: ElementLoc
	): BookComponent | FrameErrorCode;

	NewIterator(...args: any): unknown;

	NewSeriesBookComponent(
		previous: FMSeriesObject
	): BookComponent | FrameErrorCode;

	NewSeriesObject(
		objType: FO_Constant,
		previous: FMSeriesObject
	): FMSeriesObject | FrameErrorCode;

	Save(
		saveAsName: string,
		saveParams: PropVals,
		saveReturnParams: PropVals
	): Book | FrameErrorCode;

	SaveAsHtml(...args: any): unknown;

	SilentPrintDoc(): FrameErrorCode;

	SimpleGenerate(interactive: boolean, makeVisible: boolean): FrameErrorCode;

	SimpleImportElementDefs(
		fromDocOrBook: Book | Doc,
		importFlags: number
	): FrameErrorCode;

	SimpleImportFormats(fromDoc: Doc, formatFlags: number): FrameErrorCode;

	SimpleSave(saveAsName: string, interactive: boolean): Book | FrameErrorCode;

	UpdateBook(
		updateParams: PropVals,
		updateReturnParams: PropVals
	): FrameErrorCode;
}
