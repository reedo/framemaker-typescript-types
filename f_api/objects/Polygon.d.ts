// Type definitions for FrameMaker Polygon object
// Definitions by Dan Reed <https://danreed.dev>

interface Polygon extends FMGraphic {
  NumPoints: number;

  Points: Points;

  PolyIsBezier: boolean;
}
