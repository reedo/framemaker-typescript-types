// Type definitions for FrameMaker Marker object
// Definitions by Dan Reed <https://danreed.dev>

interface Marker extends FMUniqueObject {
	readonly Element: Element;

	MarkerText: string;

	MarkerTypeId: MarkerType;

	readonly NextMarkerInDoc: Marker;

	OldTypeNum: number;

	readonly TextLoc: TextLoc;

	UserString: string;

	Delete(): FrameErrorCode;
}
