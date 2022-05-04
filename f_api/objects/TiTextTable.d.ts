// Type definitions for FrameMaker TiTextTable object
// Definitions by Dan Reed <https://danreed.dev>

interface TiTextTable extends FMTiObject {
	TiByRows: boolean;

	TiTblTag: string;

	TiHeadersEmpty: boolean;

	TiNumSeparators: number;

	TiSeparator: string;

	TiNumCols: number;

	TiNumHeaderRows: number;

	TiTextEncoding: string;
}
