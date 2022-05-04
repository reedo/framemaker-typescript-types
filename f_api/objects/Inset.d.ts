// Type definitions for FrameMaker Inset object
// Definitions by Dan Reed <https://danreed.dev>

interface Inset extends FMGraphic {
	ImportHint: string;

	InsetDpi: number;

	InsetEditor: string;

	InsetFile: string;

	InsetGfxActiveInPdf: boolean;

	InsetGfxName: string;

	InsetGfxPlayWindowInPdf: boolean;

	InsetIsFixedSize: boolean;

	InsetIsFlippedSideways: boolean;

	InsetJavaScriptAttached: boolean;

	InsetJavaScriptFile: string;

	InsetMonikerFilePath: string;

	InsetOpacity: number;

	InsetPosterFile: string;

	InsetSaveFacetToFile: Strings;

	readonly InsetU3dAnimationList: Strings;

	readonly InsetU3dPartList: Strings;

	readonly InsetU3dViewList: Strings;

	InsetUpdater: never;

	PageNum: number;

	ApplyFitToFrame(): void;

	DeletePropByName(propName: string): void;

	GetIntByName(propName: string): number;

	GetMetricByName(propName: string): number;

	GetPDFInsetPageNumber(): number;

	GetUBytesByName(propName: string): UBytes;

	SetIntByName(propName: string, setVal: number): void;

	SetMetricByName(propName: string, setVal: number): void;

	SetUBytesByName(propName: string, setVal: UBytes): void;
}
