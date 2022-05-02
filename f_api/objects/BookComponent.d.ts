// Type definitions for FrameMaker BookComponent object
// Definitions by Dan Reed <https://danreed.dev>

interface BookComponent extends FMSeriesObject {
	readonly BookComponentFileType: number;

	readonly BookComponentIsFolderWithTemplate: boolean;

	readonly BookComponentIsFolderWithoutTemplate: boolean;

	readonly BookComponentIsGeneratable: number;

	readonly BookComponentParent: BookComponent;

	BookComponentTemplatePath: string;

	BookComponentTitle: string;

	BookComponentType: BookComponentType;

	readonly BookParent: Book;

	ChapNumComputeMethod: number;

	ChapterNumStyle: number;

	ChapterNumText: string;

	ChapterNumber: number;

	ComponentDisplayText: string;

	readonly ComponentElement: Element;

	readonly ComponentIsDitaMap: boolean;

	ComponentIsSelected: boolean;

	readonly ComponentType: number;

	CorrespondingXmlPath: string;

	ExcludeBookComponent: number;

	ExtractElementTags: Strings;

	ExtractTags: Strings;

	FirstComponentInBookComponent: BookComponent;

	FirstPageNum: number;

	FnCustNumString: string;

	FnFirstNum: object;

	FnNumComputeMethod: number;

	FnNumStyle: number;

	GenerateInclude: boolean;

	ImportFmtInclude: boolean;

	InsertLinks: boolean;

	Name: string;

	readonly NextBookComponentInDFSOrder: BookComponent;

	NextComponentInBook: BookComponent;

	readonly NextSelectedComponentInBook: BookComponent;

	PageNumComputeMethod: number;

	PageNumStyle: number;

	PagePrefix: string;

	PageSide: number;

	PageSuffix: string;

	PgfNumComputeMethod: number;

	readonly PrevBookComponentInDFSOrder: BookComponent;

	PrevComponentInBook: BookComponent;

	PrintInclude: boolean;

	SecNumComputeMethod: number;

	SectionNumStyle: number;

	SectionNumText: string;

	SectionNumber: number;

	SubsecNumComputeMethod: number;

	SubsectionNumStyle: number;

	SubsectionNumText: string;

	SubsectionNumber: number;

	TblFnCustNumString: string;

	TblFnNumComputeMethod: number;

	TblFnNumStyle: number;

	Unique: number;

	UserString: string;

	VolNumComputeMethod: number;

	VolumeNumStyle: number;

	VolumeNumText: string;

	VolumeNumber: number;

	XmlApplicationForBookComponent: string;

	Delete(): FrameErrorCode;

	MoveComponent(moveAction: FA_COMPONENT_MOVE_ACTION): FrameErrorCode;
}
