// Type definitions for the IdValuePair FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A single integer or string value. */
interface IdValuePair {
  /** The ID. */
  id: number;

  /** The value. */
  value: Value;
}

interface IdValuePairConstructor {
  new (): IdValuePair;
  new (id: number, value: Value): IdValuePair;
  readonly prototype: IdValuePair;
}

declare const IdValuePair: IdValuePairConstructor;
