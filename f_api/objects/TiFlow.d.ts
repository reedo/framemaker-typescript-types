// Type definitions for FrameMaker TiFlow object
// Definitions by Dan Reed <https://danreed.dev>

interface TiFlow extends FMUniqueObject {
	TiFlowName: string;

	TiFlowPageSpace: number;

	TiFormat: number;

	TiMainFlow: boolean;

	TiRemovePageBreaks: boolean;

	TiRemoveOverrides: boolean;

	ImportHint: string;

	TiLocked: boolean;

	Name: string;

	NextTiInDoc: Ti;

	TextRange: TextRange;

	TiAutomaticUpdate: boolean;

	TiFile: string;

	TiFileModDate: string;

	LastUpdate: number;

	ConvertToText(): void;

	Delete(): FrameErrorCode;

	DeletePropByName(propName: string): FrameErrorCode;

	DeleteTextInsetContents(): FrameErrorCode;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	UpdateTextInset(): FrameErrorCode;
}
