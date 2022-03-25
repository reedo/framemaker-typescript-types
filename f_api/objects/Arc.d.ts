// Type definitions for FrameMaker Arc object
// Definitions by Dan Reed <https://danreed.dev>

interface Arc extends FMGraphic {
	/**
	 * Denotes the arc angle length in degrees.
	 *
	 * The permissible range is –360 degrees to +360 degrees.
	 */
	DTheta: number;

	/**
	 * Specifies the start angle in degrees.
	 *
	 * The permissible range is 0 degrees to 360 degrees.
	 */
	Theta: number;
}

declare const Arc: Arc;
