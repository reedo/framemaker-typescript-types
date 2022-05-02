// Type definitions for generic properties of FrameMaker graphic objects
// Definitions by Dan Reed <https://danreed.dev>

/** Any FrameMaker graphic object. */
interface FMGraphic extends FMUniqueObject {
	/** Indicates the angle of rotation of the graphic object. */
	Angle: number;

	/** Denotes the arrowhead base angle in degrees. */
	ArrowBaseAngle: number;

	/** Denotes the arrowhead length (always rounded down to the nearest 1/256 point). */
	ArrowLength: number;

	/**
	 * Indicates the factor by which the arrowhead is scaled as line width changes (always rounded down to nearest 1/16 point).
	 *
	 * It is not used if the `ArrowScaleHead` property is `false`.
	 */
	ArrowScaleFactor: number | false;

	/** Set to 1 if arrowhead is scaled as the line width changes. Set to 0, otherwise. */
	ArrowScaleHead: boolean;

	/** Denotes the arrowhead tip angle in degrees. */
	ArrowTipAngle: number;

	/** Denotes the style of the arrowhead. */
	ArrowType: number;

	/**
	 * Indicates the border width specified in points.
	 *
	 * The permissible range is 0.015 pt to 360 points.
	 */
	BorderWidth: number;

	/** Denotes the spot color. */

	Color: Color;

	/**
	 * Specifies a dash pattern that is repeated for the length of an object's border.
	 *
	 * The pattern is stored in a `MetricsT` structure.
	 *
	 * The 0th element of the `MetricsT.MetricsT_val` array stores the length of the first dash;
	 * the 1st element stores the following space;
	 * the 2nd element stores the next dash;
	 * and so on for an even number of elements.
	 */
	Dash: Metrics;

	/**
	 * Used to delete an object from a document.
	 *
	 * When you delete an object that contains another object, all child objects are also deleted with the parent object.
	 *
	 * For example, if you delete a frame, all objects within the frame are also deleted.
	 */
	Delete(): number;

	/**
	 * Denotes the fill pattern (numbers between 0 and 15).
	 *
	 * Constants are provided for fill patterns 0, 7 and 15, as follows:
	 * * `Constants.FV_FILL_BLACK` (0)
	 * * `Constants.FV_FILL_WHITE` (7)
	 * * `Constants.FV_FILL_CLEAR` (15)
	 */
	Fill: number;

	/** Denotes the frame containing the graphic object. */
	FrameParent: FMGraphic;

	/** Set to 1 if the graphic object cannot be selected. Set to 0, otherwise. */
	GraphicCantBeSelected: boolean;

	/** Set to 1, if the graphic object is selected. Else, set to 0. */
	GraphicIsSelected: boolean;

	/**
	 * Specifies the group to which the object belongs.
	 *
	 * __Note__: Anchored frames do NOT have this property.
	 */

	GroupParent?: Group;

	/** Set to 1 if the line has an arrow head. Set to 0, otherwise. */
	HeadArrow: boolean;

	/**
	 * Denotes the height of the object denoted in points.
	 *
	 * The permissible range is from 0.125 points to 3600 points.
	 */
	Height: number;

	/** The command string for a hotspot. This must be a valid hypertext command string. */
	HotspotCmdStr: string;

	/**
	 * The tooltip text for the hotspot in the outputs that support it (for example HTML).
	 *
	 * This property is optional.
	 */
	HotspotTitle: string;

	/**
	 * Whether the object is a hotspot or not.
	 *
	 * If this property is turned off, the object is no longer a hotspot even if command string is non-empty.
	 */
	IsHotspot: number;

	/** Specifies the type of the end of the line. */
	LineCap: number;

	/**
	 * Specifies the distance of the object from the left side of the parent frame (in inches).
	 *
	 * The permissible range is –216 inches to 216 inches.
	 *
	 * If the graphic object is an anchored frame, the distance is automatically calculated from the left side of the page frame.
	 *
	 * You cannot set this value manually for anchored frames.
	 */
	LocX: number;

	/**
	 * Distance of the object from the top of the parent frame (in inches).
	 *
	 * The permissible range is –216 inches to 216 inches.
	 *
	 * If the graphic object is an anchored frame, the distance is automatically calculated from the top of the page frame.
	 *
	 * You cannot set this value manually for anchored frames.
	 */
	LocY: number;

	/** Denotes the next graphic object in the document. */
	NextGraphicInDoc: FMGraphic;

	/** Denotes the next graphic object in the frame. */
	NextGraphicInFrame: FMGraphic;

	/** Denotes the next graphic object in the group. */
	NextGraphicInGroup: FMGraphic;

	/** Denotes the next selected graphic object in the document. */
	NextSelectedGraphicInDoc: FMGraphic;

	/**
	 * A list of strings.
	 *
	 * Each string expresses an attribute that is specified for an anchored frame in the Object Properties > Object Attributes dialog box.
	 *
	 * Each string is in the form of string_text.
	 *
	 * You can use the backslash to escape characters such as `\n`, `\r`, or `\t` for newline, carriage return, and tab, respectively.
	 *
	 * For a backslash character in the string text, type `\\`.
	 */
	ObjectAttributes: Strings;

	/** Specifies the overprint settings for the object. */
	Overprint: number;

	/**
	 * Specifies the pen pattern (numbers between 0 and 7).
	 *
	 * Constants are provided for pen patterns 0, 7 and 15, as follows:
	 * * `Constants.FV_FILL_BLACK` (0)
	 * * `Constants.FV_FILL_WHITE` (7)
	 * * `Constants.FV_FILL_CLEAR` (15)
	 */
	Pen: number;

	/** Denotes the previous graphic object in the frame. */
	PrevGraphicInFrame: FMGraphic;

	/** Denotes the previous graphic object in the group. */
	PrevGraphicInGroup: FMGraphic;

	/** Specifies whether text can flow around the object and, if so, whether the text follows the contour of the object or a box shape surrounding the object. */
	Runaround: number;

	/** Denotes the width of the runaround gap, if the object is a runaround object. */
	RunaroundGap: number;

	/** @todo UNDOCUMENTED */
	StyleTag: string;

	/** Set to 1 if the arrowhead is enabled at the begining of the line; Set to 0 otherwise. */
	TailArrow: boolean;

	/** Specifies the tint percentage. */
	TintPercent: number;

	/**
	 * Denotes the width of the object.
	 *
	 * The permissible range is from 0.125 points to 3600 points.
	 */
	Width: number;
}
