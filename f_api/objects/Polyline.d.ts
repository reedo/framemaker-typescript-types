// Type definitions for FrameMaker Polyline object
// Definitions by Dan Reed <https://danreed.dev>

interface Polyline extends FMGraphic {
  NumPoints: number;

  Points: Points;

  PolyIsBezier: boolean;
}
