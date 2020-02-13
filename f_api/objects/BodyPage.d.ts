// Type definitions for FrameMaker BodyPage object
// Definitions by Dan Reed <https://danreed.dev>

interface BodyPage extends Page {

	/**
	 * Applies the layout of one page to another page.
	 * 
	 * @param srcPage The page to which the layout is to be applied.
	 */
	ApplyPageLayout(srcPage: Page): Constants['FE_Success'] | Constants['FE_BadOperation'] | Constants['FE_SystemError'] | Constants['FE_BadParameter'] | Constants['FE_WrongProduct'];

	/** Deletes the specified Body Page. */
	Delete(): Constants['FE_Success'] | Constants['FE_BadDocId'] | Constants['FE_BadObjId'] | Constants['FE_BadDelete'] | Constants['FE_BadOperation'] | Constants['FE_BadParameter'] | Constants['FE_NotMenu'];

	/**
	 * The name of the master page background for the body page if the `PageBackground` property is set to `Constants.FV_BGD_OTHER` (0x02).
	 * 
	 * The value is `null` if the `PageBackground` property is set to either `Constants.FV_BGD_DEFAULT` (0x00) or `Constants.FV_BGD_NONE` (0x01).
	 */
	MasterPage: string | null;

	/**
	 * The type of master page background.
	 * 
	 * To determine whether a body page has a Left or a Right master page background, when its `PageBackground` property is set to `Constants.FV_BGD_DEFAULT` (0x00), query its `PageIsRecto` property.
	 */
	PageBackground: Constants['FV_BGD_DEFAULT'] | Constants['FV_BGD_NONE'] | Constants['FV_BGD_OTHER'];

	/** The page frame for the page. */
	PageFrame: UnanchoredFrame;

	/** The height of the page. */
	PageHeight: number;

	/**
	 * Set to 1 if the page is a Right page.
	 * 
	 * Set to 0 if the page is a Left page.
	 */
	PageIsRecto: 0 | 1;

	/** The next body page in the document. */
	PageNext: BodyPage;

	/** The current page number. */
	PageNum: number;

	PageNumString: string;

	/** The previous body page in the document. */
	PagePrev: BodyPage;

	/** The width of the page. */
	PageWidth: number;

	/** The point page number. */
	PointPageNum: number;

	/** A string to which clients can store private data. */
	UserString: string;

}