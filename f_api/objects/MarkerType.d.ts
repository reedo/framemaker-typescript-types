// Type definitions for FrameMaker MarkerType object
// Definitions by Dan Reed <https://danreed.dev>

interface MarkerType extends FMNamedObject {
  InvariantName: string;

  NextMarkerTypeInDoc: MarkerType;

  Public: boolean;

  readonly Required: boolean;

  Transient: boolean;

  Delete(): FrameErrorCode;
}
