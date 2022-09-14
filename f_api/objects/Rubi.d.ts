// Type definitions for FrameMaker Rubi object
// Definitions by Dan Reed <https://danreed.dev>

interface Rubi extends FMUniqueObject {
  readonly Element: Element;

  readonly NextRubiInDoc: Rubi;

  readonly OyamojiTextRange: TextRange;

  readonly RubiElement: Element;

  readonly RubiTextRange: TextRange;

  Delete(): FrameErrorCode;

  GetText2(flags: number, flags2: number): TextItems;
}
