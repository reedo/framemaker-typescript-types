// Type definitions for FrameMaker TiApiClient object
// Definitions by Dan Reed <https://danreed.dev>

interface TiApiClient extends FMUniqueObject {
	ImportHint: string;

	LastUpdate: number;

	Name: string;

	readonly NextTiInDoc: Ti;

	readonly TextRange: TextRange;

	TiAutomaticUpdate: boolean;

	TiClientData: string;

	TiClientName: string;

	TiClientSource: string;

	TiClientType: string;

	TiFile: string;

	TiFileModDate: object;

	TiIsUnresolved: boolean;

	TiLocked: boolean;

	readonly TiMacEdition: number;

	ConvertToText(): void;

	Delete(): FrameErrorCode;

	DeletePropByName(propName: string): FrameErrorCode;

	DeleteTextInsetContents(): FrameErrorCode;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	UpdateTextInset(): FrameErrorCode;
}
