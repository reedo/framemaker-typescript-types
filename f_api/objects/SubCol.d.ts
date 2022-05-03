// Type definitions for FrameMaker SubCol object
// Definitions by Dan Reed <https://danreed.dev>

interface SubCol extends FMUniqueObject {
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

	readonly Overflowed: boolean;

	readonly ParentTextFrame: TextFrame;

	readonly PrevSubCol: SubCol;

	UserString: string;

	readonly Width: number;

	Delete(): FrameErrorCode;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;
}
