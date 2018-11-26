/// <reference path="JavaScript.d.ts" />

declare class AFrame {

	/**
	 * Indicates whether the anchored frame is cropped or not.
	 * Possible values are:
	 * 0 - (Default) Indicates the frame is not cropped.
	 * 1 - Indicates the frame is cropped.
	 */
	AFrameIsCropped: boolean;

	/**
	 * Indicates whether the anchored frame is set to be floatable or not.
	 * Possible values are:
	 * 0 - (Default) Indicates the frame is not floatable.
	 * 1 - Indicates the frame is floatable.
	 */
	AFrameIsFloating: boolean;

	/**
	 * Indicates how the anchored frame is aligned.
	 * Possible values are:
	 *   Constants.FV_ALIGN_LEFT    (0)
	 *   Constants.FV_ALIGN_CENTER  (1)
	 *   Constants.FV_ALIGN_RIGHT   (2)
	 *   Constants.FV_ALIGN_INSIDE  (3)
	 *   Constants.FV_ALIGN_OUTSIDE (4)
	 */
	Alignment: number;

	/**
	 * Indicates the location where the frame is anchored.
	 * Possible values are:
	 *   Constants.FV_ANCHOR_INLINE             ( 1)
	 *   Constants.FV_ANCHOR_TOP                ( 2)
	 *   Constants.FV_ANCHOR_BELOW              ( 3)
	 *   Constants.FV_ANCHOR_BOTTOM             ( 4)
	 *   Constants.FV_ANCHOR_SUBCOL_LEFT        ( 5)
	 *   Constants.FV_ANCHOR_SUBCOL_RIGHT       ( 6)
	 *   Constants.FV_ANCHOR_SUBCOL_NEAREST     ( 7)
	 *   Constants.FV_ANCHOR_SUBCOL_FARTHEST    ( 8)
	 *   Constants.FV_ANCHOR_SUBCOL_INSIDE      ( 9)
	 *   Constants.FV_ANCHOR_SUBCOL_OUTSIDE     (10)
	 *   Constants.FV_ANCHOR_TEXTFRAME_LEFT     (11)
	 *   Constants.FV_ANCHOR_TEXTFRAME_RIGHT    (12)
	 *   Constants.FV_ANCHOR_TEXTFRAME_NEAREST  (13)
	 *   Constants.FV_ANCHOR_TEXTFRAME_FARTHEST (14)
	 *   Constants.FV_ANCHOR_TEXTFRAME_INSIDE   (15)
	 *   Constants.FV_ANCHOR_TEXTFRAME_OUTSIDE  (16)
	 *   Constants.FV_ANCHOR_RUN_INTO_PARAGRAPH (17)
	 */
	AnchorType: number;

	/**
	 * Indicates the angle of rotation of the graphic object.
	 */
	Angle: number;

	/**
	 * Denotes the arrowhead base angle in degrees.
	 */
	ArrowBaseAngle: number;

	/**
	 * Denotes the arrowhead length (always rounded down to the nearest 1/256 point).
	 */
	ArrowLength: number;

	/**
	 * Indicates the factor by which the arrowhead is scaled as line width changes (always rounded down to nearest 1/16
	 * point). It is not used if the ArrowScaleHead property is False.
	 */
	ArrowScaleFactor: number;

	/**
	 * Set to 1 if arrowhead is scaled as the line width changes. Set to 0, otherwise.
	 */
	ArrowScaleHead: number;

	/**
	 * Denotes the arrowhead tip angle in degrees.
	 */
	ArrowTipAngle: number;

	/**
	 * Denotes the style of the arrowhead.
	 * Possible values are:
	 *   Constants.FV_ARROW_STICK  (0x1)
	 *   Constants.FV_ARROW_HOLLOW (0x2)
	 *   Constants.FV_ARROW_FILLED (0x3)
	 */
	ArrowType: number;

	/**
	 * Baseline Offset
	 */
	BaselineOffset: number;

	/**
	 * Indicates the border width specified in points. The permissible range is 0.015 pt to 360 points.
	 */
	BorderWidth: number;

	/**
	 * Denotes the spot color.
	 */
	Color: Color;

	/**
	 * Specifies a dash pattern that is repeated for the length of an object's border. The pattern is stored in a MetricsT
	 * structure.
	 * The 0th element of the MetricsT.MetricsT_val array stores the length of the first dash; the 1st element stores the
	 * following space; the 2nd element stores the next dash; and so on for an even number of elements.
	 */
	Dash: Metrics;

	/**
	 * If the anchored frame is in a structured flow in a FrameMaker document, Element indicates the element containing
	 * the anchored frame.
	 */
	readonly Element: Element;

	/**
	 * Denotes the fill pattern (numbers between 0 and 15).
	 * Constants are provided for fill patterns 0, 7 and 15, as follows:
	 *   Constants.FV_FILL_BLACK ( 0)
	 *   Constants.FV_FILL_WHITE ( 7)
	 *   Constants.FV_FILL_CLEAR (15)
	 */
	Fill: number;

	/**
	 * Contains the first object in the anchored frame.
	 */
	readonly FirstGraphicInFrame: object;

	/**
	 * Denotes the frame containing the graphic object.
	 */
	FrameParent: object;

	/**
	 * Set to 1 if the graphic object cannot be selected. Set to 0, otherwise.
	 */
	GraphicCantBeSelected: number;

	/**
	 * Set to 1, if the graphic object is selected. Else, set to 0.
	 */
	GraphicIsSelected: number;

	/**
	 * Specifies the group to which the object belongs.
	 * Note: Anchored frames do NOT have this property.
	 */
	GroupParent: Group;

	/**
	 * Set to 1 if the line has an arrow head.
	 * Set to 0, otherwise.
	 */
	HeadArrow: number;

	/**
	 * Denotes the height of the object denoted in points. The permissible range is from 0.125 points to 3600 points.
	 */
	Height: number;

	/**
	 * The command string for a hotspot. Thismust be a valid hypertext command string.
	 */
	HotspotCmdStr: string;

	/**
	 * The tooltip text for the hotspot in the outputs that support it (for example HTML). This property is 0ptional.
	 */
	HotspotTitle: string;

	/**
	 * Indicates the text frame in which the anchored frame is placed.
	 */
	readonly InTextFrame: TextFrame;

	/**
	 * Indicates the column or text frame in which the anchored frame is placed.
	 */
	readonly InTextObj: object;

	/**
	 * Whether the object is a hotspot or not.
	 * If this property is turned off, the object is no longer a hotspot even if command string is non-empty.
	 */
	IsHotspot: number;

	/**
	 * Contains the last object in the anchored frame.
	 */
	readonly LastGraphicInFrame: object;

	/**
	 * Specifies the type of the end of the line.
	 * The possible values are:
	 *   Constants.FV_CAP_BUTT   (0x00)
	 *   Constants.FV_CAP_ROUND  (0x01)
	 *   Constants.FV_CAP_SQUARE (0x02)
	 */
	LineCap: number;

	/**
	 * Specifies the distance of the object from the left side of the parent frame (in inches). The permissible range is
	 * -216 inches to 216 inches.
	 * If the graphic object is an anchored frame, the distance is automatically calculated from the left side of the page
	 * frame. You cannot set this value manually for anchored frames.
	 */
	LocX: number;

	/**
	 * Distance of the object from the top of the parent frame (in inches) The permissible range is –216 inches to 216
	 * inches.
	 * If the graphic object is an anchored frame, the distance is automatically calculated from the top of the page
	 * frame. You cannot set this value manually for anchored frames.
	 */
	LocY: number;

	/**
	 * Contains the next anchored frame in the text frame.
	 */
	readonly NextAFrame: AFrame;

	/**
	 * Denotes the next graphic object in the document.
	 */
	readonly NextGraphicInDoc: object;

	/**
	 * Denotes the next graphic object in the frame.
	 */
	NextGraphicInFrame: object;

	/**
	 * Denotes the next graphic object in the group.
	 */
	readonly NextGraphicInGroup: object;

	/**
	 * Denotes the next selected graphic object in the document.
	 */
	readonly NextSelectedGraphicInDoc: object;

	/**
	 * A list of strings. Each string expresses an attribute that is specified for an anchored frame in the Object
	 * Properties > Object Attributes dialog box.
	 * Each string is in the form of string_text. You can use the backslash to escape characters such as \n, \r, or \t for
	 * newline, carriage return, and tab, respectively. For a backslash character in the string text, type \\.
	 */
	ObjectAttributes: Strings;

	/**
	 * Specifies the overprint settings for the object. The possible values are:
	 *   Constants.FV_KNOCKOUT  (0x00)
	 *   Constants.FV_OVERPRINT (0x01)
	 *   Constants.FV_FROMCOLOR (0x02)
	 */
	Overprint: number;

	/**
	 * Specifies the pen pattern (numbers between 0 and 7).
	 * Constants are provided for pen patterns 0, 7 and 15, as follows:
	 *   Constants.FV_FILL_BLACK ( 0)
	 *   Constants.FV_FILL_WHITE ( 7)
	 *   Constants.FV_FILL_CLEAR (15)
	 */
	Pen: number;

	/**
	 * Contains the previous anchored frame in the text frame.
	 */
	readonly PrevAFrame: AFrame;

	/**
	 * Denotes the previous graphic object in the frame.
	 */
	PrevGraphicInFrame: object;

	/**
	 * Denotes the previous graphic object in the group.
	 */
	readonly PrevGraphicInGroup: object;

	/**
	 * Specifies whether text can flow around the object and, if so, whether the text follows the contour of the object or
	 * a box shape surrounding the object. The possible values are:
	 *   Constants.FV_TR_NONE    (0x01)
	 *   Constants.FV_TR_CONTOUR (0x02)
	 *   Constants.FV_TR_BBOX    (0x03)
	 */
	Runaround: number;

	/**
	 * Denotes the width of the runaround gap, if the object is a runaround object.
	 */
	RunaroundGap: number;

	/**
	 * Denotes the near side offset.
	 */
	SideOffset: number;

	/**
	 * UNDOCUMENTED
	 */
	StyleTag: string;

	/**
	 * Set to 1 if the arrowhead is enabled at the begining of the line; Set to 0 otherwise.
	 */
	TailArrow: number;

	/**
	 * Contains the location of the anchor symbol.
	 */
	readonly TextLoc: TextLoc;

	/**
	 * Specifies the tint percentage.
	 */
	TintPercent: number;

	/**
	 * Indicates the graphic object's internal unique number.
	 */
	readonly Unique: number;

	/**
	 * A string to which clients can store private data.
	 */
	UserString: string;

	/**
	 * Denotes the width of the object. The permissible range is from 0.125 points to 3600 points.
	 */
	Width: number;

	/**
	 * UNDOCUMENTED
	 * @param opcode UNDOCUMENTED
	 */
	ApplyFitToFrame(opcode: number): number;

	/**
	 * The Delete() method is used to delete an object from a document. When you delete an object that contains another
	 * object, all child objects are also deleted with the parent object. For example, if you delete a frame, all objects
	 * within the frame are also deleted.
	 * The Delete() method does not take any arguments.
	 * The method returns FE_SUCCESS on success, else returns one of the following values in FA_errno:
	 * 
	 *   Error                            Reason
	 *   Constants.FE_BadDocId     (- 2)  Invalid document.
	 *   Constants.FE_BadObjId     (- 3)  Invalid object.
	 *   Constants.FE_BadDelete    (-17)  Specified object could not be deleted.
	 *   Constants.FE_BadOperation (-27)  Function call specified an illegal operation.
	 *   Constants.FE_BadParameter (-43)  Function call specified an invalid parameter.
	 *   Constants.FE_NotMenu      ( 72)  Object is a menu item but the document to delete does not belong to the menu.
	 */
	Delete(): number;

	/**
	 * The GetProps() method retrieves the complete property list for a specified object.
	 * The GetProps() method takes no arguments.
	 * The method returns a PropVals object that contains an array of property-value pairs, on success.
	 * If the GetProps() method fails, it sets the len field of the returned structure to 0 and assigns one of the
	 * following values to FA_errno.
	 * 
	 *   Error                            Reason
	 *   Constants.FE_BadDocId     (- 2)  Invalid document.
	 *   Constants.FE_BadObjId     (- 3)  Invalid object.
	 *   Constants.FE_WrongProduct (-60)  Current FrameMaker version does not support the specified operation.
	 */
	GetProps(): PropVals;

	/**
	 * Indicates whether an object is valid or not.
	 * The method does not take any arguments.
	 * The method returns 1 if the object is valid, else returns 0.
	 */
	ObjectValid(): number;

	/**
	 * TheSetProps() method sets the properties of a specified object.
	 * The method takes one argument - An array containing the values of the object to be set.
	 * The method does not return anything on success.
	 * On failure, the method returns one of the following values to FA_errno:
	 * 
	 *   Error                                           Reason
	 *   Constants.FE_BadDocId                    (- 2)  Invalid document.
	 *   Constants.FE_BadName                     (-33)  Specified name is illegal.
	 *   Constants.FE_BadNewFrame                 (-14)  The method cannot move the specified object to this frame.
	 *   Constants.FE_BadNewGroup                 (-15)  The method cannot move the specified object to this graphic
	 *                                                   object group (FO_Group).
	 *   Constants.FE_BadNewSibling               (-16)  Object cannot be made a sibling of the specified object.
	 *   Constants.FE_BadObjId                    (- 3)  Invalid object.
	 *   Constants.FE_BadPropNum                  (- 4)  Specified property number is invalid.
	 *   Constants.FE_BadPropType                 (- 5)  Incorrect property type for this function.
	 *   Constants.FE_BadRange                    (-36)  Specified text range is invalid.
	 *   Constants.FE_CantSmooth                  (-38)  Object cannot be smoothed.
	 *   Constants.FE_DupName                     (-32)  Property cannot be set to this name because it is already used by
	 *                                                   another object.
	 *   Constants.FE_GenRuleAmbiguous            (-55)  General rule in structured document is ambiguous.
	 *   Constants.FE_GenRuleConnectorExpected    (-57)  General rule in structured document is missing a connector.
	 *   Constants.FE_GenRuleItemExpected         (-51)  General rule in structured document is missing a rule item.
	 *   Constants.FE_GenRuleLeftBracketExpected  (-53)  General rule in structured document is missing a left bracket.
	 *   Constants.FE_GenRuleMixedConnectors      (-52)  General rule in structured document has mixed connectors.
	 *   Constants.FE_GenRuleRightBracketExpected (-54)  General rule in structured document is missing a right bracket.
	 *   Constants.FE_GenRuleSyntaxError          (-56)  General rule in structured document has a syntax error.
	 *   Constants.FE_GroupSelect                 (- 9)  The method cannot select or deselect an object in the specified
	 *                                                   group.
	 *   Constants.FE_HiddenPage                  (-40)  The specified value must be a hidden page (FO_HiddenPage).
	 *   Constants.FE_InvContextSpec              (   )  The method encountered an invalid context specification in a
	 *                                                   FrameMaker document.
	 *   Constants.FE_NotBookComponent            (-26)  The specified value must be a book component (FO_BookComponent).
	 *   Constants.FE_NotFrame                    (-12)  The specified value must be a frame.
	 *   Constants.FE_NotGraphic                  (-11)  The specified value must be a graphic object.
	 *   Constants.FE_NotGroup                    (-13)  The specified value must be a graphic object group (FO_Group).
	 *   Constants.FE_NotTextFrame                (-39)  The specified value must be a text column (FO_TextFrame).
	 *   Constants.FE_NotTextObject               (-41)  The specified object must be a text object, such as a paragraph
	 *                                                   (FO_Pgf) or a flow (FO_Flow).
	 *   Constants.FE_OffsetNotFound              (-21)  Offset specified for the text location could not be found in the
	 *                                                   specified paragraph or text line.
	 *   Constants.FE_OutOfRange                  (- 7)  Specified property value is out of the legal range for the
	 *                                                   specified property.
	 *   Constants.FE_PageFrame                   (-37)  The specified value must be a page frame object
	 *                                                   (FO_UnanchoredFrame).
	 *   Constants.FE_ReadOnly                    (- 6)  Property is read-only.
	 *   Constants.FE_WithinFrame                 (-10)  The specified object must first be moved to a different frame.
	 *   Constants.FE_WrongProduct                (-60)  The current FrameMaker version does not support this operation.
	 * 
	 * @param setVal - The property list
	 */
	SetProps(setVal: PropVals): void;

}

declare class Arc {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	DTheta: number;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	Theta: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class AttrCondExpr {

	/**
	 * Set to True if this expression is applied to the document. (Application will mean filtering the document according
	 * the constraints in the expression). Set to False, otherwise.
	 */
	AttrCondExprIsActive: boolean;

	/**
	 * The AttrCondExpr expression in string format.
	 */
	AttrCondExprStr: string;

	/**
	 * Indicates the pointer to the next AttrCondExpr object in the document.
	 */
	readonly NextAttrCondExprInDoc: AttrCondExpr;

	/**
	 * ApplyAttributeExpression() is the method to apply the attribute expression to the document.
	 * The method returns FE_Success on success.
	 * 
	 * Also availlable as 'Apply'
	 */
	ApplyAttributeExpression(): number;

	/**
	 * The GetProps() method retrieves the complete property list for a specified object.
	 * The GetProps() method takes no arguments.
	 * The method returns a PropVals object that contains an array of property-value pairs, on success.
	 * If the GetProps() method fails, it sets the len field of the returned structure to 0 and assigns one of the
	 * following values to FA_errno.
	 * 
	 *   Error                            Reason
	 *   Constants.FE_BadDocId     (- 2)  Invalid document.
	 *   Constants.FE_BadObjId     (- 3)  Invalid object.
	 *   Constants.FE_WrongProduct (-60)  Current FrameMaker version does not support the specified operation.
	 */
	GetProps(): PropVals;

	/**
	 * Indicates whether an object is valid or not.
	 * The method does not take any arguments.
	 * The method returns 1 if the object is valid, else returns 0.
	 */
	ObjectValid(): number;

	/**
	 * TheSetProps() method sets the properties of a specified object.
	 * The method takes one argument - An array containing the values of the object to be set.
	 * The method does not return anything on success.
	 * On failure, the method returns one of the following values to FA_errno:
	 * 
	 *   Error                                           Reason
	 *   Constants.FE_BadDocId                    (- 2)  Invalid document.
	 *   Constants.FE_BadName                     (-33)  Specified name is illegal.
	 *   Constants.FE_BadNewFrame                 (-14)  The method cannot move the specified object to this frame.
	 *   Constants.FE_BadNewGroup                 (-15)  The method cannot move the specified object to this graphic
	 *                                                   object group (FO_Group).
	 *   Constants.FE_BadNewSibling               (-16)  Object cannot be made a sibling of the specified object.
	 *   Constants.FE_BadObjId                    (- 3)  Invalid object.
	 *   Constants.FE_BadPropNum                  (- 4)  Specified property number is invalid.
	 *   Constants.FE_BadPropType                 (- 5)  Incorrect property type for this function.
	 *   Constants.FE_BadRange                    (-36)  Specified text range is invalid.
	 *   Constants.FE_CantSmooth                  (-38)  Object cannot be smoothed.
	 *   Constants.FE_DupName                     (-32)  Property cannot be set to this name because it is already used by
	 *                                                   another object.
	 *   Constants.FE_GenRuleAmbiguous            (-55)  General rule in structured document is ambiguous.
	 *   Constants.FE_GenRuleConnectorExpected    (-57)  General rule in structured document is missing a connector.
	 *   Constants.FE_GenRuleItemExpected         (-51)  General rule in structured document is missing a rule item.
	 *   Constants.FE_GenRuleLeftBracketExpected  (-53)  General rule in structured document is missing a left bracket.
	 *   Constants.FE_GenRuleMixedConnectors      (-52)  General rule in structured document has mixed connectors.
	 *   Constants.FE_GenRuleRightBracketExpected (-54)  General rule in structured document is missing a right bracket.
	 *   Constants.FE_GenRuleSyntaxError          (-56)  General rule in structured document has a syntax error.
	 *   Constants.FE_GroupSelect                 (- 9)  The method cannot select or deselect an object in the specified
	 *                                                   group.
	 *   Constants.FE_HiddenPage                  (-40)  The specified value must be a hidden page (FO_HiddenPage).
	 *   Constants.FE_InvContextSpec              (   )  The method encountered an invalid context specification in a
	 *                                                   FrameMaker document.
	 *   Constants.FE_NotBookComponent            (-26)  The specified value must be a book component (FO_BookComponent).
	 *   Constants.FE_NotFrame                    (-12)  The specified value must be a frame.
	 *   Constants.FE_NotGraphic                  (-11)  The specified value must be a graphic object.
	 *   Constants.FE_NotGroup                    (-13)  The specified value must be a graphic object group (FO_Group).
	 *   Constants.FE_NotTextFrame                (-39)  The specified value must be a text column (FO_TextFrame).
	 *   Constants.FE_NotTextObject               (-41)  The specified object must be a text object, such as a paragraph
	 *                                                   (FO_Pgf) or a flow (FO_Flow).
	 *   Constants.FE_OffsetNotFound              (-21)  Offset specified for the text location could not be found in the
	 *                                                   specified paragraph or text line.
	 *   Constants.FE_OutOfRange                  (- 7)  Specified property value is out of the legal range for the
	 *                                                   specified property.
	 *   Constants.FE_PageFrame                   (-37)  The specified value must be a page frame object
	 *                                                   (FO_UnanchoredFrame).
	 *   Constants.FE_ReadOnly                    (- 6)  Property is read-only.
	 *   Constants.FE_WithinFrame                 (-10)  The specified object must first be moved to a different frame.
	 *   Constants.FE_WrongProduct                (-60)  The current FrameMaker version does not support this operation.
	 * 
	 * @param setVal - The property list
	 */
	SetProps(setVal: PropVals): void;

}

declare class BodyPage {

	MasterPage: string;

	PageBackground: number;

	readonly PageFrame: UnanchoredFrame;

	readonly PageHeight: number;

	readonly PageIsRecto: number;

	readonly PageNext: BodyPage;

	readonly PageNum: number;

	readonly PageNumString: string;

	readonly PagePrev: BodyPage;

	readonly PageWidth: number;

	readonly PointPageNum: number;

	/**
	 * PageObject is any Page object i.e., BodyPage, MasterPage, ReferencePage, HiddenPage
	 */
	ApplyPageLayout(srcPage: PageObject): number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Book {

	AcrobatBookmarkDisplayTags: number;

	BookDontUpdateReferences: number;

	readonly BookIsModified: number;

	BookIsSelected: number;

	BookIsViewOnly: number;

	CustomElementList: Strings;

	DocAcrobatColumnArticleThreads: number;

	DocAcrobatDefaultsChanged: number;

	DocAcrobatElementList: Strings;

	DocAcrobatElements: number;

	DocAcrobatNoArticleThreads: number;

	readonly ElementCatalog: ElementCatalogEntries;

	ElementCatalogDisplay: number;

	ElementSelection: ElementRange;

	FileExtensionOverride: string;

	FirstComponentInBook: BookComponent;

	readonly FirstElementDefInDoc: ElementDef;

	FirstFmtChangeListInDoc: FmtChangeList;

	FirstSelectedComponentInBook: BookComponent;

	GenerateAcrobatInfo: number;

	readonly HighestLevelElement: Element;

	IsIconified: number;

	IsInFront: number;

	IsOnScreen: number;

	Label: string;

	Name: string;

	NewElemAttrDisplay: number;

	NewElemAttrEditing: number;

	readonly NextOpenBookInSession: Book;

	PDFAllNamedDestinations: number;

	PDFBookmark: boolean;

	PDFBookmarksOpenLevel: number;

	PDFConvertCMYKtoRGB: number;

	PDFDestsMarked: number;

	readonly PDFDistillerAbsent: number;

	PDFDocInfo: Strings;

	PDFEndPage: string;

	PDFGenerateForReview: number;

	PDFJobOption: string;

	readonly PDFJobOptionsAbsent: number;

	PDFOpenPage: string;

	PDFPageHeight: number;

	PDFPageWidth: number;

	PDFPrintPageRange: number;

	PDFRegistrationMarks: number;

	PDFSeparateFiles: number;

	PDFStartPage: string;

	PDFZoomFactor: number;

	PDFZoomType: number;

	PrintBlankPages: number;

	PrintCollated: number;

	PrintDownloadAsianFonts: number;

	PrintDownloadTrueTypeAsType1: number;

	PrintEmulsion: number;

	PrintEvenPages: number;

	PrintFileName: string;

	PrintImaging: number;

	PrintLastSheetFirst: number;

	PrintLowRes: number;

	PrintNumCopies: number;

	PrintOddPages: number;

	PrintPaperHeight: number;

	PrintPaperWidth: number;

	PrintRegistrationMarks: number;

	PrintScale: number;

	PrintSeps: number;

	PrintToFile: number;

	PrinterName: string;

	ScreenHeight: number;

	ScreenWidth: number;

	ScreenX: number;

	ScreenY: number;

	SeparateInclusions: number;

	ShowElementDescriptiveNames: boolean;

	SkipBlankSeps: number;

	StatusLine: string;

	StructuredApplication: string;

	TypeOfDisplayText: number;

	UseInitialStructure: number;

	UseInitialStructureOfAutoInsertedElements: boolean;

	ViewOnlyDeadCodes: UInts;

	ViewOnlyWinBorders: number;

	ViewOnlyWinMenubar: number;

	ViewOnlyWinPopup: number;

	XmlDocType: string;

	XmlEncoding: string;

	XmlFileEncoding: string;

	XmlPublicId: string;

	XmlStandAlone: number;

	XmlStyleSheet: string;

	XmlStyleSheetList: Strings;

	XmlSystemId: string;

	XmlUseBOM: number;

	XmlVersion: string;

	XmlWellFormed: number;

	ApplyConditionalSettings(pvsp: PropVals): void;

	Close(flags: number): number;

	Compare(newerDoc: Doc, flags: number, insertCondTag: string, deleteCondTag: string, replaceText: string, compareThreshold: number): CompareRet;

	Export(fileName: string, exportParams: PropVals, exportReturnParams: PropVals): number;

	GetConditionalExpression(exprName: string): string;

	GetConditionalSettings(): PropVals;

	GetDependencies(depMode: number): TypedVals;

	GetProps(): PropVals;

	GetUniqueObject(objType: number, unique: number): object;

	Import(textLocP: TextLoc, filename: string, importParams: PropVals, importReturnParams: PropVals): object;

	ManageConditionalExpressions(pvsp: PropVals): void;

	NewBookComponentInHierarchy(compName: string, elemLoc: ElementLoc): Element;

	NewBookComponentOfTypeInHierarchy(compName: string, compType: number, elemLoc: ElementLoc): BookComponent;

	NewIterator(paramsp: PropVals): object;

	NewSeriesBookComponent(previous: object): BookComponent;

	NewSeriesObject(objType: number, previous: object): object;

	ObjectValid(): number;

	Save(saveAsName: string, saveParams: PropVals, saveReturnParams: PropVals): object;

	SetProps(setVal: PropVals): void;

	SilentPrintDoc(): number;

	SimpleGenerate(interactive: number, makeVisible: number): number;

	SimpleImportElementDefs(fromDocOrBook: Doc | Book, importFlags: number): number;

	SimpleImportFormats(fromDoc: Doc, formatFlags: number): number;

	SimpleSave(saveAsName: string, interactive: number): Book;

	UpdateBook(updateParams: PropVals, updateReturnParams: PropVals): number;

}

declare class BookComponent {

	readonly BookComponentFileType: number;

	readonly BookComponentIsFolderWithTemplate: number;

	readonly BookComponentIsFolderWithoutTemplate: number;

	readonly BookComponentIsGeneratable: number;

	readonly BookComponentParent: BookComponent;

	BookComponentTemplatePath: string;

	BookComponentTitle: string;

	BookComponentType: number;

	readonly BookParent: Book;

	ChapNumComputeMethod: number;

	ChapterNumStyle: number;

	ChapterNumText: string;

	ChapterNumber: number;

	ComponentDisplayText: string;

	readonly ComponentElement: Element;

	readonly ComponentIsDitaMap: boolean;

	ComponentIsSelected: number;

	readonly ComponentType: number;

	CorrespondingXmlPath: string;

	ExcludeBookComponent: number;

	ExtractElementTags: Strings;

	ExtractTags: Strings;

	FirstComponentInBookComponent: BookComponent;

	FirstPageNum: number;

	FnCustNumString: string;

	FnFirstNum: string;

	FnNumComputeMethod: number;

	FnNumStyle: number;

	GenerateInclude: number;

	ImportFmtInclude: number;

	InsertLinks: number;

	Name: string;

	readonly NextBookComponentInDFSOrder: BookComponent;

	NextComponentInBook: BookComponent;

	readonly NextSelectedComponentInBook: BookComponent;

	PageNumComputeMethod: number;

	PageNumStyle: number;

	PagePrefix: string;

	PageSide: number;

	PageSuffix: string;

	PgfNumComputeMethod: number;

	readonly PrevBookComponentInDFSOrder: BookComponent;

	PrevComponentInBook: BookComponent;

	PrintInclude: number;

	SecNumComputeMethod: number;

	SectionNumStyle: number;

	SectionNumText: string;

	SectionNumber: number;

	SubsecNumComputeMethod: number;

	SubsectionNumStyle: number;

	SubsectionNumText: string;

	SubsectionNumber: number;

	TblFnCustNumString: string;

	TblFnNumComputeMethod: number;

	TblFnNumStyle: number;

	Unique: number;

	UserString: string;

	VolNumComputeMethod: number;

	VolumeNumStyle: number;

	VolumeNumText: string;

	VolumeNumber: number;

	XmlApplicationForBookComponent: string;

	Delete(): number;

	GetProps(): PropVals;

	MoveComponent(moveAction: number): void;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Cell {

	readonly CellAboveInCol: Cell;

	CellAngle: number;

	readonly CellBelowInCol: Cell;

	readonly CellColNum: number;

	readonly CellColumn: Column;

	readonly CellDefaultBottomRuling: RulingFmt;

	readonly CellDefaultLeftRuling: RulingFmt;

	readonly CellDefaultRightRuling: RulingFmt;

	readonly CellDefaultTopRuling: RulingFmt;

	readonly CellIsShown: number;

	readonly CellIsStraddled: number;

	readonly CellNumColsStraddled: number;

	readonly CellNumRowsStraddled: number;

	CellOverrideBottomRuling: RulingFmt;

	CellOverrideFill: number;

	CellOverrideLeftRuling: RulingFmt;

	CellOverrideRightRuling: RulingFmt;

	CellOverrideShading: Color;

	CellOverrideTopRuling: RulingFmt;

	readonly CellRow: Row;

	CellUseOverrideBRuling: number;

	CellUseOverrideFill: number;

	CellUseOverrideLRuling: number;

	CellUseOverrideRRuling: number;

	CellUseOverrideShading: number;

	CellUseOverrideTRuling: number;

	readonly ContentHeight: number;

	readonly Element: Element;

	readonly FirstPgf: Pgf;

	readonly HighestLevelElement: Element;

	readonly InTextFrame: TextFrame;

	readonly InTextObj: SubCol;

	readonly LastPgf: Pgf;

	readonly LocX: number;

	readonly LocY: number;

	NextCell: Cell;

	readonly NextCellInRow: Cell;

	readonly NextCellInTbl: Cell;

	readonly Overflowed: number;

	readonly PrevCell: Cell;

	readonly PrevCellInRow: Cell;

	readonly Unique: number;

	UserString: string;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	StraddleCells(heightInRows: number, widthInCols: number): number;

	UnStraddleCells(heightInRows: number, widthInCols: number): number;

}

declare class CharFmt {

	BkColor: object;

	Capitalization: number;

	ChangeBar: number;

	CharTag: string;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

	FontVariation: number;

	FontWeight: number;

	KernX: number;

	KernY: number;

	Language: number;

	Name: string;

	readonly NextCharFmtInDoc: CharFmt;

	Overline: number;

	PairKern: number;

	Position: number;

	ReviewTime: number;

	ReviewerName: string;

	Spread: number;

	Stretch: number;

	Strikethrough: number;

	Underlining: number;

	UseBkColor: boolean;

	UseCapitalization: number;

	UseChangeBar: number;

	UseColor: number;

	UseFontAngle: number;

	UseFontFamily: number;

	UseFontSize: number;

	UseFontVariation: number;

	UseFontWeight: number;

	UseKernX: number;

	UseKernY: number;

	UseOverline: number;

	UsePairKern: number;

	UsePosition: number;

	UseSpread: number;

	UseStretch: number;

	UseStrikethrough: number;

	UseUnderlining: number;

	UserString: string;

	WesternFontPlatformName: string;

	WesternFontPostScriptName: string;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class CMSConnection {

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class CMSObject {

	CMSCancelCheckout(): number;

	CMSCheckin(checkinParam: IdValuePairs): number;

	CMSCheckout(rootWithDescendants: boolean): number;

	CMSDelete(deleteParams: IdValuePairs): number;

	CMSDisableCommand(commandId: number): void;

	CMSDownloadObject(): string;

	CMSEnableCommand(commandId: number): void;

	CMSGetProperties(): PropVals;

	CMSGetProperty(propertyId: PropIdent): PropVal;

	CMSOpenFile(openParams: IdValuePairs): object;

	CMSSetProperties(propVals: PropVals): void;

	CMSSetProperty(propVal: PropVal): void;

	CMSShowCancelCheckoutUI(): void;

	CMSShowCheckinUI(hideUiItems: number): CMSCheckinParam;

	CMSShowCheckoutUI(hideUiItems: number): boolean;

	CMSShowCommonListUI(commandId: number, title: string, columnProperties: TypedVals): boolean;

	CMSShowDeleteUI(hideUiItems: number): CMSDeleteParam;

	CMSShowPropertyUI(props: CMSProperties): CMSProperties;

	CMSShowPropertyUIWithTitle(props: CMSProperties, title: string): CMSProperties;

	CMSUploadObject(localFilePath: string): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class CMSRegistration {

	CMSConfigLoginUI(userFields: Strings, userLoginUI: boolean): void;

	CMSGetCMSInfo(): CMSInfo;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class CMSSession {

	CMSCreateObject(): CMSObject;

	CMSGetCmsIdFromSession(): CMSRegistration;

	CMSLogout(): void;

	CMSShowBrowseRepositoryUI(showContainerOnly: boolean): CMSObject;

	GetCMSObjectFromPath(urlPath: string): CMSObject;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Color {

	Black: number;

	ColorOverprint: number;

	ColorPrintCtl: number;

	ColorTintPercent: number;

	ColorViewCtl: number;

	Cyan: number;

	FamilyName: string;

	InkName: string;

	Magenta: number;

	Name: string;

	readonly NextColorInDoc: Color;

	ReservedColor: number;

	TintBaseColor: Color;

	UserString: string;

	Yellow: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Column {

	readonly ColumnIsShown: number;

	readonly ColumnTbl: Tbl;

	InCond: Objects;

	readonly NextColumnInTbl: Column;

	readonly NextVisibleColumnInTbl: Column;

	readonly PrevColumnInTbl: Column;

	readonly PrevVisibleColumnInTbl: Column;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class CombinedFontDefn {

	BaseFamily: number;

	readonly FontEncodingName: string;

	Name: string;

	readonly NextCombinedFontDefnInDoc: CombinedFontDefn;

	UserString: string;

	WesternFamily: number;

	WesternShift: number;

	WesternSize: number;

	CombinedFamilyFonts(): CombinedFonts;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Command {

	CanHaveCheckMark: number;

	CheckMarkIsOn: number;

	CommandNum: number;

	EnabledWhen: number;

	readonly ExpandOMaticParent: Command;

	readonly Fcode: int;

	readonly Fcodes: UInts;

	HasShiftOrUnshiftCommand: number;

	HelpLink: string;

	KeyboardShortcutLabel: string;

	KeyboardShortcuts: Strings;

	Label: string;

	Labels: Strings;

	readonly MenuItemIsEnabled: number;

	readonly MenuItemType: number;

	readonly Mode: number;

	readonly Name: string;

	readonly NextCommandInSession: Command;

	NextMenuItemInMenu: object;

	readonly NextMenuItemInSession: object;

	PrevMenuItemInMenu: object;

	Product: number;

	ShiftOrUnshiftCommand: Command;

	View: number;

	Window: number;

	Delete(): number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class CondFmt {

	BkColor: Color;

	CondFmtIsShown: number;

	Name: string;

	readonly NextCondFmtInDoc: CondFmt;

	SepOverride: Color;

	StyleOverride: number;

	UseBkColor: boolean;

	UseSepOverride: number;

	UserString: string;

	Delete(): number;

	DeleteCondTag(action: number): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class DialogResource {

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Doc {

	AcrobatBookmarkDisplayTags: number;

	AutoChangeBars: number;

	BannerTextDisplay: boolean;

	BooleanConditionExpression: string;

	BooleanConditionExpressionTag: string;

	BooleanConditionState: number;

	BottomMargin: number;

	Capitalization: number;

	ChangeBar: number;

	ChangeBarColor: Color;

	ChangeBarDistance: number;

	ChangeBarPosition: number;

	ChangeBarThickness: number;

	ChapNumComputeMethod: number;

	ChapterNumStyle: number;

	ChapterNumText: string;

	ChapterNumber: number;

	CharTag: string;

	ColGap: number;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	CondFmtIsShown: number;

	CurrentPage: object;

	CustomElementList: Strings;

	DefaultExclusions: Strings;

	DefaultInclusions: Strings;

	Dictionary: Strings;

	Direction: number;

	DocAcrobatColumnArticleThreads: number;

	DocAcrobatDefaultsChanged: number;

	DocAcrobatElementList: Strings;

	DocAcrobatElements: number;

	DocAcrobatNoArticleThreads: number;

	DocFluidFlow: Flow;

	readonly DocFonts: Strings;

	DocIsDoubleSided: number;

	readonly DocIsModified: number;

	DocIsViewOnly: number;

	readonly DocOpenType: number;

	readonly DocSaveType: number;

	DontUpdateTextInsets: number;

	DontUpdateXRefs: number;

	DownloadFonts: number;

	ElementBoundaryDisplay: number;

	readonly ElementCatalog: ElementCatalogEntries;

	ElementCatalogDisplay: number;

	ElementSelection: ElementRange;

	EqnIntegralSizeLarge: number;

	EqnIntegralSizeMed: number;

	EqnIntegralSizeSmall: number;

	EqnLevel1SizeLarge: number;

	EqnLevel1SizeMed: number;

	EqnLevel1SizeSmall: number;

	EqnLevel2SizeLarge: number;

	EqnLevel2SizeMed: number;

	EqnLevel2SizeSmall: number;

	EqnLevel3SizeLarge: number;

	EqnLevel3SizeMed: number;

	EqnLevel3SizeSmall: number;

	EqnSigmaSizeLarge: number;

	EqnSigmaSizeMed: number;

	EqnSigmaSizeSmall: number;

	readonly FirstAttrCondExprInDoc: AttrCondExpr;

	readonly FirstBodyPageInDoc: BodyPage;

	readonly FirstCharFmtInDoc: CharFmt;

	readonly FirstColorInDoc: Color;

	readonly FirstCombinedFontDefnInDoc: CombinedFontDefn;

	readonly FirstCondFmtInDoc: CondFmt;

	readonly FirstDITAConrefElementInDoc: Element;

	readonly FirstDITALinkElementInDoc: Element;

	readonly FirstDITATopicrefElementInDoc: Element;

	readonly FirstDITATopicsetrefElementInDoc: Element;

	readonly FirstDITAXrefElementInDoc: Element;

	readonly FirstElementDefInDoc: ElementDef;

	readonly FirstFlowInDoc: Flow;

	FirstFmtChangeListInDoc: FmtChangeList;

	readonly FirstFnInDoc: Fn;

	readonly FirstGraphicInDoc: object;

	readonly FirstGraphicsFmtInDoc: GraphicsFmt;

	readonly FirstInlineComponentInDoc: InlineComponent;

	readonly FirstMarkerInDoc: Marker;

	readonly FirstMarkerTypeInDoc: MarkerType;

	readonly FirstMasterPageInDoc: MasterPage;

	FirstPageNum: number;

	FirstPageVerso: number;

	readonly FirstPgfFmtInDoc: PgfFmt;

	readonly FirstPgfInDoc: Pgf;

	readonly FirstRefPageInDoc: RefPage;

	readonly FirstRubiInDoc: Rubi;

	readonly FirstRulingFmtInDoc: RulingFmt;

	readonly FirstSelectedGraphicInDoc: object;

	readonly FirstSelectedTiInDoc: object;

	readonly FirstTblFmtInDoc: TblFmt;

	readonly FirstTblInDoc: Tbl;

	readonly FirstTiInDoc: object;

	readonly FirstVarFmtInDoc: VarFmt;

	readonly FirstVarInDoc: Var;

	readonly FirstXRefFmtInDoc: XRefFmt;

	readonly FirstXRefInDoc: XRef;

	FnCustNumString: string;

	FnFirstNum: number;

	FnFmt: string;

	FnHeightPerCol: number;

	FnInstancePosition: number;

	FnInstancePrefix: string;

	FnInstanceSuffix: string;

	FnNumComputeMethod: number;

	FnNumStyle: number;

	FnNumberingPerPage: number;

	FnRefPosition: number;

	FnRefPrefix: string;

	FnRefSuffix: string;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

	FontVariation: number;

	FontWeight: number;

	FormatOverride: number;

	Functions: string;

	GenerateAcrobatInfo: number;

	readonly HiddenPage: HiddenPage;

	HypertextCommandText: string;

	HypertextDoValidate: boolean;

	readonly HypertextParseBadParam: number;

	readonly HypertextParseErr: number;

	readonly HypertextParseErrMsg: string;

	readonly HypertextParsedClientName: string;

	readonly HypertextParsedCmdCode: number;

	readonly HypertextParsedCmdDest: number;

	readonly HypertextParsedCmdDestObjID: number;

	readonly HypertextParsedCmdDestObjType: number;

	readonly HypertextParsedCmdMatrixColumns: number;

	readonly HypertextParsedCmdMatrixRows: number;

	readonly HypertextParsedDIFileName: string;

	readonly HypertextParsedFlowName: string;

	readonly HypertextParsedLinkName: string;

	readonly HypertextParsedMessage: string;

	readonly HypertextParsedPageName: string;

	readonly HypertextParsedTitle: string;

	readonly HypertextValidateErr: number;

	InCond: Objects;

	IsIconified: number;

	IsInFront: number;

	IsOnScreen: number;

	KernX: number;

	KernY: number;

	readonly KeyCatalog: KeyCatalog;

	KeyCatalogType: number;

	Label: string;

	readonly LastBodyPageInDoc: BodyPage;

	readonly LastMasterPageInDoc: MasterPage;

	readonly LastRefPageInDoc: RefPage;

	LeftMargin: number;

	readonly LeftMasterPage: MasterPage;

	LineBreakAfter: string;

	LineNumDistance: number;

	LineNumRestart: boolean;

	LineNumShow: boolean;

	readonly MainFlowInDoc: Flow;

	readonly MarkerTypeNames: Strings;

	MaxBottomMargin: number;

	MaxFirstIndent: number;

	MaxFontSize: number;

	MaxLeading: number;

	MaxLeftIndent: number;

	MaxLeftMargin: number;

	MaxRightIndent: number;

	MaxRightMargin: number;

	MaxSpaceAbove: number;

	MaxSpaceBelow: number;

	MaxSpread: number;

	MaxStretch: number;

	MaxTabPosition: number;

	MaxTopMargin: number;

	MenuBar: Menu;

	MinBottomMargin: number;

	MinFirstIndent: number;

	MinFontSize: number;

	MinLeading: number;

	MinLeftIndent: number;

	MinLeftMargin: number;

	MinRightIndent: number;

	MinRightMargin: number;

	MinSpaceAbove: number;

	MinSpaceBelow: number;

	MinSpread: number;

	MinStretch: number;

	MinTabPosition: number;

	MinTopMargin: number;

	readonly Name: string;

	NarrowRubiSpaceForOther: number;

	NewElemAttrDisplay: number;

	NewElemAttrEditing: number;

	readonly NextOpenDocInSession: Doc;

	readonly NumCols: number;

	Numbers: string;

	Overline: number;

	PDFAllNamedDestinations: number;

	PDFBookmark: boolean;

	PDFBookmarksOpenLevel: number;

	PDFConvertCMYKtoRGB: number;

	PDFDestsMarked: number;

	readonly PDFDistillerAbsent: number;

	PDFDocInfo: Strings;

	PDFEndPage: string;

	PDFGenerateForReview: number;

	PDFJobOption: string;

	readonly PDFJobOptionsAbsent: number;

	PDFOpenPage: string;

	PDFPageHeight: number;

	PDFPageWidth: number;

	PDFPrintPageRange: number;

	PDFRegistrationMarks: number;

	PDFSeparateFiles: number;

	PDFStartPage: string;

	PDFStructure: number;

	PDFViewPDF: number;

	PDFZoomFactor: number;

	PDFZoomType: number;

	PageHeight: number;

	PageNumComputeMethod: number;

	PageNumStyle: number;

	PageRounding: number;

	PageWidth: number;

	PairKern: number;

	PgfNumComputeMethod: number;

	PointPageNumStyle: number;

	Position: number;

	PreviewState: number;

	PrintBlankPages: number;

	PrintCollated: number;

	PrintCols: number;

	PrintDitavalFileName: string;

	PrintEmulsion: number;

	PrintEndPage: number;

	PrintEndPageName: number;

	PrintEndPoint: number;

	PrintEvenPages: number;

	PrintFileName: string;

	PrintImaging: number;

	PrintLastSheetFirst: number;

	PrintLowRes: number;

	PrintManualFeed: number;

	PrintNumCopies: number;

	PrintOddPages: number;

	PrintPaperHeight: number;

	PrintPaperWidth: number;

	PrintRegistrationMarks: number;

	PrintRows: number;

	PrintScale: number;

	PrintScope: number;

	PrintSeps: number;

	PrintStartPage: number;

	PrintStartPageName: number;

	PrintStartPoint: number;

	PrintThumbnails: number;

	PrintToFile: number;

	PrinterName: string;

	readonly ResolvedDirection: number;

	ReviewerName: string;

	readonly ReviewerNameList: Strings;

	RightMargin: number;

	readonly RightMasterPage: MasterPage;

	RubiFixedSize: number;

	RubiOverhang: number;

	RubiSize: number;

	ScreenHeight: number;

	ScreenWidth: number;

	ScreenX: number;

	ScreenY: number;

	SecNumComputeMethod: number;

	SectionNumStyle: number;

	SectionNumText: string;

	SectionNumber: number;

	readonly SelectedTbl: Tbl;

	SepOverride: Color;

	SeparateInclusions: number;

	ShowAll: number;

	ShowCondIndicators: number;

	ShowElementDescriptiveNames: boolean;

	SkipBlankSeps: number;

	SmallCapsSize: number;

	SmallCapsStretch: number;

	SmartQuotes: number;

	SmartSpaces: number;

	SnapAngle: number;

	SnapGridUnits: number;

	SpecifiedKeyCatalog: KeyCatalog;

	SpotColorView: number;

	Spread: number;

	StatusLine: string;

	Stretch: number;

	Strikethrough: number;

	Strings: string;

	StructuredApplication: string;

	StructuredApplicationForOpen: string;

	readonly StyleOverrides: number;

	SubScriptShift: number;

	SubScriptSize: number;

	SubScriptStretch: number;

	SubsecNumComputeMethod: number;

	SubsectionNumStyle: number;

	SubsectionNumText: string;

	SubsectionNumber: number;

	SuperScriptShift: number;

	SuperScriptSize: number;

	SuperScriptStretch: number;

	Symbols: string;

	readonly SymbolsList: Strings;

	TblFnCellPosition: number;

	TblFnCellPrefix: string;

	TblFnCellSuffix: string;

	TblFnCustNumString: string;

	TblFnFmt: string;

	TblFnNumStyle: number;

	TblFnPosition: number;

	TblFnPrefix: string;

	TblFnSuffix: string;

	TextSelection: TextRange;

	TopMargin: number;

	TrackChangesAddedColor: Color;

	TrackChangesDeletedColor: Color;

	TrackChangesOn: boolean;

	TrapwiseCompatibility: boolean;

	Underlining: number;

	Untouchable: number;

	UseInitialStructure: number;

	UseInitialStructureOfAutoInsertedElements: boolean;

	UseSepOverride: number;

	UserString: string;

	Variables: string;

	ViewBorders: number;

	ViewDisplayUnits: number;

	ViewFontSizeUnits: number;

	ViewGrid: number;

	ViewGridUnits: number;

	ViewHotspotIndicators: number;

	ViewNoGraphics: number;

	ViewOnlyDeadCodes: UInts;

	ViewOnlyMenuBar: Menu;

	ViewOnlySelect: number;

	ViewOnlyWinBorders: number;

	ViewOnlyWinMenubar: number;

	ViewOnlyWinPalette: number;

	ViewOnlyWinPopup: number;

	ViewOnlyXRef: number;

	ViewPageScrolling: number;

	ViewRulerUnits: number;

	ViewRulers: number;

	ViewTextSymbols: number;

	VolNumComputeMethod: number;

	VolumeNumStyle: number;

	VolumeNumText: string;

	VolumeNumber: number;

	WideRubiSpaceForOther: number;

	XmlDocType: string;

	XmlEncoding: string;

	XmlFileEncoding: string;

	XmlPublicId: string;

	XmlStandAlone: number;

	XmlStyleSheet: string;

	XmlStyleSheetList: Strings;

	XmlSystemId: string;

	XmlUseBOM: number;

	XmlVersion: string;

	XmlWellFormed: number;

	Zoom: number;

	AddNewBuildExpr(exprName: string, exprCondition: string): number;

	AddTableVariables(tblFormatOrTblId: object, allTables: boolean, insertContVariable: boolean, insertSheetVariable: boolean): number;

	AddText(textLoc: TextLoc, text: string): TextLoc;

	CenterOnText(textRange: TextRange): number;

	Clear(flags: number): number;

	ClearAllChangebars(): number;

	Close(flags: number): number;

	Compare(newerDoc: Doc, flags: number, insertCondTag: string, deleteCondTag: string, replaceText: string, compareThreshold: number): CompareRet;

	Copy(flags: number): number;

	Cut(flags: number): number;

	DeleteBuildExpr(exprName: string): number;

	DeleteText(textRange: TextRange): number;

	DeleteUndefinedAttribute(attrName: string, scope: number, objId: object): number;

	DeleteUnusedCharFmt(): number;

	DeleteUnusedFmts(objType: number): number;

	DeleteUnusedGraphicsFmt(): number;

	DeleteUnusedPgfFmt(): number;

	DeleteUnusedTblFmt(): number;

	DemoteElement(): void;

	ElementLocToTextLoc(eloc: ElementLoc): TextLoc;

	Export(fileName: string, exportParams: PropVals, exportReturnParams: PropVals): number;

	Find(textLoc: TextLoc, findParams: PropVals): TextRange;

	GenerateQrCode(qrCodePropVal: PropVals): number;

	GetActiveBuildExpr(): string;

	GetBuildExpr(exprName: string): string;

	GetBuildExprCatalog(): Strings;

	GetDependencies(depMode: number): TypedVals;

	GetNamedAttrCondExpr(name: string): AttrCondExpr;

	GetNamedCharFmt(name: string): CharFmt;

	GetNamedColor(name: string): Color;

	GetNamedCombinedFontDefn(name: string): CombinedFontDefn;

	GetNamedCondFmt(name: string): CondFmt;

	GetNamedElementDef(name: string): ElementDef;

	GetNamedFmtChangeList(name: string): FmtChangeList;

	GetNamedGraphicsFmt(name: string): GraphicsFmt;

	GetNamedMarkerType(name: string): MarkerType;

	GetNamedMasterPage(name: string): MasterPage;

	GetNamedObject(objType: number, name: string): object;

	GetNamedPgfFmt(name: string): PgfFmt;

	GetNamedRefPage(name: string): RefPage;

	GetNamedRulingFmt(name: string): RulingFmt;

	GetNamedTblFmt(name: string): TblFmt;

	GetNamedUnanchoredFrame(name: string): UnanchoredFrame;

	GetNamedVarFmt(name: string): VarFmt;

	GetNamedXRefFmt(name: string): XRefFmt;

	GetProps(): PropVals;

	GetTextForRange(tr: TextRange, flags: number): TextItems;

	GetTextForRange2(tr: TextRange, flags: number, flags2: number): TextItems;

	GetTextPropVal(textLoc: TextLoc, propNum: number): PropVal;

	GetTextProps(textLoc: TextLoc): PropVals;

	GetTextVal(textLoc: TextLoc, propNum: number): TypedVal;

	GetUniqueObject(objType: number, unique: number): object;

	HypertextCommand(hypertext: string): number;

	Import(textLocP: TextLoc, filename: string, importParams: PropVals, importReturnParams: PropVals): object;

	MergeIntoFirst(): void;

	MergeIntoLast(): void;

	NewAnchoredAFrame(textloc: TextLoc): AFrame;

	NewAnchoredFn(textloc: TextLoc): Fn;

	NewAnchoredFormattedObject(objType: number, format: string, textLoc: TextLoc): object;

	NewAnchoredFormattedTbl(format: string, textLoc: TextLoc): Tbl;

	NewAnchoredFormattedVar(format: string, textLoc: TextLoc): Var;

	NewAnchoredFormattedXRef(format: string, textLoc: TextLoc): XRef;

	NewAnchoredMarker(textloc: TextLoc): Marker;

	NewAnchoredObject(objType: number, textloc: TextLoc): object;

	NewAnchoredTbl(textloc: TextLoc): Tbl;

	NewAnchoredTiApiClient(textloc: TextLoc): TiApiClient;

	NewArc(parent: FrameObject): Arc;

	NewEllipse(parent: FrameObject): Ellipse;

	NewFlow(parent: FrameObject): Flow;

	/**
	 * GraphicObject could be any FM graphic object, i.e,AFrame ,UnanchoredFrame
	 */
	NewGraphicObject(objType: number, parent: FrameObject): object;

	NewGroup(parent: FrameObject): Group;

	NewInlineComponentOfType(inlineCompType: number, tags: Strings, hyperLinks: boolean, textLocp: TextLoc): InlineComponent;

	NewInset(parent: FrameObject): Inset;

	NewIterator(paramsp: PropVals): object;

	NewLine(parent: FrameObject): Line;

	NewMath(parent: FrameObject): Math;

	NewMathML(parent: FrameObject): MathML;

	NewNamedAttrCondExpr(name: string): AttrCondExpr;

	NewNamedCharFmt(name: string): CharFmt;

	NewNamedColor(name: string): Color;

	NewNamedCombinedFontDefn(name: string): CombinedFontDefn;

	NewNamedCondFmt(name: string): CondFmt;

	NewNamedElementDef(name: string): ElementDef;

	NewNamedFmtChangeList(name: string): FmtChangeList;

	NewNamedGraphicsFmt(name: string): GraphicsFmt;

	NewNamedMarkerType(name: string): MarkerType;

	NewNamedMasterPage(name: string): MasterPage;

	NewNamedObject(objType: number, name: string): object;

	NewNamedPgfFmt(name: string): PgfFmt;

	NewNamedRefPage(name: string): RefPage;

	NewNamedRulingFmt(name: string): RulingFmt;

	NewNamedTblFmt(name: string): TblFmt;

	NewNamedVarFmt(name: string): VarFmt;

	NewNamedXRefFmt(name: string): XRefFmt;

	NewPolygon(parent: FrameObject): Polygon;

	NewPolyline(parent: FrameObject): Polyline;

	NewRectangle(parent: FrameObject): Rectangle;

	NewRoundRect(parent: FrameObject): RoundRect;

	NewSeriesBodyPage(previous: object): BodyPage;

	NewSeriesObject(objType: number, previous: object): object;

	NewSeriesPgf(previous: object): Pgf;

	NewTable(format: string, numCols: number, numBodyRows: number, numHeaderRows: number, numFooterRows: number, textLoc: TextLoc): Tbl;

	NewTextFrame(parent: FrameObject): TextFrame;

	NewTextLine(parent: FrameObject): TextLine;

	NewUnanchoredFrame(parent: FrameObject): UnanchoredFrame;

	ObjectValid(): number;

	Paste(flags: number): number;

	PromoteElement(): void;

	QuickSelect(prompt: string, stringlist: Strings): number;

	ReEvaluateConditions(): void;

	Redisplay(): number;

	Reformat(): number;

	Rehyphenate(): number;

	ResetEqnSettings(): number;

	ResetReferenceFrames(): number;

	RestartPgfNumbering(): number;

	Save(saveAsName: string, saveParams: PropVals, saveReturnParams: PropVals): object;

	ScrollToText(textRange: TextRange): number;

	SetActiveBuildExpr(exprName: string): number;

	SetAttributeSimple(attrName: string, attrValStr: string, scope: number, objId: object): number;

	SetElementRange(propNum: number, setVal: ElementRange): void;

	SetProps(setVal: PropVals): void;

	SetTextPropVal(textRange: TextRange, setVal: PropVal): void;

	SetTextProps(textRange: TextRange, setVal: PropVals): void;

	SetTextVal(textRange: TextRange, propNum: number, setVal: TypedVal): void;

	SilentPrintDoc(): number;

	SimpleImportElementDefs(fromDocOrBook: Doc | Book, importFlags: number): number;

	SimpleImportFormats(fromDoc: Doc, formatFlags: number): number;

	SimpleSave(saveAsName: string, interactive: number): Doc;

	SplitElement(): void;

	TextLocToElementLoc(tloc: TextLoc): ElementLoc;

	TrackChangesAcceptAll(): number;

	TrackChangesRejectAll(): number;

	UnWrapElement(): void;

	UndoCancel(): void;

	UndoEndCheckPoint(): void;

	UndoStartCheckPoint(description: string): void;

	UpdateDITAReferences(flag: number): void;

	UpdateVariables(): number;

	UpdateXRef(srcDoc: Doc, xref: XRef): number;

	UpdateXRefs(updateXRefFlags: number): number;

}

declare class Element {

	AllowAsSpecialCase: number;

	AttrDisplay: number;

	AttributeValueInvalid: number;

	Attributes: Attributes;

	AttributesEx: AttributesEx;

	readonly BookComponent: BookComponent;

	readonly BookComponentMissing: number;

	readonly ContentIsLooselyValid: number;

	readonly ContentIsStrictlyValid: number;

	readonly ContentMustBeEmpty: number;

	readonly ContentNeededAtBegin: number;

	readonly ContentNeededAtEnd: number;

	readonly ContextLabel: string;

	ElementDef: ElementDef;

	ElementIsCollapsed: number;

	readonly ElementIsExcludedInContext: number;

	readonly ElementIsInvalidInParent: number;

	readonly ElementIsInvalidInPosition: number;

	readonly ElementIsTopicGroup: boolean;

	readonly ElementIsTopicHead: boolean;

	readonly ElementIsTopicRef: boolean;

	readonly ElementIsUndefined: number;

	ElementMarkedForNamedDestination: number;

	readonly ElementType: number;

	readonly ErrorInBookComponent: number;

	readonly FirstChildElement: Element;

	readonly FormatOverride: number;

	readonly HoleBeforeElement: number;

	readonly InvalidHighestLevel: number;

	readonly LastChildElement: Element;

	readonly MatchingFirstPgfClauses: Objects;

	readonly MatchingLastPgfClauses: Objects;

	readonly MatchingObjectClauses: Objects;

	readonly MatchingPrefixClauses: Objects;

	readonly MatchingSuffixClauses: Objects;

	readonly MatchingTextClauses: Objects;

	Namespace: Strings;

	readonly NamespaceScope: Element;

	readonly NextDITAConrefElementInDoc: Element;

	readonly NextDITALinkElementInDoc: Element;

	readonly NextDITATopicrefElementInDoc: Element;

	readonly NextDITATopicsetrefElementInDoc: Element;

	readonly NextDITAXrefElementInDoc: Element;

	readonly NextElementDFS: Element;

	readonly NextInvalidElement: Element;

	readonly NextSiblingElement: Element;

	readonly NumNamespaces: number;

	readonly Object: object;

	readonly ParentElement: Element;

	readonly PrevElementDFS: Element;

	readonly PrevSiblingElement: Element;

	readonly TextIsInvalidInElement: number;

	readonly TextRange: TextRange;

	readonly TopicRefAbsoluteFilePath: string;

	readonly Unique: number;

	UserString: string;

	readonly ValidationFlags: number;

	Delete(): number;

	GetAttributes(): Attributes;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	UpdateDITAReference(objType: number): void;

}

declare class ElementDef {

	AlsoInsert: Strings;

	AlsoInserts: TypedVal;

	AttributeDefs: AttributeDefs;

	BannerText: string;

	Comment: string;

	DescriptiveTag: string;

	ElementDataType: number;

	ElementDefType: number;

	ElementDescription: string;

	ElementInCatalog: number;

	ElementPgfFormat: string;

	Exclusions: Strings;

	readonly FirstPgfRules: Objects;

	GeneralRule: string;

	readonly GeneralRuleErrorOffsets: Ints;

	Inclusions: Strings;

	InitStructurePattern: string;

	readonly LastPgfRules: Objects;

	readonly Name: string;

	readonly NextElementDefInDoc: ElementDef;

	readonly ObjectFmtRules: Objects;

	readonly PrefixRules: Objects;

	readonly SuffixRules: Objects;

	readonly TextFmtRules: Objects;

	ValidHighestLevel: number;

	Delete(): number;

	ElementDefIsText(): number;

	GetAttributeDefs(): AttributeDefs;

	GetProps(): PropVals;

	NewElement(textLoc: TextLoc): Element;

	NewElementInHierarchy(elemLoc: ElementLoc): Element;

	NewFirstPgfRules(): FmtRule;

	NewLastPgfRules(): FmtRule;

	NewObjectFmtRules(): FmtRule;

	NewPrefixRules(): FmtRule;

	NewSuffixRules(): FmtRule;

	NewTextFmtRules(): FmtRule;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	WrapElement(): void;

}

declare class Ellipse {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	readonly RectangleIsSmoothed: number;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Flow {

	Direction: number;

	readonly FirstTextFrameInFlow: TextFrame;

	FlowIsAutoConnect: number;

	FlowIsFeathered: number;

	FlowIsPostScript: number;

	FlowIsSynchronized: number;

	readonly HighestLevelElement: Element;

	readonly LastTextFrameInFlow: TextFrame;

	MaxInterPgfPadding: number;

	MaxInterlinePadding: number;

	MinHang: number;

	Name: string;

	readonly NextFlowInDoc: Flow;

	readonly ResolvedDirection: number;

	SideHeadRoomInFlow: number;

	Spacing: number;

	UserString: string;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class FmtChangeList {

	AdjHyphens: number;

	AutoNumChar: string;

	AutoNumString: string;

	BkColor: Color;

	BlockLines: number;

	BottomSepAtIndent: number;

	BottomSeparator: string;

	Capitalization: number;

	CellBottomMargin: number;

	CellBottomMarginChange: number;

	CellBottomMarginFixed: number;

	CellLeftMargin: number;

	CellLeftMarginChange: number;

	CellLeftMarginFixed: number;

	CellRightMargin: number;

	CellRightMarginFixed: number;

	CellTopMargin: number;

	CellTopMarginChange: number;

	CellTopMarginFixed: number;

	CellVAlignment: number;

	ChangeBar: number;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	FirstIndent: number;

	FirstIndentChange: number;

	FirstIndentIsRelative: number;

	FirstIndentRelPos: number;

	FmtChangeListInCatalog: number;

	FontAngle: number;

	FontFamily: number;

	FontSize: number;

	FontSizeChange: number;

	FontVariation: number;

	FontWeight: number;

	HyphMinPrefix: number;

	HyphMinSuffix: number;

	HyphMinWord: number;

	Hyphenate: number;

	KeepWithNext: number;

	KeepWithPrev: number;

	KernX: number;

	KernY: number;

	Language: number;

	Leading: number;

	LeadingChange: number;

	LeftIndent: number;

	LeftIndentChange: number;

	LetterSpace: number;

	LineSpacingFixed: number;

	MaxJLetSpace: number;

	MaxJRomSpace: number;

	MaxSpace: number;

	MinJLetSpace: number;

	MinJRomSpace: number;

	MinSpace: number;

	MoveTabs: number;

	Name: string;

	NextFmtChangeListInDoc: FmtChangeList;

	NumAtEnd: number;

	NumTabs: number;

	OptJLetSpace: number;

	OptJRomSpace: number;

	OptSpace: number;

	Overline: number;

	PairKern: number;

	PgfAlignment: number;

	PgfBoxColor: Color;

	PgfCatalogReference: string;

	PgfIsAutoNum: number;

	Placement: number;

	Position: number;

	RightIndent: number;

	RightIndentChange: number;

	RunInSeparator: string;

	SpaceAbove: number;

	SpaceAboveChange: number;

	SpaceBelow: number;

	SpaceBelowChange: number;

	Spread: number;

	SpreadChange: number;

	Start: number;

	Stretch: number;

	StretchChange: number;

	Strikethrough: number;

	Tabs: Tabs;

	TopSepAtIndent: number;

	TopSeparator: string;

	Underlining: number;

	YakumonoType: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class FmtRule {

	CountElements: Strings;

	ElementDef: ElementDef;

	FmtRuleClause: FmtRuleClause;

	readonly FmtRuleClauses: Objects;

	FmtRuleType: number;

	StopCountingAt: string;

	Delete(): number;

	GetProps(): PropVals;

	NewFmtRuleClauses(): FmtRuleClause;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class FmtRuleClause {

	ContextLabel: string;

	ElemPrefixSuffix: string;

	readonly FmtChangeList: FmtChangeList;

	FmtChangeListTag: string;

	readonly FmtRule: FmtRule;

	FormatTag: string;

	IsTextRange: number;

	readonly RuleClauseType: number;

	Specification: string;

	readonly SpecificationForCSS: Strings;

	readonly SubFmtRule: FmtRule;

	Delete(): number;

	GetProps(): PropVals;

	NewFmtChangeList(): FmtChangeList;

	NewSubFmtRule(): FmtRule;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Fn {

	readonly ContentHeight: number;

	readonly Element: Element;

	readonly FirstPgf: Pgf;

	readonly FnAnchorString: string;

	readonly FnNum: number;

	readonly InTextFrame: TextFrame;

	readonly InTextObj: SubCol;

	readonly LastPgf: Pgf;

	readonly NextFn: Fn;

	readonly NextFnInDoc: Fn;

	readonly Overflowed: number;

	readonly PrevFn: Fn;

	readonly TextLoc: TextLoc;

	readonly Unique: number;

	UserString: string;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class GraphicsFmt {

	AFrameIsCropped: boolean;

	AFrameIsFloating: boolean;

	Alignment: number;

	AnchorType: number;

	Angle: number;

	BaselineOffset: number;

	BorderWidth: number;

	ColGapWidth: number;

	Color: Color;

	ColumnsAreBalanced: number;

	DTheta: number;

	Fill: number;

	FlowIsAutoConnect: number;

	FlowIsPostScript: number;

	Height: number;

	InsetDpi: number;

	LocX: number;

	LocY: number;

	MathMLComposeDpi: number;

	MathMLDpi: number;

	MathMLFontSize: number;

	MathSize: number;

	readonly NextGraphicsFmtInDoc: GraphicsFmt;

	NumColumns: number;

	Overprint: number;

	Pen: number;

	Radius: number;

	Runaround: number;

	RunaroundGap: number;

	SideHeadGap: number;

	SideHeadPlacement: number;

	SideHeadWidth: number;

	SideOffset: number;

	StyleTag: string;

	TextLineType: number;

	Theta: number;

	TintPercent: number;

	UseAFrameIsCropped: boolean;

	UseAFrameIsFloating: boolean;

	UseAlignment: boolean;

	UseAnchorType: boolean;

	UseAngle: boolean;

	UseBaselineOffset: boolean;

	UseBorderWidth: boolean;

	UseColGapWidth: boolean;

	UseColor: boolean;

	UseColumnsAreBalanced: boolean;

	UseDTheta: boolean;

	UseFill: boolean;

	UseFlowIsAutoConnect: boolean;

	UseFlowIsPostScript: boolean;

	UseHeight: boolean;

	UseInsetDpi: boolean;

	UseLocX: boolean;

	UseLocY: boolean;

	UseMathMLComposeDpi: boolean;

	UseMathMLDpi: boolean;

	UseMathMLFontSize: boolean;

	UseMathSize: boolean;

	UseNumColumns: boolean;

	UseOverprint: boolean;

	UsePen: boolean;

	UseRadius: boolean;

	UseRunaround: boolean;

	UseRunaroundGap: boolean;

	UseSideHeadGap: boolean;

	UseSideHeadPlacement: boolean;

	UseSideHeadWidth: boolean;

	UseSideOffset: boolean;

	UseTextLineType: boolean;

	UseTheta: boolean;

	UseTintPercent: boolean;

	UseWidth: boolean;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Group {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	readonly FirstGraphicInGroup: object;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	readonly LastGraphicInGroup: object;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class HiddenPage {

	readonly Name: string;

	readonly PageFrame: UnanchoredFrame;

	readonly PageHeight: number;

	readonly PageWidth: number;

	/**
	 * PageObject is any Page object i.e., BodyPage, MasterPage, ReferencePage, HiddenPage
	 */
	ApplyPageLayout(srcPage: PageObject): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class InlineComponent {

	ExtractTags: Strings;

	readonly InlineComponentType: number;

	InsertLinks: number;

	readonly NextInlineComponentInDoc: InlineComponent;

	readonly TextRange: TextRange;

	readonly Unique: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Inset {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	ImportHint: string;

	InsetDpi: number;

	InsetEditor: string;

	InsetFile: string;

	InsetGfxActiveInPdf: boolean;

	InsetGfxName: string;

	InsetGfxPlayWindowInPdf: boolean;

	InsetIsFixedSize: number;

	InsetIsFlippedSideways: number;

	InsetJavaScriptFile: string;

	InsetPosterFile: string;

	readonly InsetU3dAnimationList: Strings;

	readonly InsetU3dPartList: Strings;

	readonly InsetU3dViewList: Strings;

	InsetUpdater: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	PageNum: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	ApplyFitToFrame(opcode: number): number;

	Delete(): number;

	DeletePropByName(propName: string): void;

	GetIntByName(propName: string): number;

	GetMetricByName(propName: string): number;

	GetProps(): PropVals;

	GetUBytesByName(propName: string): UBytes;

	ObjectValid(): number;

	SetIntByName(propName: string, setVal: number): void;

	SetMetricByName(propName: string, setVal: number): void;

	SetProps(setVal: PropVals): void;

	SetUBytesByName(propName: string, setVal: UBytes): void;

}

declare class Iterator {

	Delete(): number;

	GetNextIteratorItem(): PropVals;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class KeyCatalog {

	readonly IsDefault: boolean;

	IsStale: boolean;

	KeyCatalogClientName: string;

	readonly KeyCount: number;

	Name: string;

	readonly NextKeyCatalogInSession: KeyCatalog;

	NotLoaded: boolean;

	Source: string;

	SourceType: number;

	Delete(): number;

	DeleteAllKeyDefinitions(): void;

	GetAllKeyDefinitions(filterType: number): TypedVals;

	GetAllKeys(): Strings;

	GetKeyDefinition(key: string, keyField: number): TypedVal;

	GetProps(): PropVals;

	NewKeyDefinition(key: string, href: string, srcType: number, srcFile: string, flags: number): void;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	UpdateKeyDefinition(key: string, keyField: number, valuep: TypedVal): void;

}

declare class Line {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	readonly NumPoints: number;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	Points: Points;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Marker {

	readonly Element: Element;

	MarkerText: string;

	MarkerTypeId: MarkerType;

	readonly NextMarkerInDoc: Marker;

	OldTypeNum: int;

	readonly TextLoc: TextLoc;

	readonly Unique: number;

	UserString: string;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class MarkerType {

	InvariantName: string;

	Name: string;

	NextMarkerTypeInDoc: MarkerType;

	Public: boolean;

	readonly Required: boolean;

	Transient: boolean;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class MasterPage {

	Name: string;

	readonly PageFrame: UnanchoredFrame;

	readonly PageHeight: number;

	readonly PageNext: MasterPage;

	readonly PageNum: number;

	readonly PagePrev: MasterPage;

	readonly PageWidth: number;

	/**
	 * PageObject is any Page object i.e., BodyPage, MasterPage, ReferencePage, HiddenPage
	 */
	ApplyPageLayout(srcPage: PageObject): number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Math {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BasePointX: number;

	BasePointY: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	MathFullForm: string;

	MathSize: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TextLineType: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class MathML {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	MathMLApplyPgfStyle: number;

	MathMLComposeDpi: number;

	MathMLData: Strings;

	MathMLDpi: number;

	MathMLFontSize: number;

	MathMLInline: number;

	MathMLIsFixedSize: number;

	MathMLIsFlippedSideways: number;

	MathMLIsInverted: number;

	MathMLXmlData: string;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Menu {

	FirstMenuItemInMenu: object;

	Label: string;

	readonly MenuItemIsEnabled: number;

	readonly MenuType: number;

	readonly Name: string;

	NextMenuItemInMenu: object;

	readonly NextMenuItemInSession: object;

	PrevMenuItemInMenu: object;

	View: number;

	AddCommandToMenu(command: Command): number;

	AddMenuToMenu(menu: Menu): number;

	AnimateMenu(menuitem: object, sleep: number, realLabel: string, docOrBook: object, action: boolean): number;

	DefineAndAddCommand(cmdNum: number, name: string, label: string, shortcut: string): Command;

	DefineAndAddMenu(name: string, label: string): Menu;

	Delete(): number;

	GetProps(): PropVals;

	MenuItemInMenu(menuitem: MenuItemComponent, recursive: boolean): Menu;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class MenuItemSeparator {

	Label: string;

	readonly MenuItemIsEnabled: number;

	readonly Name: string;

	NextMenuItemInMenu: object;

	readonly NextMenuItemInSession: object;

	PrevMenuItemInMenu: object;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Pgf {

	AdjHyphens: number;

	AsianComposer: boolean;

	AutoNumChar: string;

	AutoNumString: string;

	BkColor: Color;

	BlockLines: number;

	BottomSeparator: string;

	Capitalization: number;

	CellBottomMargin: number;

	CellLeftMargin: number;

	CellMarginsFixed: number;

	CellRightMargin: number;

	CellTopMargin: number;

	CellVAlignment: number;

	ChangeBar: number;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	Direction: number;

	FirstIndent: number;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

	FontVariation: number;

	FontWeight: number;

	FormatOverride: number;

	HyphMinPrefix: number;

	HyphMinSuffix: number;

	HyphMinWord: number;

	Hyphenate: number;

	readonly InTextFrame: TextFrame;

	readonly InTextObj: object;

	KeepWithNext: number;

	KeepWithPrev: number;

	KernX: number;

	KernY: number;

	Language: number;

	Leading: number;

	LeftIndent: number;

	LetterSpace: number;

	LineSpacing: number;

	Locked: number;

	MaxJLetSpace: number;

	MaxJRomSpace: number;

	MaxSpace: number;

	MinJLetSpace: number;

	MinJRomSpace: number;

	MinSpace: number;

	Name: string;

	readonly NextPgfInDoc: Pgf;

	readonly NextPgfInFlow: Pgf;

	NextTag: string;

	NumAtEnd: number;

	readonly NumTabs: number;

	OptJLetSpace: number;

	OptJRomSpace: number;

	OptSpace: number;

	Overline: number;

	PairKern: number;

	PgfAlignment: number;

	PgfBoxColor: Color;

	PgfIsAutoNum: number;

	readonly PgfNumber: string;

	PgfSpellChecked: number;

	Placement: number;

	Position: number;

	readonly PrevPgfInFlow: Pgf;

	readonly ResolvedDirection: number;

	RightIndent: number;

	RunInSeparator: string;

	SpaceAbove: number;

	SpaceBelow: number;

	Spread: number;

	Start: number;

	Stretch: number;

	Strikethrough: number;

	Tabs: Tabs;

	TopSeparator: string;

	Underlining: number;

	readonly Unique: number;

	UseNextTag: number;

	UserString: string;

	YakumonoType: number;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class PgfFmt {

	AcrobatLevel: number;

	AdjHyphens: number;

	AsianComposer: boolean;

	AutoNumChar: string;

	AutoNumString: string;

	BkColor: Color;

	BlockLines: number;

	BottomSeparator: string;

	Capitalization: number;

	CellBottomMargin: number;

	CellLeftMargin: number;

	CellMarginsFixed: number;

	CellRightMargin: number;

	CellTopMargin: number;

	CellVAlignment: number;

	ChangeBar: number;

	Color: Color;

	CombinedFontFamily: CombinedFontDefn;

	Direction: number;

	FirstIndent: number;

	FontAngle: number;

	readonly FontEncodingName: string;

	FontFamily: number;

	FontPlatformName: string;

	FontPostScriptName: string;

	FontSize: number;

	FontVariation: number;

	FontWeight: number;

	HyphMinPrefix: number;

	HyphMinSuffix: number;

	HyphMinWord: number;

	Hyphenate: number;

	KeepWithNext: number;

	KeepWithPrev: number;

	KernX: number;

	KernY: number;

	Language: number;

	Leading: number;

	LeftIndent: number;

	LetterSpace: number;

	LineSpacing: number;

	MaxJLetSpace: number;

	MaxJRomSpace: number;

	MaxSpace: number;

	MinJLetSpace: number;

	MinJRomSpace: number;

	MinSpace: number;

	Name: string;

	readonly NextPgfFmtInDoc: PgfFmt;

	NextTag: string;

	NumAtEnd: number;

	readonly NumTabs: number;

	OptJLetSpace: number;

	OptJRomSpace: number;

	OptSpace: number;

	Overline: number;

	PDFStructureLevel: number;

	PairKern: number;

	PgfAlignment: number;

	PgfBoxColor: Color;

	PgfIsAutoNum: number;

	PgfMarkedForNamedDestination: number;

	Placement: number;

	Position: number;

	readonly ResolvedDirection: number;

	RightIndent: number;

	RunInSeparator: string;

	SpaceAbove: number;

	SpaceBelow: number;

	Spread: number;

	Start: number;

	Stretch: number;

	Strikethrough: number;

	Tabs: Tabs;

	TopSeparator: string;

	Underlining: number;

	UseBkColor: boolean;

	UseNextTag: number;

	UserString: string;

	YakumonoType: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Polygon {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	NumPoints: number;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	Points: Points;

	PolyIsBezier: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Polyline {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	NumPoints: number;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	readonly Points: Points;

	PolyIsBezier: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Rectangle {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	RectangleIsSmoothed: number;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class RefPage {

	Name: string;

	readonly PageFrame: UnanchoredFrame;

	readonly PageHeight: number;

	readonly PageNext: RefPage;

	readonly PageNum: number;

	readonly PagePrev: RefPage;

	readonly PageWidth: number;

	/**
	 * PageObject is any Page object i.e., BodyPage, MasterPage, ReferencePage, HiddenPage
	 */
	ApplyPageLayout(srcPage: PageObject): number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class RoundRect {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Radius: number;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Row {

	readonly Element: Element;

	readonly FirstCellInRow: Cell;

	readonly Height: number;

	InCond: Objects;

	readonly LocX: number;

	readonly LocY: number;

	readonly NextRowInTbl: Row;

	readonly PrevRowInTbl: Row;

	readonly RowIsShown: number;

	RowKeepWithNext: number;

	RowKeepWithPrev: number;

	RowMaxHeight: number;

	RowMinHeight: number;

	RowStart: number;

	readonly RowTbl: Tbl;

	readonly RowType: number;

	SepOverride: Color;

	StyleOverrides: number;

	UseSepOverride: number;

	UserString: string;

	readonly Width: number;

	AddRows(direction: number, numNewRows: number): number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Rubi {

	readonly Element: Element;

	readonly NextRubiInDoc: Rubi;

	readonly OyamojiTextRange: TextRange;

	readonly RubiElement: Element;

	readonly RubiTextRange: TextRange;

	readonly Unique: number;

	Delete(): number;

	GetProps(): PropVals;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class RulingFmt {

	Name: string;

	readonly NextRulingFmtInDoc: RulingFmt;

	Pen: number;

	RulingGap: number;

	RulingLines: number;

	RulingPenWidth: number;

	RulingSep: Color;

	UserString: string;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class app {

	ActiveBook: Book;

	ActiveDoc: Doc;

	ActiveView: string;

	AddMarkerTypeToStandardMarkers: string;

	AllowNewFileURL: boolean;

	ApplyFormatRules: number;

	AutoBackup: number;

	AutoSave: number;

	AutoSaveSeconds: number;

	readonly BinDir: string;

	CharacterReferencesOnXMLExport: boolean;

	readonly CurrentDir: string;

	CurrentMenuSet: number;

	DefaultKeyCatalog: KeyCatalog;

	DefaultVectorFormatForXMLExport: string;

	readonly DisplayName: string;

	Displaying: number;

	DoNotExportInvalidXML: boolean;

	DoNotGenerateErrorLog: number;

	DoPostXSLTValidationOnExport: boolean;

	DocOpenClientEncounteredErrors: number;

	DontShowWelcomeScreen: boolean;

	EddUpdateOn: boolean;

	EnableAutoSpellCheck: boolean;

	FMConsoleString: string;

	FirstCommandInSession: Command;

	readonly FirstKeyCatalogInSession: KeyCatalog;

	readonly FirstMenuItemInSession: object;

	readonly FirstOpenBook: Book;

	readonly FirstOpenDoc: Doc;

	readonly FontAngleNames: Strings;

	readonly FontFamilyAttributes: Ints;

	readonly FontFamilyNames: Strings;

	readonly FontVariationNames: Strings;

	readonly FontWeightNames: Strings;

	Gravity: number;

	GreekSize: number;

	readonly HelpDir: string;

	readonly HomeDir: string;

	readonly HostName: string;

	IconBarOn: number;

	readonly InitDir: string;

	InsetURL: boolean;

	IsFMRunningInTrialPeriod: boolean;

	IsFormViewEnabled: boolean;

	IsIconified: number;

	IsInFront: number;

	IsOnScreen: number;

	readonly IsTechnicalSuiteLicensed: number;

	readonly IsTempOpenSave: number;

	KeyCatalogWorkflow: number;

	Label: string;

	readonly Language: number;

	readonly MarkerNames: Strings;

	No3DInPDF: boolean;

	NoFlashInPDF: boolean;

	NoMultiMediaInPDF: boolean;

	OpenAndSaveXmlBookComponentDoc: boolean;

	OpenDir: string;

	readonly OperatingSystem: string;

	readonly Path: string;

	readonly Platform: string;

	ProcessNumber: number;

	readonly ProductFamily: string;

	ProductIsDemo: boolean;

	ProductIsStructured: boolean;

	readonly ProductName: string;

	Reformatting: number;

	RememberMissingFontNames: number;

	RemoveExtraWhiteSpacesOnXMLImport: boolean;

	RpcProgramNumber: number;

	RpcPropertyName: string;

	ScreenHeight: number;

	ScreenWidth: number;

	ScreenX: number;

	ScreenY: number;

	readonly SgmlDir: string;

	Snap: number;

	StackWarningLevel: number;

	readonly StructureDir: string;

	SuppressXMLParserWarnings: boolean;

	TechSuiteInternal: number;

	readonly TmpDir: string;

	UndoFDKRecording: boolean;

	readonly UserHomeDir: string;

	readonly UserLogin: string;

	readonly UserName: string;

	readonly UserSettingsDir: string;

	UserString: string;

	Validating: number;

	readonly VersionMajor: number;

	readonly VersionMinor: number;

	readonly VersionRevision: number;

	VisualCaretMovement: boolean;

	readonly WindowSystem: string;

	readonly XmlDir: string;

	XmlIsBook: boolean;

	Close(flags: number): number;

	GetNamedBook(name: string): Book;

	GetNamedCommand(name: string): Command;

	GetNamedMenu(name: string): Menu;

	GetNamedMenuItemSeparator(name: string): MenuItemSeparator;

	GetNamedObject(objType: number, name: string): object;

	GetProps(): PropVals;

	NewNamedBook(name: string): Book;

	NewNamedCommand(name: string): Command;

	NewNamedMenu(name: string): Menu;

	NewNamedMenuItemSeparator(name: string): MenuItemSeparator;

	NewNamedObject(objType: number, name: string): object;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class SubCol {

	readonly ContentHeight: number;

	readonly FirstAFrame: AFrame;

	readonly FirstCell: Cell;

	readonly FirstFn: Fn;

	readonly FirstPgf: Pgf;

	readonly FrameParent: TextFrame;

	readonly Height: number;

	readonly LastAFrame: AFrame;

	readonly LastCell: Cell;

	readonly LastFn: Fn;

	readonly LastPgf: Pgf;

	readonly LocX: number;

	readonly LocY: number;

	readonly NextSubCol: SubCol;

	readonly Overflowed: number;

	readonly ParentTextFrame: TextFrame;

	readonly PrevSubCol: SubCol;

	readonly Unique: number;

	UserString: string;

	readonly Width: number;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Tbl {

	readonly BottomRowSelection: Row;

	readonly ContentHeight: number;

	Direction: number;

	readonly Element: Element;

	readonly FirstColumnInSelection: Column;

	readonly FirstColumnInTbl: Column;

	readonly FirstPgf: Pgf;

	readonly FirstRowInTbl: Row;

	readonly FirstVisibleColumnInTbl: Column;

	readonly HighestLevelElement: Element;

	readonly LastColumnInSelection: Column;

	readonly LastColumnInTbl: Column;

	readonly LastPgf: Pgf;

	readonly LastRowInTbl: Row;

	readonly LastVisibleColumnInTbl: Column;

	readonly LeftColNum: number;

	Locked: number;

	readonly NextTblInDoc: Tbl;

	OrphanRows: number;

	readonly Overflowed: number;

	readonly ResolvedDirection: number;

	readonly RightColNum: number;

	TblAlignment: number;

	readonly TblBodyElement: Element;

	TblBodyFirstColor: Color;

	TblBodyFirstFill: number;

	TblBodyFirstPeriod: number;

	TblBodyNextColor: Color;

	TblBodyNextFill: number;

	TblBodyNextPeriod: number;

	TblBodyRowRuling: RulingFmt;

	TblBodyRowRulingPeriod: number;

	TblBodyShadeBy: number;

	TblBottomRuling: number;

	readonly TblCatalogEntry: number;

	TblCellBottomMargin: number;

	TblCellLeftMargin: number;

	TblCellRightMargin: number;

	TblCellTopMargin: number;

	TblColRuling: RulingFmt;

	TblColRulingPeriod: number;

	TblColWidths: Metrics;

	readonly TblElement: Element;

	readonly TblFooterElement: Element;

	TblHFColor: Color;

	TblHFFill: number;

	TblHFRowRuling: RulingFmt;

	TblHFSeparatorRuling: RulingFmt;

	readonly TblHeaderElement: Element;

	TblInLockedTi: boolean;

	TblLastBodyRuling: number;

	TblLeftIndent: number;

	TblLeftRuling: RulingFmt;

	readonly TblNumCols: number;

	readonly TblNumRows: number;

	TblNumbering: number;

	TblOtherBodyRowRuling: RulingFmt;

	TblOtherColRuling: RulingFmt;

	TblPlacement: number;

	TblRightIndent: number;

	TblRightRuling: RulingFmt;

	TblSpaceAbove: number;

	TblSpaceBelow: number;

	TblTag: string;

	readonly TblTitleElement: Element;

	TblTitleGap: number;

	TblTitlePosition: number;

	readonly TblTitleSelected: number;

	TblTopRuling: RulingFmt;

	readonly TblWidth: number;

	TextLoc: TextLoc;

	readonly TopRowSelection: Row;

	readonly Unique: number;

	UserString: string;

	AddCols(refColNum: number, direction: number, numNewCols: number): number;

	Delete(): number;

	DeleteCols(delColNum: number, numDelCols: number): number;

	DeleteRows(refRow: Row, numDelRows: number): number;

	GetProps(): PropVals;

	GetTableColumnByColNum(colNum: number): Column;

	MakeTblSelection(topRow: number, bottomRow: number, leftCol: number, rightCol: number): number;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class TblFmt {

	Direction: number;

	Name: string;

	readonly NextTblFmtInDoc: TblFmt;

	OrphanRows: number;

	readonly ResolvedDirection: number;

	TblAlignment: number;

	TblBodyFirstColor: Color;

	TblBodyFirstFill: number;

	TblBodyFirstPeriod: number;

	TblBodyNextColor: Color;

	TblBodyNextFill: number;

	TblBodyNextPeriod: number;

	TblBodyRowRuling: RulingFmt;

	TblBodyRowRulingPeriod: number;

	TblBodyShadeBy: number;

	TblBottomRuling: RulingFmt;

	TblCatalogEntry: number;

	TblCellBottomMargin: number;

	TblCellLeftMargin: number;

	TblCellRightMargin: number;

	TblCellTopMargin: number;

	TblColRuling: RulingFmt;

	TblColRulingPeriod: number;

	TblHFColor: Color;

	TblHFFill: number;

	TblHFRowRuling: RulingFmt;

	TblHFSeparatorRuling: RulingFmt;

	TblInitNumBodyRows: number;

	TblInitNumCols: number;

	TblInitNumFRows: number;

	TblInitNumHRows: number;

	TblLastBodyRuling: number;

	TblLeftIndent: number;

	TblLeftRuling: RulingFmt;

	TblNumbering: number;

	TblOtherBodyRowRuling: RulingFmt;

	TblOtherColRuling: RulingFmt;

	TblPlacement: number;

	TblRightIndent: number;

	TblRightRuling: RulingFmt;

	TblSpaceAbove: number;

	TblSpaceBelow: number;

	TblTag: string;

	TblTitleGap: number;

	TblTitlePosition: number;

	TblTopRuling: RulingFmt;

	UserString: string;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class TextFrame {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	ColGapWidth: number;

	Color: Color;

	ColumnsAreBalanced: number;

	Dash: Metrics;

	Fill: number;

	readonly FirstAFrame: AFrame;

	readonly FirstCell: Cell;

	readonly FirstFn: Fn;

	readonly FirstPgf: Pgf;

	readonly FirstSubCol: SubCol;

	readonly Flow: Flow;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsButton: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	readonly LastAFrame: AFrame;

	readonly LastCell: Cell;

	readonly LastFn: Fn;

	readonly LastPgf: Pgf;

	readonly LastSubCol: SubCol;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	NextTextFrameInFlow: TextFrame;

	NumColumns: number;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	PrevTextFrameInFlow: TextFrame;

	Runaround: number;

	RunaroundGap: number;

	SideHeadGap: number;

	SideHeadPlacement: number;

	SideHeadWidth: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class TextLine {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BasePointX: number;

	BasePointY: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Direction: number;

	Fill: number;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	Language: number;

	LineCap: number;

	LocX: number;

	LocY: number;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	readonly ResolvedDirection: number;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TextLineType: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class TiApiClient {

	ImportHint: string;

	LastUpdate: number;

	Name: string;

	readonly NextTiInDoc: object;

	readonly TextRange: TextRange;

	TiAutomaticUpdate: number;

	TiClientData: string;

	TiClientName: string;

	TiClientSource: string;

	TiClientType: string;

	TiFile: string;

	TiFileModDate: string;

	TiIsUnresolved: number;

	TiLocked: number;

	readonly TiMacEdition: number;

	readonly Unique: number;

	ConvertToText(): void;

	Delete(): number;

	DeletePropByName(propName: string): void;

	DeleteTextInsetContents(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	UpdateTextInset(): number;

}

declare class TiFlow {

	ImportHint: string;

	LastUpdate: number;

	Name: string;

	readonly NextTiInDoc: object;

	readonly TextRange: TextRange;

	TiAutomaticUpdate: number;

	TiFile: string;

	TiFileModDate: string;

	TiFlowName: string;

	TiFlowPageSpace: number;

	TiFormat: number;

	TiLocked: number;

	readonly TiMacEdition: number;

	TiMainFlow: number;

	TiRemoveOverrides: number;

	TiRemovePageBreaks: number;

	readonly Unique: number;

	ConvertToText(): void;

	Delete(): number;

	DeletePropByName(propName: string): void;

	DeleteTextInsetContents(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	UpdateTextInset(): number;

}

declare class TiText {

	ImportHint: string;

	LastUpdate: number;

	Name: string;

	readonly NextTiInDoc: object;

	readonly TextRange: TextRange;

	TiAutomaticUpdate: number;

	TiEOLisEOP: number;

	TiFile: string;

	TiFileModDate: string;

	TiLocked: number;

	readonly TiMacEdition: number;

	readonly TiTextEncoding: string;

	readonly Unique: number;

	ConvertToText(): void;

	Delete(): number;

	DeletePropByName(propName: string): void;

	DeleteTextInsetContents(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	UpdateTextInset(): number;

}

declare class TiTextTable {

	ImportHint: string;

	LastUpdate: number;

	Name: string;

	readonly NextTiInDoc: object;

	readonly TextRange: TextRange;

	TiAutomaticUpdate: number;

	TiByRows: number;

	TiFile: string;

	TiFileModDate: string;

	TiHeadersEmpty: number;

	TiLocked: number;

	readonly TiMacEdition: number;

	TiNumCols: number;

	TiNumHeaderRows: number;

	TiNumSeparators: number;

	TiSeparator: string;

	TiTblTag: string;

	readonly TiTextEncoding: string;

	readonly Unique: number;

	ConvertToText(): void;

	Delete(): number;

	DeletePropByName(propName: string): void;

	DeleteTextInsetContents(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

	UpdateTextInset(): number;

}

declare class UnanchoredFrame {

	Angle: number;

	ArrowBaseAngle: number;

	ArrowLength: number;

	ArrowScaleFactor: number;

	ArrowScaleHead: number;

	ArrowTipAngle: number;

	ArrowType: number;

	BorderWidth: number;

	Color: Color;

	Dash: Metrics;

	Fill: number;

	readonly FirstGraphicInFrame: object;

	readonly FirstGraphicInFrame: object;

	FrameParent: object;

	GraphicCantBeSelected: number;

	GraphicIsSelected: number;

	GroupParent: Group;

	HeadArrow: number;

	Height: number;

	HotspotCmdStr: string;

	HotspotTitle: string;

	IsHotspot: number;

	readonly LastGraphicInFrame: object;

	readonly LastGraphicInFrame: object;

	LineCap: number;

	LocX: number;

	LocY: number;

	Name: string;

	readonly NextGraphicInDoc: object;

	NextGraphicInFrame: object;

	readonly NextGraphicInGroup: object;

	readonly NextSelectedGraphicInDoc: object;

	ObjectAttributes: Strings;

	Overprint: number;

	readonly PageFramePage: object;

	Pen: number;

	PrevGraphicInFrame: object;

	readonly PrevGraphicInGroup: object;

	Runaround: number;

	RunaroundGap: number;

	StyleTag: string;

	TailArrow: number;

	TintPercent: number;

	readonly Unique: number;

	Width: number;

	ApplyFitToFrame(opcode: number): number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Var {

	readonly Element: Element;

	Locked: number;

	readonly NextVarInDoc: Var;

	readonly TextRange: TextRange;

	readonly Unique: number;

	UserString: string;

	VarFmt: VarFmt;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class VarFmt {

	Fmt: string;

	Name: string;

	readonly NextVarFmtInDoc: VarFmt;

	readonly SystemVar: number;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class XRef {

	readonly Element: Element;

	Locked: number;

	readonly NextXRefInDoc: XRef;

	readonly TextRange: TextRange;

	readonly Unique: number;

	UserString: string;

	XRefAltText: string;

	XRefClientName: string;

	XRefClientType: string;

	XRefFile: string;

	XRefFmt: XRefFmt;

	readonly XRefIsUnresolved: number;

	XRefSrcElemNonUniqueId: string;

	XRefSrcIsElem: number;

	XRefSrcText: string;

	Delete(): number;

	GetProps(): PropVals;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class XRefFmt {

	Fmt: string;

	Name: string;

	readonly NextXRefFmtInDoc: XRefFmt;

	Delete(): number;

	GetProps(): PropVals;

	ObjectValid(): number;

	SetProps(setVal: PropVals): void;

}

declare class Attribute {

	allow: number;

	name: string;

	valflags: number;

	values: Strings;

	constructor(name: string, values: Strings, valflags: number, allow: number);

}

declare class AttributeDef {

	attrType: number;

	choices: Strings;

	defValues: Strings;

	flags: number;

	name: string;

	rangeMax: string;

	rangeMin: string;

	required: number;

	constructor(name: string, required: number, flags: number, attrType: number, choices: Strings, defValues: Strings, rangeMin: string, rangeMax: string);

}

declare class AttributeEx {

	allow: number;

	name: string;

	originalValues: Strings;

	overriddenFlags: number;

	valflags: number;

	values: Strings;

	constructor(name: string, values: Strings, originalValues: Strings, valflags: number, allow: number, overriddenFlags: number);

}

declare class CMSCheckinParam {

	checkinComment: string;

	description: string;

	makeThisCurrentVersion: number;

	version: number;

	versionLabel: string;

	constructor(version: number, versionLabel: string, description: string, checkinComment: string, makeThisCurrentVersion: number);

}

declare class CMSDeleteParam {

	deleteAllDependents: number;

	deleteAllVersion: number;

	constructor(deleteAllVersion: number, deleteAllDependents: number);

}

declare class CMSInfo {

	cmsName: string;

	userFields: Strings;

	userLoginUi: number;

	constructor(cmsName: string, userFields: Strings, userLoginUi: number);

}

declare class CMSMenuItem {

	flags: number;

	id: number;

	name: string;

	constructor(id: number, name: string, flags: number);

}

declare class CMSProperty {

	isEditable: number;

	isMultiValue: number;

	label: string;

	prop: number;

	values: TypedVals;

	constructor(prop: number, label: string, isMultiValue: number, isEditable: number, values: TypedVals);

}

declare class CMSResult {

	cmsItems: Objects;

	message: sting;

	opResult: number;

	status: number;

	constructor(status: number, opResult: number, message: string, cmsItems: Objects);

}

declare class CombinedFont {

	angle: number;

	combinedFont: CombinedFontDefn;

	variation: number;

	weight: number;

	constructor(combinedFont: CombinedFontDefn, variation: number, weight: number, angle: number);

}

declare class CompareRet {

	comp: Doc;

	sum: Doc;

	constructor(sum: Doc, comp: Doc);

}

declare class ElementCatalogEntry {

	flags: number;

	obj: ElementDef;

	constructor(obj: ElementDef, flags: number);

}

declare class ElementLoc {

	child: Element;

	offset: number;

	parent: Element;

	constructor(parent: Element, child: Element, offset: number);

}

declare class ElementRange {

	beg: ElementLoc;

	end: ElementLoc;

	constructor(beg: ElementLoc, end: ElementLoc);

}

declare class FilterArgs {

	args: Strings;

	binname: string;

	clname: string;

	infile: string;

	informat: string;

	outfile: string;

	outformat: string;

	constructor(infile: string, outfile: string, clname: string, informat: string, outformat: string, binname: string, args: Strings);

}

declare class Font {

	angle: number;

	family: number;

	variation: number;

	weight: number;

	constructor(family: number, variation: number, weight: number, angle: number);

}

declare class FontEnc {
}

declare class IdValuePair {

	id: number;

	value: Value;

	constructor(id: number, value: Value);

}

declare class Point {

	x: number;

	y: number;

	constructor(x: number, y: number);

}

declare class PropIdent {

	name: string;

	num: number;

	constructor(num: number, name: string);

}

declare class PropVal {

	propIdent: PropIdent;

	propVal: TypedVal;

	constructor(propIdent: PropIdent, propVal: TypedVal);

}

declare class Tab {

	decimal: number;

	leader: string;

	type: number;

	x: number;

	constructor(x: number, type: number, leader: string, decimal: number);

}

declare class TemplateData {

	templateDataAttrs: strings;

	templateDataType: TemplateDataType;

	constructor(templateDataType: TemplateDataType, templateDataAttrs: strings);

}

declare class TextItem {

	dataType: number;

	idata: number;

	obj: any;

	offset: number;

	sdata: string;

}

declare class TextLoc {

	obj: any;

	offset: number;

	constructor(obj: any, offset: number);

}

declare class TextRange {

	beg: TextLoc;

	end: TextLoc;

	constructor(beg: TextLoc, end: TextLoc);

}

declare class TypedVal {

	adsval: AttributeDefs;

	asval: Attribute;

	asvalEx: AttributeEx;

	csval: ElementCatalogEntries;

	isval: Ints;

	ival: number;

	msval: Metrics;

	obj: any;

	osval: Objects;

	psval: Points;

	ssval: Strings;

	sval: string;

	tlval: TextLoc;

	trval: TextRange;

	tsval: Tabs;

	uisval: UInts;

	valType: number;

	valsval: TypedVals;

}

/**
 * An Array of AttributeDef objects with integer indexing and a length property.
 */
declare class AttributeDefs {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: AttributeDefs): AttributeDefs;

	/**
	 * Removes the last element from the array.
	 */
	pop(): AttributeDef;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: AttributeDef): number;

}

/**
 * An Array of Attribute objects with integer indexing and a length property.
 */
declare class Attributes {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Attributes): Attributes;

	/**
	 * Removes the last element from the array.
	 */
	pop(): Attribute;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: Attribute): number;

}

/**
 * An Array of AttributeEx objects with integer indexing and a length property.
 */
declare class AttributesEx {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: AttributesEx): AttributesEx;

	/**
	 * Removes the last element from the array.
	 */
	pop(): AttributeEx;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: AttributeEx): number;

}

/**
 * An Array of CMSProperty objects with integer indexing and a length property.
 */
declare class CMSProperties {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: CMSProperties): CMSProperties;

	/**
	 * Removes the last element from the array.
	 */
	pop(): CMSProperty;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: CMSProperty): number;

}

/**
 * An Array of CombinedFont objects with integer indexing and a length property.
 */
declare class CombinedFonts {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: CombinedFonts): CombinedFonts;

	/**
	 * Removes the last element from the array.
	 */
	pop(): CombinedFont;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: CombinedFont): number;

}

/**
 * An Array of ElementCatalogEntry objects with integer indexing and a length property.
 */
declare class ElementCatalogEntries {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: ElementCatalogEntries): ElementCatalogEntries;

	/**
	 * Removes the last element from the array.
	 */
	pop(): ElementCatalogEntry;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: ElementCatalogEntry): number;

}

/**
 * An Array of Font objects with integer indexing and a length property.
 */
declare class Fonts {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Fonts): Fonts;

	/**
	 * Removes the last element from the array.
	 */
	pop(): Font;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: Font): number;

}

/**
 * An Array of IdValuePair objects with integer indexing and a length property.
 */
declare class IdValuePairs {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: IdValuePairs): IdValuePairs;

	/**
	 * Removes the last element from the array.
	 */
	pop(): IdValuePair;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: IdValuePair): number;

}

/**
 * An Array of int objects with integer indexing and a length property.
 */
declare class Ints {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Ints): Ints;

	/**
	 * Removes the last element from the array.
	 */
	pop(): number;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: number): number;

}

/**
 * An Array of int objects with integer indexing and a length property.
 */
declare class Metrics {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Metrics): Metrics;

	/**
	 * Removes the last element from the array.
	 */
	pop(): number;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: number): number;

}

/**
 * An Array of Point objects with integer indexing and a length property.
 */
declare class Points {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Points): Points;

	/**
	 * Removes the last element from the array.
	 */
	pop(): Point;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: Point): number;

}

/**
 * An Array of PropVal objects with integer indexing and a length property.
 */
declare class PropVals {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: PropVals): PropVals;

	/**
	 * Removes the last element from the array.
	 */
	pop(): PropVal;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: PropVal): number;

}

/**
 * An Array of string objects with integer indexing and a length property.
 */
declare class Strings {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Strings): Strings;

	/**
	 * Removes the last element from the array.
	 */
	pop(): string;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: string): number;

}

/**
 * An Array of Tab objects with integer indexing and a length property.
 */
declare class Tabs {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: Tabs): Tabs;

	/**
	 * Removes the last element from the array.
	 */
	pop(): Tab;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: Tab): number;

}

/**
 * An Array of TemplateData objects with integer indexing and a length property.
 */
declare class TemplateDatas {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: TemplateDatas): TemplateDatas;

	/**
	 * Removes the last element from the array.
	 */
	pop(): TemplateData;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: TemplateData): number;

}

/**
 * An Array of TextItem objects with integer indexing and a length property.
 */
declare class TextItems {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: TextItems): TextItems;

	/**
	 * Removes the last element from the array.
	 */
	pop(): TextItem;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: TextItem): number;

}

/**
 * An Array of TypedVal objects with integer indexing and a length property.
 */
declare class TypedVals {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: TypedVals): TypedVals;

	/**
	 * Removes the last element from the array.
	 */
	pop(): TypedVal;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: TypedVal): number;

}

/**
 * An Array of uint objects with integer indexing and a length property.
 */
declare class UBytes {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: UBytes): UBytes;

	/**
	 * Removes the last element from the array.
	 */
	pop(): number;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: number): number;

}

/**
 * An Array of uint objects with integer indexing and a length property.
 */
declare class UInts {
	/**
	 * The length of the array
	 */
	length: number;

	/**
	 * Returns a new array created by concatenating the given values to the end of the original array.
	 * The original array is unchanged.If an array is provided as a parameter to concat(), each of its elements are appended as separate array elements at the end of the new array.Returns a new array, the result of concatenation the given values to the end of the original array.
	 * @param value Any number of values to be added to the end of the array. Can also be arrays.
	 */
	concat(value: UInts): UInts;

	/**
	 * Removes the last element from the array.
	 */
	pop(): number;

	/**
	 * Places value onto the end of the array.
	 * Returns the new length of the array.
	 */
	push(value: number): number;

}

declare enum Constants {

	EXCLUDE_CONREF_DEPENDENCIES = 0x20,

	EXCLUDE_GRAPHICS_DEPENDENCIES = 0x01,

	EXCLUDE_NONE = 0x10,

	EXCLUDE_OLE_DEPENDENCIES = 0x04,

	EXCLUDE_TEXT_INSET_DEPENDENCIES = 0x02,

	EXCLUDE_XREF_DEPENDENCIES = 0x08,

	FA_CMSAdvancedSearch = FA_CMSAdvancedSearch,

	FA_CMSBuildContextMenu = FA_CMSBuildContextMenu,

	FA_CMSCloseConnection = FA_CMSCloseConnection,

	FA_CMSCommandMax = FA_CMSCommandMax,

	FA_CMSCommandMin = FA_CMSCommandMin,

	FA_CMSCreateConnMgrUI = FA_CMSCreateConnMgrUI,

	FA_CMSCreateConnection = FA_CMSCreateConnection,

	FA_CMSGetCommandMaxOpCode = FA_CMSGetCommandMaxOpCode,

	FA_CMSGetItemFromPath = FA_CMSGetItemFromPath,

	FA_CMSGetItems = FA_CMSGetItems,

	FA_CMSGetPropertyMaxOpCode = FA_CMSGetPropertyMaxOpCode,

	FA_CMSIsValidCommand = FA_CMSIsValidCommand,

	FA_CMSObjectCancelCheckout = FA_CMSObjectCancelCheckout,

	FA_CMSObjectCheckin = FA_CMSObjectCheckin,

	FA_CMSObjectCheckout = FA_CMSObjectCheckout,

	FA_CMSObjectDelete = FA_CMSObjectDelete,

	FA_CMSObjectDownload = FA_CMSObjectDownload,

	FA_CMSObjectDownloadForOpen = FA_CMSObjectDownloadForOpen,

	FA_CMSObjectDownloadItem = FA_CMSObjectDownloadItem,

	FA_CMSObjectEdit = FA_CMSObjectEdit,

	FA_CMSObjectGetChildren = FA_CMSObjectGetChildren,

	FA_CMSObjectIsSame = FA_CMSObjectIsSame,

	FA_CMSObjectOpenReadOnly = FA_CMSObjectOpenReadOnly,

	FA_CMSObjectRefresh = FA_CMSObjectRefresh,

	FA_CMSObjectShowCheckOutFiles = FA_CMSObjectShowCheckOutFiles,

	FA_CMSObjectShowDependents = FA_CMSObjectShowDependents,

	FA_CMSObjectShowProperties = FA_CMSObjectShowProperties,

	FA_CMSObjectShowVersion = FA_CMSObjectShowVersion,

	FA_CMSObjectUploadFile = FA_CMSObjectUploadFile,

	FA_CMSObjectUploadFolder = FA_CMSObjectUploadFolder,

	FA_CMSReview = FA_CMSReview,

	FA_CMSSetRootObject = FA_CMSSetRootObject,

	FA_CMSSimpleSearch = FA_CMSSimpleSearch,

	FA_COMPONENT_DEMOTE = 4,

	FA_COMPONENT_MOVEDOWN = 2,

	FA_COMPONENT_MOVEUP = 1,

	FA_COMPONENT_PROMOTE = 3,

	FA_Init_DocReport = 4,

	FA_Init_First = 1,

	FA_Init_Subsequent = 2,

	FA_Init_TakeControl = 3,

	FA_Note_AI_Supported_File = 137,

	FA_Note_Alert = 85,

	FA_Note_AssignId = 115,

	FA_Note_BackToUser = 34,

	FA_Note_BodyPageAdded = 50,

	FA_Note_BodyPageDeleted = 51,

	FA_Note_CMS_PostCheckOutItem = 164,

	FA_Note_CMS_PostOpenItem = 166,

	FA_Note_CMS_PreCheckOutItem = 163,

	FA_Note_CMS_PreOpenItem = 165,

	FA_Note_ClientCall = 13,

	FA_Note_ConsoleMessage = 88,

	FA_Note_CursorChange = 91,

	FA_Note_DITAOptions = 116,

	FA_Note_Dialog = 84,

	FA_Note_Dialog_Create = 127,

	FA_Note_DirtyBook = 25,

	FA_Note_DirtyDoc = 12,

	FA_Note_DisplayClientTiDialog = 35,

	FA_Note_DisplayClientXRefDialog = 108,

	FA_Note_ECMInternal = 66,

	FA_Note_Enable_Disable_DITA_Menu_Commands = 126,

	FA_Note_EnumeratedComponent = 145,

	FA_Note_FileOpen = 94,

	FA_Note_FilterFileToFile = 75,

	FA_Note_FilterIn = 14,

	FA_Note_FilterOut = 15,

	FA_Note_FontSubstitution = 92,

	FA_Note_Frame_Idle_State = 162,

	FA_Note_GenerateFM = 112,

	FA_Note_GraphicPropChanged = 159,

	FA_Note_Help = 89,

	FA_Note_HtmlNotify = 170,

	FA_Note_In_App_Message = 160,

	FA_Note_InsertConRef = 111,

	FA_Note_InsertTopicRef = 110,

	FA_Note_IsCommandEnabled = 148,

	FA_Note_LoadKeyCatalog = 143,

	FA_Note_MATHML_CHANGE_NSPREFIX = 156,

	FA_Note_MATHML_CHANGE_XML_PROPERTY = 168,

	FA_Note_MATHML_DblClicked = 151,

	FA_Note_MATHML_Deselected = 150,

	FA_Note_MATHML_GenerateImage = 152,

	FA_Note_MATHML_PopulateObj = 153,

	FA_Note_MATHML_Selected = 149,

	FA_Note_NewBookmapFile = 118,

	FA_Note_NewConceptFile = 121,

	FA_Note_NewDitamapFile = 117,

	FA_Note_NewGlossEntryFile = 123,

	FA_Note_NewReferenceFile = 122,

	FA_Note_NewTaskFile = 120,

	FA_Note_NewTopicFile = 119,

	FA_Note_Not_AI_Supported_File = 136,

	FA_Note_Not_RSC_Supported_File = 103,

	FA_Note_Not_SWF_File = 125,

	FA_Note_Not_U3DCommand = 102,

	FA_Note_Num = 171,

	FA_Note_OpenAllTopicrefs = 113,

	FA_Note_Open_Dtd = 132,

	FA_Note_Open_EDD_For_App = 134,

	FA_Note_Open_Schema = 133,

	FA_Note_Palette = 86,

	FA_Note_PostActiveDocChange = 105,

	FA_Note_PostAutoSaveDoc = 33,

	FA_Note_PostBookComponentOpen = 77,

	FA_Note_PostChangeElement = 55,

	FA_Note_PostCopyElement = 61,

	FA_Note_PostCreateMML = 155,

	FA_Note_PostDistill = 74,

	FA_Note_PostDragElement = 59,

	FA_Note_PostExport = 68,

	FA_Note_PostFileType = 10,

	FA_Note_PostFunction = 43,

	FA_Note_PostGenerate = 79,

	FA_Note_PostGoToXrefSrc = 81,

	FA_Note_PostHypertext = 47,

	FA_Note_PostImport = 39,

	FA_Note_PostImportElemDefs = 65,

	FA_Note_PostInlineTypeIn = 70,

	FA_Note_PostInsertElement = 53,

	FA_Note_PostMouseCommand = 45,

	FA_Note_PostOpenBook = 17,

	FA_Note_PostOpenBookMIF = 19,

	FA_Note_PostOpenDoc = 2,

	FA_Note_PostOpenMIF = 4,

	FA_Note_PostOpenSGML = 83,

	FA_Note_PostOpenXML = 96,

	FA_Note_PostPrint = 49,

	FA_Note_PostPublishDitamap = 140,

	FA_Note_PostQuitBook = 41,

	FA_Note_PostQuitDoc = 40,

	FA_Note_PostQuitSession = 27,

	FA_Note_PostRevertBook = 31,

	FA_Note_PostRevertDoc = 29,

	FA_Note_PostSaveAsPDFDialog = 72,

	FA_Note_PostSaveBook = 21,

	FA_Note_PostSaveBookMIF = 23,

	FA_Note_PostSaveDoc = 6,

	FA_Note_PostSaveMIF = 8,

	FA_Note_PostSaveSGML = 100,

	FA_Note_PostSaveXML = 98,

	FA_Note_PostSetAttrValue = 63,

	FA_Note_PostSetPropertyValue = 135,

	FA_Note_PostSwitchView = 147,

	FA_Note_PostUpdateXRefs = 107,

	FA_Note_PostWrapElement = 57,

	FA_Note_Poster_Applied = 138,

	FA_Note_PreAutoSaveDoc = 32,

	FA_Note_PreBookComponentOpen = 76,

	FA_Note_PreChangeElement = 54,

	FA_Note_PreCopyElement = 60,

	FA_Note_PreCreateMML = 154,

	FA_Note_PreDistill = 73,

	FA_Note_PreDragElement = 58,

	FA_Note_PreExport = 67,

	FA_Note_PreFileType = 9,

	FA_Note_PreFunction = 42,

	FA_Note_PreGenerate = 78,

	FA_Note_PreGoToXrefSrc = 80,

	FA_Note_PreHypertext = 46,

	FA_Note_PreImport = 38,

	FA_Note_PreImportElemDefs = 64,

	FA_Note_PreInlineTypeIn = 69,

	FA_Note_PreInsertElement = 52,

	FA_Note_PreMouseCommand = 44,

	FA_Note_PreOpenBook = 16,

	FA_Note_PreOpenBookMIF = 18,

	FA_Note_PreOpenDoc = 1,

	FA_Note_PreOpenMIF = 3,

	FA_Note_PreOpenSGML = 82,

	FA_Note_PreOpenXML = 95,

	FA_Note_PrePrint = 48,

	FA_Note_PrePublishDitamap = 139,

	FA_Note_PreQuitBook = 24,

	FA_Note_PreQuitDoc = 11,

	FA_Note_PreQuitSession = 26,

	FA_Note_PreRevertBook = 30,

	FA_Note_PreRevertDoc = 28,

	FA_Note_PreSaveAsPDFDialog = 71,

	FA_Note_PreSaveBook = 20,

	FA_Note_PreSaveBookMIF = 22,

	FA_Note_PreSaveDoc = 5,

	FA_Note_PreSaveMIF = 7,

	FA_Note_PreSaveSGML = 99,

	FA_Note_PreSaveXML = 97,

	FA_Note_PreSetAttrValue = 62,

	FA_Note_PreSetPropertyValue = 158,

	FA_Note_PreSwitchView = 146,

	FA_Note_PreUpdateXRefs = 106,

	FA_Note_PreWrapElement = 56,

	FA_Note_QuitModelessDialog = 109,

	FA_Note_RSC_Supported_File = 104,

	FA_Note_RTL_NumberUtility = 167,

	FA_Note_ReLoadKeyCatalog = 144,

	FA_Note_Read_Struct_App = 130,

	FA_Note_Reset_Client_State = 161,

	FA_Note_SWF_File = 124,

	FA_Note_SetAttrValue = 128,

	FA_Note_SetUniqueAttr = 157,

	FA_Note_Struct_Wizard = 131,

	FA_Note_ToolBar = 87,

	FA_Note_U3DCommand = 101,

	FA_Note_URL = 90,

	FA_Note_UndoCheckpoint = 93,

	FA_Note_UpdateAllClientTi = 36,

	FA_Note_UpdateClientTi = 37,

	FA_Note_UpdateDITAReference = 141,

	FA_Note_UpdateDITAReferences = 142,

	FA_Note_UpdateRefs = 114,

	FA_Note_UpdateRefs_On_Save = 129,

	FA_Note_WelcomeScreen_Command = 169,

	FDK_LIBRARY_VERSION = 0x15000000,

	FE_AcceptRejectCalledOnWrongPreviewState = -110,

	FE_AsianSystemRequired = -90,

	FE_BadBaseColor = -97,

	FE_BadBookId = -66,

	FE_BadCompPath = -68,

	FE_BadCompare = -35,

	FE_BadContainer = -104,

	FE_BadDelete = -17,

	FE_BadDocId = -2,

	FE_BadElementDefId = -28,

	FE_BadElementId = -29,

	FE_BadElementSelection = -69,

	FE_BadFamilyName = -98,

	FE_BadFileType = -83,

	FE_BadFilterType = -184,

	FE_BadInkName = -99,

	FE_BadInsertPos = -65,

	FE_BadKey = -177,

	FE_BadKeyField = -178,

	FE_BadMenuBar = -77,

	FE_BadName = -33,

	FE_BadNew = -23,

	FE_BadNewFrame = -14,

	FE_BadNewGroup = -15,

	FE_BadNewSibling = -16,

	FE_BadNotificationNum = -30,

	FE_BadObjId = -3,

	FE_BadOperation = -27,

	FE_BadPageDelete = -18,

	FE_BadParameter = -43,

	FE_BadPropNum = -4,

	FE_BadPropType = -5,

	FE_BadRange = -36,

	FE_BadRefElementId = -64,

	FE_BadRefFlowId = -62,

	FE_BadSaveFileName = -50,

	FE_BadSelectionForOperation = -59,

	FE_BadShortcut = -76,

	FE_BadTemplatePath = -105,

	FE_BadValue = -179,

	FE_BadXRefSrcDocId = -103,

	FE_BadXmlApplication = -106,

	FE_BookComponentAlreadyHasTrackedEdits = -109,

	FE_BookStructured = -61,

	FE_BookUnStructured = -67,

	FE_Busy = -88,

	FE_CMSBadCommandId = -116,

	FE_CMSBadItemContainerType = -121,

	FE_CMSBadItemFileType = -119,

	FE_CMSBadItemType = -120,

	FE_CMSBadObjectId = -114,

	FE_CMSBadSessionId = -113,

	FE_CMSFailedCancelCheckout = -153,

	FE_CMSFailedCheckin = -152,

	FE_CMSFailedCheckout = -151,

	FE_CMSFailedDelete = -154,

	FE_CMSFailedDownloadObject = -157,

	FE_CMSFailedGetItemFrompath = -158,

	FE_CMSFailedLogin = -150,

	FE_CMSFailedLogout = -159,

	FE_CMSFailedOpenFile = -155,

	FE_CMSFailedUploadObject = -156,

	FE_CMSIsValidCMSCommand = -123,

	FE_CMSNameAlreadyRegistered = -112,

	FE_CMSObjectCreationFailed = -117,

	FE_CMSRootObjectExists = -118,

	FE_CMSSessionCreationFailed = -122,

	FE_CMSSessionFailed = -115,

	FE_Canceled = -44,

	FE_CanceledByClient = -86,

	FE_CannotAddEditExpressionsInOneOrMoreComponents = -205,

	FE_CantSmooth = -38,

	FE_CantUpdateMacEdition = -85,

	FE_CircularReference = -81,

	FE_CompareTypes = -34,

	FE_Disabled = -196,

	FE_DocAlreadyHasTrackedEdits = -108,

	FE_DocModified = -8,

	FE_DupName = -32,

	FE_EmptyTextObject = -87,

	FE_ExpressionNotFound = -204,

	FE_FDKUndoNotAllowed = -193,

	FE_FailedExportedFileInvalid = -111,

	FE_FailedState = -45,

	FE_FailedToApplyOnOneOrMoreComponents = -206,

	FE_FileClosedByClient = -70,

	FE_FilterFailed = -89,

	FE_FlowStructured = -63,

	FE_GenRuleAmbiguous = -55,

	FE_GenRuleConnectorExpected = -57,

	FE_GenRuleItemExpected = -51,

	FE_GenRuleLeftBracketExpected = -53,

	FE_GenRuleMixedConnectors = -52,

	FE_GenRuleRightBracketExpected = -54,

	FE_GenRuleSyntaxError = -56,

	FE_GraphicInLockedTi = -207,

	FE_GroupSelect = -9,

	FE_HiddenPage = -40,

	FE_InternalErrorFailedToWriteInsets = -94,

	FE_InvAttribute = -80,

	FE_InvAttributeDef = -79,

	FE_InvalidAttrExpr = -107,

	FE_InvalidEmailId = -201,

	FE_InvalidFileName = -200,

	FE_InvalidFilePath = -199,

	FE_InvalidPhoneNumber = -198,

	FE_InvalidSize = -202,

	FE_InvalidString = -58,

	FE_KeyCatalogIsStale = -181,

	FE_KeyCatalogNotLoaded = -180,

	FE_KeyCatalogNotSpecified = -185,

	FE_KeyDefinitionAlreadyExists = -183,

	FE_KeyDefinitionDoesNotExist = -182,

	FE_LanguageNotAvailable = -96,

	FE_MissingFile = -84,

	FE_NameNotFound = -20,

	FE_NoColorFamily = -92,

	FE_NoSuchFlow = -82,

	FE_NonDITADocument = -186,

	FE_NotApiCommand = -74,

	FE_NotBodyPage = -24,

	FE_NotBookComponent = -26,

	FE_NotCommand = -73,

	FE_NotFound = -95,

	FE_NotFrame = -12,

	FE_NotGraphic = -11,

	FE_NotGroup = -13,

	FE_NotInMenu = -75,

	FE_NotMenu = -72,

	FE_NotPgf = -25,

	FE_NotPgfOrFlow = -71,

	FE_NotTextFrame = -39,

	FE_NotTextObject = -41,

	FE_OffsetNotFound = -21,

	FE_OutOfRange = -7,

	FE_OverWriteError = -203,

	FE_PageFrame = -37,

	FE_PropNotSet = -78,

	FE_ReadOnly = -6,

	FE_ReservedColor = -100,

	FE_SomeUnresolved = -22,

	FE_StringTooLong = -93,

	FE_Success = 0,

	FE_SystemError = -42,

	FE_TableInLockedTi = -101,

	FE_TintedColor = -91,

	FE_Transport = -1,

	FE_TypeUnNamed = -19,

	FE_UnLicensed = -197,

	FE_UpdateDITAReferenceFailed = -192,

	FE_UpdateDITAReferenceFailedCannotConvertToFMObject = -191,

	FE_UpdateDITAReferenceFailedCannotFindReferencedFile = -189,

	FE_UpdateDITAReferenceFailedCannotOpenReferencedFile = -190,

	FE_UpdateDITAReferenceFailedCannotResolveReference = -188,

	FE_UpdateDITAReferenceFailedErrorImportingReferencedFile = -208,

	FE_UpdateDITAReferenceFailedInvalidElementType = -187,

	FE_ViewOnly = -49,

	FE_WantsCustom = -46,

	FE_WantsLandscape = -47,

	FE_WantsPortrait = -48,

	FE_WithinFrame = -10,

	FE_WrongProduct = -60,

	FE_WrongView = -194,

	FE_WrongWindow = -195,

	FE_XRefUnresolved = -102,

	FE_XrefTitleNotFound = -209,

	FF_ALERT_CANCEL_DEFAULT = 1,

	FF_ALERT_CONTINUE_NOTE = 2,

	FF_ALERT_CONTINUE_WARN = 3,

	FF_ALERT_DNS_OK = 7,

	FF_ALERT_NO_DEFAULT = 5,

	FF_ALERT_OK_DEFAULT = 0,

	FF_ALERT_YES_DEFAULT = 4,

	FF_ALERT_YES_NO_CANCEL = 6,

	FF_ALT_KEY = 0x0004,

	FF_ATTACH_ALL = (0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010),

	FF_ATTACH_BORDER_PAGENUM = 0x0002,

	FF_ATTACH_BORDER_PAGEUPDOWN = 0x0008,

	FF_ATTACH_BORDER_RIGHTICONS = 0x0010,

	FF_ATTACH_BORDER_STATUS = 0x0001,

	FF_ATTACH_BORDER_ZOOM = 0x0004,

	FF_ATTRDISP = 86,

	FF_ATTRDISP_ALL = 87,

	FF_ATTR_SEL = 89,

	FF_BOR_EXT = 72,

	FF_BOR_SEL = 71,

	FF_BUBBLE_CONTEXT = 49,

	FF_BUBBLE_COPY = 55,

	FF_BUBBLE_EXT = 54,

	FF_BUBBLE_EXT_CONTEXT = 50,

	FF_BUBBLE_SEL = 53,

	FF_CELLS_RES = 25,

	FF_CELL_EXT = 22,

	FF_CELL_RES = 24,

	FF_CELL_SEL = 21,

	FF_CLEAR_SEL = 0,

	FF_CLOSE_MODIFIED = 1,

	FF_CMD_KEY = 0x0010,

	FF_CMP_ATTRIBUTES = 0x20,

	FF_CMP_CHANGE_BARS = 0x02,

	FF_CMP_COMPKIT = 0x10,

	FF_CMP_HYPERLINKS = 0x04,

	FF_CMP_SUMKIT = 0x08,

	FF_CMP_SUMMARY_ONLY = 0x01,

	FF_COLLAPSE_ALL = 57,

	FF_COLLAPSE_ELEM = 56,

	FF_CONTEXT_DRAG = 73,

	FF_CONTEXT_DRAGTXT = 4,

	FF_CONTEXT_DRAG_EXT = 74,

	FF_CONTEXT_MENU = 33,

	FF_CONTROL_KEY = 0x0002,

	FF_COPY_TO_CLIP = 13,

	FF_CUT_TBL_CELLS = 0x0002,

	FF_Custom_FirstPageLeft = 2,

	FF_Custom_FirstPageRight = 1,

	FF_Custom_SingleSided = 0,

	FF_DIALOG_ALL = 0xFFFF,

	FF_DIALOG_INSET_POD = 0x01,

	FF_DITAUpdateAllConrefs = 0x01,

	FF_DITAUpdateAllLinks = 0x04,

	FF_DITAUpdateAllReferences = (0x01 | 0x02 | 0x04 | 0x08 | 0x10),

	FF_DITAUpdateAllTopicrefs = 0x08,

	FF_DITAUpdateAllTopicsetrefs = 0x10,

	FF_DITAUpdateAllXrefs = 0x02,

	FF_DONT_APPLY_ALL_ROWS = 0x0040,

	FF_DONT_DELETE_HIDDEN_TEXT = 0x0004,

	FF_DUPLICATE_KEY_DEFINITION = 0x01,

	FF_EDIT_ATTRIBUTE = 88,

	FF_ELEMENT_CONTEXT = 47,

	FF_ELEMENT_EXT = 52,

	FF_ELEMENT_EXT_CONTEXT = 48,

	FF_ELEMENT_SEL = 51,

	FF_FIND_BACKWARDS = 0x08,

	FF_FIND_CONSIDER_CASE = 0x01,

	FF_FIND_USE_REGEX = 0x10,

	FF_FIND_USE_WILDCARDS = 0x04,

	FF_FIND_WHOLE_WORD = 0x02,

	FF_FOUND_IN_REFERENCED_FILE = 0x02,

	FF_HYPERTEXT = 41,

	FF_IED_DELETE_EMPTY_PAGES = 0x0010,

	FF_IED_DO_NOT_IMPORT_EDD = 0x0004,

	FF_IED_DO_NOT_IMPORT_STRUCTAPP = 0x0040,

	FF_IED_NO_NOTIFY = 0x0008,

	FF_IED_REMOVE_BOOK_INFO = 0x0002,

	FF_IED_REMOVE_OVERRIDES = 0x0001,

	FF_IMAGE_BACKGROUND = 0x0001,

	FF_IMAGE_CLIP = 0x0004,

	FF_IMAGE_MASTER = 0x0002,

	FF_IMAGE_NOTRIM = 0x0008,

	FF_IMAGE_PAGEFRAME = 0x000F,

	FF_INSERT_BELOW_RIGHT = 0x0008,

	FF_INTERACTIVE = 0x0001,

	FF_INVALID_KEY = 0x04,

	FF_OBJ_CROTATE = 67,

	FF_OBJ_EXT = 63,

	FF_OBJ_EXT_BOR = 64,

	FF_OBJ_Q_COPY = 65,

	FF_OBJ_ROTATE = 66,

	FF_OBJ_SEL = 62,

	FF_OPEN_BOOK_COMP = 58,

	FF_PASTE_CLIP_OBJ = 61,

	FF_PASTE_CLIP_TEXT = 12,

	FF_PASTE_SEL_TEXT = 11,

	FF_REPLACE_CELLS = 0x0020,

	FF_RES_ADD = 84,

	FF_RES_DEL = 85,

	FF_RES_MOVE = 81,

	FF_RES_MOVE1 = 82,

	FF_RES_VERTEX = 83,

	FF_SELECT_WHOLE_TABLE = 0x80000000,

	FF_SHIFT_KEY = 0x0001,

	FF_STRIP_HYPERTEXT = 0x0080,

	FF_STRUCTURE_MENU = 34,

	FF_TABLE_SELALL = 23,

	FF_TEXT_EXT = 2,

	FF_TEXT_Q_COPY = 3,

	FF_TEXT_SEL = 1,

	FF_UFF_ALL = 0xFFFF,

	FF_UFF_COLOR = 0x0100,

	FF_UFF_COMBINED_FONTS = 0x0800,

	FF_UFF_COND = 0x0010,

	FF_UFF_DOCUMENT_PROPS = 0x0400,

	FF_UFF_FBA = 0x1000,

	FF_UFF_FONT = 0x0002,

	FF_UFF_MATH = 0x0200,

	FF_UFF_PAGE = 0x0004,

	FF_UFF_PGF = 0x0001,

	FF_UFF_REFPAGE = 0x0020,

	FF_UFF_REMOVE_EXCEPTIONS = 0x8000,

	FF_UFF_REMOVE_PAGE_BREAKS = 0x4000,

	FF_UFF_STYLE = 0x2000,

	FF_UFF_TABLE = 0x0008,

	FF_UFF_VAR = 0x0040,

	FF_UFF_XREF = 0x0080,

	FF_UNTAGGED_ASK = 0,

	FF_UNTAGGED_DELETE = 2,

	FF_UNTAGGED_UNCOND = 1,

	FF_VIEWER_MENU = 32,

	FF_VISIBLE_ONLY = 0x0010,

	FF_XRUI_CLOSED_DOCS = 0x04,

	FF_XRUI_EVERYTHING = (0x01 | 0x02 | 0x04),

	FF_XRUI_FORCE_UPDATE = 0x08,

	FF_XRUI_INTERNAL = 0x01,

	FF_XRUI_OPEN_DOCS = 0x02,

	FI_PLUGIN_DESCRIPTION = 4,

	FI_PLUGIN_FACET = 6,

	FI_PLUGIN_FORMATID = 7,

	FI_PLUGIN_INFORMAT = 10,

	FI_PLUGIN_NAME = 2,

	FI_PLUGIN_OUTFORMAT = 11,

	FI_PLUGIN_PRODUCTNAME = 1,

	FI_PLUGIN_PRODUCTS = 5,

	FI_PLUGIN_SUFFIX = 9,

	FI_PLUGIN_TYPE = 3,

	FI_PLUGIN_VENDOR = 8,

	FMV_CMDSUPPORTED = -1,

	FO_AFrame = 23,

	FO_Alert = 69,

	FO_AnchoredFrame = 23,

	FO_Arc = 11,

	FO_AttrCondExpr = 71,

	FO_Bad = 255,

	FO_BodyPage = 5,

	FO_Book = 2,

	FO_BookComponent = 3,

	FO_CMSConnection = (83 + 15),

	FO_CMSObject = 76,

	FO_CMSObject2 = (83 + 16),

	FO_CMSRegistration = 74,

	FO_CMSSession = 75,

	FO_Cblock = (83 + 3),

	FO_Cell = 39,

	FO_CharFmt = 33,

	FO_Color = 35,

	FO_Column = 82,

	FO_CombinedFontDefn = 67,

	FO_Command = 56,

	FO_CondFmt = 34,

	FO_CursorResource = 70,

	FO_DBGroup = 22,

	FO_DialogResource = 43,

	FO_DitaMap = (83 + 13),

	FO_DlgBox = 44,

	FO_DlgButton = 45,

	FO_DlgCheckBox = 47,

	FO_DlgDate = 80,

	FO_DlgEditBox = 50,

	FO_DlgImage = 53,

	FO_DlgLabel = 52,

	FO_DlgListView = 72,

	FO_DlgPopUp = 48,

	FO_DlgRadioButton = 51,

	FO_DlgScrollBar = 54,

	FO_DlgScrollBox = 49,

	FO_DlgTriBox = 46,

	FO_Doc = 4,

	FO_Element = 42,

	FO_ElementDef = 41,

	FO_Ellipse = 13,

	FO_First_Internal = 83,

	FO_Flow = 30,

	FO_FmtChangeList = 58,

	FO_FmtRule = 59,

	FO_FmtRuleClause = 60,

	FO_Fn = 25,

	FO_Frame = (83 + 2),

	FO_Graphic = (83 + 1),

	FO_GraphicsFmt = 73,

	FO_Group = 10,

	FO_HiddenPage = 8,

	FO_InlineComponent = 81,

	FO_Inset = 20,

	FO_Iterator = 78,

	FO_KeyCatalog = 77,

	FO_Last_Graphic = 22,

	FO_Last_Internal = (83 + 14),

	FO_Last_Page = 8,

	FO_Line = 17,

	FO_Marker = 24,

	FO_MarkerType = 66,

	FO_MasterPage = 6,

	FO_Math = 21,

	FO_MathML = 79,

	FO_Menu = 55,

	FO_MenuCell = (83 + 11),

	FO_MenuItemSeparator = 57,

	FO_Num = 83,

	FO_Page = (83 + 0),

	FO_Pgf = 31,

	FO_PgfFmt = 32,

	FO_Polygon = 16,

	FO_Polyline = 15,

	FO_Rectangle = 12,

	FO_RefPage = 7,

	FO_RoundRect = 14,

	FO_Row = 38,

	FO_Rubi = 68,

	FO_RulingFmt = 40,

	FO_Session = 0,

	FO_StringResource = 1,

	FO_SubCell = (83 + 7),

	FO_SubCol = 65,

	FO_SubCond = (83 + 4),

	FO_SubDash = (83 + 6),

	FO_SubPblock = (83 + 9),

	FO_SubStyle = (83 + 5),

	FO_SubTbl = (83 + 8),

	FO_SubTextDef = (83 + 10),

	FO_Tbl = 36,

	FO_TblFmt = 37,

	FO_TextFrame = 19,

	FO_TextInset = (83 + 12),

	FO_TextLine = 18,

	FO_TiApiClient = 64,

	FO_TiFlow = 61,

	FO_TiText = 62,

	FO_TiTextTable = 63,

	FO_UFrame = 9,

	FO_UnanchoredFrame = 9,

	FO_Var = 28,

	FO_VarFmt = 29,

	FO_XLast_Graphic = 23,

	FO_XRef = 26,

	FO_XRefFmt = 27,

	FP_AFrameIsCropped = 878,

	FP_AFrameIsFloating = 876,

	FP_AcrobatBookmarkDisplayTags = 2251,

	FP_AcrobatLevel = 589,

	FP_ActiveAlert = 105,

	FP_ActiveBook = 52,

	FP_ActiveCMSSession = 2438,

	FP_ActiveDoc = 51,

	FP_ActiveView = 2422,

	FP_AddMarkerTypeToStandardMarkers = 150,

	FP_AdjHyphens = 559,

	FP_AlertClientName = 2291,

	FP_AlertClientUnique = 2290,

	FP_AlertString = 2292,

	FP_AlertType = 2293,

	FP_Alignment = 886,

	FP_AllowAsSpecialCase = 1649,

	FP_AllowBaseFamilyBoldedAndObliqued = 2283,

	FP_AllowNewFileURL = 2416,

	FP_AllowedDataRange = 1594,

	FP_AlsoInsert = 1591,

	FP_AlsoInserts = 1595,

	FP_AnchorType = 875,

	FP_Angle = 780,

	FP_ApplyEOPRules = 2030,

	FP_ApplyFormatRules = 93,

	FP_ArrowBaseAngle = 746,

	FP_ArrowLength = 748,

	FP_ArrowScaleFactor = 747,

	FP_ArrowScaleHead = 750,

	FP_ArrowTipAngle = 745,

	FP_ArrowType = 749,

	FP_AsianComposer = 3039,

	FP_AttrCondExprIsActive = 2818,

	FP_AttrCondExprStr = 2817,

	FP_AttrDisplay = 1635,

	FP_AttributeDefs = 1584,

	FP_AttributeValueInvalid = 1667,

	FP_AttributeValueRequired = 1666,

	FP_Attributes = 1634,

	FP_AttributesEx = 1670,

	FP_AutoBackup = 50,

	FP_AutoChangeBars = 238,

	FP_AutoNumChar = 549,

	FP_AutoNumString = 548,

	FP_AutoSave = 48,

	FP_AutoSaveSeconds = 49,

	FP_BIBGetAddressProc = 2299,

	FP_BannerText = 1599,

	FP_BannerTextDisplay = 1600,

	FP_BaseFamily = 2282,

	FP_BasePointX = 1116,

	FP_BasePointY = 1117,

	FP_BaselineOffset = 881,

	FP_BkColor = 992,

	FP_BkGndColor = 1502,

	FP_Black = 1460,

	FP_BlockLines = 561,

	FP_BookComponent = 1628,

	FP_BookComponentFileType = 2339,

	FP_BookComponentIsFolderWithTemplate = 2341,

	FP_BookComponentIsFolderWithoutTemplate = 2342,

	FP_BookComponentIsGeneratable = 520,

	FP_BookComponentMissing = 1662,

	FP_BookComponentParent = 2325,

	FP_BookComponentSequenceLevel = 2353,

	FP_BookComponentTemplatePath = 2327,

	FP_BookComponentTitle = 2328,

	FP_BookComponentType = 531,

	FP_BookDontUpdateReferences = 494,

	FP_BookIsModified = 492,

	FP_BookIsSelected = 499,

	FP_BookIsViewOnly = 497,

	FP_BookParent = 515,

	FP_BooleanConditionExpression = 2321,

	FP_BooleanConditionExpressionTag = 995,

	FP_BooleanConditionState = 2322,

	FP_BorderWidth = 740,

	FP_BottomMargin = 231,

	FP_BottomRowSelection = 1342,

	FP_BottomSepAtIndent = 2010,

	FP_BottomSeparator = 569,

	FP_Box_BG_Color = 1722,

	FP_CMSItemProperty_ItemCheckedOutByCurrentUser = FP_CMSItemProperty_ItemCheckedOutByCurrentUser,

	FP_CMSItemProperty_ItemFileType = FP_CMSItemProperty_ItemFileType,

	FP_CMSItemProperty_ItemIsCheckedOut = FP_CMSItemProperty_ItemIsCheckedOut,

	FP_CMSItemProperty_ItemIsContainer = FP_CMSItemProperty_ItemIsContainer,

	FP_CMSItemProperty_ItemLocalPath = FP_CMSItemProperty_ItemLocalPath,

	FP_CMSItemProperty_ItemName = FP_CMSItemProperty_ItemName,

	FP_CMSItemProperty_ItemServerPath = FP_CMSItemProperty_ItemServerPath,

	FP_CMSItemProperty_ItemType = FP_CMSItemProperty_ItemType,

	FP_CMSItemProperty_ItemVersion = FP_CMSItemProperty_ItemVersion,

	FP_CMSItemProperty_Max = FP_CMSItemProperty_Max,

	FP_CMSItemProperty_Min = FP_CMSItemProperty_Min,

	FP_CMSObjectLocalPath = 2392,

	FP_CMSObjectServerURL = 2391,

	FP_CTFontContext = 72,

	FP_CanHaveCheckMark = 1931,

	FP_Capitalization = 619,

	FP_CellAboveInCol = 1203,

	FP_CellAngle = 1209,

	FP_CellBelowInCol = 1204,

	FP_CellBelowInTbl = 1200,

	FP_CellBottomMargin = 582,

	FP_CellBottomMarginChange = 2023,

	FP_CellBottomMarginFixed = 2016,

	FP_CellColNum = 1205,

	FP_CellColumn = 2435,

	FP_CellDefaultBottomRuling = 1215,

	FP_CellDefaultLeftRuling = 1216,

	FP_CellDefaultRightRuling = 1217,

	FP_CellDefaultTopRuling = 1214,

	FP_CellIsShown = 1218,

	FP_CellIsStraddled = 1206,

	FP_CellLeftMargin = 583,

	FP_CellLeftMarginChange = 2024,

	FP_CellLeftMarginFixed = 2017,

	FP_CellMarginSpacingDelta = 990,

	FP_CellMarginsFixed = 586,

	FP_CellNumColsStraddled = 1208,

	FP_CellNumRowsStraddled = 1207,

	FP_CellOverrideBottomRuling = 1211,

	FP_CellOverrideFill = 1195,

	FP_CellOverrideLeftRuling = 1212,

	FP_CellOverrideRightRuling = 1213,

	FP_CellOverrideShading = 1194,

	FP_CellOverrideTopRuling = 1210,

	FP_CellRightMargin = 584,

	FP_CellRightMarginChange = 2025,

	FP_CellRightMarginFixed = 2018,

	FP_CellRow = 1198,

	FP_CellTopMargin = 581,

	FP_CellTopMarginChange = 2022,

	FP_CellTopMarginFixed = 2015,

	FP_CellUseOverrideBRuling = 1193,

	FP_CellUseOverrideFill = 1196,

	FP_CellUseOverrideLRuling = 1190,

	FP_CellUseOverrideRRuling = 1191,

	FP_CellUseOverrideShading = 1197,

	FP_CellUseOverrideTRuling = 1192,

	FP_CellVAlignment = 585,

	FP_ChangeBar = 611,

	FP_ChangeBarColor = 262,

	FP_ChangeBarDistance = 259,

	FP_ChangeBarPosition = 260,

	FP_ChangeBarThickness = 261,

	FP_ChapNumComputeMethod = 215,

	FP_ChapterNumStyle = 217,

	FP_ChapterNumText = 218,

	FP_ChapterNumber = 216,

	FP_CharTag = 602,

	FP_CharacterReferencesOnXMLExport = 2887,

	FP_CheckMarkIsOn = 1932,

	FP_ColGap = 234,

	FP_ColGapWidth = 985,

	FP_Color = 751,

	FP_ColorOverprint = 1468,

	FP_ColorPrintCtl = 1462,

	FP_ColorTintPercent = 1466,

	FP_ColorViewCtl = 1461,

	FP_ColumnIsShown = 2434,

	FP_ColumnNum = 2436,

	FP_ColumnTbl = 2433,

	FP_ColumnsAreBalanced = 1175,

	FP_CombinedFontFamily = 2287,

	FP_CommandNum = 1928,

	FP_Comment = 1581,

	FP_ComponentDisplayText = 532,

	FP_ComponentElement = 1551,

	FP_ComponentIsDitaMap = 2331,

	FP_ComponentIsSelected = 529,

	FP_ComponentType = 2329,

	FP_CondFmtIsShown = 1139,

	FP_ContentHeight = 2219,

	FP_ContentIsLooselyValid = 1652,

	FP_ContentIsStrictlyValid = 1651,

	FP_ContentMustBeEmpty = 1665,

	FP_ContentNeededAtBegin = 1653,

	FP_ContentNeededAtEnd = 1654,

	FP_ContextForCSS = 2162,

	FP_ContextLabel = 2157,

	FP_CorrespondingXmlPath = 1158,

	FP_CountElements = 2101,

	FP_CurrentDoc = 2401,

	FP_CurrentInset = 240,

	FP_CurrentMenuSet = 99,

	FP_CurrentPage = 236,

	FP_CursorData = 2294,

	FP_CursorTypes = 2295,

	FP_CustomDelimiter = 2420,

	FP_CustomDocPath = 2885,

	FP_CustomElementList = 1496,

	FP_Cyan = 1457,

	FP_DTheta = 830,

	FP_Dash = 752,

	FP_Day = 1724,

	FP_DbAttributes = 1817,

	FP_DbCancelButton = 1811,

	FP_DbCheckBoxState = 1807,

	FP_DbDefaultButton = 1809,

	FP_DbEditable = 1818,

	FP_DbFbCurrentDir = 1814,

	FP_DbFbScrollBox = 1813,

	FP_DbFbStatus = 1815,

	FP_DbFbTextBox = 1812,

	FP_DbFirstFocus = 1808,

	FP_DbIdentifier = 1802,

	FP_DbItemNum = 1800,

	FP_DbNoHelp = 1819,

	FP_DbOKButton = 1810,

	FP_DbRadioButtonGroup = 1806,

	FP_DbSbxNumLines = 1805,

	FP_DbStuffItem = 1804,

	FP_DbTitleLabel = 1816,

	FP_DbType = 1801,

	FP_DbVarLabelWidth = 1803,

	FP_DefaultExclusions = 1487,

	FP_DefaultFontAngle = 71,

	FP_DefaultFontFamily = 68,

	FP_DefaultFontVariation = 69,

	FP_DefaultFontWeight = 70,

	FP_DefaultInclusions = 1486,

	FP_DefaultKeyCatalog = 2871,

	FP_DefaultVectorFormatForXMLExport = 2874,

	FP_Description = 1947,

	FP_DescriptiveTag = 1596,

	FP_DesktopHeight = 791,

	FP_DesktopWidth = 790,

	FP_DesktopX = 788,

	FP_DesktopY = 789,

	FP_DialogEncodingName = 598,

	FP_Dictionary = 203,

	FP_DirectOLESupportInXml = 2881,

	FP_Direction = 3036,

	FP_DisableAutofitAfterZoom = 67,

	FP_DisplayName = 78,

	FP_Displaying = 92,

	FP_DitaMaxRefLevels = 2396,

	FP_DitaMode = 1504,

	FP_DoNotExportInvalidXML = 2418,

	FP_DoNotGenerateErrorLog = 819,

	FP_DoPostXSLTValidationOnExport = 2417,

	FP_DocAcrobatColumnArticleThreads = 2256,

	FP_DocAcrobatDefaultsChanged = 2252,

	FP_DocAcrobatElementList = 2254,

	FP_DocAcrobatElements = 2253,

	FP_DocAcrobatNoArticleThreads = 2255,

	FP_DocCMSType = 2393,

	FP_DocFluidFlow = 147,

	FP_DocFonts = 2380,

	FP_DocInTempState = 2900,

	FP_DocIsDoubleSided = 226,

	FP_DocIsHelp = 132,

	FP_DocIsInternal = 2372,

	FP_DocIsModified = 131,

	FP_DocIsSave = 833,

	FP_DocIsStructuredDummy = 2882,

	FP_DocIsUIOpen = 832,

	FP_DocIsViewOnly = 133,

	FP_DocIsViewOnlyWinPalette = 134,

	FP_DocOpenClientEncounteredErrors = 820,

	FP_DocOpenType = 130,

	FP_DocSaveFormat = 2415,

	FP_DocSaveType = 145,

	FP_DocSequenceLevel = 2356,

	FP_DockDialog = 2344,

	FP_DontLoadStartupClients = 2894,

	FP_DontShowWelcomeScreen = 2408,

	FP_DontUpdateTextInsets = 160,

	FP_DontUpdateXRefs = 159,

	FP_DoubleClick = 1706,

	FP_DownloadFonts = 496,

	FP_EddUpdateOn = 829,

	FP_ElemPrefixSuffix = 2158,

	FP_Element = 2170,

	FP_ElementBoundaryDisplay = 1484,

	FP_ElementCatalog = 1488,

	FP_ElementCatalogDisplay = 1485,

	FP_ElementDataType = 1593,

	FP_ElementDef = 1621,

	FP_ElementDefType = 1579,

	FP_ElementDescription = 1597,

	FP_ElementInCatalog = 1573,

	FP_ElementIsCollapsed = 1627,

	FP_ElementIsExcludedInContext = 1655,

	FP_ElementIsInvalidInParent = 1656,

	FP_ElementIsInvalidInPosition = 1657,

	FP_ElementIsTopicGroup = 2338,

	FP_ElementIsTopicHead = 2337,

	FP_ElementIsTopicRef = 2336,

	FP_ElementIsUndefined = 1650,

	FP_ElementMarkedForNamedDestination = 1669,

	FP_ElementPgfFormat = 1586,

	FP_ElementSelection = 1494,

	FP_ElementType = 1636,

	FP_ElementTypeMismatch = 1658,

	FP_EnableAutoSpellCheck = 2413,

	FP_EnabledWhen = 1935,

	FP_EqnIntegralSizeLarge = 348,

	FP_EqnIntegralSizeMed = 347,

	FP_EqnIntegralSizeSmall = 346,

	FP_EqnLevel1SizeLarge = 354,

	FP_EqnLevel1SizeMed = 353,

	FP_EqnLevel1SizeSmall = 352,

	FP_EqnLevel2SizeLarge = 357,

	FP_EqnLevel2SizeMed = 356,

	FP_EqnLevel2SizeSmall = 355,

	FP_EqnLevel3SizeLarge = 360,

	FP_EqnLevel3SizeMed = 359,

	FP_EqnLevel3SizeSmall = 358,

	FP_EqnSigmaSizeLarge = 351,

	FP_EqnSigmaSizeMed = 350,

	FP_EqnSigmaSizeSmall = 349,

	FP_ErrorInBookComponent = 1663,

	FP_ExcludeBookComponent = 2326,

	FP_Exclusions = 1576,

	FP_ExpandOMaticParent = 1934,

	FP_ExportFilters = 2289,

	FP_ExtractElementTags = 1552,

	FP_ExtractTags = 516,

	FP_FMConsoleString = 826,

	FP_FMInterfaceEncodingName = 599,

	FP_FM_BinDir = 88,

	FP_FM_CurrentDir = 90,

	FP_FM_HelpDir = 103,

	FP_FM_HomeDir = 87,

	FP_FM_InitDir = 89,

	FP_FM_SgmlDir = 100,

	FP_FM_StructureDir = 2031,

	FP_FM_XmlDir = 2032,

	FP_FamilyName = 1464,

	FP_Fcode = 1936,

	FP_Fcodes = 1937,

	FP_FileExtensionOverride = 2813,

	FP_FileInfoPacket = 2262,

	FP_FileOpenInProgress = 828,

	FP_Fill = 741,

	FP_FirstAFrame = 974,

	FP_FirstAttrCondExprInDoc = 2815,

	FP_FirstBodyPageInDoc = 415,

	FP_FirstCell = 978,

	FP_FirstCellInRow = 1247,

	FP_FirstCharFmtInDoc = 123,

	FP_FirstChildElement = 1623,

	FP_FirstColorInDoc = 127,

	FP_FirstColumnInSelection = 2427,

	FP_FirstColumnInTbl = 2423,

	FP_FirstCombinedFontDefnInDoc = 2280,

	FP_FirstCommandInSession = 98,

	FP_FirstComponentInBook = 491,

	FP_FirstComponentInBookComponent = 2324,

	FP_FirstCondFmtInDoc = 124,

	FP_FirstDITAConrefElementInDoc = 2861,

	FP_FirstDITALinkElementInDoc = 2863,

	FP_FirstDITATopicrefElementInDoc = 2864,

	FP_FirstDITATopicsetrefElementInDoc = 2865,

	FP_FirstDITAXrefElementInDoc = 2862,

	FP_FirstElementDefInDoc = 1483,

	FP_FirstFlowInDoc = 121,

	FP_FirstFmtChangeListInDoc = 1489,

	FP_FirstFn = 976,

	FP_FirstFnInDoc = 119,

	FP_FirstGraphicInDoc = 112,

	FP_FirstGraphicInFrame = 882,

	FP_FirstGraphicInGroup = 807,

	FP_FirstGraphicsFmtInDoc = 3101,

	FP_FirstIndent = 556,

	FP_FirstIndentChange = 2005,

	FP_FirstIndentIsRelative = 2019,

	FP_FirstIndentRelPos = 2020,

	FP_FirstInlineComponentInDoc = 2897,

	FP_FirstKeyCatalogInSession = 2872,

	FP_FirstMarkerInDoc = 114,

	FP_FirstMarkerTypeInDoc = 148,

	FP_FirstMasterPageInDoc = 417,

	FP_FirstMenuItemInMenu = 1927,

	FP_FirstMenuItemInSession = 97,

	FP_FirstOpenBook = 54,

	FP_FirstOpenDoc = 53,

	FP_FirstPageNum = 224,

	FP_FirstPageVerso = 227,

	FP_FirstPgf = 972,

	FP_FirstPgfFmtInDoc = 122,

	FP_FirstPgfInDoc = 113,

	FP_FirstPgfRules = 1589,

	FP_FirstRefPageInDoc = 419,

	FP_FirstRowInTbl = 1338,

	FP_FirstRubiInDoc = 194,

	FP_FirstRulingFmtInDoc = 126,

	FP_FirstSelectedComponentInBook = 493,

	FP_FirstSelectedGraphicInDoc = 128,

	FP_FirstSelectedTiInDoc = 142,

	FP_FirstSubCol = 986,

	FP_FirstTblFmtInDoc = 125,

	FP_FirstTblInDoc = 120,

	FP_FirstTextFrameInFlow = 1169,

	FP_FirstTiInDoc = 141,

	FP_FirstVarFmtInDoc = 116,

	FP_FirstVarInDoc = 115,

	FP_FirstVis = 1705,

	FP_FirstVisibleColumnInTbl = 2425,

	FP_FirstXRefFmtInDoc = 118,

	FP_FirstXRefInDoc = 117,

	FP_Flow = 982,

	FP_FlowIsAutoConnect = 1165,

	FP_FlowIsFeathered = 1166,

	FP_FlowIsPostScript = 1168,

	FP_FlowIsSynchronized = 1163,

	FP_Fmt = 1050,

	FP_FmtChangeList = 2155,

	FP_FmtChangeListInCatalog = 2021,

	FP_FmtChangeListTag = 2154,

	FP_FmtRule = 2159,

	FP_FmtRuleClause = 2104,

	FP_FmtRuleClauses = 2103,

	FP_FmtRuleType = 2100,

	FP_FnAnchorString = 1006,

	FP_FnCustNumString = 285,

	FP_FnFirstNum = 284,

	FP_FnFmt = 283,

	FP_FnHeightPerCol = 289,

	FP_FnInstancePosition = 287,

	FP_FnInstancePrefix = 294,

	FP_FnInstanceSuffix = 288,

	FP_FnNum = 1002,

	FP_FnNumComputeMethod = 295,

	FP_FnNumStyle = 290,

	FP_FnNumberingPerPage = 291,

	FP_FnRefPosition = 292,

	FP_FnRefPrefix = 286,

	FP_FnRefSuffix = 293,

	FP_Focus = 2358,

	FP_FontAngle = 607,

	FP_FontAngleNames = 58,

	FP_FontEncodingName = 642,

	FP_FontFamily = 604,

	FP_FontFamilyAttributes = 60,

	FP_FontFamilyFullNames = 73,

	FP_FontFamilyNames = 55,

	FP_FontPanoseName = 641,

	FP_FontPlatformName = 639,

	FP_FontPostScriptName = 640,

	FP_FontSize = 615,

	FP_FontSizeChange = 2012,

	FP_FontVariation = 605,

	FP_FontVariationNames = 56,

	FP_FontWeight = 606,

	FP_FontWeightNames = 57,

	FP_FormViewConfigFile = 1510,

	FP_FormatOverride = 590,

	FP_FormatTag = 2153,

	FP_FormattingLocked = 2891,

	FP_FrameParent = 774,

	FP_Functions = 339,

	FP_GeneralRule = 1575,

	FP_GeneralRuleErrorOffsets = 1578,

	FP_GenerateAcrobatInfo = 2250,

	FP_GenerateInclude = 517,

	FP_GraphicCantBeSelected = 772,

	FP_GraphicIsButton = 773,

	FP_GraphicIsSelected = 771,

	FP_Gravity = 107,

	FP_GreekSize = 63,

	FP_GroupDialog = 2349,

	FP_GroupParent = 777,

	FP_HasShiftOrUnshiftCommand = 1939,

	FP_HeadArrow = 743,

	FP_Height = 784,

	FP_HelpLink = 1938,

	FP_HelpPending = 102,

	FP_HiddenPage = 421,

	FP_HighestLevelElement = 1509,

	FP_HoleAtEnd = 1654,

	FP_HoleBeforeElement = 1659,

	FP_HorizontalSpreadLarge = 342,

	FP_HorizontalSpreadMed = 341,

	FP_HorizontalSpreadSmall = 340,

	FP_HostName = 81,

	FP_HotspotCmdStr = 2876,

	FP_HotspotTitle = 2877,

	FP_Hypertext = 1943,

	FP_HypertextCommandText = 2301,

	FP_HypertextDoValidate = 2300,

	FP_HypertextParseBadParam = 2305,

	FP_HypertextParseErr = 2303,

	FP_HypertextParseErrMsg = 2306,

	FP_HypertextParsedArgs = 2302,

	FP_HypertextParsedClientName = 2317,

	FP_HypertextParsedCmdCode = 2307,

	FP_HypertextParsedCmdDest = 2308,

	FP_HypertextParsedCmdDestObjID = 2310,

	FP_HypertextParsedCmdDestObjType = 2309,

	FP_HypertextParsedCmdMatrixColumns = 2312,

	FP_HypertextParsedCmdMatrixRows = 2311,

	FP_HypertextParsedDIFileName = 2320,

	FP_HypertextParsedFlowName = 2315,

	FP_HypertextParsedLinkName = 2313,

	FP_HypertextParsedMessage = 2319,

	FP_HypertextParsedPageName = 2314,

	FP_HypertextParsedRangeName = 2316,

	FP_HypertextParsedTitle = 2318,

	FP_HypertextValidateErr = 2304,

	FP_HyphMinPrefix = 575,

	FP_HyphMinSuffix = 560,

	FP_HyphMinWord = 576,

	FP_Hyphenate = 564,

	FP_IDAttrValue = 1637,

	FP_INSETinfo = 858,

	FP_Icon = 1716,

	FP_IconBarOn = 101,

	FP_IconColorPref = 1508,

	FP_IconSizePref = 1507,

	FP_ImportFilters = 2288,

	FP_ImportFmtInclude = 518,

	FP_ImportHint = 2055,

	FP_InCond = 1150,

	FP_InTableSortOperation = 2833,

	FP_InTextFrame = 1001,

	FP_InTextObj = 1000,

	FP_Inclusions = 1577,

	FP_IncrVal = 1711,

	FP_InitStructurePattern = 1585,

	FP_InkName = 1465,

	FP_InlineComponentType = 2896,

	FP_InsertLinks = 528,

	FP_InsetCuePointList = 2354,

	FP_InsetDpi = 853,

	FP_InsetEditor = 850,

	FP_InsetFile = 852,

	FP_InsetFileOrigName = 2814,

	FP_InsetGenericData = 2832,

	FP_InsetGfxActiveInPdf = 2836,

	FP_InsetGfxName = 2834,

	FP_InsetGfxPlayWindowInPdf = 2835,

	FP_InsetIsFixedSize = 854,

	FP_InsetIsFlippedSideways = 855,

	FP_InsetIsInverted = 856,

	FP_InsetJavaScriptAttached = 2837,

	FP_InsetJavaScriptFile = 2838,

	FP_InsetLinkToText = 2355,

	FP_InsetMonikerFilePath = 2849,

	FP_InsetMonikerPath = 2848,

	FP_InsetPosterFile = 2822,

	FP_InsetPosterFileOrigName = 2824,

	FP_InsetPosterIsExternal = 2821,

	FP_InsetRasterDpi = 857,

	FP_InsetSaveDIBFacetToFile = 2823,

	FP_InsetSaveFacetToFile = 2839,

	FP_InsetU3dAnimationList = 2844,

	FP_InsetU3dPartList = 2845,

	FP_InsetU3dViewList = 2846,

	FP_InsetURL = 2407,

	FP_InsetUpdater = 851,

	FP_InternalAlignment = 2390,

	FP_InternalAnchorType = 2383,

	FP_InternalBaselineOffset = 2384,

	FP_InternalHeight = 2374,

	FP_InternalMathMLApplyPgfStyle = 2389,

	FP_InternalMathMLComposeDpi = 2375,

	FP_InternalMathMLDpi = 2385,

	FP_InternalMathMLFontSize = 2376,

	FP_InternalMathMLInline = 2387,

	FP_InternalMathMLXmlData = 2377,

	FP_InternalWidth = 2373,

	FP_InvalidHighestLevel = 1661,

	FP_InvariantName = 1029,

	FP_IsDefault = 2850,

	FP_IsDialogDocked = 2345,

	FP_IsDialogVisible = 2346,

	FP_IsDitamapInResourceManager = 2332,

	FP_IsDocDita = 2880,

	FP_IsDocDitamap = 2879,

	FP_IsFMRunningAsServer = 2348,

	FP_IsFMRunningInTrialPeriod = 2412,

	FP_IsFateRun = 2847,

	FP_IsFormViewEnabled = 2437,

	FP_IsHotspot = 2875,

	FP_IsIconified = 31,

	FP_IsInFront = 32,

	FP_IsOnScreen = 110,

	FP_IsRestoring = 2892,

	FP_IsStale = 2851,

	FP_IsTechnicalSuiteLicensed = 2410,

	FP_IsTempOpenSave = 827,

	FP_IsTextRange = 2151,

	FP_KByteAllocationSize = 106,

	FP_KeepWithNext = 565,

	FP_KeepWithPrev = 551,

	FP_KernX = 616,

	FP_KernY = 617,

	FP_KeyCatalog = 2856,

	FP_KeyCatalogClientName = 2873,

	FP_KeyCatalogType = 2857,

	FP_KeyCatalogWorkflow = 2859,

	FP_KeyCount = 2860,

	FP_KeyboardShortcutLabel = 1929,

	FP_KeyboardShortcuts = 1930,

	FP_Label = 30,

	FP_LabelBold = 1721,

	FP_LabelColor = 1720,

	FP_Labels = 1703,

	FP_Language = 577,

	FP_LastAFrame = 975,

	FP_LastBodyPageInDoc = 416,

	FP_LastCell = 979,

	FP_LastChildElement = 1624,

	FP_LastColumnInSelection = 2428,

	FP_LastColumnInTbl = 2424,

	FP_LastFn = 977,

	FP_LastGraphicInFrame = 883,

	FP_LastGraphicInGroup = 808,

	FP_LastMasterPageInDoc = 418,

	FP_LastPgf = 973,

	FP_LastPgfRules = 1590,

	FP_LastRefPageInDoc = 420,

	FP_LastRowInTbl = 1339,

	FP_LastSubCol = 987,

	FP_LastTextFrameInFlow = 1170,

	FP_LastUpdate = 2052,

	FP_LastVisibleColumnInTbl = 2426,

	FP_Leading = 558,

	FP_LeadingChange = 2007,

	FP_LeftColNum = 1343,

	FP_LeftIndent = 555,

	FP_LeftIndentChange = 2004,

	FP_LeftMargin = 232,

	FP_LeftMasterPage = 413,

	FP_LetterSpace = 550,

	FP_LineAscent = 1900,

	FP_LineBaseline = 1902,

	FP_LineBreakAfter = 177,

	FP_LineCap = 753,

	FP_LineDescent = 1901,

	FP_LineNumColor = 4006,

	FP_LineNumDistance = 4001,

	FP_LineNumFont = 4004,

	FP_LineNumRestart = 4002,

	FP_LineNumShow = 4003,

	FP_LineNumSize = 4005,

	FP_LineSpacing = 587,

	FP_LineSpacingFactor = 988,

	FP_LineSpacingFixed = 2008,

	FP_LoadStartupScripts = 2886,

	FP_LocX = 781,

	FP_LocY = 782,

	FP_Locked = 588,

	FP_LogMissingFontsWarning = 2901,

	FP_Magenta = 1458,

	FP_MagicMarker = 488,

	FP_MainFlowInDoc = 422,

	FP_MarkerNames = 59,

	FP_MarkerText = 1025,

	FP_MarkerTypeId = 1027,

	FP_MarkerTypeNames = 149,

	FP_MasterPage = 690,

	FP_MatchesContextInUserString = 1642,

	FP_MatchingFirstPgfClauses = 1638,

	FP_MatchingLastPgfClauses = 1639,

	FP_MatchingObjectClauses = 1632,

	FP_MatchingPrefixClauses = 1640,

	FP_MatchingSuffixClauses = 1641,

	FP_MatchingTextClauses = 1631,

	FP_MathFullForm = 865,

	FP_MathMLApplyPgfStyle = 2388,

	FP_MathMLComposeDpi = 2367,

	FP_MathMLData = 2365,

	FP_MathMLDpi = 2360,

	FP_MathMLExportEntitiesAsValues = 2394,

	FP_MathMLFile = 2363,

	FP_MathMLFontSize = 2371,

	FP_MathMLImportGraphicsDpi = 2369,

	FP_MathMLInline = 2386,

	FP_MathMLIsFixedSize = 2361,

	FP_MathMLIsFlippedSideways = 2366,

	FP_MathMLIsInverted = 2362,

	FP_MathMLNamespacePrefix = 2378,

	FP_MathMLXmlData = 2359,

	FP_MathSize = 866,

	FP_MaxBottomMargin = 709,

	FP_MaxFirstIndent = 472,

	FP_MaxFontSize = 484,

	FP_MaxInterPgfPadding = 471,

	FP_MaxInterlinePadding = 470,

	FP_MaxJLetSpace = 596,

	FP_MaxJRomSpace = 593,

	FP_MaxLeading = 482,

	FP_MaxLeftIndent = 474,

	FP_MaxLeftMargin = 703,

	FP_MaxRightIndent = 476,

	FP_MaxRightMargin = 705,

	FP_MaxSize = 2352,

	FP_MaxSpace = 572,

	FP_MaxSpaceAbove = 478,

	FP_MaxSpaceBelow = 480,

	FP_MaxSpread = 486,

	FP_MaxStretch = 711,

	FP_MaxTabPosition = 701,

	FP_MaxTopMargin = 707,

	FP_MaxVal = 1710,

	FP_MenuBar = 143,

	FP_MenuItemIsEnabled = 1922,

	FP_MenuItemType = 1933,

	FP_MenuType = 1926,

	FP_Mif8bitOutput = 62,

	FP_MifFileEntity = 2828,

	FP_MifFileName = 2829,

	FP_MifFileOrigFormat = 2878,

	FP_MinBottomMargin = 710,

	FP_MinFirstIndent = 473,

	FP_MinFontSize = 485,

	FP_MinHang = 1164,

	FP_MinJLetSpace = 594,

	FP_MinJRomSpace = 591,

	FP_MinLeading = 483,

	FP_MinLeftIndent = 475,

	FP_MinLeftMargin = 704,

	FP_MinRightIndent = 477,

	FP_MinRightMargin = 706,

	FP_MinSize = 2351,

	FP_MinSpace = 571,

	FP_MinSpaceAbove = 479,

	FP_MinSpaceBelow = 481,

	FP_MinSpread = 487,

	FP_MinStretch = 712,

	FP_MinTabPosition = 702,

	FP_MinTopMargin = 708,

	FP_MinVal = 1709,

	FP_Mode = 1941,

	FP_ModelessDialogUpdate = 2895,

	FP_ModelessDlgIconN = 1728,

	FP_ModelessDlgIconR = 1729,

	FP_Month = 1725,

	FP_MoveTabs = 2014,

	FP_Name = 20,

	FP_Namespace = 1643,

	FP_NamespaceScope = 1644,

	FP_NarrowRubiSpaceForJapanese = 188,

	FP_NarrowRubiSpaceForOther = 190,

	FP_NewElemAttrDisplay = 1490,

	FP_NewElemAttrEditing = 1491,

	FP_NextAFrame = 885,

	FP_NextAttrCondExprInDoc = 2816,

	FP_NextBookComponentInDFSOrder = 2333,

	FP_NextCell = 1220,

	FP_NextCellInRow = 1202,

	FP_NextCellInTbl = 1199,

	FP_NextCharFmtInDoc = 603,

	FP_NextColorInDoc = 1455,

	FP_NextColumnInTbl = 2430,

	FP_NextCombinedFontDefnInDoc = 2281,

	FP_NextCommandInSession = 1942,

	FP_NextComponentInBook = 527,

	FP_NextCondFmtInDoc = 1138,

	FP_NextDITAConrefElementInDoc = 2866,

	FP_NextDITALinkElementInDoc = 2868,

	FP_NextDITATopicrefElementInDoc = 2869,

	FP_NextDITATopicsetrefElementInDoc = 2870,

	FP_NextDITAXrefElementInDoc = 2867,

	FP_NextElementDFS = 2334,

	FP_NextElementDefInDoc = 1572,

	FP_NextFlowInDoc = 1162,

	FP_NextFmtChangeListInDoc = 2000,

	FP_NextFn = 1005,

	FP_NextFnInDoc = 1003,

	FP_NextGraphicInDoc = 786,

	FP_NextGraphicInFrame = 776,

	FP_NextGraphicInGroup = 779,

	FP_NextGraphicsFmtInDoc = 3102,

	FP_NextInlineComponentInDoc = 2898,

	FP_NextInvalidElement = 1664,

	FP_NextKeyCatalogInSession = 2852,

	FP_NextMarkerInDoc = 1026,

	FP_NextMarkerTypeInDoc = 1028,

	FP_NextMenuItemInMenu = 1923,

	FP_NextMenuItemInSession = 1925,

	FP_NextOpenBookInSession = 490,

	FP_NextOpenDocInSession = 111,

	FP_NextPgfFmtInDoc = 580,

	FP_NextPgfInDoc = 716,

	FP_NextPgfInFlow = 717,

	FP_NextRowInTbl = 1245,

	FP_NextRubiInDoc = 1469,

	FP_NextRulingFmtInDoc = 1430,

	FP_NextSelectedComponentInBook = 530,

	FP_NextSelectedGraphicInDoc = 785,

	FP_NextSiblingElement = 1626,

	FP_NextSubCol = 2202,

	FP_NextTag = 552,

	FP_NextTblFmtInDoc = 1276,

	FP_NextTblInDoc = 1337,

	FP_NextTextFrameInFlow = 981,

	FP_NextTiInDoc = 2050,

	FP_NextVarFmtInDoc = 1051,

	FP_NextVarInDoc = 1046,

	FP_NextVisibleColumnInTbl = 2432,

	FP_NextXRefFmtInDoc = 1074,

	FP_NextXRefInDoc = 1072,

	FP_No3DInPDF = 2406,

	FP_NoAppOutputPIFiltered = 2884,

	FP_NoFlashInPDF = 2405,

	FP_NoMultiMediaInPDF = 2831,

	FP_NotLoaded = 2853,

	FP_NumAtEnd = 563,

	FP_NumCols = 235,

	FP_NumColumns = 984,

	FP_NumItems = 1707,

	FP_NumLines = 1704,

	FP_NumNamespaces = 1645,

	FP_NumPoints = 907,

	FP_NumTabs = 573,

	FP_Numbers = 338,

	FP_Object = 1630,

	FP_ObjectAttributes = 23,

	FP_ObjectFmtRules = 1583,

	FP_OldTypeNum = 1024,

	FP_OpenAndSaveXmlBookComponentDoc = 822,

	FP_OpenDir = 80,

	FP_OperatingSystem = 46,

	FP_OptJLetSpace = 595,

	FP_OptJRomSpace = 592,

	FP_OptSpace = 557,

	FP_OriginalDpi = 2397,

	FP_OriginalHeight = 2381,

	FP_OriginalWidth = 2382,

	FP_OrphanRows = 1291,

	FP_Outline = 612,

	FP_Overflowed = 983,

	FP_Overline = 610,

	FP_Overprint = 756,

	FP_OyamojiTextRange = 1470,

	FP_PDFAllNamedDestinations = 2257,

	FP_PDFBookmark = 2261,

	FP_PDFBookmarksOpenLevel = 2275,

	FP_PDFConvertCMYKtoRGB = 2274,

	FP_PDFDestsMarked = 2258,

	FP_PDFDistillerAbsent = 2276,

	FP_PDFDocInfo = 2260,

	FP_PDFEndPage = 2273,

	FP_PDFGenerateForReview = 2279,

	FP_PDFJobOption = 2263,

	FP_PDFJobOptions = 2899,

	FP_PDFJobOptionsAbsent = 2277,

	FP_PDFOpenPage = 2264,

	FP_PDFPageHeight = 2270,

	FP_PDFPageNum = 2402,

	FP_PDFPageWidth = 2269,

	FP_PDFPrintPageRange = 2271,

	FP_PDFRegistrationMarks = 2268,

	FP_PDFSeparateFiles = 2267,

	FP_PDFStartPage = 2272,

	FP_PDFStructure = 2259,

	FP_PDFStructureLevel = 600,

	FP_PDFViewPDF = 2278,

	FP_PDFZoomFactor = 2266,

	FP_PDFZoomType = 2265,

	FP_PageBackground = 689,

	FP_PageFrame = 695,

	FP_PageFramePage = 880,

	FP_PageHeight = 692,

	FP_PageIsRecto = 697,

	FP_PageNext = 694,

	FP_PageNum = 687,

	FP_PageNumComputeMethod = 524,

	FP_PageNumString = 696,

	FP_PageNumStyle = 225,

	FP_PagePrefix = 521,

	FP_PagePrev = 693,

	FP_PageRounding = 229,

	FP_PageSide = 523,

	FP_PageSuffix = 522,

	FP_PageWidth = 691,

	FP_PairKern = 614,

	FP_Pantone = 1456,

	FP_ParentElement = 1622,

	FP_ParentTextFrame = 2200,

	FP_ParseFullSpecification = 2163,

	FP_ParsedGeneralRule = 1592,

	FP_ParsedSpecification = 2160,

	FP_PasswordStyle = 1714,

	FP_Path = 85,

	FP_Pen = 742,

	FP_PercentDone = 104,

	FP_PgfAlignment = 547,

	FP_PgfBoxColor = 2364,

	FP_PgfCatalogReference = 2001,

	FP_PgfIsAutoNum = 562,

	FP_PgfMarkedForNamedDestination = 722,

	FP_PgfNumComputeMethod = 525,

	FP_PgfNumber = 719,

	FP_PgfSpacingFactor = 989,

	FP_PgfSpellChecked = 720,

	FP_PgfSplit = 721,

	FP_Placement = 579,

	FP_Platform = 45,

	FP_PointPageNum = 688,

	FP_PointPageNumStyle = 228,

	FP_Points = 908,

	FP_PolyIsBezier = 906,

	FP_Position = 620,

	FP_PrefixRules = 1587,

	FP_PreserveFormattingInXml = 2368,

	FP_PrevAFrame = 884,

	FP_PrevBookComponentInDFSOrder = 2340,

	FP_PrevCell = 1219,

	FP_PrevCellInRow = 1201,

	FP_PrevColumnInTbl = 2429,

	FP_PrevComponentInBook = 526,

	FP_PrevElementDFS = 2335,

	FP_PrevFn = 1004,

	FP_PrevGraphicInFrame = 775,

	FP_PrevGraphicInGroup = 778,

	FP_PrevMenuItemInMenu = 1924,

	FP_PrevPgfInFlow = 718,

	FP_PrevRowInTbl = 1244,

	FP_PrevSiblingElement = 1625,

	FP_PrevSubCol = 2201,

	FP_PrevTextFrameInFlow = 980,

	FP_PrevVisibleColumnInTbl = 2431,

	FP_PreviewState = 2820,

	FP_PrintBlankPages = 467,

	FP_PrintCollated = 446,

	FP_PrintCols = 441,

	FP_PrintDitavalFileName = 2343,

	FP_PrintDownloadAsianFonts = 501,

	FP_PrintDownloadTrueTypeAsType1 = 502,

	FP_PrintEmulsion = 466,

	FP_PrintEndPage = 453,

	FP_PrintEndPageName = 440,

	FP_PrintEndPoint = 454,

	FP_PrintEvenPages = 455,

	FP_PrintFileName = 451,

	FP_PrintImaging = 465,

	FP_PrintInclude = 519,

	FP_PrintLastSheetFirst = 456,

	FP_PrintLowRes = 447,

	FP_PrintManualFeed = 458,

	FP_PrintNumCopies = 459,

	FP_PrintOddPages = 445,

	FP_PrintPaperHeight = 462,

	FP_PrintPaperWidth = 461,

	FP_PrintRegMarkDate = 469,

	FP_PrintRegistrationMarks = 457,

	FP_PrintRows = 442,

	FP_PrintScale = 450,

	FP_PrintScope = 452,

	FP_PrintSeps = 463,

	FP_PrintSpotBW = 498,

	FP_PrintStartPage = 443,

	FP_PrintStartPageName = 439,

	FP_PrintStartPoint = 444,

	FP_PrintThumbnails = 448,

	FP_PrintToFile = 460,

	FP_PrintTomboMarks = 468,

	FP_PrinterName = 449,

	FP_ProcessNumber = 79,

	FP_Product = 1944,

	FP_ProductFamily = 2893,

	FP_ProductIsDemo = 66,

	FP_ProductIsStructured = 65,

	FP_ProductName = 42,

	FP_ProgId = 2421,

	FP_Public = 1030,

	FP_Radius = 950,

	FP_RasterFilterDpi = 2400,

	FP_ReadOnly = 1723,

	FP_RectangleIsSmoothed = 929,

	FP_Reformatting = 91,

	FP_RememberMissingFontNames = 61,

	FP_RemoveExtraWhiteSpacesOnXMLImport = 2830,

	FP_Required = 1032,

	FP_ReservedColor = 1463,

	FP_ResizeGripperBarVisibility = 2395,

	FP_ResizeGripperPos = 2350,

	FP_ResolvedDirection = 3038,

	FP_RestartFrameAlertRequired = 2370,

	FP_RetainUndoState = 64,

	FP_ReviewTime = 994,

	FP_ReviewerName = 993,

	FP_ReviewerNameList = 2825,

	FP_RightColNum = 1344,

	FP_RightIndent = 570,

	FP_RightIndentChange = 2006,

	FP_RightMargin = 233,

	FP_RightMasterPage = 414,

	FP_RowIsShown = 1254,

	FP_RowKeepWithNext = 1248,

	FP_RowKeepWithPrev = 1249,

	FP_RowMaxHeight = 1250,

	FP_RowMinHeight = 1251,

	FP_RowStart = 1252,

	FP_RowTbl = 1246,

	FP_RowType = 1253,

	FP_RpcProgramNumber = 77,

	FP_RpcPropertyName = 76,

	FP_RubiAlignAtLineBounds = 193,

	FP_RubiElement = 2176,

	FP_RubiFixedSize = 187,

	FP_RubiOverhang = 192,

	FP_RubiSize = 186,

	FP_RubiTextRange = 1471,

	FP_RuleClauseType = 2152,

	FP_RulingGap = 1433,

	FP_RulingLines = 1435,

	FP_RulingPenWidth = 1432,

	FP_RulingSep = 1434,

	FP_RunInSeparator = 578,

	FP_Runaround = 787,

	FP_RunaroundGap = 754,

	FP_ScreenCaptureDocToFile = 195,

	FP_ScreenHeight = 36,

	FP_ScreenWidth = 35,

	FP_ScreenX = 33,

	FP_ScreenY = 34,

	FP_SecNumComputeMethod = 915,

	FP_SectionNumStyle = 916,

	FP_SectionNumText = 918,

	FP_SectionNumber = 917,

	FP_SelectedRow = 1730,

	FP_SelectedRowId = 1731,

	FP_SelectedRowItems = 1719,

	FP_SelectedTbl = 129,

	FP_Sensitivity = 1708,

	FP_SepOverride = 1140,

	FP_SeparateInclusions = 1493,

	FP_ServerState = 2808,

	FP_ServerUrl = 2807,

	FP_Shadow = 613,

	FP_ShiftOrUnshiftCommand = 1940,

	FP_ShowAll = 155,

	FP_ShowCondIndicators = 156,

	FP_ShowElementDescriptiveNames = 1501,

	FP_SideHeadGap = 1173,

	FP_SideHeadPlacement = 1171,

	FP_SideHeadRoomInFlow = 1174,

	FP_SideHeadWidth = 1172,

	FP_SideOffset = 877,

	FP_Size = 1712,

	FP_SkipBlankSeps = 464,

	FP_SmallCapsSize = 182,

	FP_SmallCapsStretch = 185,

	FP_SmartQuotes = 237,

	FP_SmartSpaces = 239,

	FP_Snap = 151,

	FP_SnapAngle = 394,

	FP_SnapGridUnits = 393,

	FP_SortingEnabled = 1718,

	FP_Source = 2854,

	FP_SourceType = 2855,

	FP_SpaceAbove = 553,

	FP_SpaceAboveChange = 2002,

	FP_SpaceBelow = 568,

	FP_SpaceBelowChange = 2003,

	FP_Spacing = 1167,

	FP_Specification = 2150,

	FP_SpecificationForCSS = 2161,

	FP_SpecifiedKeyCatalog = 2858,

	FP_SpotColorView = 392,

	FP_Spread = 618,

	FP_SpreadChange = 2013,

	FP_StackWarningLevel = 2404,

	FP_Start = 567,

	FP_State = 1702,

	FP_StatusLine = 108,

	FP_StopCountingAt = 2102,

	FP_Stretch = 643,

	FP_StretchChange = 2026,

	FP_Strikethrough = 609,

	FP_Strings = 337,

	FP_StructAppAttrConfigFile = 1500,

	FP_StructAppsFile = 2889,

	FP_StructAppsFileId = 2890,

	FP_StructureCursorTypes = 2296,

	FP_StructuredApplication = 1495,

	FP_StructuredApplicationForOpen = 1498,

	FP_StructuredApplicationList = 1497,

	FP_StructuredDummyDocText = 2883,

	FP_StyleOverride = 1142,

	FP_StyleOverrides = 1151,

	FP_StyleTag = 770,

	FP_SubFmtRule = 2156,

	FP_SubScriptShift = 181,

	FP_SubScriptSize = 180,

	FP_SubScriptStretch = 184,

	FP_SubsecNumComputeMethod = 815,

	FP_SubsectionNumStyle = 816,

	FP_SubsectionNumText = 818,

	FP_SubsectionNumber = 817,

	FP_SuffixRules = 1588,

	FP_SuperScriptShift = 179,

	FP_SuperScriptSize = 178,

	FP_SuperScriptStretch = 183,

	FP_SuppressXMLParserWarnings = 2419,

	FP_Symbols = 334,

	FP_SymbolsList = 335,

	FP_SystemVar = 1049,

	FP_TabStops = 1715,

	FP_TableTagging = 1585,

	FP_Tabs = 574,

	FP_TailArrow = 744,

	FP_TblAlignment = 1282,

	FP_TblBodyElement = 2174,

	FP_TblBodyFirstColor = 1299,

	FP_TblBodyFirstFill = 1298,

	FP_TblBodyFirstPeriod = 1301,

	FP_TblBodyNextColor = 1304,

	FP_TblBodyNextFill = 1302,

	FP_TblBodyNextPeriod = 1303,

	FP_TblBodyRowRuling = 1310,

	FP_TblBodyRowRulingPeriod = 1294,

	FP_TblBodyShadeBy = 1300,

	FP_TblBottomRuling = 1306,

	FP_TblCatalogEntry = 1292,

	FP_TblCellBottomMargin = 1316,

	FP_TblCellLeftMargin = 1317,

	FP_TblCellRightMargin = 1318,

	FP_TblCellTopMargin = 1315,

	FP_TblColRuling = 1309,

	FP_TblColRulingPeriod = 1293,

	FP_TblColWidths = 1345,

	FP_TblElement = 2171,

	FP_TblFnCellPosition = 318,

	FP_TblFnCellPrefix = 320,

	FP_TblFnCellSuffix = 319,

	FP_TblFnCustNumString = 317,

	FP_TblFnFmt = 315,

	FP_TblFnNumComputeMethod = 324,

	FP_TblFnNumStyle = 316,

	FP_TblFnPosition = 321,

	FP_TblFnPrefix = 322,

	FP_TblFnSuffix = 323,

	FP_TblFooterElement = 2175,

	FP_TblHFColor = 1297,

	FP_TblHFFill = 1296,

	FP_TblHFRowRuling = 1312,

	FP_TblHFSeparatorRuling = 1311,

	FP_TblHeaderElement = 2173,

	FP_TblInLockedTi = 1319,

	FP_TblInitNumBodyRows = 1286,

	FP_TblInitNumCols = 1284,

	FP_TblInitNumFRows = 1287,

	FP_TblInitNumHRows = 1285,

	FP_TblLastBodyRuling = 1295,

	FP_TblLeftIndent = 1278,

	FP_TblLeftRuling = 1307,

	FP_TblNumCols = 1335,

	FP_TblNumRows = 1336,

	FP_TblNumbering = 1288,

	FP_TblOtherBodyRowRuling = 1313,

	FP_TblOtherColRuling = 1314,

	FP_TblPlacement = 1283,

	FP_TblRightIndent = 1279,

	FP_TblRightRuling = 1308,

	FP_TblSpaceAbove = 1280,

	FP_TblSpaceBelow = 1281,

	FP_TblTag = 1275,

	FP_TblTitleElement = 2172,

	FP_TblTitleGap = 1290,

	FP_TblTitlePosition = 1289,

	FP_TblTitleSelected = 1346,

	FP_TblTopRuling = 1305,

	FP_TblWidth = 1340,

	FP_TechSuiteInternal = 2409,

	FP_TechSuiteInternal2 = 2411,

	FP_TemplateDatas = 4007,

	FP_Text = 1701,

	FP_TextColor = 1503,

	FP_TextFmtRules = 1582,

	FP_TextIsInvalidInElement = 1660,

	FP_TextLineType = 1095,

	FP_TextLoc = 879,

	FP_TextRange = 1071,

	FP_TextSelection = 109,

	FP_Theta = 831,

	FP_TiAutomaticUpdate = 2051,

	FP_TiByRows = 2069,

	FP_TiClientData = 2079,

	FP_TiClientName = 2076,

	FP_TiClientSource = 2077,

	FP_TiClientType = 2078,

	FP_TiClientUpdateSilent = 2080,

	FP_TiEOLisEOP = 2065,

	FP_TiFile = 2053,

	FP_TiFileModDate = 2057,

	FP_TiFlowName = 2060,

	FP_TiFlowPageSpace = 2061,

	FP_TiFormat = 2062,

	FP_TiHeadersEmpty = 2068,

	FP_TiIsNested = 2058,

	FP_TiIsUnresolved = 2075,

	FP_TiLocked = 2056,

	FP_TiMacEdition = 2054,

	FP_TiMainFlow = 2059,

	FP_TiNumCols = 2072,

	FP_TiNumHeaderRows = 2067,

	FP_TiNumSeparators = 2071,

	FP_TiRemoveOverrides = 2064,

	FP_TiRemovePageBreaks = 2063,

	FP_TiSeparator = 2070,

	FP_TiTblTag = 2066,

	FP_TiTextEncoding = 2073,

	FP_TintBaseColor = 1467,

	FP_TintPercent = 755,

	FP_TmpDir = 86,

	FP_ToolBar = 95,

	FP_ToolTipText = 1727,

	FP_TopMargin = 230,

	FP_TopRowSelection = 1341,

	FP_TopSepAtIndent = 2009,

	FP_TopSeparator = 554,

	FP_TopicRefAbsoluteFilePath = 2347,

	FP_TrackChangesAddedColor = 2826,

	FP_TrackChangesDeletedColor = 2827,

	FP_TrackChangesOn = 2819,

	FP_Transient = 1031,

	FP_TrapwiseCompatibility = 495,

	FP_Tsume = 649,

	FP_TypeOfDisplayText = 500,

	FP_UIColorBackground = 2297,

	FP_UIColorRuler = 2298,

	FP_Underlining = 608,

	FP_UndoFDKRecording = 2403,

	FP_Unique = 21,

	FP_Untouchable = 146,

	FP_UpdatingStructure = 2888,

	FP_UseAFrameIsCropped = 3015,

	FP_UseAFrameIsFloating = 3014,

	FP_UseAlignment = 3018,

	FP_UseAnchorType = 3013,

	FP_UseAngle = 3007,

	FP_UseBaselineOffset = 3017,

	FP_UseBkColor = 991,

	FP_UseBorderWidth = 3001,

	FP_UseCapitalization = 636,

	FP_UseChangeBar = 628,

	FP_UseColGapWidth = 3020,

	FP_UseColor = 638,

	FP_UseColumnsAreBalanced = 3028,

	FP_UseDTheta = 3024,

	FP_UseFMConsoleForErrorLog = 825,

	FP_UseFill = 3002,

	FP_UseFlowIsAutoConnect = 3031,

	FP_UseFlowIsPostScript = 3032,

	FP_UseFontAngle = 624,

	FP_UseFontFamily = 621,

	FP_UseFontSize = 632,

	FP_UseFontVariation = 622,

	FP_UseFontWeight = 623,

	FP_UseHeight = 3011,

	FP_UseInitialStructure = 1492,

	FP_UseInitialStructureOfAutoInsertedElements = 1499,

	FP_UseInsetDpi = 3027,

	FP_UseKernX = 633,

	FP_UseKernY = 634,

	FP_UseLanguage = 645,

	FP_UseLocX = 3008,

	FP_UseLocY = 3009,

	FP_UseMathMLApplyPgfStyle = 3104,

	FP_UseMathMLComposeDpi = 3033,

	FP_UseMathMLDpi = 3035,

	FP_UseMathMLFontSize = 3034,

	FP_UseMathMLInline = 3103,

	FP_UseMathSize = 3026,

	FP_UseNextTag = 566,

	FP_UseNumColumns = 3019,

	FP_UseOutline = 629,

	FP_UseOverline = 627,

	FP_UseOverprint = 3006,

	FP_UsePairKern = 631,

	FP_UsePen = 3003,

	FP_UsePosition = 637,

	FP_UseRadius = 3030,

	FP_UseRunaround = 3012,

	FP_UseRunaroundGap = 3004,

	FP_UseSepOverride = 1141,

	FP_UseShadow = 630,

	FP_UseSideHeadGap = 3022,

	FP_UseSideHeadPlacement = 3029,

	FP_UseSideHeadWidth = 3021,

	FP_UseSideOffset = 3016,

	FP_UseSpread = 635,

	FP_UseStretch = 644,

	FP_UseStrikethrough = 626,

	FP_UseTextLineType = 3025,

	FP_UseTheta = 3023,

	FP_UseTintPercent = 3005,

	FP_UseTsume = 650,

	FP_UseUnderlining = 625,

	FP_UseWidth = 3010,

	FP_UserHomeDir = 84,

	FP_UserLogin = 83,

	FP_UserName = 82,

	FP_UserSettingsDir = 152,

	FP_UserString = 22,

	FP_ValidHighestLevel = 1574,

	FP_Validating = 94,

	FP_ValidationFlags = 1668,

	FP_VarFmt = 1047,

	FP_Variables = 336,

	FP_VersionDescription = 1512,

	FP_VersionMajor = 43,

	FP_VersionMinor = 44,

	FP_VersionRevision = 41,

	FP_VerticalSpreadLarge = 345,

	FP_VerticalSpreadMed = 344,

	FP_VerticalSpreadSmall = 343,

	FP_View = 1945,

	FP_ViewBorders = 382,

	FP_ViewBreadCrumbs = 2902,

	FP_ViewDisplayUnits = 390,

	FP_ViewFontSizeUnits = 396,

	FP_ViewGrid = 389,

	FP_ViewGridUnits = 386,

	FP_ViewHotspotIndicators = 2357,

	FP_ViewLinkBoundaries = 395,

	FP_ViewNoGraphics = 384,

	FP_ViewOnlyDeadCodes = 140,

	FP_ViewOnlyMenuBar = 144,

	FP_ViewOnlySelect = 139,

	FP_ViewOnlyWinBorders = 136,

	FP_ViewOnlyWinMenubar = 135,

	FP_ViewOnlyWinPalette = 134,

	FP_ViewOnlyWinPopup = 137,

	FP_ViewOnlyXRef = 138,

	FP_ViewPageScrolling = 385,

	FP_ViewRulerUnits = 391,

	FP_ViewRulers = 383,

	FP_ViewTextSymbols = 388,

	FP_Visibility = 1713,

	FP_VisualCaretMovement = 1511,

	FP_VolNumComputeMethod = 211,

	FP_VolumeNumStyle = 213,

	FP_VolumeNumText = 214,

	FP_VolumeNumber = 212,

	FP_WesternFamily = 2284,

	FP_WesternFontPanoseName = 648,

	FP_WesternFontPlatformName = 646,

	FP_WesternFontPostScriptName = 647,

	FP_WesternShift = 2286,

	FP_WesternSize = 2285,

	FP_WideRubiSpaceForJapanese = 189,

	FP_WideRubiSpaceForOther = 191,

	FP_Width = 783,

	FP_Window = 1946,

	FP_WindowHandle = 1717,

	FP_WindowSystem = 47,

	FP_XMLStructuredApplicationList = 1598,

	FP_XRefAltText = 1153,

	FP_XRefClientName = 1154,

	FP_XRefClientType = 1155,

	FP_XRefFile = 1070,

	FP_XRefFmt = 1073,

	FP_XRefIsUnresolved = 1077,

	FP_XRefResolvedWithKeyref = 1156,

	FP_XRefRetainKeydefText = 1157,

	FP_XRefSrcElemNonUniqueId = 1152,

	FP_XRefSrcIsElem = 1076,

	FP_XRefSrcText = 1075,

	FP_XSLTProcessors = 1506,

	FP_XSLTTransformationScenarioFile = 1505,

	FP_XmlApplicationForBookComponent = 2330,

	FP_XmlDocType = 2810,

	FP_XmlEncoding = 2801,

	FP_XmlFileEncoding = 2809,

	FP_XmlIsBook = 823,

	FP_XmlLock = 2841,

	FP_XmlPublicId = 2811,

	FP_XmlStandAlone = 2802,

	FP_XmlStyleSheet = 2803,

	FP_XmlStyleSheetList = 2804,

	FP_XmlSystemId = 2812,

	FP_XmlUseBOM = 2805,

	FP_XmlVersion = 2800,

	FP_XmlWellFormed = 2806,

	FP_YakumonoType = 597,

	FP_Year = 1726,

	FP_Yellow = 1459,

	FP_Zoom = 387,

	FR_CancelInsertElementOperation = -10010,

	FR_CancelOperation = -10001,

	FR_ClosedXRefDialog = -10008,

	FR_CommandDisabled = -10022,

	FR_CommandEnabled = -10021,

	FR_DialogStayUp = -10000,

	FR_DisplayedModalDialogForNonContainerElem = -10012,

	FR_DisplayedModelessDialogForNonContainerElem = -10009,

	FR_DisplayedTiDialog = -10002,

	FR_DisplayedXRefDialog = -10007,

	FR_ECMImportSuccess = -10003,

	FR_HideDialogOnClose = -10011,

	FR_KeyCatalogLoaded = -10020,

	FR_ModalCloseAlways = -10024,

	FR_ModalStayUp = -10000,

	FR_NoOperation = -10006,

	FR_SkipStep = -10004,

	FR_USE_EGREP = 3,

	FR_USE_GREP = 2,

	FR_USE_PERL = 1,

	FR_UpdateDITAReferenceFailed = -10014,

	FR_UpdateDITAReferenceFailedCannotConvertToFMObject = -10019,

	FR_UpdateDITAReferenceFailedCannotFindReferencedFile = -10017,

	FR_UpdateDITAReferenceFailedCannotOpenReferencedFile = -10018,

	FR_UpdateDITAReferenceFailedCannotResolveReference = -10016,

	FR_UpdateDITAReferenceFailedErrorImportingReferencedFile = -10023,

	FR_UpdateDITAReferenceFailedInvalidElementType = -10015,

	FR_UpdateDITAReferenceSuccess = -10013,

	FR_YesOperation = -10005,

	FS_ActiveConditionalExpression = 6,

	FS_AddEditExpressions = 1,

	FS_AlertUserAboutFailure = 2,

	FS_AllowInconsistentNumProps = 6,

	FS_AllowNonFMFiles = 1,

	FS_AllowViewOnlyFiles = 3,

	FS_ApplyConditionalSettingsShowBookErrorLog = 10,

	FS_ApplyConditionalSettingsToNestedBooks = 9,

	FS_ApplyConditionalSettingsToViewOnlyDoc = 8,

	FS_AutoBackupOnSave = 6,

	FS_BeefyDoc = 32,

	FS_BleedBottom = 41,

	FS_BleedInside = 42,

	FS_BleedMarks = 35,

	FS_BleedOutside = 43,

	FS_BleedTop = 40,

	FS_BookIsInUse = 18,

	FS_CMSId = 48,

	FS_CMSSessionId = 49,

	FS_CellSeparator = 29,

	FS_ClickButton = 14,

	FS_ClientUpdateSilent = 47,

	FS_ColorBars = 36,

	FS_ConditionalExpressions = 5,

	FS_CropMarks = 34,

	FS_DeleteExpressions = 2,

	FS_DisallowBookDoc = 10,

	FS_DisallowBookMIF = 9,

	FS_DisallowDoc = 8,

	FS_DisallowFilterTypes = 11,

	FS_DisallowGraphicTypes = 9,

	FS_DisallowMIF = 7,

	FS_DisallowMacEditions = 10,

	FS_DisallowPlainText = 12,

	FS_DisallowSgml = 33,

	FS_DisallowXml = 43,

	FS_DitaApplyOutputTemaples = 82,

	FS_DitaBookChapterTemplate = 66,

	FS_DitaBookChapterTitleTemplate = 67,

	FS_DitaBookIndexTemplate = 68,

	FS_DitaBookLOFTemplate = 70,

	FS_DitaBookLOTTemplate = 69,

	FS_DitaBookSectionTemplate = 72,

	FS_DitaBookSectionTitleTemplate = 73,

	FS_DitaBookSubsectionTemplate = 74,

	FS_DitaBookSubsectionTitleTemplate = 75,

	FS_DitaBookTOCTemplate = 71,

	FS_DitaBookTitleTemplate = 65,

	FS_DitaCompositeDocTemplate = 30,

	FS_DitaGenerateBookTitlePage = 80,

	FS_DitaGenerateComponentsAtOneLoc = 26,

	FS_DitaGenerateFlatBook = 25,

	FS_DitaGenerateFolderTitlePage = 81,

	FS_DitaGenerateIndex = 77,

	FS_DitaGenerateLOF = 79,

	FS_DitaGenerateLOT = 78,

	FS_DitaGenerateTOC = 76,

	FS_DitaMaxRefLevels = 53,

	FS_DitaOptimizePostProcess = 83,

	FS_DitaPostProcessingOnBook = 27,

	FS_DitaSavePdfViaBook = 28,

	FS_DitavalCondTag = 23,

	FS_DitavalFile = 22,

	FS_DoNotLockFile = 54,

	FS_Doctype = 2,

	FS_DontNotifyAPIClients = 3,

	FS_Export = 4,

	FS_ExportFileName = 1,

	FS_ExportFileTypeHint = 14,

	FS_ExportNativeError = 2,

	FS_ExportObjectId = 7,

	FS_ExportObjectNeedsDpi = 12,

	FS_ExportStatus = 3,

	FS_ExportTextRange = 6,

	FS_ExportType = 5,

	FS_Extension = 5,

	FS_FileIsGraphic = 13,

	FS_FileIsInUse = 17,

	FS_FileIsMakerDoc = 18,

	FS_FileIsOldVersion = 20,

	FS_FileIsSgmlDoc = 32,

	FS_FileIsStructured = 21,

	FS_FileIsText = 16,

	FS_FileIsXmlDoc = 37,

	FS_FileName = 1,

	FS_FileQverwrite = 6,

	FS_FileType = 1,

	FS_FileTypeHint = 34,

	FS_FindCharFmt = 3,

	FS_FindCharTag = 5,

	FS_FindCondTextInCondTags = 13,

	FS_FindCondTextNotInCondTags = 14,

	FS_FindCustomizationFlags = 15,

	FS_FindElementTag = 2,

	FS_FindMarkerOfType = 9,

	FS_FindMarkerText = 10,

	FS_FindNamedVariable = 12,

	FS_FindObject = 8,

	FS_FindPgfTag = 4,

	FS_FindSelection = 19,

	FS_FindStyleTag = 18,

	FS_FindTableTag = 6,

	FS_FindText = 1,

	FS_FindWrap = 16,

	FS_FindXRefWithFormat = 11,

	FS_FitGraphicInSelectedRect = 14,

	FS_FontChangedMetric = 23,

	FS_FontNotFoundInCatalog = 28,

	FS_FontNotFoundInDoc = 22,

	FS_ForceImportAsText = 17,

	FS_ForceOpenAsText = 13,

	FS_FormatImportedText = 22,

	FS_GetCheckBoxState = 3,

	FS_GetDropDownActive = 12,

	FS_GetDropDownLabels = 11,

	FS_GetEditBoxText = 1,

	FS_GetListBoxActive = 9,

	FS_GetListBoxLabels = 7,

	FS_GetListViewRowCheckState = 17,

	FS_GetListViewRowData = 16,

	FS_GetListViewRows = 15,

	FS_GetRadioState = 5,

	FS_GraphicDpi = 15,

	FS_HasUnsupportedHotspotShapes = 29,

	FS_HideConditions = 3,

	FS_HowToImport = 4,

	FS_ImportAsType = 36,

	FS_ImportExportVersion = 17,

	FS_ImportFlowPageSpace = 21,

	FS_ImportFlowTag = 20,

	FS_ImportNativeError = 2,

	FS_ImportStatus = 3,

	FS_ImportTblTag = 25,

	FS_ImportedFileName = 1,

	FS_InsetData = 50,

	FS_InsetElementDef = 52,

	FS_IsErrorDoc = 46,

	FS_IterParamGetBookComponentFolder = 4,

	FS_IterParamGetBookComponentGroup = 5,

	FS_IterParamGetBookComponentRefBook = 6,

	FS_IterParamGetBookComponentRefMap = 7,

	FS_IterParamGetMapRef = 12,

	FS_IterParamParseBookInBook = 1,

	FS_IterParamParseMapInBook = 2,

	FS_IterParamParseMapInMap = 8,

	FS_IterParamSkipExcludedBookComponents = 3,

	FS_IterParamSkipNonPrintTopicrefs = 10,

	FS_IterParamSkipResourceOnlyTopicrefs = 9,

	FS_IterParamSkipTopicsetrefs = 11,

	FS_IteratorItemFieldBookId = 1,

	FS_IteratorItemFieldDocId = 2,

	FS_IteratorItemFieldObjId = 3,

	FS_IteratorItemMaxFields = 3,

	FS_LanguageNotAvailable = 25,

	FS_LeaveHeadingRowsEmpty = 27,

	FS_LockCantBeReset = 19,

	FS_MakeIconic = 6,

	FS_MakePageCount = 7,

	FS_MakeVisible = 5,

	FS_ManualUpdate = 5,

	FS_MappingFile = 53,

	FS_MarksOffset = 39,

	FS_MarksWeight = 38,

	FS_MathMLExportEntityAsValue = 2,

	FS_MathMLNamespacePrefix = 1,

	FS_ModDateChanged = 21,

	FS_NameStripe = 31,

	FS_NewDoc = 29,

	FS_NoStructuredErrorLog = 44,

	FS_NumCellSeparators = 30,

	FS_NumColumns = 31,

	FS_NumConditionalSettingsParams = 10,

	FS_NumExportParams = 17,

	FS_NumExportReturnParams = 3,

	FS_NumImportParams = 48,

	FS_NumImportReturnParams = 3,

	FS_NumIteratorParams = 12,

	FS_NumManageConditionalExpressionsParams = 2,

	FS_NumNewXMLParams = 6,

	FS_NumOpenParams = 54,

	FS_NumOpenReturnParams = 3,

	FS_NumSaveParams = 83,

	FS_NumSaveReturnParams = 3,

	FS_NumSpellParams = (1007 - 1000 + 1),

	FS_NumUpdateBookParams = 14,

	FS_NumUpdateBookReturnParams = 1,

	FS_OpenAsType = 41,

	FS_OpenBookViewOnly = 42,

	FS_OpenDocFluid = 37,

	FS_OpenDocViewOnly = 30,

	FS_OpenFileNotWritable = 40,

	FS_OpenId = 27,

	FS_OpenInNewWindow = 26,

	FS_OpenNativeError = 2,

	FS_OpenOldVersionFiles = 13,

	FS_OpenStatus = 3,

	FS_OpenedFileName = 1,

	FS_OutputFilePathName = 1006,

	FS_PDFColorSpace = 55,

	FS_PDFCompatibility = 47,

	FS_PDFEmbedPageThumbnails = 57,

	FS_PDFLayout = 50,

	FS_PDFOpenPage = 48,

	FS_PDFOptimizedWebView = 58,

	FS_PDFPageNum = 45,

	FS_PDFPageRangeEnd = 54,

	FS_PDFPageRangeStart = 53,

	FS_PDFPages = 52,

	FS_PDFPassword = 33,

	FS_PDFPreset = 45,

	FS_PDFPrimaryOutput = 51,

	FS_PDFStandard = 46,

	FS_PDFTag = 56,

	FS_PDFUseDistiller = 60,

	FS_PDFView = 59,

	FS_PDFZoom = 49,

	FS_PageHeight = 63,

	FS_PageInfo = 37,

	FS_PageWidth = 64,

	FS_PublicId = 3,

	FS_PublishLogFilePath = 84,

	FS_QrCodeType = 2,

	FS_QrCodeTypeParams = 3,

	FS_QrDocGraphicsDpi = 5,

	FS_QrImageDimensions = 4,

	FS_RasterDpi = 38,

	FS_RasterImageHeight = 40,

	FS_RasterImageWidth = 39,

	FS_RefFileNotFound = 24,

	FS_RegMarks = 62,

	FS_RegexFlavour = 17,

	FS_RemoveManualPageBreaks = 23,

	FS_RemoveOverrides = 24,

	FS_RetainNameStripe = 12,

	FS_SaveAsModeName = 5,

	FS_SaveFileNotWritable = 20,

	FS_SaveFileTypeHint = 16,

	FS_SaveMode = 4,

	FS_SaveNativeError = 2,

	FS_SaveStatus = 3,

	FS_SaveTextExtraBlankLineAtEOP = 10,

	FS_SaveTextTblSetting = 9,

	FS_SavedFileName = 1,

	FS_SelectListViewRows = 19,

	FS_SetCheckBoxState = 4,

	FS_SetDropDownActive = 13,

	FS_SetEditBoxText = 2,

	FS_SetListBoxActive = 10,

	FS_SetListBoxLabels = 8,

	FS_SetListViewRowCheckState = 18,

	FS_SetRadioState = 6,

	FS_SgmlBookFileName = 39,

	FS_ShowBookErrorLog = 4,

	FS_ShowBookErrorLogPublishing = 32,

	FS_ShowBrowser = 1,

	FS_ShowConditionIndicators = 7,

	FS_ShowConditions = 2,

	FS_ShowIfAllCond = 4,

	FS_ShowProgressBar = 31,

	FS_ShowRasterDpiDialog = 41,

	FS_ShowSaveTextDialog = 8,

	FS_ShowState = 1,

	FS_SilentlyDisallowXML = 51,

	FS_SlugArea = 61,

	FS_SpellAction = 1005,

	FS_SpellOptions = 1000,

	FS_SpellWrap = 1007,

	FS_StructuredApplication = 1,

	FS_StructuredExportApplication = 16,

	FS_StructuredImportApplication = 35,

	FS_StructuredOpenApplication = 38,

	FS_StructuredSaveApplication = 18,

	FS_SystemId = 4,

	FS_TblNumHeadingRows = 26,

	FS_TemplateShouldInsertRoot = 47,

	FS_TextAfterString = 1003,

	FS_TextBeforeString = 1002,

	FS_TextInsetName = 6,

	FS_TreatParaAsRow = 28,

	FS_TwoInARowString = 1001,

	FS_UNIXpermissions = 13,

	FS_UpdateBookGeneratedFiles = 7,

	FS_UpdateBookInlineComponents = 14,

	FS_UpdateBookMasterPages = 12,

	FS_UpdateBookNumbering = 8,

	FS_UpdateBookOleLinks = 9,

	FS_UpdateBookStatus = 1,

	FS_UpdateBookTextReferences = 10,

	FS_UpdateBookXRefs = 11,

	FS_UpdateBrowserDirectory = 4,

	FS_UpdateFRVList = 14,

	FS_UpdateMTOC = 52,

	FS_UpdateTemplateData = 50,

	FS_UpdateTextReferences = 35,

	FS_UpdateXRefs = 36,

	FS_UseAutoSaveFile = 15,

	FS_UseDefaultUNIXpermissions = 11,

	FS_UseHTTP = 51,

	FS_UseMainFlow = 19,

	FS_UseRecoverFile = 14,

	FS_VerifyInsets = 45,

	FS_Visible = 6,

	FS_WordContainString = 1004,

	FTF_ALL = 0xFFFFFE03,

	FTF_ANGLE = 0x10000000,

	FTF_CAPITALIZATION = 0x00004000,

	FTF_CHANGEBAR = 0x01000000,

	FTF_CHARTAG = 0x00008000,

	FTF_COLOR = 0x00010000,

	FTF_CONDITIONTAG = 0x00000001,

	FTF_ENCODING = 0x00000200,

	FTF_FAMILY = 0x80000000,

	FTF_IIF = 0x00000002,

	FTF_KERNX = 0x00080000,

	FTF_KERNY = 0x00040000,

	FTF_LANGUAGE = 0x00000800,

	FTF_OUTLINE = 0x00800000,

	FTF_OVERLINE = 0x02000000,

	FTF_PAIRKERN = 0x00200000,

	FTF_POSITION = 0x00002000,

	FTF_SHADOW = 0x00400000,

	FTF_SIZE = 0x00100000,

	FTF_SPREAD = 0x00020000,

	FTF_STRETCH = 0x00001000,

	FTF_STRIKETHROUGH = 0x04000000,

	FTF_TSUME = 0x00000400,

	FTF_UNDERLINING = 0x08000000,

	FTF_VARIATION = 0x40000000,

	FTF_WEIGHT = 0x20000000,

	FTI2_InlineComponentBegin = 0x80000010,

	FTI2_InlineComponentEnd = 0x80000020,

	FTI2_RubiCompositeBegin = 0x80000004,

	FTI2_RubiCompositeEnd = 0x80000008,

	FTI2_RubiTextBegin = 0x80000001,

	FTI2_RubiTextEnd = 0x80000002,

	FTI_CharPropsChange = 0x00200000,

	FTI_ElemPrefixBegin = 0x08000000,

	FTI_ElemPrefixEnd = 0x10000000,

	FTI_ElemSuffixBegin = 0x20000000,

	FTI_ElemSuffixEnd = 0x40000000,

	FTI_ElementBegin = 0x00080000,

	FTI_ElementEnd = 0x00100000,

	FTI_FlowBegin = 0x00000020,

	FTI_FlowEnd = 0x00000040,

	FTI_FnAnchor = 0x00001000,

	FTI_FrameAnchor = 0x00000800,

	FTI_HardLineEnd = 1,

	FTI_HyphenLineEnd = 2,

	FTI_LineBegin = 0x00000002,

	FTI_LineEnd = 0x00000004,

	FTI_MarkerAnchor = 0x00004000,

	FTI_PageBegin = 0x00000080,

	FTI_PageEnd = 0x00000100,

	FTI_PgfBegin = 0x00000008,

	FTI_PgfEnd = 0x00000010,

	FTI_String = 0x00000001,

	FTI_SubColBegin = 0x00000200,

	FTI_SubColEnd = 0x00000400,

	FTI_TblAnchor = 0x00002000,

	FTI_TextFrameBegin = 0x00400000,

	FTI_TextFrameEnd = 0x00800000,

	FTI_TextInsetBegin = 0x02000000,

	FTI_TextInsetEnd = 0x04000000,

	FTI_TextObjId = 0x01000000,

	FTI_VarBegin = 0x00020000,

	FTI_VarEnd = 0x00040000,

	FTI_XRefBegin = 0x00008000,

	FTI_XRefEnd = 0x00010000,

	FT_AttributeDefs = 17,

	FT_Attributes = 18,

	FT_AttributesEx = 21,

	FT_Bad = 0,

	FT_ElementCatalog = 12,

	FT_ElementRange = 19,

	FT_FormatBranches = 16,

	FT_Id = 4,

	FT_Integer = 1,

	FT_Ints = 13,

	FT_Metric = 2,

	FT_Metrics = 5,

	FT_Num = 23,

	FT_Points = 7,

	FT_String = 3,

	FT_Strings = 6,

	FT_Tabs = 8,

	FT_TemplateDatas = 22,

	FT_TextLoc = 9,

	FT_TextRange = 10,

	FT_UBytes = 14,

	FT_UInts = 15,

	FT_Vals = 20,

	FV_ACCESSBAR_CLOSE = 2,

	FV_ACCESSBAR_OPEN = 1,

	FV_AF_FIXED = 0x0004,

	FV_AF_HIDDEN = 0x0002,

	FV_AF_READ_ONLY = 0x0001,

	FV_ALIGN_CENTER = 1,

	FV_ALIGN_INSIDE = 3,

	FV_ALIGN_LEFT = 0,

	FV_ALIGN_OUTSIDE = 4,

	FV_ALIGN_RIGHT = 2,

	FV_ALIGN_TBL_CENTER = 1,

	FV_ALIGN_TBL_LEFT = 0,

	FV_ALIGN_TBL_RIGHT = 2,

	FV_ALTERNATIVE = 0x04,

	FV_ANCHOR_BELOW = 3,

	FV_ANCHOR_BOTTOM = 4,

	FV_ANCHOR_INLINE = 1,

	FV_ANCHOR_RUN_INTO_PARAGRAPH = 17,

	FV_ANCHOR_SUBCOL_FARTHEST = 8,

	FV_ANCHOR_SUBCOL_INSIDE = 9,

	FV_ANCHOR_SUBCOL_LEFT = 5,

	FV_ANCHOR_SUBCOL_NEAREST = 7,

	FV_ANCHOR_SUBCOL_OUTSIDE = 10,

	FV_ANCHOR_SUBCOL_RIGHT = 6,

	FV_ANCHOR_TEXTFRAME_FARTHEST = 14,

	FV_ANCHOR_TEXTFRAME_INSIDE = 15,

	FV_ANCHOR_TEXTFRAME_LEFT = 11,

	FV_ANCHOR_TEXTFRAME_NEAREST = 13,

	FV_ANCHOR_TEXTFRAME_OUTSIDE = 16,

	FV_ANCHOR_TEXTFRAME_RIGHT = 12,

	FV_ANCHOR_TOP = 2,

	FV_ANSI = 3,

	FV_ARROW_FILLED = 0x3,

	FV_ARROW_HOLLOW = 0x2,

	FV_ARROW_STICK = 0x1,

	FV_ASCII = 2,

	FV_ATTR_DISP_ALL = 3,

	FV_ATTR_DISP_NONE = 1,

	FV_ATTR_DISP_REQSPEC = 2,

	FV_ATTR_EDIT_ALWAYS = 2,

	FV_ATTR_EDIT_NONE = 0,

	FV_ATTR_EDIT_REQUIRED = 1,

	FV_AT_CHOICES = 2,

	FV_AT_INTEGER = 3,

	FV_AT_INTEGERS = 4,

	FV_AT_NUMTYPES = 10,

	FV_AT_REAL = 5,

	FV_AT_REALS = 6,

	FV_AT_STRING = 0,

	FV_AT_STRINGS = 1,

	FV_AT_UNIQUE_ID = 7,

	FV_AT_UNIQUE_IDREF = 8,

	FV_AT_UNIQUE_IDREFS = 9,

	FV_AUTORECOGNIZE = 0x00,

	FV_AV_IDREF_UNRESOLVED = 4,

	FV_AV_ID_DUPLICATE_IN_BOOK = 6,

	FV_AV_ID_DUPLICATE_IN_DOC = 5,

	FV_AV_INVALID_CHOICE = 2,

	FV_AV_INVALID_FORMAT = 3,

	FV_AV_OUT_OF_RANGE = 9,

	FV_AV_REQUIRED = 1,

	FV_AV_TOO_MANY_TOKENS = 7,

	FV_AV_UNDEFINED = 8,

	FV_Above = 1240,

	FV_AlertOneButton = 1,

	FV_AlertThreeButton = 3,

	FV_AlertTwoButton = 2,

	FV_AllElements = 2,

	FV_AllowAllRefFilesUnFindable = 11,

	FV_ApiClientCanceledExport = 34,

	FV_AutoSaveFileUsed = 34,

	FV_BGD_DEFAULT = 0x00,

	FV_BGD_NONE = 0x01,

	FV_BGD_OTHER = 0x02,

	FV_BIG5 = 8,

	FV_BK_BOOK = 0x4,

	FV_BK_BOOKMAP = 0x100,

	FV_BK_DITAMAP = 0x80,

	FV_BK_FILE = 0x200,

	FV_BK_FILENAME = 1,

	FV_BK_FM = 0x8,

	FV_BK_FOLDER = 0x2,

	FV_BK_GENERAL = 0x1,

	FV_BK_GROUP = 0x40,

	FV_BK_INDEX_AUTHOR = 8,

	FV_BK_INDEX_FORMATS = 13,

	FV_BK_INDEX_MARKER = 10,

	FV_BK_INDEX_REFERENCES = 14,

	FV_BK_INDEX_STAN = 7,

	FV_BK_INDEX_SUBJECT = 9,

	FV_BK_LIST_FIGURE = 1,

	FV_BK_LIST_FORMATS = 11,

	FV_BK_LIST_MARKER = 4,

	FV_BK_LIST_MARKER_ALPHA = 5,

	FV_BK_LIST_PGF = 3,

	FV_BK_LIST_PGF_ALPHA = 6,

	FV_BK_LIST_REFERENCES = 12,

	FV_BK_LIST_TABLE = 2,

	FV_BK_MIF = 0x10,

	FV_BK_NOT_GENERATABLE = 16,

	FV_BK_NUM_BOOK_LIST = 15,

	FV_BK_START_FROM_FILE = 0x01,

	FV_BK_START_LEFT = 0x03,

	FV_BK_START_NEXT_AVAILABLE = 0x02,

	FV_BK_START_RIGHT = 0x04,

	FV_BK_TEXT = 2,

	FV_BK_TOC = 0,

	FV_BK_XML = 0x20,

	FV_BODY_PAGE = 0x00,

	FV_BadEnclosingDocId = 28,

	FV_BadExportDocId = 20,

	FV_BadExportFileName = 16,

	FV_BadExportObjectId = 18,

	FV_BadExportScriptValue = 21,

	FV_BadFileId = 35,

	FV_BadFileName = 67,

	FV_BadFileRefsWereMapped = 46,

	FV_BadFileType = 66,

	FV_BadImportFileName = 16,

	FV_BadImportFileType = 17,

	FV_BadImportScriptValue = 18,

	FV_BadSaveFileName = 34,

	FV_BadSaveObjectId = 40,

	FV_BadSaveScriptValue = 36,

	FV_BadScriptValue = 70,

	FV_BadTemplate = 129,

	FV_BadTextFileTypeHint = 29,

	FV_BadUpdateBookFileId = 64,

	FV_BadUpdateBookScriptValue = 65,

	FV_BeefyDoc = 40,

	FV_Below = 1241,

	FV_Body = 1237,

	FV_BodyPage = 10,

	FV_BookNotSelfConsistent = 0,

	FV_BrowseCmsOnly = 0x00020000,

	FV_BrowseLocalOnly = 0x00010000,

	FV_BrowseLocalWithWebdavOnly = 0x00040000,

	FV_CAPITAL_CASE_LOWER = 2,

	FV_CAPITAL_CASE_NORM = 0,

	FV_CAPITAL_CASE_SMALL = 1,

	FV_CAPITAL_CASE_UPPER = 3,

	FV_CAP_BUTT = 0x00,

	FV_CAP_ROUND = 0x01,

	FV_CAP_SQUARE = 0x02,

	FV_CB_COL_FURTHEST = 0x03,

	FV_CB_COL_LEFT = 0x00,

	FV_CB_COL_NEAREST = 0x02,

	FV_CB_COL_RIGHT = 0x01,

	FV_CB_DOUBLE_UNDERLINE = 2,

	FV_CB_NO_UNDERLINE = 0,

	FV_CB_NUMERIC_UNDERLINE = 3,

	FV_CB_SINGLE_UNDERLINE = 1,

	FV_CHAR_CATALOG = 6,

	FV_CMSCheckinUI_Id_CheckinComment = FV_CMSCheckinUI_Id_CheckinComment,

	FV_CMSCheckinUI_Id_Description = FV_CMSCheckinUI_Id_Description,

	FV_CMSCheckinUI_Id_MajorVersion = FV_CMSCheckinUI_Id_MajorVersion,

	FV_CMSCheckinUI_Id_MakeThisCurrentVersion = FV_CMSCheckinUI_Id_MakeThisCurrentVersion,

	FV_CMSCheckinUI_Id_MinorVersion = FV_CMSCheckinUI_Id_MinorVersion,

	FV_CMSCheckinUI_Id_SameVersion = FV_CMSCheckinUI_Id_SameVersion,

	FV_CMSCheckinUI_Id_VersionLabel = FV_CMSCheckinUI_Id_VersionLabel,

	FV_CMSCheckoutUI_Id_ShowDependents = FV_CMSCheckoutUI_Id_ShowDependents,

	FV_CMSCommandAdvancedSearchStringId = FV_CMSCommandAdvancedSearchStringId,

	FV_CMSCommandCheckinCommentId = FV_CMSCommandCheckinCommentId,

	FV_CMSCommandCheckinDescriptionId = FV_CMSCommandCheckinDescriptionId,

	FV_CMSCommandCheckinKeepLocalCopyId = FV_CMSCommandCheckinKeepLocalCopyId,

	FV_CMSCommandCheckinMakeCurrentVersionId = FV_CMSCommandCheckinMakeCurrentVersionId,

	FV_CMSCommandCheckinMinorVersionId = FV_CMSCommandCheckinMinorVersionId,

	FV_CMSCommandCheckinVersionLabelId = FV_CMSCommandCheckinVersionLabelId,

	FV_CMSCommandCheckoutWithDescendentId = FV_CMSCommandCheckoutWithDescendentId,

	FV_CMSCommandConnTypeId = FV_CMSCommandConnTypeId,

	FV_CMSCommandDeleteAllDependentsId = FV_CMSCommandDeleteAllDependentsId,

	FV_CMSCommandDeleteAllVersionId = FV_CMSCommandDeleteAllVersionId,

	FV_CMSCommandFilePathId = FV_CMSCommandFilePathId,

	FV_CMSCommandId = FV_CMSCommandId,

	FV_CMSCommandId_Max = FV_CMSCommandId_Max,

	FV_CMSCommandId_Min = FV_CMSCommandId_Min,

	FV_CMSCommandNameId = FV_CMSCommandNameId,

	FV_CMSCommandOpenReadOnlyId = FV_CMSCommandOpenReadOnlyId,

	FV_CMSCommandPasswordId = FV_CMSCommandPasswordId,

	FV_CMSCommandRefreshDependentsId = FV_CMSCommandRefreshDependentsId,

	FV_CMSCommandRepositoryId = FV_CMSCommandRepositoryId,

	FV_CMSCommandSearchStringId = FV_CMSCommandSearchStringId,

	FV_CMSCommandServerId = FV_CMSCommandServerId,

	FV_CMSCommandSilentOpenId = FV_CMSCommandSilentOpenId,

	FV_CMSCommandUserField1 = FV_CMSCommandUserField1,

	FV_CMSCommandUserField2 = FV_CMSCommandUserField2,

	FV_CMSCommandUserNameId = FV_CMSCommandUserNameId,

	FV_CMSContextMenuId = FV_CMSContextMenuId,

	FV_CMSContextMenuString = FV_CMSContextMenuString,

	FV_CMSDeleteUI_DeleteAllDependents = FV_CMSDeleteUI_DeleteAllDependents,

	FV_CMSDeleteUI_DeleteAllVersion = FV_CMSDeleteUI_DeleteAllVersion,

	FV_CMSItemFileTypeValue_DitaMap = FV_CMSItemFileTypeValue_DitaMap,

	FV_CMSItemFileTypeValue_DitaTopic = FV_CMSItemFileTypeValue_DitaTopic,

	FV_CMSItemFileTypeValue_FmBook = FV_CMSItemFileTypeValue_FmBook,

	FV_CMSItemFileTypeValue_FmDoc = FV_CMSItemFileTypeValue_FmDoc,

	FV_CMSItemFileTypeValue_General = FV_CMSItemFileTypeValue_General,

	FV_CMSItemFileTypeValue_Img = FV_CMSItemFileTypeValue_Img,

	FV_CMSItemFileTypeValue_Max = FV_CMSItemFileTypeValue_Max,

	FV_CMSItemFileTypeValue_Mif = FV_CMSItemFileTypeValue_Mif,

	FV_CMSItemFileTypeValue_Min = FV_CMSItemFileTypeValue_Min,

	FV_CMSItemFileTypeValue_Text = FV_CMSItemFileTypeValue_Text,

	FV_CMSItemFileTypeValue_Xml = FV_CMSItemFileTypeValue_Xml,

	FV_CMSItemTypeValue_File = FV_CMSItemTypeValue_File,

	FV_CMSItemTypeValue_Folder = FV_CMSItemTypeValue_Folder,

	FV_CMSItemTypeValue_General = FV_CMSItemTypeValue_General,

	FV_CMSItemTypeValue_Max = FV_CMSItemTypeValue_Max,

	FV_CMSItemTypeValue_Min = FV_CMSItemTypeValue_Min,

	FV_CMSItemTypeValue_Root = FV_CMSItemTypeValue_Root,

	FV_CMSMajorVersion = FV_CMSMajorVersion,

	FV_CMSMenu_Is_Disabled = FV_CMSMenu_Is_Disabled,

	FV_CMSMenu_Is_Item = FV_CMSMenu_Is_Item,

	FV_CMSMenu_Is_Separator = FV_CMSMenu_Is_Separator,

	FV_CMSMenu_Is_SubMenu = FV_CMSMenu_Is_SubMenu,

	FV_CMSMenu_Max = FV_CMSMenu_Max,

	FV_CMSMenu_Min = FV_CMSMenu_Min,

	FV_CMSMinorVersion = FV_CMSMinorVersion,

	FV_CMSOpChildAdded = FV_CMSOpChildAdded,

	FV_CMSOpDependentsDeleted = FV_CMSOpDependentsDeleted,

	FV_CMSOpDependentsUpdated = FV_CMSOpDependentsUpdated,

	FV_CMSOpDocumentOpened = FV_CMSOpDocumentOpened,

	FV_CMSOpItemDeleted = FV_CMSOpItemDeleted,

	FV_CMSOpItemUpdated = FV_CMSOpItemUpdated,

	FV_CMSOpNone = FV_CMSOpNone,

	FV_CMSOpRootUpdated = FV_CMSOpRootUpdated,

	FV_CMSSameVersion = FV_CMSSameVersion,

	FV_CMSSilentOperation = FV_CMSSilentOperation,

	FV_CMSUserFieldType_Edit = FV_CMSUserFieldType_Edit,

	FV_CMSUserFieldType_FileBrowse = FV_CMSUserFieldType_FileBrowse,

	FV_CMSUserFieldType_FolderBrowse = FV_CMSUserFieldType_FolderBrowse,

	FV_CMSVersion_Max = FV_CMSVersion_Max,

	FV_CMSVersion_Min = FV_CMSVersion_Min,

	FV_CMS_TYPE_DITAEXCHANGE = 0x03,

	FV_CMS_TYPE_DOCUMENTUM = 0x01,

	FV_CMS_TYPE_NONE = 0x00,

	FV_CMS_TYPE_SHAREPOINT = 0x02,

	FV_CN_CHANGEBAR = 5,

	FV_CN_DOUBLE_UNDERLINE = 4,

	FV_CN_NMRIC_AND_CHNGBAR = 7,

	FV_CN_NO_OVERRIDE = 0,

	FV_CN_NUMERIC_UNDERLINE = 6,

	FV_CN_OVERLINE = 1,

	FV_CN_SINGLE_UNDERLINE = 3,

	FV_CN_STRIKETHROUGH = 2,

	FV_COLOR_BLACK = 4,

	FV_COLOR_BLUE = 8,

	FV_COLOR_CYAN = 1,

	FV_COLOR_DARKGREY = 9,

	FV_COLOR_DARKYELLOW = 15,

	FV_COLOR_FORESTGREEN = 11,

	FV_COLOR_GREEN = 7,

	FV_COLOR_KNOCKOUT = 0x00,

	FV_COLOR_LIGHTSALMON = 14,

	FV_COLOR_MAGENTA = 2,

	FV_COLOR_MAUVE = 13,

	FV_COLOR_NOT_RESERVED = 0,

	FV_COLOR_OVERPRINT = 0x01,

	FV_COLOR_PALEGREEN = 10,

	FV_COLOR_RED = 6,

	FV_COLOR_ROYALBLUE = 12,

	FV_COLOR_SALMON = 16,

	FV_COLOR_WHITE = 5,

	FV_COLOR_YELLOW = 3,

	FV_CONTEXT_RULE = 0,

	FV_CS_CHANGEBAR = 0x10,

	FV_CS_DOUBLE_UNDERLINE = 0x08,

	FV_CS_NO_OVERRIDE = 0x00,

	FV_CS_NUMERIC_UNDERLINE = 0x20,

	FV_CS_OVERLINE = 0x01,

	FV_CS_SINGLE_UNDERLINE = 0x04,

	FV_CS_STRIKETHROUGH = 0x02,

	FV_CancelBeefyDoc = 114,

	FV_CancelBook = 108,

	FV_CancelBookMIF = 109,

	FV_CancelFileBrowser = 113,

	FV_CancelFileDoc = 33,

	FV_CancelFileFilterable = 35,

	FV_CancelFileGraphic = 36,

	FV_CancelFileHasStructure = 100,

	FV_CancelFileIsDoc = 106,

	FV_CancelFileIsFilterable = 110,

	FV_CancelFileIsInUse = 99,

	FV_CancelFileIsMIF = 107,

	FV_CancelFileIsMacEdition = 39,

	FV_CancelFileIsOldVersion = 111,

	FV_CancelFileIsSgml = 115,

	FV_CancelFileIsText = 98,

	FV_CancelFileIsXml = 119,

	FV_CancelFileMIF = 34,

	FV_CancelFileSgml = 40,

	FV_CancelFileText = 32,

	FV_CancelFileXml = 41,

	FV_CancelFontMetricsChanged = 104,

	FV_CancelFontsMapped = 103,

	FV_CancelFontsMappedInCatalog = 105,

	FV_CancelFontsWithUnavailableEncodings = 116,

	FV_CancelImportBrowser = 38,

	FV_CancelInconsistentNumPropsInFileInBook = 34,

	FV_CancelLanguagesNotFound = 102,

	FV_CancelNonFMFileInBook = 32,

	FV_CancelOpenFileNotWritable = 117,

	FV_CancelReferencedFilesNotFound = 101,

	FV_CancelSaveExportedFileInvalid = 53,

	FV_CancelSaveFileIsInUse = 50,

	FV_CancelSaveFileNotWritable = 51,

	FV_CancelSaveModDateChanged = 52,

	FV_CancelTempDiskFull = 118,

	FV_CancelUseAutoSaveFile = 97,

	FV_CancelUseRecoverFile = 96,

	FV_CancelViewOnlyFileInBook = 33,

	FV_CancelWrongProduct = 121,

	FV_CancelWrongView = 120,

	FV_CanceledExportObjectNeedsDpi = 33,

	FV_CantForceImportAsText = 20,

	FV_CantForceOpenAsText = 72,

	FV_CantNewBooks = 68,

	FV_CantOpenBooksFluid = 78,

	FV_CantOpenBooksViewOnly = 69,

	FV_ChangePersonalDictionary = 8,

	FV_CheckCurrentPage = 2,

	FV_CheckDocument = 1,

	FV_ChecksumDamage = 77,

	FV_ChooseMultiOpen = 0x00000010,

	FV_ChooseMultiSelect = 0x00000008,

	FV_ChooseOpen = 0x00000001,

	FV_ChooseOpenDir = 0x00000004,

	FV_ChooseSave = 0x00000002,

	FV_ChooseSelect = 0x00000000,

	FV_ClearDocDictionary = 7,

	FV_CmdAlert = 8,

	FV_CmdAlertTitle = 9,

	FV_CmdApplyMathRules = 259,

	FV_CmdBeginRange = 263,

	FV_CmdEndRange = 264,

	FV_CmdError = 1,

	FV_CmdExit = 10,

	FV_CmdFCodes = 256,

	FV_CmdGoToLink = 11,

	FV_CmdGoToLinkFitWin = 12,

	FV_CmdGoToNew = 13,

	FV_CmdGoToObjectId = 15,

	FV_CmdGoToObjectIdFitWin = 16,

	FV_CmdGoToPage = 14,

	FV_CmdHelpLink = 262,

	FV_CmdInCodes = 258,

	FV_CmdMatrix = 17,

	FV_CmdMessage = 18,

	FV_CmdMultiMedia = 33,

	FV_CmdNative = 261,

	FV_CmdNewLink = 19,

	FV_CmdNextPage = 20,

	FV_CmdNoop = 3,

	FV_CmdNotTyped = 0,

	FV_CmdOpenLink = 22,

	FV_CmdOpenLinkFitWin = 23,

	FV_CmdOpenNew = 24,

	FV_CmdOpenObjectId = 25,

	FV_CmdOpenObjectIdFitWin = 26,

	FV_CmdOpenPage = 27,

	FV_CmdOpenXmlElementId = 821,

	FV_CmdOutCodes = 257,

	FV_CmdPopup = 28,

	FV_CmdPreviousLink = 29,

	FV_CmdPreviousLinkFitWin = 30,

	FV_CmdPreviousPage = 21,

	FV_CmdQuit = 31,

	FV_CmdQuitAll = 32,

	FV_CmdThesaurusLookup = 260,

	FV_CmdUnknown = 2,

	FV_DEPENDENCIES_SHOW_PROGRESSBAR = 0x01,

	FV_DIALOG_DOCK_ALL = 0xFF,

	FV_DIALOG_DOCK_BOTTOM = (0x1 << 3),

	FV_DIALOG_DOCK_LEFT = 0x1,

	FV_DIALOG_DOCK_NONE = 0x00,

	FV_DIALOG_DOCK_RIGHT = (0x1 << 1),

	FV_DIALOG_DOCK_TOP = (0x1 << 2),

	FV_DIALOG_GRIPPERBAR_FALSE = 1,

	FV_DIALOG_GRIPPERBAR_TRUE = 0,

	FV_DIALOG_GROUP_ALL = 0xFF,

	FV_DIALOG_GROUP_ALLPANELS = (0x1 << 7),

	FV_DIALOG_GROUP_ATTRIBUTES = (0x1 << 3),

	FV_DIALOG_GROUP_CATALOGS = (0x1 << 1),

	FV_DIALOG_GROUP_DESIGNERS = (0x1 << 2),

	FV_DIALOG_GROUP_EDIT = (0x1 << 6),

	FV_DIALOG_GROUP_NONE = 0x0,

	FV_DIALOG_GROUP_PODS = (0x1 << 4),

	FV_DIALOG_GROUP_PODSRIGHT = (0x1 << 5),

	FV_DIALOG_GROUP_RIGHT_BOTTOM = (0x1 << 10),

	FV_DIALOG_GROUP_RIGHT_TOP = (0x1 << 9),

	FV_DIALOG_GROUP_RMKITS = (0x1 << 8),

	FV_DIALOG_GROUP_SPECIAL = 0x1,

	FV_DIALOG_RESIZEGRIPPERPOS_BELOW = 2,

	FV_DIALOG_RESIZEGRIPPERPOS_FRONT = 1,

	FV_DIALOG_RESIZEGRIPPERPOS_NONE = 0,

	FV_DIR_Inherit = 0,

	FV_DIR_LTR = 1,

	FV_DIR_RTL = 2,

	FV_DITAObjTypeAuto = 0,

	FV_DITAObjTypeConref = 1,

	FV_DITAObjTypeLink = 3,

	FV_DITAObjTypeMax = 6,

	FV_DITAObjTypeTopicref = 4,

	FV_DITAObjTypeTopicsetref = 5,

	FV_DITAObjTypeXref = 2,

	FV_DITA_TYPE_ANCHOR = 12,

	FV_DITA_TYPE_GENERAL = 1,

	FV_DITA_TYPE_KEYDEF = 3,

	FV_DITA_TYPE_MAPREF = 8,

	FV_DITA_TYPE_NAVREF = 9,

	FV_DITA_TYPE_RELTABLE = 2,

	FV_DITA_TYPE_TITLE = 10,

	FV_DITA_TYPE_TOPICGROUP = 4,

	FV_DITA_TYPE_TOPICHEAD = 5,

	FV_DITA_TYPE_TOPICREF = 11,

	FV_DITA_TYPE_TOPICSET = 7,

	FV_DITA_TYPE_TOPICSETREF = 6,

	FV_DOC_ISNOT_DITAMAP = 31,

	FV_DOC_TYPE_BINARY = 0x01,

	FV_DOC_TYPE_FILTER = 0x04,

	FV_DOC_TYPE_MIF = 0x03,

	FV_DOC_TYPE_TEXT = 0x02,

	FV_DT_FLOAT = 2,

	FV_DT_INTEGER = 1,

	FV_DT_NUMTYPES = 3,

	FV_DT_UNSPECIFIED = 0,

	FV_DeleteEmptyPages = 4,

	FV_DestFirstPage = 2,

	FV_DestFluidFlow = 5,

	FV_DestLastPage = 3,

	FV_DestMarker = 6,

	FV_DestMarkerNewLink = 1,

	FV_DestNowhere = 0,

	FV_DestObjectId = 7,

	FV_DestPageNum = 4,

	FV_DestXRef = 8,

	FV_DisallowedImportType = 21,

	FV_DisallowedType = 73,

	FV_DlgClose = -1,

	FV_DlgEnter = -4,

	FV_DlgHide = -10,

	FV_DlgInit = -9,

	FV_DlgNeedsUpdate = -8,

	FV_DlgNextPage = -7,

	FV_DlgNoChange = -3,

	FV_DlgOptActive = 1,

	FV_DlgOptDontCare = 2,

	FV_DlgOptNotActive = 0,

	FV_DlgPrefCommit = -102,

	FV_DlgPrefSetInitialState = -100,

	FV_DlgPrefVerify = -101,

	FV_DlgPrevPage = -6,

	FV_DlgReset = -2,

	FV_DlgResize = -12,

	FV_DlgShow = -11,

	FV_DlgTypeModal = 1,

	FV_DlgTypeModeless = 2,

	FV_DlgUndo = -5,

	FV_DoByCopy = 6,

	FV_DoByRef = 5,

	FV_DoCancel = 0,

	FV_DoImportAsTable = 8,

	FV_DoNo = 3,

	FV_DoOK = 1,

	FV_DoOnline = 0,

	FV_DoPrint = 1,

	FV_DoShowDialog = 4,

	FV_DoUserChoice = 7,

	FV_DoUserPreference = 12,

	FV_DoYes = 2,

	FV_DocDamagedByTextFilter = 74,

	FV_DocHeadersDamaged = 75,

	FV_DocKeyCatalogTypeDefault = 0,

	FV_DocKeyCatalogTypeMax = 3,

	FV_DocKeyCatalogTypeNone = 2,

	FV_DocKeyCatalogTypeSpecified = 1,

	FV_DocWrongSize = 76,

	FV_DocumentDictionary = 2,

	FV_DontChangePageCount = 1,

	FV_DuplicateFileInBook = 1,

	FV_EDT_AFTER = 49,

	FV_EDT_ALL = 43,

	FV_EDT_ANY = 42,

	FV_EDT_ATTRGRPO = 30,

	FV_EDT_BEFORE = 50,

	FV_EDT_BETWEEN = 53,

	FV_EDT_ELEMENT = 25,

	FV_EDT_FIRST = 44,

	FV_EDT_INSERTPAR = 23,

	FV_EDT_LAST = 46,

	FV_EDT_MIDDLE = 45,

	FV_EDT_NOTFIRST = 47,

	FV_EDT_NOTLAST = 48,

	FV_EDT_ONLY = 62,

	FV_EDT_TEXT = 40,

	FV_EDT_TEXTONLY = 41,

	FV_ELCAT_ALL = 0x03,

	FV_ELCAT_CHILDREN = 0x02,

	FV_ELCAT_CUSTOM = 0x04,

	FV_ELCAT_LOOSE = 0x01,

	FV_ELCAT_STRICT = 0x00,

	FV_ELEMENT_CATALOG = 8,

	FV_ELEM_ATTRVAL_INVALID = 0x4000,

	FV_ELEM_ATTRVAL_REQUIRED = 0x2000,

	FV_ELEM_BOOK_COMP_INVALID = 0x1000,

	FV_ELEM_BOOK_COMP_MISSING = 0x0800,

	FV_ELEM_CONTENT_LOOSELY_VALID = 0x20000,

	FV_ELEM_CONTENT_MUST_BE_EMPTY = 0x0040,

	FV_ELEM_CONTENT_STRICTLY_VALID = 0x10000,

	FV_ELEM_DISP_BRACKETS = 1,

	FV_ELEM_DISP_NONE = 0,

	FV_ELEM_DISP_TAGS = 2,

	FV_ELEM_EXCLUDED = 0x0004,

	FV_ELEM_HAS_TEXT_INVALID = 0x0020,

	FV_ELEM_INVALID_AT_POSITION = 0x0010,

	FV_ELEM_INVALID_IN_PARENT = 0x0008,

	FV_ELEM_INVISIBLE_ATTRVAL_INVALID = 0x80000,

	FV_ELEM_INVISIBLE_ATTRVAL_REQUIRED = 0x40000,

	FV_ELEM_MISSING_CONTENT_AT_BEG = 0x0100,

	FV_ELEM_MISSING_CONTENT_AT_END = 0x0200,

	FV_ELEM_MISSING_CONTENT_BEFORE = 0x0080,

	FV_ELEM_NOT_VALID_AS_ROOT = 0x0400,

	FV_ELEM_TYPE_MISMATCH = 0x0002,

	FV_ELEM_UNDEFINED = 0x0001,

	FV_EMUL_DOWN = 1,

	FV_EMUL_UP = 0,

	FV_ENABLE_ALWAYS_DISABLE = 2,

	FV_ENABLE_ALWAYS_ENABLE = 1,

	FV_ENABLE_BOOK_HAS_SELECTION = 29,

	FV_ENABLE_CAN_PASTE = 24,

	FV_ENABLE_COPY = 22,

	FV_ENABLE_COPY_FONT = 23,

	FV_ENABLE_DOC_OR_BOOK_HAS_SELECTION = 30,

	FV_ENABLE_IN_CELL_TEXT = 11,

	FV_ENABLE_IN_FLOW = 21,

	FV_ENABLE_IN_MATH = 6,

	FV_ENABLE_IN_PARA_TEXT = 3,

	FV_ENABLE_IN_TABLE = 9,

	FV_ENABLE_IN_TABLE_TITLE = 10,

	FV_ENABLE_IN_TEXT = 7,

	FV_ENABLE_IN_TEXT_LINE = 4,

	FV_ENABLE_IS_AFRAME = 18,

	FV_ENABLE_IS_CELL = 12,

	FV_ENABLE_IS_CELLS = 13,

	FV_ENABLE_IS_GRAPHIC_INSET = 20,

	FV_ENABLE_IS_OBJ = 15,

	FV_ENABLE_IS_OR_IN_FRAME = 17,

	FV_ENABLE_IS_TABLE = 14,

	FV_ENABLE_IS_TEXT_FRAME = 16,

	FV_ENABLE_IS_TEXT_INSET = 19,

	FV_ENABLE_IS_TEXT_SEL = 5,

	FV_ENABLE_IS_VIEW_ONLY = 25,

	FV_ENABLE_NEEDS_BOOKP_ONLY = 27,

	FV_ENABLE_NEEDS_DOCP_ONLY = 26,

	FV_ENABLE_NEEDS_DOCP_OR_BOOKP = 28,

	FV_ENABLE_OBJ_PROPS = 8,

	FV_ENUMERATE_BOOKCOMP_FOLDER = 1 << 8,

	FV_ENUMERATE_BOOKCOMP_GROUP = 1 << 9,

	FV_ENUMERATE_COMPFILE_BOOKBINARY = 1 << 14,

	FV_ENUMERATE_COMPFILE_BOOKMIF = 1 << 15,

	FV_ENUMERATE_COMPFILE_FMBINARY = 1 << 12,

	FV_ENUMERATE_COMPFILE_FMMIF = 1 << 13,

	FV_ENUMERATE_COMPFILE_XML = 1 << 16,

	FV_ENUMERATE_COMP_CHILDBOOK_COMPONENTS = 1 << 7,

	FV_ENUMERATE_COMP_CHILDMAP_COMPONENTS = 1 << 6,

	FV_ENUMERATE_COMP_FOLDER_COMPONENTS = 1 << 10,

	FV_ENUMERATE_COMP_GROUP_COMPONENTS = 1 << 11,

	FV_ENUMERATE_DITACOMP_KEYDEF = 1 << 5,

	FV_ENUMERATE_DITACOMP_MAPREF = 1 << 2,

	FV_ENUMERATE_DITACOMP_TOPICREF = 1 << 1,

	FV_ENUMERATE_DITACOMP_TOPICSET = 1 << 3,

	FV_ENUMERATE_DITACOMP_TOPICSETREF = 1 << 4,

	FV_EUC = 7,

	FV_EUC_CNS = 9,

	FV_EXCLUDE_CONREF_DEPENDENCIES = 0x20,

	FV_EXCLUDE_GRAPHICS_DEPENDENCIES = 0x01,

	FV_EXCLUDE_NONE = 0x10,

	FV_EXCLUDE_OLE_DEPENDENCIES = 0x04,

	FV_EXCLUDE_TEXT_INSET_DEPENDENCIES = 0x02,

	FV_EXCLUDE_XREF_DEPENDENCIES = 0x08,

	FV_EditableCopyOpened = 45,

	FV_Element = 0,

	FV_ElementsOfType = 1,

	FV_EnclosingDoc = 1,

	FV_EvCaps = 0x0008,

	FV_EvCommand = 0x0010,

	FV_EvControl = 0x0002,

	FV_EvMax = 0x0010,

	FV_EvMeta = 0x0004,

	FV_EvOption = 0x0004,

	FV_EvShift = 0x0001,

	FV_ExportDocument = 0,

	FV_ExportFileHasNewName = 0,

	FV_ExportFileNotWritable = 2,

	FV_ExportObject = 1,

	FV_ExportProductIsViewer = 1,

	FV_FAMILY_MAPPED = 0x00000004,

	FV_FAMILY_SELECTABLE = 0x00000002,

	FV_FAMILY_SURROGATE = 0xFFFF0000,

	FV_FAMILY_VISIBLE = 0x00000001,

	FV_FILL_BLACK = 0,

	FV_FILL_CLEAR = 15,

	FV_FILL_WHITE = 7,

	FV_FIT_FRAME_TO_IMAGE = 0,

	FV_FIT_FRAME_TO_IMAGE_PROPORTIONAL = 2,

	FV_FIT_IMAGE_TO_FRAME = 1,

	FV_FIT_WINDOW_TO_PAGE = -3,

	FV_FIXED_YAKUMONO = 0x02,

	FV_FLOATING_YAKUMONO = 0x00,

	FV_FN_NUM_ABJAD_NUMERIC = 0x14,

	FV_FN_NUM_ALIFBATA_NUMERIC = 0x15,

	FV_FN_NUM_ALPHA_LC = 0x04,

	FV_FN_NUM_ALPHA_UC = 0x03,

	FV_FN_NUM_CHINESE_NUMERIC = 0x10,

	FV_FN_NUM_CUSTOM = 0x05,

	FV_FN_NUM_DAIJI = 0x0B,

	FV_FN_NUM_FARSI_ALPHA = 0x18,

	FV_FN_NUM_FARSI_NUMERIC = 0x12,

	FV_FN_NUM_FULL_WIDTH = 0x0C,

	FV_FN_NUM_FULL_WIDTH_LC = 0x0E,

	FV_FN_NUM_FULL_WIDTH_UC = 0x0D,

	FV_FN_NUM_HEBREW_ALPHA = 0x19,

	FV_FN_NUM_HEBREW_NUMERIC = 0x13,

	FV_FN_NUM_INDIC_NUMERIC = 0x11,

	FV_FN_NUM_KANJI = 0x06,

	FV_FN_NUM_KANJI_KAZU = 0x0A,

	FV_FN_NUM_NUMERIC = 0x00,

	FV_FN_NUM_ROMAN_LC = 0x02,

	FV_FN_NUM_ROMAN_UC = 0x01,

	FV_FN_NUM_THAI_ALPHA = 0x17,

	FV_FN_NUM_THAI_NUMERIC = 0x16,

	FV_FN_NUM_ZENKAKU = 0x07,

	FV_FN_NUM_ZENKAKU_LC = 0x09,

	FV_FN_NUM_ZENKAKU_UC = 0x08,

	FV_FN_POS_BASELINE = 0x01,

	FV_FN_POS_SUB = 0x02,

	FV_FN_POS_SUPER = 0x00,

	FV_FORMATBAR_CLOSE = 5,

	FV_FORMATBAR_OPEN = 4,

	FV_FO_CONTAINER = 1,

	FV_FO_EQN = 7,

	FV_FO_FOOTNOTE = 5,

	FV_FO_GRAPHIC = 6,

	FV_FO_MARKER = 4,

	FV_FO_MMLEQN = 17,

	FV_FO_NUMTYPES = 18,

	FV_FO_RUBI = 16,

	FV_FO_RUBI_GROUP = 15,

	FV_FO_SYS_VAR = 2,

	FV_FO_TBL = 8,

	FV_FO_TBL_BODY = 11,

	FV_FO_TBL_CELL = 14,

	FV_FO_TBL_FOOTING = 12,

	FV_FO_TBL_HEADING = 10,

	FV_FO_TBL_ROW = 13,

	FV_FO_TBL_TITLE = 9,

	FV_FO_TEXTNODE = 0,

	FV_FO_UNSPECIFIED = 0,

	FV_FO_XREF = 3,

	FV_FROMCOLOR = 0x02,

	FV_FTON = 2,

	FV_FileAlreadyOpen = 48,

	FV_FileAlreadyOpenThisSession = 65,

	FV_FileHadStructure = 64,

	FV_FileHasNewName = 32,

	FV_FileInBookNotOpened = 96,

	FV_FileInBookNotSaved = 97,

	FV_FileIsNotWritable = 6,

	FV_FileIsOldVersion = 41,

	FV_FileIsText = 43,

	FV_FileIsViewOnly = 4,

	FV_FileModDateChanged = 7,

	FV_FileNotReadable = 130,

	FV_FileNotSupported = 0,

	FV_FileNotSupportedFormViewXml = -1,

	FV_FileNotSupportedValidXml = -2,

	FV_FileNotWritable = 33,

	FV_FileOpenAlertUserAboutFailure = 0x00000002,

	FV_FileOpenMakeVisible = 0x00000001,

	FV_FileOpenUpdateTextReferences = 0x00000008,

	FV_FileOpenUpdateXRefs = 0x00000004,

	FV_FileStructureStripped = 42,

	FV_FileSupported = 1,

	FV_FileTypeBinaryBook = 2,

	FV_FileTypeBinaryDoc = 1,

	FV_FileTypeCompositeDoc = 13,

	FV_FileTypeEquation = 11,

	FV_FileTypeErrorDoc = 10,

	FV_FileTypeFilter = 7,

	FV_FileTypeFolder = 8,

	FV_FileTypeGeneral = 9,

	FV_FileTypeMif = 3,

	FV_FileTypeSgml = 5,

	FV_FileTypeSummaryDoc = 14,

	FV_FileTypeText = 6,

	FV_FileTypeThesaurus = 12,

	FV_FileTypeXml = 4,

	FV_FileWasExported = 49,

	FV_FileWasFiltered = 35,

	FV_FileWasInUse = 3,

	FV_FilterFailed = 22,

	FV_FindAnchoredFrame = 7,

	FV_FindAnyMarker = 0,

	FV_FindAnyPub = 5,

	FV_FindAnyRubi = 11,

	FV_FindAnyTable = 9,

	FV_FindAnyTextInset = 3,

	FV_FindAnyVariable = 6,

	FV_FindAnyXRef = 1,

	FV_FindAttrName = 1,

	FV_FindAttrValue = 2,

	FV_FindAutomaticHyphen = 10,

	FV_FindCharacterFormatOverride = 13,

	FV_FindElemTag = 0,

	FV_FindFootnote = 8,

	FV_FindPgfFormatOverride = 12,

	FV_FindStyleFormatOverride = 15,

	FV_FindTableFormatOverride = 14,

	FV_FindUnresolvedTextInset = 4,

	FV_FindUnresolvedXRef = 2,

	FV_FlowUnstructured = 30,

	FV_FontMetricsChanged = 37,

	FV_FontsMappedInCatalog = 38,

	FV_FontsWereMapped = 36,

	FV_FontsWithUnavailableEncodingsUsed = 53,

	FV_Footing = 1239,

	FV_GB = 10,

	FV_GRAPHIC = 9,

	FV_GRAPHICS_CATALOG = 14,

	FV_GetDictionaryStrings = 9,

	FV_HELP_CONTEXT = 5,

	FV_HELP_HYPERTEXT = 7,

	FV_HELP_INDEX = 0,

	FV_HELP_INIT_CONTEXT = 6,

	FV_HELP_KEYS = 1,

	FV_HELP_ONLINE_MANUALS = 4,

	FV_HELP_OVERVIEW = 3,

	FV_HELP_SAMPLES = 2,

	FV_HELP_WEBWORKS = 8,

	FV_HIST = 12,

	FV_HZ = 11,

	FV_Heading = 1238,

	FV_Hint_FilterName = 5,

	FV_Hint_FilterVersion = 4,

	FV_Hint_FormatId = 2,

	FV_Hint_HintVersion = 0,

	FV_Hint_Platform = 3,

	FV_Hint_VendorId = 1,

	FV_HypertextBadMatrixSize = 250,

	FV_HypertextBadSyntaxPathSpec = 10,

	FV_HypertextCantOpenDestFile = 212,

	FV_HypertextCommandIllegalWithinPopup = 273,

	FV_HypertextDestinationLinkNotFound = 220,

	FV_HypertextDuplicateLinkName = 221,

	FV_HypertextEmptyCommand = 1,

	FV_HypertextEmptyLineInMiddleOfPopup = 272,

	FV_HypertextExpectedANumberParam = 30,

	FV_HypertextExtraArguments = 4,

	FV_HypertextFcodeInvalid = 280,

	FV_HypertextFileNotMakerDoc = 211,

	FV_HypertextFileNotRegular = 210,

	FV_HypertextFlowMissingLines = 252,

	FV_HypertextHelpDirNotFound = 20,

	FV_HypertextMatrixCommandInvalid = 251,

	FV_HypertextMissingArguments = 3,

	FV_HypertextMissingPopupLabelItem = 271,

	FV_HypertextMissingPopupMarker = 270,

	FV_HypertextNoNamedFlow = 260,

	FV_HypertextObjectIDNotFound = 241,

	FV_HypertextPageNameNotFound = 230,

	FV_HypertextRecursiveFlow = 261,

	FV_HypertextSyntaxOK = 0,

	FV_HypertextUnanchoredPartialPath = 11,

	FV_HypertextUnrecognizedCommand = 2,

	FV_HypertextUnrecognizedObjectType = 240,

	FV_HypertextUsesDefaultText = 200,

	FV_HypertextValid = 0,

	FV_IMG_NEGATIVE = 1,

	FV_IMG_POSITIVE = 0,

	FV_INCLUSION = 0x08,

	FV_INCREMENT_MAIN_PROGRESS_STEP_SAVE_AS_PDF = 1,

	FV_INCREMENT_PROGRESS_STEP_SAVE_AS_PDF = 5,

	FV_INTERACT_ROTATE = 1,

	FV_INTERACT_ROTATE_CONSTRAIN = 2,

	FV_ITEM_HAS_NO_SHIFT_OR_UNSHIFT_COMMAND = 3,

	FV_ITEM_HAS_SHIFT_COMMAND = 1,

	FV_ITEM_HAS_UNSHIFT_COMMAND = 2,

	FV_ITON = 0,

	FV_ImportFileNotReadable = 48,

	FV_ImportedByCopy = 0,

	FV_ImportedFilteredFile = 5,

	FV_ImportedGraphicFile = 6,

	FV_ImportedMIF = 3,

	FV_ImportedMacEdition = 7,

	FV_ImportedMakerDoc = 4,

	FV_ImportedSgmlDoc = 8,

	FV_ImportedText = 1,

	FV_ImportedTextTable = 2,

	FV_ImportedXmlDoc = 9,

	FV_InsertionPointInFootnote = 26,

	FV_InsertionPointInTableCell = 25,

	FV_InsertionPointNotInText = 24,

	FV_InsufficientMem = 3,

	FV_InsufficientMemory = 27,

	FV_InternalMathMLMinDpi = 6,

	FV_InternalMathMLTypeUnknown = 2,

	FV_InvalidExportFilter = 23,

	FV_InvalidSaveFilter = 42,

	FV_InvalidTextRange = 19,

	FV_IsoLatin = 1,

	FV_JIS = 5,

	FV_KNOCKOUT = 0x00,

	FV_KeyCatalogWorkflowAuthoring = 0,

	FV_KeyCatalogWorkflowMax = 3,

	FV_KeyCatalogWorkflowPublishing = 1,

	FV_KeyCatalogWorkflowSearching = 2,

	FV_KeyDefFieldSize = 2,

	FV_KeyDefFieldsTypeAll = 1,

	FV_KeyDefFieldsTypeMax = 2,

	FV_KeyDefFieldsTypePrimary = 0,

	FV_KeyDefMaxFields = 11,

	FV_KeyDefMaxPrimaryFields = 4 + 1,

	FV_KeySrcTypeDitamap = 1,

	FV_KeySrcTypeNone = 0,

	FV_KeydefKeyAttrs = 10,

	FV_KeydefKeyAttrsType = 21,

	FV_KeydefKeyDefaultText = 7,

	FV_KeydefKeyDefaultTextType = 3,

	FV_KeydefKeyDuplicate = 4,

	FV_KeydefKeyDuplicateType = 1,

	FV_KeydefKeyFoundInRefFile = 8,

	FV_KeydefKeyFoundInRefFileType = 1,

	FV_KeydefKeyInValid = 9,

	FV_KeydefKeyInValidType = 1,

	FV_KeydefKeySrcFile = 3,

	FV_KeydefKeySrcFileType = 3,

	FV_KeydefKeySrcType = 5,

	FV_KeydefKeySrcTypeType = 1,

	FV_KeydefKeyTag = 1,

	FV_KeydefKeyTagType = 3,

	FV_KeydefKeyTarget = 2,

	FV_KeydefKeyTargetType = 3,

	FV_KeydefKeyVarList = 6,

	FV_KeydefKeyVarListType = 20,

	FV_KeydefVariableInfoLen = 3,

	FV_KeydefVariableInfoTagPrimary = 0,

	FV_KeydefVariableInfoTagSecondary = 1,

	FV_KeydefVariableInfoText = 2,

	FV_Korean = 12,

	FV_LANG_ARABIC = 0x27,

	FV_LANG_BRAZILIAN = 0x0B,

	FV_LANG_BRITISH = 0x02,

	FV_LANG_BULGARIAN = 0x21,

	FV_LANG_CANADIAN_FRENCH = 0x06,

	FV_LANG_CATALAN = 0x08,

	FV_LANG_CROATIAN = 0x22,

	FV_LANG_CZECH = 0x1B,

	FV_LANG_DANISH = 0x0C,

	FV_LANG_DUTCH = 0x0D,

	FV_LANG_ENGLISH = 0x01,

	FV_LANG_ESTONIAN = 0x23,

	FV_LANG_FARSI = 0x2A,

	FV_LANG_FINNISH = 0x10,

	FV_LANG_FRENCH = 0x05,

	FV_LANG_GERMAN = 0x03,

	FV_LANG_GREEK = 0x19,

	FV_LANG_HEBREW = 0x28,

	FV_LANG_HUNGARIAN = 0x1D,

	FV_LANG_ITALIAN = 0x09,

	FV_LANG_JAPANESE = 0x12,

	FV_LANG_KOREAN = 0x15,

	FV_LANG_LATVIAN = 0x24,

	FV_LANG_LITHUANIAN = 0x25,

	FV_LANG_NEW_DUTCH = 0x18,

	FV_LANG_NEW_GERMAN = 0x16,

	FV_LANG_NEW_SWISS_GERMAN = 0x17,

	FV_LANG_NOLANGUAGE = 0x00,

	FV_LANG_NORWEGIAN = 0x0E,

	FV_LANG_NUM = 0x2B,

	FV_LANG_NYNORSK = 0x0F,

	FV_LANG_POLISH = 0x1C,

	FV_LANG_PORTUGUESE = 0x0A,

	FV_LANG_ROMANIAN = 0x26,

	FV_LANG_RUSSIAN = 0x1A,

	FV_LANG_SIMPLIFIED_CHINESE = 0x14,

	FV_LANG_SLOVAK = 0x1F,

	FV_LANG_SLOVENIAN = 0x20,

	FV_LANG_SPANISH = 0x07,

	FV_LANG_SWEDISH = 0x11,

	FV_LANG_SWISS_GERMAN = 0x04,

	FV_LANG_THAI = 0x29,

	FV_LANG_TRADITIONAL_CHINESE = 0x13,

	FV_LANG_TURKISH = 0x1E,

	FV_LEVELS_ALL = -1,

	FV_LEVELS_DEFAULT = -2,

	FV_LEVEL_RULE = 1,

	FV_LOOSELY_VALID = 0x02,

	FV_LanguagesWerentFound = 39,

	FV_Left = 1242,

	FV_ListViewActionMax = 10,

	FV_ListViewAddColumn = 2,

	FV_ListViewAddColumnNumParams = 4,

	FV_ListViewAddColumnParam1 = 3,

	FV_ListViewAddColumnParam2 = 1,

	FV_ListViewAddColumnParam3 = 1,

	FV_ListViewAddColumnParam4 = 1,

	FV_ListViewAddRow = 3,

	FV_ListViewAddRowNumParams = 1,

	FV_ListViewAddRowParam1 = 6,

	FV_ListViewDeleteAllRows = 4,

	FV_ListViewDeleteAllRowsNumParams = 0,

	FV_ListViewInit = 1,

	FV_ListViewInitNumParams = 0,

	FV_ListViewReSortAllRows = 5,

	FV_ListViewReSortAllRowsNumParams = 0,

	FV_ListViewSelectFirstRow = 7,

	FV_ListViewSelectRowFromColData = 8,

	FV_ListViewSelectRowFromRowId = 9,

	FV_ListViewSetSortEnabled = 6,

	FV_LockCouldntBeReset = 2,

	FV_LockNotReset = 1,

	FV_LockWasInvalid = 5,

	FV_LockWasReset = 0,

	FV_MATH = 3,

	FV_MATH_LARGE = 2,

	FV_MATH_MEDIUM = 0,

	FV_MATH_SMALL = 1,

	FV_MENUITEM_API = 2,

	FV_MENUITEM_EXPANDOMATIC = 4,

	FV_MENUITEM_FRAME = 1,

	FV_MENUITEM_MACRO = 3,

	FV_MENU_ADHOCRULER = 3,

	FV_MENU_COMPLETE = 2,

	FV_MENU_CUSTOM = 3,

	FV_MENU_DEFAULT = 4,

	FV_MENU_MENUBAR = 1,

	FV_MENU_POPUP = 2,

	FV_MENU_QUICK = 1,

	FV_MODE_ALL = 3,

	FV_MODE_MATH = 1,

	FV_MODE_NONMATH = 2,

	FV_MONOSPACE_YAKUMONO = 0x01,

	FV_MacANSI = 4,

	FV_MakePageCountEven = 2,

	FV_MakePageCountOdd = 3,

	FV_MergeDictionaryContents = 5,

	FV_MiniTOC = 0,

	FV_MissingExportScript = 17,

	FV_MissingImportScript = 19,

	FV_MissingScript = 71,

	FV_ModeSave = 0,

	FV_ModeSaveAs = 1,

	FV_NARROW = 1,

	FV_NO_BASE_COLOR = 0x00,

	FV_NO_ZOOM_MANGLING = -1,

	FV_NTOF = 3,

	FV_NTOI = 1,

	FV_NUMSTYLE_ABJAD_NUMERIC = 0x14,

	FV_NUMSTYLE_ALIFBATA_NUMERIC = 0x15,

	FV_NUMSTYLE_ALPHA_LC = 0x04,

	FV_NUMSTYLE_ALPHA_UC = 0x03,

	FV_NUMSTYLE_CHINESE_NUMERIC = 0x10,

	FV_NUMSTYLE_DAIJI = 0x0a,

	FV_NUMSTYLE_FARSI_ALPHA = 0x18,

	FV_NUMSTYLE_FARSI_NUMERIC = 0x12,

	FV_NUMSTYLE_FULLWIDTH = 0x0c,

	FV_NUMSTYLE_FULLWIDTH_LC = 0x0e,

	FV_NUMSTYLE_FULLWIDTH_UC = 0x0d,

	FV_NUMSTYLE_HEBREW_ALPHA = 0x19,

	FV_NUMSTYLE_HEBREW_NUMERIC = 0x13,

	FV_NUMSTYLE_INDIC_NUMERIC = 0x11,

	FV_NUMSTYLE_KANJI = 0x05,

	FV_NUMSTYLE_KANJI_KAZU = 0x09,

	FV_NUMSTYLE_MAXIMUM_NUMERIC = 0x19,

	FV_NUMSTYLE_NUMERIC = 0x00,

	FV_NUMSTYLE_ROMAN_LC = 0x02,

	FV_NUMSTYLE_ROMAN_UC = 0x01,

	FV_NUMSTYLE_TEXT = 0x0b,

	FV_NUMSTYLE_THAI_ALPHA = 0x17,

	FV_NUMSTYLE_THAI_NUMERIC = 0x16,

	FV_NUMSTYLE_ZENKAKU = 0x06,

	FV_NUMSTYLE_ZENKAKU_LC = 0x08,

	FV_NUMSTYLE_ZENKAKU_UC = 0x07,

	FV_NUM_CONTINUE = 0x01,

	FV_NUM_PERPAGE = 0x03,

	FV_NUM_READ_FROM_FILE = 0x00,

	FV_NUM_RESTART = 0x02,

	FV_NUM_SAME = 0x03,

	FV_NoFlowWithSpecifiedName = 23,

	FV_NoMainFlow = 22,

	FV_NoNonGeneratedFilesInBook = 2,

	FV_NonPortableFileRefs = 38,

	FV_NonPortableSaveName = 37,

	FV_NumExportStatusFields = 2,

	FV_NumFindElementItems = 2 + 1,

	FV_NumImportStatusFields = 2,

	FV_NumOpenStatusFields = 5,

	FV_NumSaveStatusFields = 2,

	FV_NumUpdateBookStatusFields = 4,

	FV_OBJ_END_OFFSET = 0x50000000,

	FV_OVERPRINT = 0x01,

	FV_OVERRIDDEN_CONREF_DUCT = 0x02,

	FV_OVERRIDDEN_DEFAULT = 0x00,

	FV_OVERRIDDEN_KEYDEF_TO_KEYREF = 0x03,

	FV_OVERRIDDEN_NOVALUE = 0x01,

	FV_ObjectDataLink = 7,

	FV_ObjectElement = 5,

	FV_ObjectGraphic = 4,

	FV_ObjectMarker = 1,

	FV_ObjectPgf = 2,

	FV_ObjectTextInset = 6,

	FV_ObjectUnknown = 0,

	FV_ObjectXref = 3,

	FV_OpenEditableCopy = 8,

	FV_OpenViewOnly = 5,

	FV_OpenedFluid = 51,

	FV_OpenedViewOnly = 44,

	FV_PAGE_NUM_ABJAD = 0x14,

	FV_PAGE_NUM_ALIFBATA = 0x15,

	FV_PAGE_NUM_ALPHA_LC = 0x04,

	FV_PAGE_NUM_ALPHA_UC = 0x03,

	FV_PAGE_NUM_CHINESE_NUMERIC = 0x10,

	FV_PAGE_NUM_DAIJI = 0x0a,

	FV_PAGE_NUM_FARSI = 0x12,

	FV_PAGE_NUM_FARSI_ALPHA = 0x18,

	FV_PAGE_NUM_FULLWIDTH = 0x0c,

	FV_PAGE_NUM_FULLWIDTH_LC = 0x0e,

	FV_PAGE_NUM_FULLWIDTH_UC = 0x0d,

	FV_PAGE_NUM_HEBREW = 0x13,

	FV_PAGE_NUM_HEBREW_ALPHA = 0x19,

	FV_PAGE_NUM_INDIC = 0x11,

	FV_PAGE_NUM_KANJI = 0x05,

	FV_PAGE_NUM_KANJI_KAZU = 0x09,

	FV_PAGE_NUM_NUMERIC = 0x00,

	FV_PAGE_NUM_ROMAN_LC = 0x02,

	FV_PAGE_NUM_ROMAN_UC = 0x01,

	FV_PAGE_NUM_THAI = 0x16,

	FV_PAGE_NUM_THAI_ALPHA = 0x17,

	FV_PAGE_NUM_ZENKAKU = 0x06,

	FV_PAGE_NUM_ZENKAKU_LC = 0x08,

	FV_PAGE_NUM_ZENKAKU_UC = 0x07,

	FV_PDFBookmarksOpenAllLevels = -2,

	FV_PDFBookmarksOpenDefaultLevel = -1,

	FV_PDFBookmarksOpenNoneLevel = -3,

	FV_PDFRegistrationMarksMax = 2,

	FV_PDFRegistrationMarksNone = 0,

	FV_PDFRegistrationMarksTombo = 2,

	FV_PDFRegistrationMarksWestern = 1,

	FV_PDFZoomDefault = 1,

	FV_PDFZoomHeight = 4,

	FV_PDFZoomMaxValue = 4,

	FV_PDFZoomNone = 0,

	FV_PDFZoomPage = 2,

	FV_PDFZoomWidth = 3,

	FV_PGF_ANYWHERE = 0x00,

	FV_PGF_CATALOG = 7,

	FV_PGF_CENTER = 0x03,

	FV_PGF_FIXED = 0x00,

	FV_PGF_FIXED_B_MARGIN = 0x02,

	FV_PGF_FIXED_L_MARGIN = 0x01,

	FV_PGF_FIXED_R_MARGIN = 0x04,

	FV_PGF_FIXED_T_MARGIN = 0x08,

	FV_PGF_FLOATING = 0x02,

	FV_PGF_JUSTIFIED = 0x04,

	FV_PGF_LEFT = 0x01,

	FV_PGF_PROPORTIONAL = 0x01,

	FV_PGF_RIGHT = 0x02,

	FV_PGF_RUN_IN = 4,

	FV_PGF_SIDEBODY = 0,

	FV_PGF_SIDEHEAD_FIRST_BASELINE = 2,

	FV_PGF_SIDEHEAD_LAST_BASELINE = 3,

	FV_PGF_SIDEHEAD_TOP = 1,

	FV_PGF_STRADDLE = 5,

	FV_PGF_STRADDLE_NORMAL_ONLY = 6,

	FV_PGF_TOP_OF_COL = 0x01,

	FV_PGF_TOP_OF_LEFT_PAGE = 0x03,

	FV_PGF_TOP_OF_PAGE = 0x02,

	FV_PGF_TOP_OF_RIGHT_PAGE = 0x04,

	FV_PGF_V_ALIGN_BOTTOM = 2,

	FV_PGF_V_ALIGN_MIDDLE = 1,

	FV_PGF_V_ALIGN_TOP = 0,

	FV_POINT_PAGE_CHINESE_NUMERIC = 0x10,

	FV_POINT_PAGE_FULLWIDTH = 0x0c,

	FV_POINT_PAGE_FULLWIDTH_LC = 0x0e,

	FV_POINT_PAGE_FULLWIDTH_UC = 0x0d,

	FV_POINT_PAGE_NUM_ABJAD = 0x14,

	FV_POINT_PAGE_NUM_ALIFBATA = 0x15,

	FV_POINT_PAGE_NUM_ALPHA_LC = 0x04,

	FV_POINT_PAGE_NUM_ALPHA_UC = 0x03,

	FV_POINT_PAGE_NUM_DAIJI = 0x0a,

	FV_POINT_PAGE_NUM_FARSI = 0x12,

	FV_POINT_PAGE_NUM_FARSI_ALPHA = 0x18,

	FV_POINT_PAGE_NUM_HEBREW = 0x13,

	FV_POINT_PAGE_NUM_HEBREW_ALPHA = 0x19,

	FV_POINT_PAGE_NUM_INDIC = 0x11,

	FV_POINT_PAGE_NUM_KANJI = 0x05,

	FV_POINT_PAGE_NUM_KANJI_KAZU = 0x09,

	FV_POINT_PAGE_NUM_NUMERIC = 0x00,

	FV_POINT_PAGE_NUM_ROMAN_LC = 0x02,

	FV_POINT_PAGE_NUM_ROMAN_UC = 0x01,

	FV_POINT_PAGE_NUM_THAI = 0x16,

	FV_POINT_PAGE_NUM_THAI_ALPHA = 0x17,

	FV_POINT_PAGE_NUM_ZENKAKU = 0x06,

	FV_POINT_PAGE_NUM_ZENKAKU_LC = 0x08,

	FV_POINT_PAGE_NUM_ZENKAKU_UC = 0x07,

	FV_POS_NORM = 0,

	FV_POS_SUB = 2,

	FV_POS_SUPER = 1,

	FV_PREVIEW_OFF_TRACK_CHANGE = 0,

	FV_PREVIEW_ON_FINAL = 2,

	FV_PREVIEW_ON_ORIGINAL = 1,

	FV_PRINT_NO = 0x2,

	FV_PRINT_PROCESS = 0x1,

	FV_PRINT_SPOT = 0x0,

	FV_PRODUCT_ALL = (0x01 | 0x02 | 0x04),

	FV_PRODUCT_STRUCTURED = 0x02,

	FV_PRODUCT_UNSTRUCTURED = 0x01,

	FV_PRODUCT_XMLAUTHOR = 0x04,

	FV_PROPORTIONAL = 2,

	FV_PR_ALL = 1,

	FV_PR_DEL_EMPTY = 0x01,

	FV_PR_DONT_CHANGE = 0x04,

	FV_PR_DOWNLOAD_ALL = 2,

	FV_PR_DOWNLOAD_ALL_BUT_STANDARD_13 = 3,

	FV_PR_DOWNLOAD_ALL_BUT_STANDARD_35 = 4,

	FV_PR_DOWNLOAD_NONE = 1,

	FV_PR_KEEP_NUM_EVEN = 0x02,

	FV_PR_KEEP_NUM_ODD = 0x03,

	FV_PR_RANGE = 2,

	FV_PlainText = 2,

	FV_ProductIsMaker = 39,

	FV_ProductIsViewer = 32,

	FV_RC_CHANGELIST = 2,

	FV_RC_CHANGELIST_TAG = 3,

	FV_RC_SUB_FMTRULE = 1,

	FV_RC_TAG = 0,

	FV_REFERENCE_PAGE = 0x02,

	FV_ROW_ANYWHERE = 0,

	FV_ROW_BODY = 1,

	FV_ROW_FOOTING = 2,

	FV_ROW_HEADING = 0,

	FV_ROW_TOP_OF_COL = 1,

	FV_ROW_TOP_OF_LEFT_PAGE = 3,

	FV_ROW_TOP_OF_PAGE = 2,

	FV_ROW_TOP_OF_RIGHT_PAGE = 4,

	FV_RecoverFileUsed = 33,

	FV_RedoAll = 4,

	FV_ReferencePage = 9,

	FV_ReferencedFilesWerentFound = 47,

	FV_ResetLockAndContinue = 7,

	FV_Right = 1243,

	FV_SCROLL_FACING = 3,

	FV_SCROLL_HORIZONTAL = 1,

	FV_SCROLL_VARIABLE = 0,

	FV_SCROLL_VERTICAL = 2,

	FV_SEP_NONE = 0x1,

	FV_SEP_NORMAL = 0x0,

	FV_SEP_WHITE = 0x2,

	FV_SET_MAIN_PROGRESS_RANGE_SAVE_AS_PDF = 2,

	FV_SET_PROGRESS_RANGE_SAVE_AS_PDF = 6,

	FV_SH_INSIDE = 0x02,

	FV_SH_LEFT = 0x00,

	FV_SH_OUTSIDE = 0x03,

	FV_SH_RIGHT = 0x01,

	FV_STRICTLY_VALID = 0x01,

	FV_SaveAsNameAskUser = 0,

	FV_SaveAsNameProvided = 2,

	FV_SaveAsUseFileName = 1,

	FV_SaveFmtBinary = 0,

	FV_SaveFmtBinary100 = 21,

	FV_SaveFmtBinary110 = 23,

	FV_SaveFmtBinary120 = 25,

	FV_SaveFmtBinary130 = 27,

	FV_SaveFmtBinary140 = 29,

	FV_SaveFmtBinary150 = 31,

	FV_SaveFmtBinary60 = 11,

	FV_SaveFmtBinary70 = 12,

	FV_SaveFmtBinary80 = 13,

	FV_SaveFmtBinary90 = 16,

	FV_SaveFmtBookWithFm = 20,

	FV_SaveFmtBookWithXml = 19,

	FV_SaveFmtCompositeDoc = 18,

	FV_SaveFmtFilter = 8,

	FV_SaveFmtInterchange = 1,

	FV_SaveFmtInterchange100 = 22,

	FV_SaveFmtInterchange110 = 24,

	FV_SaveFmtInterchange120 = 26,

	FV_SaveFmtInterchange130 = 28,

	FV_SaveFmtInterchange140 = 30,

	FV_SaveFmtInterchange150 = 32,

	FV_SaveFmtInterchange70 = 14,

	FV_SaveFmtInterchange80 = 15,

	FV_SaveFmtInterchange90 = 17,

	FV_SaveFmtPdf = 9,

	FV_SaveFmtSgml = 7,

	FV_SaveFmtStationery = 3,

	FV_SaveFmtText = 6,

	FV_SaveFmtViewOnly = 4,

	FV_SaveFmtXml = 10,

	FV_SaveNoAutoBackup = 1,

	FV_SaveSkipTbls = 3,

	FV_SaveTblColsAsPgfs = 2,

	FV_SaveTblRowsAsPgfs = 1,

	FV_SaveTblUserPref = 0,

	FV_SaveUserPrefAutoBackup = 2,

	FV_SaveYesAutoBackup = 0,

	FV_SessionId = 0,

	FV_SetDictionaryToNoneDictionary = 6,

	FV_Shitf_JIS = 6,

	FV_ShowAll = 1,

	FV_ShowAsPerConditions = 2,

	FV_ShowAsPerExpression = 3,

	FV_SourceDoc = 0,

	FV_SpellCapitalization = 2,

	FV_SpellExtraSpace = 6,

	FV_SpellHyphenation = 5,

	FV_SpellMisspelling = 1,

	FV_SpellRepeatedLetter = 4,

	FV_SpellRepeatedWord = 3,

	FV_SpellSpaceAfter = 7,

	FV_SpellSpaceBefore = 8,

	FV_SpellStraightQuotes = 9,

	FV_StripStructureAndOpen = 10,

	FV_TAB_CENTER = 0x2,

	FV_TAB_DECIMAL = 0x4,

	FV_TAB_LEFT = 0x1,

	FV_TAB_RELATIVE_CENTER = 0x6,

	FV_TAB_RELATIVE_DECIMAL = 0x8,

	FV_TAB_RELATIVE_LEFT = 0x5,

	FV_TAB_RELATIVE_RIGHT = 0x7,

	FV_TAB_RIGHT = 0x3,

	FV_TBL_ANYWHERE = 0,

	FV_TBL_CATALOG = 13,

	FV_TBL_FLOAT = 5,

	FV_TBL_NO_TITLE = 0,

	FV_TBL_NUM_BY_COL = 1,

	FV_TBL_NUM_BY_ROW = 0,

	FV_TBL_TITLE_ABOVE = 1,

	FV_TBL_TITLE_BELOW = 2,

	FV_TBL_TOP_OF_COL = 1,

	FV_TBL_TOP_OF_LEFT_PAGE = 3,

	FV_TBL_TOP_OF_PAGE = 2,

	FV_TBL_TOP_OF_RIGHT_PAGE = 4,

	FV_TEMPLATE_BROWSER = 11,

	FV_TEXTLINE_CENTER = 2,

	FV_TEXTLINE_LEFT = 0,

	FV_TEXTLINE_MATH = 3,

	FV_TEXTLINE_RIGHT = 1,

	FV_THESAURUS = 10,

	FV_TR_BBOX = 0x03,

	FV_TR_CONTOUR = 0x02,

	FV_TR_NONE = 0x01,

	FV_TYPE_BINARY = 0x01,

	FV_TYPE_FILTER = 0xFF,

	FV_TYPE_MIF = 0x02,

	FV_TYPE_SGML = 0x04,

	FV_TYPE_TEXT = 0x03,

	FV_TYPE_XML = 0x05,

	FV_TextFile_EOLisEOP = 12,

	FV_TextFile_EOLisNotEOP = 13,

	FV_TooManyWindows = 128,

	FV_TooManyWindowsUpdateBook = 98,

	FV_UPDATE_MAIN_PROGRESS_MESSAGE_SAVE_AS_PDF = 0,

	FV_UPDATE_PROGRESS_MESSAGE_SAVE_AS_PDF = 3,

	FV_UPDATE_PROGRESS_MESSAGE_WITH_FILENAME_SAVE_AS_PDF = 4,

	FV_URL_CHECKED_IN = 1,

	FV_URL_CHECKED_OUT = 2,

	FV_UndoAll = 3,

	FV_UnresolvedTextInsets = 50,

	FV_UnresolvedXRefs = 49,

	FV_Unstructured = 41,

	FV_UpdateAllAutomaticClientTi = 2,

	FV_UpdateAllClientTi = 1,

	FV_UpdateAllManualClientTi = 3,

	FV_UseCurrentSetting = 0,

	FV_UserCanceled = 112,

	FV_UserCanceledExport = 32,

	FV_UserCanceledImport = 37,

	FV_UserCanceledSave = 48,

	FV_UserCanceledUpdateBook = 35,

	FV_UserDictionary = 1,

	FV_VAR_CREATION_DATE_LONG = 7,

	FV_VAR_CREATION_DATE_SHORT = 8,

	FV_VAR_CURRENT_DATE_LONG = 3,

	FV_VAR_CURRENT_DATE_SHORT = 4,

	FV_VAR_CURRENT_PAGE_NUM = 1,

	FV_VAR_FILE_NAME_LONG = 9,

	FV_VAR_FILE_NAME_SHORT = 10,

	FV_VAR_HEADER_FOOTER_1 = 11,

	FV_VAR_HEADER_FOOTER_10 = 24,

	FV_VAR_HEADER_FOOTER_11 = 25,

	FV_VAR_HEADER_FOOTER_12 = 26,

	FV_VAR_HEADER_FOOTER_13 = 27,

	FV_VAR_HEADER_FOOTER_14 = 28,

	FV_VAR_HEADER_FOOTER_15 = 29,

	FV_VAR_HEADER_FOOTER_16 = 30,

	FV_VAR_HEADER_FOOTER_17 = 31,

	FV_VAR_HEADER_FOOTER_18 = 32,

	FV_VAR_HEADER_FOOTER_2 = 12,

	FV_VAR_HEADER_FOOTER_3 = 13,

	FV_VAR_HEADER_FOOTER_4 = 14,

	FV_VAR_HEADER_FOOTER_5 = 19,

	FV_VAR_HEADER_FOOTER_6 = 20,

	FV_VAR_HEADER_FOOTER_7 = 21,

	FV_VAR_HEADER_FOOTER_8 = 22,

	FV_VAR_HEADER_FOOTER_9 = 23,

	FV_VAR_MODIFICATION_DATE_LONG = 5,

	FV_VAR_MODIFICATION_DATE_SHORT = 6,

	FV_VAR_PAGE_COUNT = 2,

	FV_VAR_TABLE_CONTINUATION = 15,

	FV_VAR_TABLE_SHEET = 16,

	FV_VAR_USER_VARIABLE = 0,

	FV_VIEW_ALL = (0x01 | 0x02 | 0x04),

	FV_VIEW_AUTHOR = 0x02,

	FV_VIEW_WYSIWYG = 0x01,

	FV_VIEW_XML = 0x04,

	FV_VOS_NONE = 2,

	FV_VOS_USER_ONLY = 1,

	FV_VOS_YES = 3,

	FV_VOX_ALERT = 3,

	FV_VOX_GOTO_BEHAVIOR = 1,

	FV_VOX_NOT_ACTIVE = 0,

	FV_VOX_OPEN_BEHAVIOR = 2,

	FV_WIDE = 0,

	FV_WINDOW_ALL = (0x01 | 0x02 | 0x04),

	FV_WINDOW_BOOK = 0x02,

	FV_WINDOW_DITAMAP = 0x04,

	FV_WINDOW_DOC = 0x01,

	FV_WarnAlways = 1,

	FV_WarnNever = 0,

	FV_WarnOnce = 2,

	FV_WriteDictionaryToFile = 4,

	FV_WriteUnknownWordsToFile = 3,

	FV_XML_STANDALONE_NO = 2,

	FV_XML_STANDALONE_NODEC = 4,

	FV_XML_STANDALONE_NONE = 3,

	FV_XML_STANDALONE_YES = 1,

	FV_XML_USEBOM_NO = 2,

	FV_XML_USEBOM_UTF16BE = 4,

	FV_XML_USEBOM_UTF16LE = 5,

	FV_XML_USEBOM_UTF32BE = 6,

	FV_XML_USEBOM_UTF32LE = 7,

	FV_XML_USEBOM_UTF8 = 3,

	FV_XML_USEBOM_YES = 1,

	FV_XML_WELLFORMED_NO = 2,

	FV_XML_WELLFORMED_YES = 1,

	FV_ZOOM_TO_FIT_TO_WINDOW = -2,

	oldFT_ElementFmts = 11,

}

declare enum FCodes {

	ALT_GFX_INSET = 0xB12,

	ALT_TXT_INSET = 0xB11,

	AMT_DEACTIVATION = 0x967,

	AMT_REGISRATION = 0x965,

	AMT_UPDATES = 0x968,

	CHAR_APPLY_CAT_TO_SEL = 0xF3E,

	CHAR_APPLY_TAG = 0xC11,

	CHAR_DESIGNKIT_APPLY = 0xAAB,

	CHAR_DESIGNKIT_NEWFORMAT = 0xB01,

	CHAR_DESIGNKIT_RESET = 0xABB,

	CHAR_DESIGNKIT_UPDATEALL = 0xAAE,

	CHAR_DESIGNKIT_UPDATEOPTIONS = 0xB04,

	CHAR_DESIGN_CAT = 0xF4F,

	CMD_OPEN_DITAMAP_COMPONENT = 0xF14,

	CONDTEXT_KIT_APPLY = 0xB09,

	CSR_BEFORE_ELEMENT = 0x14B,

	CSR_BOE = 0x149,

	CSR_BOL = 0x105,

	CSR_BOP = 0x10B,

	CSR_BOS = 0x109,

	CSR_BOT = 0x110,

	CSR_BOTR = 0x10E,

	CSR_BOW = 0x107,

	CSR_DOWN = 0x102,

	CSR_EOE = 0x14A,

	CSR_EOL = 0x106,

	CSR_EOP = 0x10C,

	CSR_EOS = 0x10A,

	CSR_EOW = 0x108,

	CSR_FIRST_COL = 0x143,

	CSR_HOME = 0x100,

	CSR_INTO_CHILD = 0x14D,

	CSR_LEFT = 0x104,

	CSR_NEXT_BOP = 0x142,

	CSR_NEXT_BOS = 0x141,

	CSR_NEXT_BOW = 0x140,

	CSR_NEXT_COL = 0x144,

	CSR_NEXT_ELEMENT = 0x145,

	CSR_PREV_ELEMENT = 0x146,

	CSR_PREV_EOS = 0x937,

	CSR_PREV_EOW = 0x938,

	CSR_RIGHT = 0x103,

	CSR_TOP = 0x10F,

	CSR_TOTR = 0x10D,

	CSR_UP = 0x101,

	DEL_BOL = 0x119,

	DEL_BOS = 0x163,

	DEL_BOW = 0x114,

	DEL_CHARBWD = 0x112,

	DEL_CHARFWD = 0x113,

	DEL_EOL = 0x116,

	DEL_EOS = 0x117,

	DEL_EOW = 0x115,

	DEL_NEXT_SS = 0x162,

	DEL_SEL = 0x118,

	DEL_WORD_END = 0x161,

	DEL_WORD_START = 0x160,

	ELEM_BAM = 0xFDC,

	ELEM_CHANGE_CAT_AT_SEL = 0xA12,

	ELEM_INSERT_CUSTOM_1 = 0xA21,

	ELEM_INSERT_CUSTOM_10 = 0xA2A,

	ELEM_INSERT_CUSTOM_2 = 0xA22,

	ELEM_INSERT_CUSTOM_3 = 0xA23,

	ELEM_INSERT_CUSTOM_4 = 0xA24,

	ELEM_INSERT_CUSTOM_5 = 0xA25,

	ELEM_INSERT_CUSTOM_6 = 0xA26,

	ELEM_INSERT_CUSTOM_7 = 0xA27,

	ELEM_INSERT_CUSTOM_8 = 0xA28,

	ELEM_INSERT_CUSTOM_9 = 0xA29,

	ELEM_INS_CAT_AT_SEL = 0xA10,

	ELEM_WRAP_CAT_AT_SEL = 0xA11,

	END_DIALOG = 0xC200,

	END_WINDOW = 0xC500,

	EXTEND_SEL = (0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0800),

	FM_RPT_CMDS_BY_SHORTCUT = 0xD01,

	FM_RPT_CMDS_BY_TAG = 0xD00,

	FM_SEPARATOR = 0xF12,

	FM_TERMINATE = 0xFFF,

	FOCUS_INPUT_ATTREDITOR = 0x62F,

	FOCUS_INPUT_CELLFMT = 0x62A,

	FOCUS_INPUT_COND = 0x629,

	FOCUS_INPUT_CUSTRS = 0x62B,

	FOCUS_INPUT_DOC = 0x620,

	FOCUS_INPUT_ELEM_CTX = 0xA32,

	FOCUS_INPUT_FONTFMT = 0x627,

	FOCUS_INPUT_HYPERTEXT = 0x624,

	FOCUS_INPUT_MARKER = 0x622,

	FOCUS_INPUT_PGFFMT = 0x626,

	FOCUS_INPUT_SEARCH = 0x621,

	FOCUS_INPUT_SPELL = 0x623,

	FOCUS_INPUT_STRWIN = 0x62D,

	FOCUS_INPUT_TBLFMT = 0x62C,

	FOCUS_INPUT_VALIDATION = 0x62E,

	HIGH_CHAR = 0x240,

	HIGH_CHAR_NEXT = 0x510,

	HIGH_CHAR_PREV = 0x410,

	HIGH_CLEAR = 0x247,

	HIGH_COL_BOT = 0x418,

	HIGH_COL_TOP = 0x417,

	HIGH_ELEMENT = 0x249,

	HIGH_ELEMENT_NEXT = 0x421,

	HIGH_ELEMENT_PREV = 0x420,

	HIGH_FLOW = 0x248,

	HIGH_FLOW_BEG = 0x419,

	HIGH_FLOW_END = 0x41A,

	HIGH_HYPERTEXT = 0x517,

	HIGH_LINE = 0x242,

	HIGH_LINE_BEG = 0x41B,

	HIGH_LINE_DOWN = 0x416,

	HIGH_LINE_END = 0x41C,

	HIGH_LINE_NEXT = 0x512,

	HIGH_LINE_PREV = 0x412,

	HIGH_LINE_UP = 0x415,

	HIGH_PARENT = 0x423,

	HIGH_PGF = 0x244,

	HIGH_PGF_NEXT = 0x514,

	HIGH_PGF_PREV = 0x414,

	HIGH_SAMECB = 0x515,

	HIGH_SAMECOND = 0x516,

	HIGH_SENT = 0x243,

	HIGH_SENT_NEXT = 0x513,

	HIGH_SENT_PREV = 0x413,

	HIGH_SHL = 0x245,

	HIGH_SHR = 0x246,

	HIGH_SIBLINGS = 0x422,

	HIGH_WORD = 0x241,

	HIGH_WORD_NEXT = 0x511,

	HIGH_WORD_PREV = 0x411,

	INIT_DIALOG = 0xD80,

	INLINE_TYPEIN = 0xDF3,

	KBD_ABORT = 0x250,

	KBD_ABORT_DLGS = 0x254,

	KBD_ABOUTPRODUCT = 0x305,

	KBD_ACCEPTALLCHANGE = 0x960,

	KBD_ACCEPTCHANGE = 0x958,

	KBD_ACCEPTCHANGEANDNEXT = 0x99B,

	KBD_ACROBAT_SETUP = 0x36C,

	KBD_ACTIVATE_IN_PDF_BYDEFAULT = 0x4FA,

	KBD_ADDAUTOCORR = 0x3C5,

	KBD_ADDDOCDICT = 0x3C4,

	KBD_ADDMARKERTYPE = 0x41D,

	KBD_ADDPAGE = 0x346,

	KBD_ADDUSRDICT = 0x3C3,

	KBD_ALIGN = 0x384,

	KBD_ALIGN_BOTTOM = 0x292,

	KBD_ALIGN_MIDDLE = 0x291,

	KBD_ALIGN_TOP = 0x290,

	KBD_ALLCAP = 0x33A,

	KBD_ALLCAPH = 0x369,

	KBD_ALLLOWER = 0x33B,

	KBD_ALLLOWERH = 0x36A,

	KBD_ALLSELECT = 0xF20,

	KBD_ANCHOR = 0x350,

	KBD_ANTIPUTINLINE = 0xF54,

	KBD_API = 0xDF0,

	KBD_API_SHORTCUT = 0xDF1,

	KBD_ARCTOOL = 0x3A4,

	KBD_ASC_ADDDOCDICT = 0x997,

	KBD_ASC_ADDUSRDICT = 0x996,

	KBD_ASC_CORRECT = 0x995,

	KBD_ASC_ENABLE_AUTO_SPELL_CHECK = 0x999,

	KBD_ASSIGN_ELEMENT_ID = 0xF16,

	KBD_ATOMIZE_INSET = 0xFAA,

	KBD_ATTRCOND = 0x954,

	KBD_ATTREDITQUICK = 0xF4D,

	KBD_ATTRIBUTE_EDIT = 0xFEC,

	KBD_ATTR_CONFIG_FILE_MAKER = 0xFFA,

	KBD_ATTR_DISP_OPTS = 0xFEE,

	KBD_BACK = 0x381,

	KBD_BACKSTACK = 0xEF0,

	KBD_BACKTAB = 0x220,

	KBD_BANNER_TEXT = 0x137,

	KBD_BODYPAGE = 0x342,

	KBD_BOOKADDFILE = 0x30A,

	KBD_BOOKADDFOLDER = 0x601,

	KBD_BOOKADDGROUP = 0x609,

	KBD_BOOKADDLINKEDFOLDER = 0x602,

	KBD_BOOKCOMP_EXCLUDE = 0x4E0,

	KBD_BOOKCOMP_FILENAME = 0x607,

	KBD_BOOKCOMP_TEXT = 0x608,

	KBD_BOOKDISPLAYFILENAME = 0x30D,

	KBD_BOOKDISPLAYTEXT = 0x30E,

	KBD_BOOKEDITDEFINE = 0x30B,

	KBD_BOOKRENAMEFILE = 0x30C,

	KBD_BORDERS = 0x361,

	KBD_BREADCRUMBS = 0x9CA,

	KBD_BROWSE_URL = 0x9A0,

	KBD_CACHE_STATS = 0xF05,

	KBD_CAPITAL = 0x32B,

	KBD_CAPTURE = 0x251,

	KBD_CAPTURE_LIVE_DIALOG = 0xF78,

	KBD_CBARPRO = 0x334,

	KBD_CELLFMTQUICK = 0xF43,

	KBD_CHANGEDICT = 0x3C9,

	KBD_CHANGEQUICK = 0xF4C,

	KBD_CHARFMT_DELETE = 0xB07,

	KBD_CHARFMT_DELETE_UNUSED = 0xB14,

	KBD_CHECKBATCH = 0x3CE,

	KBD_CHECKDOC = 0x3C1,

	KBD_CHECKPAGE = 0x3CB,

	KBD_CHECKSEL = 0x3C0,

	KBD_CLEAR = 0x324,

	KBD_CLEARAUTO = 0x3C8,

	KBD_CLOPWIN = 0x392,

	KBD_CLOSEWIN = 0x390,

	KBD_CLOSE_ATTREDITOR = 0x68B,

	KBD_CLOSE_CHARACTER_CATALOG = 0xD22,

	KBD_CLOSE_CHARACTER_DESIGNER = 0xD29,

	KBD_CLOSE_COMPONENTS = 0x3EB,

	KBD_CLOSE_COND = 0x686,

	KBD_CLOSE_CUSTRS = 0x687,

	KBD_CLOSE_ELEMENT_CATALOG = 0xD26,

	KBD_CLOSE_ELEM_CTX = 0x68C,

	KBD_CLOSE_EQUATIONS_PALETTE = 0xD24,

	KBD_CLOSE_FONTFMT = 0x685,

	KBD_CLOSE_HYPERTEXT = 0x68D,

	KBD_CLOSE_MARKER = 0x682,

	KBD_CLOSE_PARAGRAPH_CATALOG = 0xD21,

	KBD_CLOSE_PARAGRAPH_DESIGNER = 0xD28,

	KBD_CLOSE_PGFFMT = 0x684,

	KBD_CLOSE_SEARCH = 0x681,

	KBD_CLOSE_SPELL = 0x683,

	KBD_CLOSE_STRWIN = 0x689,

	KBD_CLOSE_TABLE_CATALOG = 0xFBD,

	KBD_CLOSE_TABLE_DESIGNER = 0xD2A,

	KBD_CLOSE_TBLFMT = 0x688,

	KBD_CLOSE_TOOLS_PALETTE = 0xD23,

	KBD_CLOSE_TOP_PALETTE = 0xD20,

	KBD_CLOSE_VALIDATION = 0x68A,

	KBD_CMS_CONNECTION_MGR = 0x802,

	KBD_CMS_UPLOAD_DOC_OR_BOOK = 0x805,

	KBD_COLLAPSE_ALL = 0x3FA,

	KBD_COLLAYOUT = 0x348,

	KBD_COLOR = 0x39F,

	KBD_COMBINED_FONTS = 0x338,

	KBD_COMPARE = 0x31F,

	KBD_COMPONENT_PROPERTIES = 0x3EE,

	KBD_CONDINDICATOR = 0x953,

	KBD_CONDINQUICK = 0xF44,

	KBD_CONDNOTINQUICK = 0xF45,

	KBD_CONDTEXT = 0x357,

	KBD_CONDTOGGLEOVERR = 0x368,

	KBD_CONDVISIBILITY = 0x367,

	KBD_CONDVISONLYQUICK = 0xF47,

	KBD_CONFIGURE_TC_COLOR = 0x990,

	KBD_CONNECT_TEXT_FRAME = 0x35B,

	KBD_CONSTRAIN = 0x379,

	KBD_CONTEXTMENU = 0x914,

	KBD_CONTEXTMENU_SHORTCUT = 0x915,

	KBD_COPY = 0x322,

	KBD_COPYATTRS = 0xF9F,

	KBD_COPYCELLFMT = 0xF9B,

	KBD_COPYCOLW = 0xF9C,

	KBD_COPYCOND = 0xF9D,

	KBD_COPYFONT = 0x325,

	KBD_COPYPGF = 0x326,

	KBD_COPYRIGHT = 0x504,

	KBD_CORRECT = 0x3C2,

	KBD_COUNT_SBLOCKS = 0x653,

	KBD_CREATE_MULTIMEDIA_LINK = 0x3E3,

	KBD_CREATE_MULTIMEDIA_LINK_TBL = 0x3E4,

	KBD_CREATE_PUBLISHER = 0x3D5,

	KBD_CSHELPMODE = 0x304,

	KBD_CURTAIL = 0x35D,

	KBD_CUSTOMNEW = 0x2FF,

	KBD_CUST_TEXT_FRAME = 0xA01,

	KBD_CUT = 0x321,

	KBD_CUTBOTH = 0xA04,

	KBD_CUTHEAD = 0x35C,

	KBD_DASH0 = 0x404,

	KBD_DASH1 = 0x405,

	KBD_DASHOPTION = 0x408,

	KBD_DECDASH = 0x407,

	KBD_DECFILL = 0x3B7,

	KBD_DECPEN = 0x3B3,

	KBD_DECWIDTH = 0x3AF,

	KBD_DELDOCDICT = 0x3C7,

	KBD_DELETE = 0xD11,

	KBD_DELETEMARKER = 0x969,

	KBD_DELETEPAGE = 0x347,

	KBD_DELETE_FILE = 0x30F,

	KBD_DELETE_INLINE_TOC = 0xA60,

	KBD_DELINKHOTSPOT = 0x507,

	KBD_DELMARKERTYPE = 0x358,

	KBD_DELUSRDICT = 0x3C6,

	KBD_DEREFREF = 0xF08,

	KBD_DFN_LIB_obsolete = 0x501,

	KBD_DFN_WEB_obsolete = 0x500,

	KBD_DIRECTION_LTR = 0x5E0,

	KBD_DIRECTION_RTL = 0x5E1,

	KBD_DISTRIBUTE = 0x385,

	KBD_DOCINFO = 0x3DA,

	KBD_DOC_REPORT = 0xF10,

	KBD_DONTHYPHEN = 0x226,

	KBD_DOUBLE_QUOTE = 0x401,

	KBD_DRE_MODE_M = 0xF7C,

	KBD_DRE_MODE_W = 0xF7B,

	KBD_DRE_MODE_X = 0xF7A,

	KBD_DSEXIT = 0xF01,

	KBD_DUMMY_FCODE = 0xFFC,

	KBD_DUMPHYPERTEXT = 0xC20,

	KBD_ECAPTURE = 0x256,

	KBD_EDITHOTSPOT = 0x4FE,

	KBD_EDITLINKS = 0x912,

	KBD_EDITMARKERTYPE = 0x409,

	KBD_EDITVARIABLE = 0xA0C,

	KBD_ELEMENTWIN = 0xF28,

	KBD_ELEM_BORDER = 0xFD2,

	KBD_ELEM_CAT_OPTS = 0xFD7,

	KBD_ELEM_DEMOTE = 0xFDF,

	KBD_ELEM_MERGE_1ST = 0xFD3,

	KBD_ELEM_MERGE_LAST = 0xFD4,

	KBD_ELEM_PROMOTE = 0xFDE,

	KBD_ELEM_SPLIT = 0xFD5,

	KBD_ELEM_TAGS = 0xFDD,

	KBD_ELEM_TRANSPOSE_NEXT = 0xFF5,

	KBD_ELEM_TRANSPOSE_PREV = 0xFF4,

	KBD_ELEM_UNWRAP = 0xFD6,

	KBD_EMBEDDED00 = 0x920,

	KBD_EMBEDDED01 = 0x921,

	KBD_EMBEDDED02 = 0x922,

	KBD_EMBEDDED03 = 0x923,

	KBD_EMBEDDED04 = 0x924,

	KBD_EMBEDDED05 = 0x925,

	KBD_EMBEDDED06 = 0x926,

	KBD_EMBEDDED07 = 0x927,

	KBD_EMBEDDED08 = 0x928,

	KBD_EMBEDDED09 = 0x92A,

	KBD_EMBEDDED10 = 0x92B,

	KBD_EMBEDDED11 = 0x92C,

	KBD_EMBEDDED12 = 0x92D,

	KBD_EMBEDDED13 = 0x92E,

	KBD_EMBEDDED14 = 0x92F,

	KBD_EMBEDDED15 = 0x930,

	KBD_EMBEDDED16 = 0x931,

	KBD_EMBEDDED17 = 0x932,

	KBD_EMBEDDED18 = 0x933,

	KBD_EMBEDDED19 = 0x934,

	KBD_EMBEDDEDMAX = 0x94F,

	KBD_EMSPACE = 0x22C,

	KBD_ENSPACE = 0x22D,

	KBD_EQUATION = 0x336,

	KBD_EVACUATE = 0xF60,

	KBD_EXPAND_ALL = 0x3FB,

	KBD_EXPORT_DOCUMENT = 0xC16,

	KBD_EXPORT_GRAPHIC = 0xC15,

	KBD_EXPOSEWIN = 0x395,

	KBD_FB_EDIT_PREFS = 0xFEF,

	KBD_FILL0 = 0x3B4,

	KBD_FILL1 = 0x3B5,

	KBD_FINDNEXT = 0x955,

	KBD_FINDPREV = 0x956,

	KBD_FIRSTPAGE = 0x340,

	KBD_FIRSTTAB = 0x222,

	KBD_FIT_FRAME = 0x0FD,

	KBD_FIT_FRAME_PROPORTIONAL = 0x9C9,

	KBD_FIT_IMAGE = 0xDA6,

	KBD_FLIPLR = 0x371,

	KBD_FLIPUD = 0x370,

	KBD_FNEXT = 0x231,

	KBD_FONTDESIGN = 0x330,

	KBD_FONTPOD = 0x966,

	KBD_FONTQUICK = 0xF40,

	KBD_FONTREPLACEPOD = 0x95C,

	KBD_FONTWIN = 0xF24,

	KBD_FOOTNOTE = 0x351,

	KBD_FOOTNOTEPRO = 0x335,

	KBD_FPREV = 0x230,

	KBD_FRAMETOOL = 0x3AA,

	KBD_FREETOOL = 0x3A9,

	KBD_FREEZE = 0x34B,

	KBD_FRONT = 0x380,

	KBD_FULLRULERS = 0x3BD,

	KBD_GBL_END = 0x1FF,

	KBD_GBL_START = 0x100,

	KBD_GENERATE = 0x3E1,

	KBD_GETTRIGGER = 0x253,

	KBD_GOTOIP = 0x96F,

	KBD_GOTOLINEN = 0x970,

	KBD_GOTOPAGE = 0x345,

	KBD_GOTOPAGEN = 0x96E,

	KBD_GRAPHIC_SET_NAME = 0x4FC,

	KBD_GRAVITY = 0x37B,

	KBD_GRAVITY_0 = 0x482,

	KBD_GRAVITY_1 = 0x483,

	KBD_GRID = 0x364,

	KBD_GROUP = 0x382,

	KBD_HARDHYPHEN = 0x227,

	KBD_HARDRETURN = 0x229,

	KBD_HARDSPACE = 0x228,

	KBD_HEATREF = 0xF09,

	KBD_HELP = 0x302,

	KBD_HELP_INDEX = 0x2A0,

	KBD_HELP_KEYS = 0x2A1,

	KBD_HELP_ONLINEMANUALS = 0x2A4,

	KBD_HELP_OVERVIEW = 0x2A3,

	KBD_HELP_SAMPLES = 0x2A2,

	KBD_HELP_WEBWORKS = 0x2A6,

	KBD_HEROIC_OPEN = 0x306,

	KBD_HIDEWIN = 0x396,

	KBD_HIDE_BORDERS = 0x4F1,

	KBD_HIDE_BREADCRUMBS = 0x9CB,

	KBD_HIDE_COND_IND = 0x4F9,

	KBD_HIDE_ELEM_BORDER = 0x4F6,

	KBD_HIDE_GRAPHICS = 0x4F8,

	KBD_HIDE_GRID = 0x4F4,

	KBD_HIDE_HOTSPOTINDICATORS = 0x50A,

	KBD_HIDE_LINK_BOUNDARIES = 0x4F5,

	KBD_HIDE_RULERS = 0x4F3,

	KBD_HIDE_SYMBOLS = 0x4F2,

	KBD_HISHWIN = 0x397,

	KBD_HIST = 0x936,

	KBD_HOTSPOT = 0x4FD,

	KBD_HOTSPOTINDICATORS = 0x508,

	KBD_HOTSPOTSPOD = 0x4FF,

	KBD_HSCROLL = 0xF38,

	KBD_HYPERTEXT = 0x359,

	KBD_HYPHENATE = 0x3CD,

	KBD_HYPRTXT_SHTCUT = 0x41E,

	KBD_IMAGE_IMPORT = 0x5EA,

	KBD_IMPORT = 0x314,

	KBD_INCDASH = 0x406,

	KBD_INCFILL = 0x3B6,

	KBD_INCPEN = 0x3B2,

	KBD_INCWIDTH = 0x3AE,

	KBD_INDENT_LIST = 0x5E4,

	KBD_INDEX_AUTHOR = 0x2C1,

	KBD_INDEX_MARKER = 0x2C3,

	KBD_INDEX_REFERENCES = 0x2C4,

	KBD_INDEX_STANDARD = 0x2C0,

	KBD_INDEX_SUBJECT = 0x2C2,

	KBD_INFO = 0x303,

	KBD_INITCAP = 0x33C,

	KBD_INITCAPH = 0x36B,

	KBD_INLINE_ATTREDTR = 0x29B,

	KBD_INLINE_TOC = 0xA59,

	KBD_INPUT = 1,

	KBD_INSERTOBJECT = 0x913,

	KBD_INSERTQUICK = 0xF48,

	KBD_INSERT_AFTER = 0xD13,

	KBD_INSERT_BEFORE = 0xD12,

	KBD_INSET = 0x354,

	KBD_INSETPOD = 0x994,

	KBD_Item1stLogical = 0xD60,

	KBD_ItemDown = 0xD68,

	KBD_ItemFirstFocus = 0xD6A,

	KBD_ItemLeft = 0xD65,

	KBD_ItemNextLogical = 0xD61,

	KBD_ItemNextPhysical = 0xD63,

	KBD_ItemPrevLogical = 0xD62,

	KBD_ItemPrevPhysical = 0xD64,

	KBD_ItemRight = 0xD66,

	KBD_ItemSelect = 0xD69,

	KBD_ItemUp = 0xD67,

	KBD_JOINCURVES = 0x377,

	KBD_KBMACRO = 0x317,

	KBD_KEEPTOOL = 0x37C,

	KBD_KERNDOWN = 0x11B,

	KBD_KERNDOWN6 = 0x122,

	KBD_KERNHOME = 0x11E,

	KBD_KERNLEFT = 0x11C,

	KBD_KERNLEFT6 = 0x123,

	KBD_KERNRIGHT = 0x11D,

	KBD_KERNRIGHT6 = 0x124,

	KBD_KERNUP = 0x11A,

	KBD_KERNUP6 = 0x121,

	KBD_LASTPAGE = 0x341,

	KBD_LASTTOOL = 0x3AB,

	KBD_LGEQN = 0xF52,

	KBD_LINELAYOUT = 0x332,

	KBD_LINENUMPRO = 0x673,

	KBD_LINENUMTOGGLE = 0x674,

	KBD_LINETOOL = 0x3A0,

	KBD_LINK_BOUNDARIES = 0x3D7,

	KBD_LIST_FIGURE = 0x2B1,

	KBD_LIST_MARKER = 0x2B5,

	KBD_LIST_MARKER_ALPHA = 0x2B6,

	KBD_LIST_PGF = 0x2B3,

	KBD_LIST_PGF_ALPHA = 0x2B4,

	KBD_LIST_REFERENCES = 0x2B7,

	KBD_LIST_TABLE = 0x2B2,

	KBD_MANCOND = 0x952,

	KBD_MARKERS = 0x355,

	KBD_MARKERSPOD = 0x96A,

	KBD_MASTERPAGE = 0x343,

	KBD_MATHML_EDIT = 0xF18,

	KBD_MATHML_EQUATION = 0x3E5,

	KBD_MATHWIN = 0xF26,

	KBD_MATH_BASE = 0x1000,

	KBD_MAXIMIZE = 0x910,

	KBD_MEDEQN = 0xF51,

	KBD_MEMFAIL = 0xF02,

	KBD_MEM_STATS = 0xF04,

	KBD_MENUBARFOCUS = 0x3F0,

	KBD_MENUCOMPLETE = 0x33D,

	KBD_MENUCUSTOM = 0x33F,

	KBD_MENUMODIFY = 0x3D9,

	KBD_MENUQUICK = 0x33E,

	KBD_MENURESET = 0x3D8,

	KBD_MINIMIZE = 0x90F,

	KBD_MODE_ROTATE_TOOL = 0xFAD,

	KBD_MOVEWIN = 0x393,

	KBD_MOVE_DOWN = 0x70B,

	KBD_MOVE_LEFT = 0x70C,

	KBD_MOVE_RIGHT = 0x70D,

	KBD_MOVE_UP = 0x70A,

	KBD_MUTATE = 0x37F,

	KBD_NAMESPACES = 0xFF8,

	KBD_NAVIGATE_DOWN = 0x5E6,

	KBD_NEW = 0x300,

	KBD_NEWAFRAME = 0x96D,

	KBD_NEWBOOK = 0x308,

	KBD_NEWHYPERTEXT = 0x35E,

	KBD_NEWMARKER = 0x356,

	KBD_NEWMASTER = 0xA0A,

	KBD_NEWPROJECT = 0x3FC,

	KBD_NEWVAR = 0xF06,

	KBD_NEW_XML = 0x803,

	KBD_NEXTPAGE = 0x34D,

	KBD_NOCHANGEDB = 0xF4A,

	KBD_NORMALIZE_TAGS = 0xA33,

	KBD_NUMBERING = 0x333,

	KBD_NUMBERUTILITY_FTON = 0x5E9,

	KBD_NUMBERUTILITY_ITON = 0x5E3,

	KBD_NUMBERUTILITY_NTOF = 0x5E8,

	KBD_NUMBERUTILITY_NTOI = 0x5E2,

	KBD_NUMLOCK = 0x170,

	KBD_NUMSPACE = 0x22A,

	KBD_OBALIGN_BOTTOM = 0x12B,

	KBD_OBALIGN_CENTER = 0x12C,

	KBD_OBALIGN_LEFT = 0x12D,

	KBD_OBALIGN_MIDDLE = 0x12A,

	KBD_OBALIGN_RIGHT = 0x12E,

	KBD_OBALIGN_TOP = 0x129,

	KBD_OBJDOWN = 0x126,

	KBD_OBJLEFT = 0x127,

	KBD_OBJPROPS = 0x387,

	KBD_OBJRIGHT = 0x128,

	KBD_OBJSELECT = 0xF21,

	KBD_OBJSELECT_NOPREF = 0xF2A,

	KBD_OBJUP = 0x125,

	KBD_OPEN = 0x301,

	KBD_OPENALL = 0x31A,

	KBD_OPENCONTAININGFOLDER = 0xD6D,

	KBD_OPENLINE = 0x22E,

	KBD_OPENWIN = 0x391,

	KBD_OPEN_COMPONENTS = 0x3EA,

	KBD_OPEN_IN_POPUP_WIN_IN_PDF = 0x4FB,

	KBD_OPEN_REPOSITORY = 0x801,

	KBD_OPTIONS = 0x360,

	KBD_OUTDENT_LIST = 0x5E5,

	KBD_OVALTOOL = 0x3A6,

	KBD_OVERPRINT = 0x3D2,

	KBD_OVERPRINT_NONE = 0x3D4,

	KBD_PAGEBACK = 0x34A,

	KBD_PAGEBREAK = 0x32F,

	KBD_PAGELAYOUT = 0x503,

	KBD_PAGESETUP = 0x319,

	KBD_PAGESIZE = 0x349,

	KBD_PAGESTATUS = 0xF37,

	KBD_PAGEUPDATE = 0xA00,

	KBD_PAGINATION = 0xA40,

	KBD_PASTE = 0x323,

	KBD_PASTESPECIAL = 0xD10,

	KBD_PASTE_AFTER = 0xD15,

	KBD_PASTE_BEFORE = 0xD14,

	KBD_PASTE_RTF = 0x502,

	KBD_PAUSE_0x01 = 0x632,

	KBD_PAUSE_0x10 = 0x631,

	KBD_PAUSE_1x00 = 0x630,

	KBD_PEN0 = 0x3B0,

	KBD_PEN1 = 0x3B1,

	KBD_PGFDESIGN = 0x331,

	KBD_PGFFMT_DELETE = 0xB06,

	KBD_PGFFMT_DELETE_UNUSED = 0xB13,

	KBD_PGFQUICK = 0xF41,

	KBD_PGFWIN = 0xF23,

	KBD_PICKOBJPROPS = 0x388,

	KBD_PODLOCATION = 0x31E,

	KBD_POLYGTOOL = 0x3A2,

	KBD_POLYLTOOL = 0x3A3,

	KBD_POPUP_MENU = 0x39D,

	KBD_PREVIEWFBA = 0xB16,

	KBD_PREVIEW_ACCEPTALL = 0x962,

	KBD_PREVIEW_OFF = 0x964,

	KBD_PREVIEW_REJECTALL = 0x963,

	KBD_PREVPAGE = 0x34C,

	KBD_PRINT = 0x313,

	KBD_PRINTSETUP = 0x90A,

	KBD_PRINT_COMPONENTS = 0x3EC,

	KBD_PROJECTADDLOCATION = 0x40A,

	KBD_PROJECTCREATEFOLDER = 0x40B,

	KBD_PROJECTDELETEFILE = 0x60A,

	KBD_PROJECTEDITFILE = 0x40F,

	KBD_PROJECTEXPLOREFILE = 0x40E,

	KBD_PROJECTMANAGERVIEW = 0x40C,

	KBD_PROJECTRENAMEFILE = 0x40D,

	KBD_PROJECTSHOWFILENAME = 0x60B,

	KBD_PROJECTSHOWFILEPATH = 0x60C,

	KBD_PURIFY_ALL_LEAKS = 0x651,

	KBD_PURIFY_CLEAR_LEAKS = 0x652,

	KBD_PURIFY_NEW_LEAKS = 0x650,

	KBD_PUTINLINE = 0xF53,

	KBD_QUIETCLOSEWIN = 0x39C,

	KBD_QUITALL = 0x31B,

	KBD_QUITWIN = 0x399,

	KBD_RANDF = 0x234,

	KBD_RECORD = 0x252,

	KBD_RECTTOOL = 0x3A1,

	KBD_REDO = 0x935,

	KBD_REFERENCE = 0x352,

	KBD_REFORMATDOC = 0x3CF,

	KBD_REFPAGE = 0x344,

	KBD_REFRESHWIN = 0x398,

	KBD_REFRESH_DITAMAP_RMVIEW = 0x807,

	KBD_REJECTALLCHANGE = 0x961,

	KBD_REJECTCHANGE = 0x959,

	KBD_REJECTCHANGEANDNEXT = 0x99C,

	KBD_REMOVEPOSTER = 0x3DE,

	KBD_REMOVE_STRUCT = 0xFF0,

	KBD_RENAMEFRAME = 0xF3B,

	KBD_RENAMEMARKERTYPE = 0x35F,

	KBD_RENAMEORPLAIN = 0x900,

	KBD_RENAMEPAGE = 0xF3A,

	KBD_REORDERMASTER = 0xA0B,

	KBD_REPEAT = 0x939,

	KBD_REPEATNEW = 0x31D,

	KBD_REROTATE = 0x38E,

	KBD_RESETDB = 0xF4B,

	KBD_RESHAPE = 0x376,

	KBD_RESIZEBOX = 0xF25,

	KBD_RESIZEBOXM = 0xF27,

	KBD_RESIZELOCK = 0x39A,

	KBD_RESIZEUNLOCK = 0x39B,

	KBD_RESTORE = 0x911,

	KBD_RESTOREFONT = 0x505,

	KBD_RESTORE_SESSION = 0xF17,

	KBD_RETURN = 0x22F,

	KBD_REVERT = 0x312,

	KBD_REWRAP_INLINE_MATH = 0xFAC,

	KBD_RGLOBAL = 0x233,

	KBD_RM_MODE = 0xF79,

	KBD_RONCE = 0x232,

	KBD_ROTATE = 0x38B,

	KBD_ROTATE_AGAIN = 0x38C,

	KBD_ROTATE_CCW = 0x372,

	KBD_ROTATE_CCW_SMALL = 0x38A,

	KBD_ROTATE_CW = 0x386,

	KBD_ROTATE_CW_SMALL = 0x389,

	KBD_ROTATE_NATURAL = 0x38D,

	KBD_ROTATE_RESET0 = 0x38F,

	KBD_ROTPAGE_MINUS = 0x34F,

	KBD_ROTPAGE_NORM = 0xA05,

	KBD_ROTPAGE_PLUS = 0x34E,

	KBD_ROT_MINUS = 0x386,

	KBD_ROT_PLUS = 0x372,

	KBD_ROUNDRECT = 0x3A5,

	KBD_RUBIPROPS = 0x3DD,

	KBD_RULERS = 0x363,

	KBD_RUN_BBOX = 0x669,

	KBD_RUN_CONTOUR = 0x668,

	KBD_RUN_GAP = 0x671,

	KBD_RUN_OFF = 0x670,

	KBD_RUN_PROPS = 0x667,

	KBD_SAVE = 0x310,

	KBD_SAVEALL = 0x31C,

	KBD_SAVEAS = 0x311,

	KBD_SAVEASDBRE = 0xF70,

	KBD_SAVEASPDF = 0x950,

	KBD_SAVEASPDFREVIEW = 0x95A,

	KBD_SAVEASPDFREVIEW2 = 0x95B,

	KBD_SAVEASPDFSHARE = 0x95F,

	KBD_SAVEASPDFUBIQ = 0x95E,

	KBD_SAVEASXML = 0x951,

	KBD_SAVEDBRE = 0xF77,

	KBD_SAVEFMX = 0xF76,

	KBD_SAVEMETA = 0xF03,

	KBD_SAVESAS = 0xF74,

	KBD_SAVE_COMPONENTS = 0x3ED,

	KBD_SCALE = 0x373,

	KBD_SCREENMODE_FULLSCREEN = 0x97B,

	KBD_SCREENMODE_FULLSCREEN_UI = 0x97A,

	KBD_SCREENMODE_STANDARD = 0x979,

	KBD_SCREENMODE_TOGGLE = 0x978,

	KBD_SEARCH = 0x329,

	KBD_SEARCHREFS = 0xB17,

	KBD_SEARCH_COMMAND = 0x68E,

	KBD_SELECTALL = 0x327,

	KBD_SELECT_CHAPTER_COMPONENTS = 0x9D3,

	KBD_SELECT_EXCLUDED_FILE = 0x9D1,

	KBD_SELECT_FM_FILES = 0x315,

	KBD_SELECT_FM_XMLAUTHOR_FILES = 0xA49,

	KBD_SELECT_FRAME = 0x5ED,

	KBD_SELECT_GENERATED_FILES = 0x32D,

	KBD_SELECT_IMAGE = 0x19F,

	KBD_SELECT_NONEXCLUDED_FILE = 0x9D2,

	KBD_SELECT_NON_GENERATED_FILES = 0x32E,

	KBD_SELECT_PRINTABLE_FILES = 0x9E2,

	KBD_SELECT_SECTION_COMPONENTS = 0x9D4,

	KBD_SELECT_SUBSECTION_COMPONENTS = 0x9D5,

	KBD_SEPARATIONS = 0x365,

	KBD_SESSION = 0x318,

	KBD_SETALIGN_PROPS = 0x992,

	KBD_SETCAP = 0x3BB,

	KBD_SETCAP_0 = 0x460,

	KBD_SETCAP_1 = 0x461,

	KBD_SETCAP_2 = 0x462,

	KBD_SETCAP_3 = 0x463,

	KBD_SETCAP_OPTION = 0x46F,

	KBD_SETDASH = 0x403,

	KBD_SETDASH_0 = 0x470,

	KBD_SETDASH_1 = 0x471,

	KBD_SETDASH_2 = 0x472,

	KBD_SETDASH_3 = 0x473,

	KBD_SETDASH_4 = 0x474,

	KBD_SETDASH_5 = 0x475,

	KBD_SETDASH_6 = 0x476,

	KBD_SETDASH_7 = 0x477,

	KBD_SETDASH_8 = 0x478,

	KBD_SETDASH_OPTION = 0x47F,

	KBD_SETDISTRIBUTE_PROPS = 0x993,

	KBD_SETELCATALL = 0xFDB,

	KBD_SETELCATCHILD = 0xFDA,

	KBD_SETELCATFREQ = 0xFF7,

	KBD_SETELCATLOOSE = 0xFD9,

	KBD_SETELCATSTRICT = 0xFD8,

	KBD_SETFILL = 0x3B8,

	KBD_SETFILL_0 = 0x430,

	KBD_SETFILL_1 = 0x431,

	KBD_SETFILL_2 = 0x432,

	KBD_SETFILL_3 = 0x433,

	KBD_SETFILL_4 = 0x434,

	KBD_SETFILL_5 = 0x435,

	KBD_SETFILL_6 = 0x436,

	KBD_SETFILL_7 = 0x437,

	KBD_SETFILL_8 = 0x438,

	KBD_SETFILL_9 = 0x439,

	KBD_SETFILL_A = 0x43A,

	KBD_SETFILL_B = 0x43B,

	KBD_SETFILL_C = 0x43C,

	KBD_SETFILL_D = 0x43D,

	KBD_SETFILL_E = 0x43E,

	KBD_SETFILL_F = 0x43F,

	KBD_SETFROMCOLOR = 0x48C,

	KBD_SETKNOCKOUT = 0x48A,

	KBD_SETOVERPRINT = 0x48B,

	KBD_SETPEN = 0x3B9,

	KBD_SETPEN_0 = 0x440,

	KBD_SETPEN_1 = 0x441,

	KBD_SETPEN_2 = 0x442,

	KBD_SETPEN_3 = 0x443,

	KBD_SETPEN_4 = 0x444,

	KBD_SETPEN_5 = 0x445,

	KBD_SETPEN_6 = 0x446,

	KBD_SETPEN_7 = 0x447,

	KBD_SETPEN_8 = 0x448,

	KBD_SETPEN_9 = 0x449,

	KBD_SETPEN_A = 0x44A,

	KBD_SETPEN_B = 0x44B,

	KBD_SETPEN_C = 0x44C,

	KBD_SETPEN_D = 0x44D,

	KBD_SETPEN_E = 0x44E,

	KBD_SETPEN_F = 0x44F,

	KBD_SETPOSTER = 0x3DB,

	KBD_SETRUN_PROPS = 0x96C,

	KBD_SETSEARCH = 0x235,

	KBD_SETSEP = 0x3BC,

	KBD_SETSEP_ALL = 0x3BF,

	KBD_SETSEP_KEEP = 0x3BE,

	KBD_SETSEP_RESET_TINT_OVERPRINT = 0x3D1,

	KBD_SETSIDES = 0x378,

	KBD_SETSOLID = 0x402,

	KBD_SETTINT = 0x48D,

	KBD_SETWIDTH = 0x3BA,

	KBD_SETWIDTH_0 = 0x450,

	KBD_SETWIDTH_1 = 0x451,

	KBD_SETWIDTH_2 = 0x452,

	KBD_SETWIDTH_3 = 0x453,

	KBD_SETWIDTH_OPTION = 0x45F,

	KBD_SETWIDTH_SLIDE = 0x45E,

	KBD_SET_TEXTFRAME_GRID = 0x666,

	KBD_SHFTSPACE = 0x221,

	KBD_SHOWCMSSEARCHPOD = 0xF9B,

	KBD_SHOWFILELISTPOD = 0xA41,

	KBD_SHOWNEXT = 0x971,

	KBD_SHOWPREV = 0x972,

	KBD_SHOW_BORDERS = 0x3F1,

	KBD_SHOW_BREADCRUMBS = 0x9CA,

	KBD_SHOW_COND_IND = 0x3F9,

	KBD_SHOW_ELEM_BORDER = 0x3F6,

	KBD_SHOW_ELEM_CTX = 0xA31,

	KBD_SHOW_ELEM_TAGS = 0x3F7,

	KBD_SHOW_GRAPHICS = 0x3F8,

	KBD_SHOW_GRID = 0x3F4,

	KBD_SHOW_HOTSPOTINDICATORS = 0x509,

	KBD_SHOW_LINK_BOUNDARIES = 0x3F5,

	KBD_SHOW_RULERS = 0x3F3,

	KBD_SHOW_SYMBOLS = 0x3F2,

	KBD_SILENT_OPEN = 0x307,

	KBD_SINGLE_QUOTE = 0x400,

	KBD_SLOW_0x00 = 0x633,

	KBD_SLOW_0x01 = 0x636,

	KBD_SLOW_0x10 = 0x635,

	KBD_SLOW_1x00 = 0x634,

	KBD_SMALLTOOLWIN = 0xF29,

	KBD_SMEQN = 0xF50,

	KBD_SMOOTH = 0x374,

	KBD_SNAP = 0x37A,

	KBD_SNAP_0 = 0x480,

	KBD_SNAP_1 = 0x481,

	KBD_SOFTHYPHEN = 0x225,

	KBD_SPELLING = 0x32A,

	KBD_SPELLRESET = 0x3CA,

	KBD_SPLIT = 0x35A,

	KBD_SPLITL = 0xA03,

	KBD_SPLITR = 0xA02,

	KBD_SPOPTIONS = 0x3CC,

	KBD_STRIP_FLOWSTRUCTURE = 0xA30,

	KBD_STRWIN = 0xFD1,

	KBD_STRWIN_LEFTANCHOR = 0x3DF,

	KBD_STUFF = 0x328,

	KBD_STUFF_ITEM = 0xF73,

	KBD_STYLEFMT_DELETE = 0xBB0,

	KBD_STYLEFMT_DELETE_UNUSED = 0xB10,

	KBD_STYLEQUICK = 0xBB3,

	KBD_STYLE_CATALOG = 0xBB1,

	KBD_STYLE_DESIGNER = 0xBB2,

	KBD_SUBSCRIBE_TO = 0x3D6,

	KBD_SWAP_RED_BLUE = 0xFAB,

	KBD_SYMBOLS = 0x362,

	KBD_SYMFONT = 0x506,

	KBD_TAB = 0x219,

	KBD_TABLEWIN = 0xFBB,

	KBD_TABLE_ADDRC = 0xF87,

	KBD_TABLE_CELLFMT = 0xF84,

	KBD_TABLE_CONVERT = 0xF8A,

	KBD_TABLE_CUSTRS = 0xF86,

	KBD_TABLE_DEBUG = 0xF8B,

	KBD_TABLE_EXIT_IP = 0xFC0,

	KBD_TABLE_FORMAT = 0xF81,

	KBD_TABLE_INS = 0xF80,

	KBD_TABLE_RESIZECOL = 0xF88,

	KBD_TABLE_ROTATE_CC = 0xF8E,

	KBD_TABLE_ROWFMT = 0xF85,

	KBD_TABLE_RULES = 0xF8C,

	KBD_TABLE_STRADDLE = 0xF89,

	KBD_TABLE_TAB = 0x223,

	KBD_TABLE_VARS = 0xF8D,

	KBD_TAB_CENTER = 0x907,

	KBD_TAB_DECIMAL = 0x909,

	KBD_TAB_LEFT = 0x906,

	KBD_TAB_RIGHT = 0x908,

	KBD_TAGSTATUS = 0xF36,

	KBD_TBLFMT_DELETE = 0xB08,

	KBD_TBLFMT_DELETE_UNUSED = 0xB15,

	KBD_TBLIP_ABOVE = 0xFB3,

	KBD_TBLIP_BELOW = 0xFB4,

	KBD_TBLIP_BOTTOM = 0xFBA,

	KBD_TBLIP_LEFT = 0xFB2,

	KBD_TBLIP_LEFTMOST = 0xFB5,

	KBD_TBLIP_NEXT = 0xFB7,

	KBD_TBLIP_PREV = 0xFB8,

	KBD_TBLIP_RIGHT = 0xFB1,

	KBD_TBLIP_RIGHTMOST = 0xFB6,

	KBD_TBLIP_TOP = 0xFB9,

	KBD_TBLIP_TOPLEFT = 0xFB0,

	KBD_TBLSEL_CELL = 0xFA0,

	KBD_TBLSEL_CELLTEXT = 0xFA4,

	KBD_TBLSEL_COL = 0xFA2,

	KBD_TBLSEL_COLBODY = 0xFA5,

	KBD_TBLSEL_ROW = 0xFA1,

	KBD_TBLSEL_TABLE = 0xFA3,

	KBD_TBL_DLG_ADD_ABOVE = 0xF92,

	KBD_TBL_DLG_ADD_BELOW = 0xF93,

	KBD_TBL_DLG_ADD_LEFT = 0xF94,

	KBD_TBL_DLG_ADD_RIGHT = 0xF95,

	KBD_TBL_DLG_CLEAR_EMPTY = 0xF96,

	KBD_TBL_DLG_CLEAR_X = 0xF97,

	KBD_TBL_DLG_PASTE_AFTER = 0xF9A,

	KBD_TBL_DLG_PASTE_BEFORE = 0xF99,

	KBD_TBL_DLG_PASTE_REPL = 0xF98,

	KBD_TBL_DLG_SHRINKWRAP = 0xFD0,

	KBD_TBL_DLG_UNIFY_CF = 0xF91,

	KBD_TBL_DLG_UNIFY_TF = 0xF90,

	KBD_TC_SEARCH_BOOK = 0x134,

	KBD_TC_SEARCH_DITAMAP = 0x135,

	KBD_TC_SEARCH_DOC = 0x133,

	KBD_TC_SEARCH_SEL = 0x136,

	KBD_TC_USER_NAME = 0x991,

	KBD_TEST_MODAL = 0xF71,

	KBD_TEST_MODELESS = 0xF72,

	KBD_TEST_PRINTDBRE = 0xF75,

	KBD_TEXTCOLPRO = 0x339,

	KBD_TEXTLTOOL = 0x3A7,

	KBD_TEXTRTOOL = 0x3A8,

	KBD_TEXT_OPTIONS = 0x337,

	KBD_THESAURUS = 0x3D0,

	KBD_THESAURUS_REPLACE = 0x3D3,

	KBD_THINSPACE = 0x22B,

	KBD_TOC = 0x2B0,

	KBD_TOGGLEDRAW = 0x366,

	KBD_TOGGLE_COLLAPSE = 0xFF2,

	KBD_TOGGLE_COLLAPSE_ALL = 0xFF3,

	KBD_TOGGLE_COLLAPSE_CHILDREN = 0xA0D,

	KBD_TOGGLE_INCLUSION = 0xFF1,

	KBD_TOGGLE_STRUCT_AND_DOCWIN = 0xFF9,

	KBD_TOOLBAR_BASE = 0x98F,

	KBD_TOOLBAR_HIDEALL = 0x98A,

	KBD_TOOLBAR_SHOWALL = 0x989,

	KBD_TOOLWIN = 0xF22,

	KBD_TRACKCHANGE = 0x957,

	KBD_TRACKCHANGEDISABLE = 0x95D,

	KBD_UIALERTSTRINGS_PREF = 0x981,

	KBD_UI_PREFERENCE = 0x980,

	KBD_UNCOND = 0xF46,

	KBD_UNDO = 0x320,

	KBD_UNGROUP = 0x383,

	KBD_UNICODE_CHAR = 0xFFB,

	KBD_UNSMOOTH = 0x375,

	KBD_UPDATEREF = 0xF07,

	KBD_UPSTACK = 0xEF1,

	KBD_USEELTDEFSFROM = 0xF9E,

	KBD_USEFMTFROM = 0x316,

	KBD_VALIDATEFILE = 0xF15,

	KBD_VALIDATE_HYPERTEXT = 0xF13,

	KBD_VALIDATION = 0xFE0,

	KBD_VAL_ALLOW = 0xFE6,

	KBD_VAL_CLEAR = 0xFE7,

	KBD_VAL_DOC = 0xFE3,

	KBD_VAL_ELEM = 0xFE1,

	KBD_VAL_FLOW = 0xFE2,

	KBD_VAL_IGNORE = 0xFE4,

	KBD_VAL_IGNORE_ATTR = 0xFF6,

	KBD_VAL_START = 0xFE5,

	KBD_VARCURDATE = 0xA08,

	KBD_VARCURPG = 0xA06,

	KBD_VARIABLE = 0x353,

	KBD_VAROTHER = 0xA09,

	KBD_VARPGCOUNT = 0xA07,

	KBD_VARQUICK = 0xF42,

	KBD_VERIFYCONTEXT = 0xF61,

	KBD_VIDEO_IMPORT = 0x5EB,

	KBD_VIEWER = 0xF00,

	KBD_VIEWER_MAKE_DOCUMENT = 0xD50,

	KBD_VIEWER_MAKE_MODELESSDIALOG = 0xD52,

	KBD_VIEWER_MAKE_PALETTE = 0xD51,

	KBD_VIEWSEP1 = 0x36D,

	KBD_VIEWSEP2 = 0x36E,

	KBD_VIEWSEP3 = 0x36F,

	KBD_VIEWSEP4 = 0x37D,

	KBD_VIEWSEP5 = 0x37E,

	KBD_VIEWSEP6 = 0x39E,

	KBD_VIEW_API = 0xDF4,

	KBD_VIEW_API_SHORTCUT = 0xDF5,

	KBD_VIEW_CONSOLE = 0x5E7,

	KBD_VIEW_SWITCH = 0xDF6,

	KBD_VSCROLL = 0xF39,

	KBD_WAIT_DLGS = 0x255,

	KBD_WIDTH0 = 0x3AC,

	KBD_WIDTH1 = 0x3AD,

	KBD_WINDOWFULL_DOWN = 0xD41,

	KBD_WINDOWFULL_UP = 0xD40,

	KBD_WIN_CASCADE = 0x903,

	KBD_WIN_CONSOLIDATE = 0x806,

	KBD_WIN_TILE = 0x904,

	KBD_WIN_UI_TOGGLE = 0x807,

	KBD_WRAPQUICK = 0xF49,

	KBD_XCHARS = 0x224,

	KBD_XREFSPOD = 0x96B,

	KBD_XYZZQ = 0xEE1,

	KBD_XYZZY = 0xFED,

	KBD_XYZZZ = 0xEE0,

	KBD_YANK = 0x32C,

	KBD_ZOOM = 0xF34,

	KBD_ZOOM100 = 0xF35,

	KBD_ZOOMIN = 0xF30,

	KBD_ZOOMOUT = 0xF31,

	KBD_ZOOM_AUTOFIT_AFTER_ZOOM = 0xF1A,

	KBD_ZOOM_FIT_PAGE = 0xF32,

	KBD_ZOOM_FIT_TEXTFRAME = 0xF3F,

	KBD_ZOOM_FIT_WINDOW = 0xF33,

	KBD_ZOOM_SET = 0xF3C,

	LEAVE_DOC = 0xC600,

	MENU_BARSTART = 0xC301,

	MENU_DONE = 0xC30F,

	MENU_DOWN = 0xC304,

	MENU_DOWNWAIT = 0xC312,

	MENU_EXPOSE_WIN = 0xC12,

	MENU_HYPERTEXT = 0xC18,

	MENU_IMPORT_FILE = 0xC14,

	MENU_RIGHT = 0xC305,

	MENU_RIGHTWAIT = 0xC313,

	MENU_WAITBIT = 0x0010,

	MIF_SAVE_AFMS = 0x000020,

	MIF_SAVE_BANNERTEXT = 0x1000000,

	MIF_SAVE_CCAT = 0x000400,

	MIF_SAVE_COLORCAT = 0x040000,

	MIF_SAVE_DATALINKS = 0x100000,

	MIF_SAVE_DICT = 0x001000,

	MIF_SAVE_ECAT = 0x010000,

	MIF_SAVE_ELEMENTS = 0x020000,

	MIF_SAVE_FCAT = 0x000100,

	MIF_SAVE_FMTS = 0x000004,

	MIF_SAVE_FONTS = 0x000008,

	MIF_SAVE_FPLCAT = 0x200000,

	MIF_SAVE_INLINECOMPONENTS = 0x2000000,

	MIF_SAVE_LAYT = 0x000040,

	MIF_SAVE_MKRS = 0x000010,

	MIF_SAVE_MPAGE = 0x000080,

	MIF_SAVE_PCAT = 0x000200,

	MIF_SAVE_RUBIS = 0x800000,

	MIF_SAVE_TABLECATS = 0x004000,

	MIF_SAVE_TABLES = 0x008000,

	MIF_SAVE_TAGS = 0x000002,

	MIF_SAVE_TEXT = 0x000001,

	MIF_SAVE_TEXTINSETS = 0x400000,

	MIF_SAVE_TMPLT = 0x000800,

	MIF_SAVE_VARS = 0x002000,

	MIF_SAVE_VIEWSET = 0x080000,

	MRU_SELECT_FILE = 0xC13,

	NULLINPUT = -1,

	OBJ_SEL_EXTEND_NEXT = 0x602,

	OBJ_SEL_FIRST = 0x600,

	OBJ_SEL_LAST = 0x606,

	OBJ_SEL_NEXT = 0x601,

	OBJ_SEL_NEXT_WRAP = 0x604,

	OBJ_SEL_PREV = 0x603,

	OBJ_SEL_PREV_WRAP = 0x605,

	OPEN_MRU_FILES = 0xC23,

	PGF_ANYPLACE = 0x28E,

	PGF_APPLY_CAT_TO_SEL = 0xF3D,

	PGF_APPLY_TAG = 0xC10,

	PGF_BAM = 0x286,

	PGF_CENTER = 0x282,

	PGF_COLTOP = 0x28B,

	PGF_DECLINE = 0x281,

	PGF_DESIGNKIT_APPLY = 0xAAA,

	PGF_DESIGNKIT_NEWFORMAT = 0xB00,

	PGF_DESIGNKIT_RESET = 0xABA,

	PGF_DESIGNKIT_UPDATEALL = 0xAAD,

	PGF_DESIGNKIT_UPDATEOPTIONS = 0xB03,

	PGF_DESIGN_CAT = 0xF4E,

	PGF_DOUBLE_SPACE = 0x295,

	PGF_FULL = 0x285,

	PGF_HYPHENOFF = 0x27F,

	PGF_HYPHENON = 0x27E,

	PGF_INCLINE = 0x280,

	PGF_KBD_BODYSTRADDLE = 0xFCF,

	PGF_KBD_FULLSTRADDLE = 0xFCE,

	PGF_KBD_RUN_IN = 0xFCD,

	PGF_KBD_SIDEBODY = 0xFC9,

	PGF_KBD_SIDEHEAD_FIRST_BASELINE = 0xFCA,

	PGF_KBD_SIDEHEAD_LAST_BASELINE = 0xFCB,

	PGF_KBD_SIDEHEAD_TOP = 0xFCC,

	PGF_LEFT = 0x283,

	PGF_LEFTTOP = 0x28C,

	PGF_LINEFIX = 0x287,

	PGF_LINEFLOAT = 0x288,

	PGF_LINE_SPACE = 0x297,

	PGF_NEW_FORMAT = 0x299,

	PGF_ONEANDAHALF_SPACE = 0x294,

	PGF_PAGETOP = 0x28A,

	PGF_RIGHT = 0x284,

	PGF_RIGHTTOP = 0x28D,

	PGF_SINGLE_SPACE = 0x293,

	PGF_SPACE_BETWEEN = 0x296,

	PGF_UNIFY = 0x289,

	PGF_UPDATE_ALL = 0x298,

	SEARCH_CB = 0x518,

	SEARCH_CBOVERRIDE = 0x51B,

	SEARCH_CBTAG = 0x519,

	SEARCH_COND = 0x51A,

	SERVER_CANCEL = 0xC001,

	SERVER_QUERY = 0xC002,

	SHOW_STRUCT_TEXT = 0x804,

	START_DIALOG = 0xC100,

	START_WINDOW = 0xC400,

	STYLE_APPLY_CAT_TO_SEL = 0x808,

	SUPPRESS_INSETS = 0x3E2,

	SWITCH_TO_DOCUMENTVIEW = 0x9EB,

	SWITCH_TO_RESOURCEMANAGER = 0x9EA,

	SW_CSR_DOWN = 0xFE9,

	SW_CSR_LEFT = 0xFEB,

	SW_CSR_RIGHT = 0xFEA,

	SW_CSR_UP = 0xFE8,

	TBL_APPLY_CAT_TO_SEL = 0xFBC,

	TBL_APPLY_TAG = 0xFBE,

	TBL_DESIGNKIT_APPLY = 0xAAC,

	TBL_DESIGNKIT_NEWFORMAT = 0xB02,

	TBL_DESIGNKIT_RESET = 0xABC,

	TBL_DESIGNKIT_UPDATEALL = 0xAAF,

	TBL_DESIGNKIT_UPDATEOPTIONS = 0xB05,

	TBL_DESIGN_CAT = 0xF5F,

	TEXTSEL_DRAGGING = 0x2000,

	TEXTSEL_ELEMENT = 0x1000,

	TEXTSEL_EXTEND = 0x0002,

	TEXTSEL_EXTEND_ELEMENT = 0x0800,

	TEXTSEL_EXTEND_LINE = 0x0008,

	TEXTSEL_EXTEND_PGF = 0x0010,

	TEXTSEL_EXTEND_SENT = 0x0200,

	TEXTSEL_EXTEND_WORD = 0x0004,

	TEXTSEL_LINE = 0x0040,

	TEXTSEL_PGF = 0x0080,

	TEXTSEL_QUICK_COPY = 0x0001,

	TEXTSEL_SELECT_ONLY = 0x0100,

	TEXTSEL_SENT = 0x0400,

	TEXTSEL_WORD = 0x0020,

	TEXT_INSET_PROPS = 0x3E0,

	TOGGLE_FLUID_VIEW = 0x500,

	TXT_10 = 0xC02,

	TXT_12 = 0xC03,

	TXT_14 = 0xC04,

	TXT_18 = 0xC05,

	TXT_24 = 0xC06,

	TXT_7 = 0xC00,

	TXT_9 = 0xC01,

	TXT_BAM = 0x26B,

	TXT_BOLD = 0x260,

	TXT_CHANGEBAR = 0x26F,

	TXT_DBLUNDERLINE = 0x278,

	TXT_DECSIZE = 0x268,

	TXT_DEFAULT = 0x26D,

	TXT_FAMILY_AND_VARIATION = 0xC09,

	TXT_FAMILY_AND_VARIATION_PLATFORM = 0xC0A,

	TXT_FONT = 0xC17,

	TXT_INCSIZE = 0x267,

	TXT_INITCAPS = 0x274,

	TXT_ITALIC = 0x261,

	TXT_KERN = 0x270,

	TXT_LESSSTRETCH = 0x131,

	TXT_LOWERCASE = 0x276,

	TXT_MINICAPS = 0x273,

	TXT_MORESTRETCH = 0x132,

	TXT_NORMAL = 0x266,

	TXT_NORMALCASE = 0x277,

	TXT_NOSTRETCH = 0x130,

	TXT_NUMUNDERLINE = 0x279,

	TXT_OTHERSIZE = 0xC08,

	TXT_OUTLINE = 0x271,

	TXT_OVERLINE = 0x26E,

	TXT_PLAIN = 0x263,

	TXT_SELBOLD = 0x27A,

	TXT_SELDECSIZE = 0x120,

	TXT_SELINCSIZE = 0x11F,

	TXT_SELITALIC = 0x27B,

	TXT_SELPLAIN = 0x27D,

	TXT_SELUNDERLINE = 0x27C,

	TXT_SHADOW = 0x272,

	TXT_SPREAD = 0x26A,

	TXT_SQUEEZE = 0x269,

	TXT_STRIKEOUT = 0x26C,

	TXT_STRUCTURED_BOLD = 0x2D0,

	TXT_STRUCTURED_ITALIC = 0x2D1,

	TXT_STRUCTURED_UNDERLINE = 0x2D2,

	TXT_SUB = 0x265,

	TXT_SUPER = 0x264,

	TXT_TSUME = 0x2A5,

	TXT_UNDERLINE = 0x262,

	TXT_UPPERCASE = 0x275,

	TXT_USIZE = 0xC07,

	TYPEIN = 0xDF2,

	UPDATE_INSETS = 0x3E1,

	WEB_ADOBEHELP = 0xC22,

	WEB_ADOBE_BOOKMARKS = 0xC21,

	WEB_CORPORATENEWS = 0xC1D,

	WEB_FRAME_BOOKMARKS = 0xC1F,

	WEB_GOTOADOBE = 0xC19,

	WEB_PREFERENCES = 0xC1A,

	WEB_REGISTRATION = 0xC1E,

	WEB_TOPISSUES = 0xC1B,

}

declare class global {

	AddLocationToProject(strLocationPath: string, strLocationName: string): void;

	AddMenu(toMenu: string, menu: string, label: string): number;

	Alert(message: string, type: number): number;

	Alive(): number;

	AllocatePropVals(numProps: number): PropVals;

	AppendIntProp(pv: PropVals, prop: number, val: number): void;

	AppendMetricProp(pv: PropVals, prop: number, val: number): void;

	AppendStringProp(pv: PropVals, prop: number, val: string): void;

	AppendStringsProp(pv: PropVals, prop: number, val: Strings): void;

	AppendVal(pv: PropVals, prop: number, val: TypedVal): void;

	CMSAddMenuEntry(menuId: number, menuEntryp: CMSMenuItem): number;

	CMSGetCmsIdFromName(cmsName: string): CMSRegistration;

	CMSLogin(setVal: IdValuePairs): CMSSession;

	CMSRegister(cmsName: string): CMSRegistration;

	CallClient(clname: string, arg: string): number;

	CallClientEx(clname: string, arg: string): TypedVals;

	CheckStatus(p: PropVals, statusBit: number): number;

	ChooseFile(title: string, directory: string, stuffVal: string, mode: number, helpLink: string): number;

	ClientDir(): string;

	ClientName(_: void): string;

	ClientNumber(_: void): number;

	CloseModalDialog(dlgId: object): number;

	CustomDoc(width: number, height: number, numCols: number, columnGap: number, topMargin: number, botMargin: number, leftinsideMargin: number, rightoutsideMargin: number, sidedness: number, makeVisible: boolean): Doc;

	DefineMenu(name: string, label: string): Menu;

	DeleteComponentFromProject(strComponentFullPath: string): void;

	DialogAction(dlgName: string, ctrlId: number, action: PropVal): TypedVal;

	DisconnectFromSession(): number;

	EditComponentOfProject(strComponentFullPath: string): void;

	/**
	 * UNDOCUMENTED FUNCTION
	 */
	Emergency(): void;

	Err(message: string): void;

	ErrorName(i: number): string;

	ExploreComponentofProject(strComponentFullPath: string): void;

	Externalize(srcDocId: object, objId: object, dstFolder: string): number;

	FamilyFonts(family: number): Fonts;

	FileScrollBox(title: string, directory: string): number;

	GetEncodingForFamily(family: number): string;

	GetEncodingForFont(font: Font): string;

	GetExportDefaultParams(): PropVals;

	GetFontAngleValue(angleName: string): number;

	GetFontFamilyValue(familyName: string): number;

	GetFontVariationValue(variationName: string): number;

	GetFontWeightValue(weightName: string): number;

	GetImportDefaultParams(): PropVals;

	GetIteratorDefaultParams(): PropVals;

	GetKeyCatalog(tag: string): KeyCatalog;

	GetNewXMLDefaultParams(): PropVals;

	GetOpenDefaultParams(): PropVals;

	GetPropIndex(propVals: PropVals, propNum: number): number;

	GetSaveDefaultParams(): PropVals;

	GetSupportedEncodings(): Strings;

	GetUpdateBookDefaultParams(): PropVals;

	GetWorkspaceName(): string;

	HtmlDialogEx(params: TypedVals): DialogResource;

	HtmlNotifyPropertyChange(dlgId: object, key: string, value: string): number;

	HtmlUpdateUrl(dlgId: object, url: string): number;

	InitializationName(i: number): string;

	IsDRL(drl: string): boolean;

	IsDataDifferentFromTemplateData(templatePath: string, templateDataProps: PropVals): boolean;

	IsEncodingSupported(encodingName: string): boolean;

	IsFileValid(docOrBookId: object, silent: boolean): boolean;

	LoadMenuCustomizationFile(pathname: string, silent: boolean): void;

	LogFMPIPEvent(category: string, subcategory: string, eventName: string): number;

	MenuExists(menu: string): number;

	NewKeyCatalog(tag: string): KeyCatalog;

	NewProject(strProjectName: string, strRootFolderName: string): string;

	NewXML(newXMLParams: PropVals, newXMLReturnParamspp: PropVals): object;

	Notification(notification: number, state: number): number;

	NotificationName(i: number): string;

	Open(fileName: string, openParams: PropVals, openReturnParams: PropVals): object;

	OpenProject(projectFileName: string): void;

	PopClipboard(): number;

	PrintErrno(i: number): void;

	PrintExportStatus(p: PropVals): void;

	PrintFAErrno(_: void): void;

	PrintImportStatus(p: PropVals): void;

	PrintInitialization(i: number): void;

	PrintNotification(i: number): void;

	PrintOpenStatus(p: PropVals): void;

	PrintPropVal(p: PropVal): void;

	PrintPropVals(p: PropVals): void;

	PrintSaveStatus(p: PropVals): void;

	PrintTextItem(textItem: TextItem): void;

	PrintTextItems(textItems: TextItems): void;

	PrintUpdateBookStatus(p: PropVals): void;

	ProgressBarEx(bShow: boolean, iPercent: number, vals: PropVals): number;

	PromptInt(message: string, stuffVal: string): number;

	PromptMetric(message: string, stuffVal: string, defaultunit: number): number;

	PromptString(message: string, stuffVal: string): number;

	PushClipboard(): void;

	RemoveMenu(fromMenu: string, label: string): number;

	RenameComponentofProject(strComponentFullPath: string, strNewName: string): void;

	ReturnValue(retvalue: number): number;

	/**
	 * UNDOCUMENTED FUNCTION
	 */
	Run(): number;

	/**
	 * UNDOCUMENTED FUNCTION
	 */
	SaveProject(): void;

	ScrollBox(title: string, stringslist: Strings, _default: number): number;

	Service(): number;

	SetCurrentWorkspace(workspaceName: string): void;

	SetDdeInstance(ddeInstance: number): number;

	ShortcutExists(shortcut: string): number;

	ShutDown(_: void): void;

	SilentNewBook(): object;

	SimpleNewDoc(templateName: string, interactive: number): Doc;

	SimpleOpen(fileName: string, interactive: number): object;

	Sleep(seconds: number): number;

	StringLen(s: string): number;

	USleep(microseconds: number): number;

	UpdateMenus(): void;

	UserCancel(): number;

	/**
	 * UNDOCUMENTED FUNCTION
	 */
	WinInstallDefaultMessageFilter(): void;
}