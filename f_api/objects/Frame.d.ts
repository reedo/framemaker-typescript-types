// Type definitions for generic properties of FrameMaker frame objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any FrameMaker frame object. */
interface Frame extends FMGraphic {
	/** @todo UNDOCUMENTED */
	ApplyFitToFrame(): void;

	/** First object in the frame (backmost object). */
	FirstGraphicInFrame: FMGraphic;

	/** Last object in the frame (frontmost object). */
	LastGraphicInFrame: FMGraphic;
}
