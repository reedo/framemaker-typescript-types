// Type definitions for the ElementRange FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * An element selection range.
 *
 * Consists of 2 `ElementLoc` objects.
 *
 * Setting both `beg` and `end` to the same `ElementLoc` will act as an insertion point, rather than a selection range.
 */
interface ElementRange {
  /** The beginning of the element range. */
  beg: ElementLoc;

  /** The end of the element range. */
  end: ElementLoc;
}

interface ElementRangeConstructor {
  new (): ElementRange;
  new (beg: ElementLoc, end: ElementLoc): ElementRange;
  readonly prototype: ElementRange;
}

declare const ElementRange: ElementRangeConstructor;
