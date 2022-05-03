// Type definitions for FrameMaker UnanchoredFrame object
// Definitions by Dan Reed <https://danreed.dev>

interface UnanchoredFrame extends FMNamedObject {
	/** The page that the unanchored frame belongs to, if the unanchored frame is a page frame. */
	PageFramePage: Page;
}
