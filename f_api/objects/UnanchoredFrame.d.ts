// Type definitions for FrameMaker UnanchoredFrame object
// Definitions by Dan Reed <https://danreed.dev>

interface UnanchoredFrame extends Page {
	/** The name of the frame. */
	Name: string;

	/** The page that the unanchored frame belongs to, if the unanchored frame is a page frame. */

	PageFramePage: BodyPage | HiddenPage | MasterPage | RefPage;
}
