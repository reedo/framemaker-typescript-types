// Type definitions for the Point FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * Point describes an individual coordinate pair.
 *
 * FrameMaker measures coordinates from the upper-left corner of the parent frame.
 */
interface Point {
  /** X coordinate. */
  x: number;

  /** Y coordinate */
  y: number;
}

interface PointConstructor {
  new (): Point;
  new (x: number, y: number): Point;
  readonly prototype: Point;
}

declare const Point: PointConstructor;
