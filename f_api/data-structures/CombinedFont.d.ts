// Type definitions for FrameMaker CombinedFont object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a single combined font. */
interface CombinedFont {
	/** CombinedFont object. */
	combinedFont: CombinedFontDefn;

	/** Index of the font variation. */
	variation: number;

	/** Index of the font weight. */
	weight: number;

	/** Index of the font angle. */
	angle: number;
}

interface CombinedFontConstructor {
	new (): CombinedFont;
	new (
		combinedFont: CombinedFontDefn,
		variation: number,
		weight: number,
		angle: number
	): CombinedFont;
	readonly prototype: CombinedFont;
}

declare const CombinedFont: CombinedFontConstructor;
