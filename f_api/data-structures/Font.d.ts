// Type definitions for FrameMaker Font object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a Font. */
interface Font {
	/** Index of the font family. */
	family: number;

	/** Index of the font variation. */
	variation: number;

	/** Index of the font weight. */
	weight: number;

	/** Index of the font angle. */
	angle: number;
}

interface FontConstructor {
	new (): Font;
	new (family: number, variation: number, weight: number, angle: number): Font;
	readonly prototype: Font;
}

declare const Font: FontConstructor;
