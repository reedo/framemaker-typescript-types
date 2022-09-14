// Type definitions for FrameMaker Flow object
// Definitions by Dan Reed <https://danreed.dev>

interface Flow extends FMNamedObject {
  Direction: number;

  readonly FirstTextFrameInFlow: TextFrame;

  FlowIsAutoConnect: boolean;

  FlowIsFeathered: boolean;

  FlowIsPostScript: boolean;

  FlowIsSynchronized: boolean;

  readonly HighestLevelElement: Element;

  readonly LastTextFrameInFlow: TextFrame;

  MaxInterPgfPadding: number;

  MaxInterlinePadding: number;

  MinHang: number;

  readonly NextFlowInDoc: Flow;

  readonly ResolvedDirection: number;

  SideHeadRoomInFlow: boolean;

  Spacing: number;

  UserString: string;

  Delete(): FrameErrorCode;

  GetText(flags: number): TextItems;

  GetText2(flags: number, flags2: number): TextItems;
}
