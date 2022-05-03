// Type definitions for FrameMaker Column object
// Definitions by Dan Reed <https://danreed.dev>

interface Column extends FMObject {
	readonly ColumnIsShown: boolean;

	readonly ColumnTbl: Tbl;

	InCond: FMObjectArray<CondFmt>;

	readonly NextColumnInTbl: Column;

	readonly NextVisibleColumnInTbl: Column;

	readonly PrevColumnInTbl: Column;

	readonly PrevVisibleColumnInTbl: Column;

	Delete(): FrameErrorCode;
}
