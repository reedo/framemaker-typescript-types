// Type definitions for generic properties of FrameMaker Ti objects
// Definitions by Dan Reed <https://danreed.dev>

/** A FrameMaker text inset object. */
interface FMTiObject extends FMUniqueObject {
  ImportHint: string;

  LastUpdate: number;

  Name: string;

  readonly NextTiInDoc: Ti;

  readonly TextRange: TextRange;

  TiAutomaticUpdate: boolean;

  TiFile: string;

  TiFileModDate: object;

  TiLocked: boolean;

  ConvertToText(): void;

  Delete(): FrameErrorCode;

  DeletePropByName(propName: string): FrameErrorCode;

  DeleteTextInsetContents(): FrameErrorCode;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;

  UpdateTextInset(): FrameErrorCode;
}
