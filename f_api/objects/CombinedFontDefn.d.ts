// Type definitions for FrameMaker CombinedFontDefn object
// Definitions by Dan Reed <https://danreed.dev>

interface CombinedFontDefn extends FMNamedObject {
  BaseFamily: number;

  readonly FontEncodingName: string;

  readonly NextCombinedFontDefnInDoc: CombinedFontDefn;

  UserString: string;

  ViewHotspotIndicators: boolean;

  WesternFamily: number;

  WesternShift: number;

  WesternSize: number;

  CombinedFamilyFonts(): CombinedFonts;

  Delete(): FrameErrorCode;
}
