// Type definitions for FrameMaker TextFrame object
// Definitions by Dan Reed <https://danreed.dev>

interface TextFrame extends FMGraphic {
	ColGapWidth: number;

	ColumnsAreBalanced: boolean;

	readonly FirstAFrame: AFrame;

	readonly FirstCell: Cell;

	readonly FirstFn: Fn;

	readonly FirstPgf: Pgf;

	readonly FirstSubCol: SubCol;

	readonly Flow: Flow;

	readonly LastAFrame: AFrame;

	readonly LastCell: Cell;

	readonly LastFn: Fn;

	readonly LastPgf: Pgf;

	readonly LastSubCol: SubCol;

	NextTextFrameInFlow: TextFrame;

	NumColumns: number;

	PrevTextFrameInFlow: TextFrame;

	SideHeadGap: number;

	SideHeadPlacement: number;

	SideHeadWidth: number;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;
}
