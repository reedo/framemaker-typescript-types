// Type definitions for FrameMaker MathML object
// Definitions by Dan Reed <https://danreed.dev>

interface MathML extends FMGraphic {
  MathMLApplyPgfStyle: number;

  MathMLComposeDpi: number;

  MathMLData: Strings;

  MathMLDpi: number;

  MathMLFontSize: number;

  MathMLInline: number;

  MathMLIsFixedSize: boolean;

  MathMLIsFlippedSideways: boolean;

  MathMLIsInverted: boolean;

  MathMLXmlData: string;
}
