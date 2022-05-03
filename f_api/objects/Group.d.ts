// Type definitions for FrameMaker Group object
// Definitions by Dan Reed <https://danreed.dev>

interface Group extends FMGraphic {
	readonly FirstGraphicInGroup: FMGraphic;

	readonly LastGraphicInGroup: FMGraphic;
}
