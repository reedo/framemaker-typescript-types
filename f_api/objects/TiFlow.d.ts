// Type definitions for FrameMaker TiFlow object
// Definitions by Dan Reed <https://danreed.dev>

interface TiFlow extends FMTiObject {
  TiFlowName: string;

  TiFlowPageSpace: number;

  TiFormat: number;

  TiMainFlow: boolean;

  TiRemovePageBreaks: boolean;

  TiRemoveOverrides: boolean;
}
