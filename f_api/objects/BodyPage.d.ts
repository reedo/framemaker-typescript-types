// Type definitions for FrameMaker BodyPage object
// Definitions by Dan Reed <https://danreed.dev>

interface BodyPage extends FMSeriesObject {
  /**
   * Applies the layout of one page to another page.
   *
   * @param srcPage The page to which the layout is to be applied.
   */
  ApplyPageLayout(srcPage: Page): number;

  /** Deletes the specified Body Page. */
  Delete(): number;

  /**
   * The name of the master page background for the body page if the `PageBackground` property is set to `Constants.FV_BGD_OTHER` (0x02).
   *
   * The value is `null` if the `PageBackground` property is set to either `Constants.FV_BGD_DEFAULT` (0x00) or `Constants.FV_BGD_NONE` (0x01).
   */
  MasterPage?: string;

  /**
   * The type of master page background.
   *
   * To determine whether a body page has a Left or a Right master page background, when its `PageBackground` property is set to `Constants.FV_BGD_DEFAULT` (0x00), query its `PageIsRecto` property.
   */
  PageBackground: number;

  /** The page frame for the page. */
  PageFrame: UnanchoredFrame;

  /** The height of the page. */
  PageHeight: number;

  /**
   * Set to 1 if the page is a Right page.
   *
   * Set to 0 if the page is a Left page.
   */
  PageIsRecto: boolean;

  /** The next body page in the document. */
  PageNext: BodyPage;

  /** The current page number. */
  PageNum: number;

  /** String form of the current page number. */
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
