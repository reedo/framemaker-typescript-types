// Type definitions for FrameMaker GraphicsFmt object
// Definitions by Dan Reed <https://danreed.dev>

interface GraphicsFmt {
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
	Alignment: number;

	/** Indicates the location where the frame is anchored. */
	AnchorType: number;

	/** Indicates the angle of rotation of the graphic object. */
	Angle: number;

	/** @todo UNDOCUMENTED */
	BaselineOffset: number;

	/**
	 * Indicates the border width specified in points.
	 *
	 * The permissible range is 0.015 pt to 360 points.
	 */
	BorderWidth: number;

	/** TODO: Document this. */
	ColGapWidth: number;

	/** Denotes the spot color. */
	Color: Color;

	/** TODO: Document this. */
	ColumnsAreBalanced: boolean;

	/**
	 * Denotes the arc angle length in degrees.
	 *
	 * The permissible range is –360 degrees to +360 degrees.
	 */
	DTheta: number;

	/**
	 * Denotes the fill pattern (numbers between 0 and 15).
	 *
	 * Constants are provided for fill patterns 0, 7 and 15, as follows:
	 * * `Constants.FV_FILL_BLACK` (0)
	 * * `Constants.FV_FILL_WHITE` (7)
	 * * `Constants.FV_FILL_CLEAR` (15)
	 */
	Fill: number;

	/** TODO: Document this. */
	FlowIsAutoConnect: boolean;

	/** TODO: Document this. */
	FlowIsPostScript: boolean;

	/**
	 * Denotes the height of the object denoted in points.
	 *
	 * The permissible range is from 0.125 points to 3600 points.
	 */
	Height: number;

	/** TODO: Document this. */
	InsetDpi: number;

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

	/** TODO: Document this. */
	MathMLComposeDpi: number;

	/** TODO: Document this. */
	MathMLDpi: number;

	/** TODO: Document this. */
	MathMLFontSize: number;

	/** TODO: Document this. */
	MathSize: number;

	/** TODO: Document this. */
	readonly NextGraphicsFmtInDoc: GraphicsFmt;

	/** TODO: Document this. */
	NumColumns: number;

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

	/** TODO: Document this. */
	Radius: number;

	/** Specifies whether text can flow around the object and, if so, whether the text follows the contour of the object or a box shape surrounding the object. */
	Runaround: number;

	/** Denotes the width of the runaround gap, if the object is a runaround object. */
	RunaroundGap: number;

	/** TODO: Document this. */
	SideHeadGap: number;

	/** TODO: Document this. */
	SideHeadPlacement: number;

	/** TODO: Document this. */
	SideHeadWidth: number;

	/** TODO: Document this. */
	SideOffset: number;

	/** @todo UNDOCUMENTED */
	StyleTag: string;

	/** TODO: Document this. */
	TextLineType: number;

	/** TODO: Document this. */
	Theta: number;

	/** Specifies the tint percentage. */
	TintPercent: number;

	/** TODO: Document this. */
	UseAFrameIsCropped: boolean;

	/** TODO: Document this. */
	UseAFrameIsFloating: boolean;

	/** TODO: Document this. */
	UseAlignment: boolean;

	/** TODO: Document this. */
	UseAnchorType: boolean;

	/** TODO: Document this. */
	UseAngle: boolean;

	/** TODO: Document this. */
	UseBaselineOffset: boolean;

	/** TODO: Document this. */
	UseBorderWidth: boolean;

	/** TODO: Document this. */
	UseColGapWidth: boolean;

	/** TODO: Document this. */
	UseColor: boolean;

	/** TODO: Document this. */
	UseColumnsAreBalanced: boolean;

	/** TODO: Document this. */
	UseDTheta: boolean;

	/** TODO: Document this. */
	UseFill: boolean;

	/** TODO: Document this. */
	UseFlowIsAutoConnect: boolean;

	/** TODO: Document this. */
	UseFlowIsPostScript: boolean;

	/** TODO: Document this. */
	UseHeight: boolean;

	/** TODO: Document this. */
	UseInsetDpi: boolean;

	/** TODO: Document this. */
	UseLocX: boolean;

	/** TODO: Document this. */
	UseLocY: boolean;

	/** TODO: Document this. */
	UseMathMLComposeDpi: boolean;

	/** TODO: Document this. */
	UseMathMLDpi: boolean;

	/** TODO: Document this. */
	UseMathMLFontSize: boolean;

	/** TODO: Document this. */
	UseMathSize: boolean;

	/** TODO: Document this. */
	UseNumColumns: boolean;

	/** TODO: Document this. */
	UseOverprint: boolean;

	/** TODO: Document this. */
	UsePen: boolean;

	/** TODO: Document this. */
	UseRadius: boolean;

	/** TODO: Document this. */
	UseRunaround: boolean;

	/** TODO: Document this. */
	UseRunaroundGap: boolean;

	/** TODO: Document this. */
	UseSideHeadGap: boolean;

	/** TODO: Document this. */
	UseSideHeadPlacement: boolean;

	/** TODO: Document this. */
	UseSideHeadWidth: boolean;

	/** TODO: Document this. */
	UseSideOffset: boolean;

	/** TODO: Document this. */
	UseTextLineType: boolean;

	/** TODO: Document this. */
	UseTheta: boolean;

	/** TODO: Document this. */
	UseTintPercent: boolean;

	/** TODO: Document this. */
	UseWidth: boolean;

	/**
	 * Denotes the width of the object.
	 *
	 * The permissible range is from 0.125 points to 3600 points.
	 */
	Width: number;

	/** TODO: Document this. */
	readonly id: number;

	/** TODO: Document this. */
	readonly type: FO_Constant;

	/** TODO: Document this. */
	Delete(): FrameErrorCode;
}
