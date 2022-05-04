// Type definitions for FrameMaker TiApiClient object
// Definitions by Dan Reed <https://danreed.dev>

interface TiText extends FMUniqueObject {
	TiEOLisEOP: boolean;

	TiTextEncoding: string;

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
