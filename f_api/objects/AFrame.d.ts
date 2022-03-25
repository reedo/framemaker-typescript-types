// Type definitions for FrameMaker AFrame object
// Definitions by Dan Reed <https://danreed.dev>

interface AFrame extends Frame {
	/**
	 * Indicates whether the anchored frame is cropped or not.
	 *
	 * Possible values are:
	 *
	 * `false` (Default) Indicates the frame is not cropped.
	 *
	 * `true` Indicates the frame is cropped.
	 */
	AFrameIsCropped: boolean;

	/**
	 * Indicates whether the anchored frame is set to be floatable or not.
	 *
	 * Possible values are:
	 *
	 * `false` (Default) Indicates the frame is not floatable.
	 *
	 * `true` Indicates the frame is floatable.
	 */
	AFrameIsFloating: boolean;

	/** Indicates how the anchored frame is aligned. */
	Alignment: AlignmentType;

	/** Indicates the location where the frame is anchored. */
	AnchorType: AnchorType;

	/** @todo UNDOCUMENTED */
	BaselineOffset: number;

	/** If the anchored frame is in a structured flow in a FrameMaker document, Element indicates the element containing the anchored frame. */
	// @ts-expect-error
	Element: Element;

	/** Indicates the text frame in which the anchored frame is placed. */
	// @ts-expect-error
	InTextFrame: TextFrame;

	/** Indicates the column or text frame in which the anchored frame is placed. */
	InTextObj: FMObject;

	/** @todo UNDOCUMENTED */
	NewFmtRuleClauses(): void;

	/** Contains the next anchored frame in the text frame. */
	NextAFrame: AFrame;

	/** Contains the previous anchored frame in the text frame. */
	PrevAFrame: AFrame;

	/** Denotes the near side offset. */
	SideOffset: number;

	/** Contains the location of the anchor symbol. */
	TextLoc: TextLoc;

	/** A string to which clients can store private data. */
	UserString: string;
}

declare const AFrame: AFrame;

type AlignmentType = number;

type AnchorType = number;
