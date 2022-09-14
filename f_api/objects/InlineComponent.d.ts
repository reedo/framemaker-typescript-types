// Type definitions for FrameMaker InlineComponent object
// Definitions by Dan Reed <https://danreed.dev>

interface InlineComponent extends FMUniqueObject {
  ExtractTags: Strings;

  readonly InlineComponentType: FV_MiniTOC;

  InsertLinks: boolean;

  readonly NextInlineComponentInDoc: InlineComponent;

  readonly TextRange: TextRange;

  Delete(): FrameErrorCode;
}
