// Type definitions for the PropVal FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A property-value pair. */
interface PropVal {
  /** The property identifier. */
  propIdent: PropIdent;

  /** The property value. */
  propVal: TypedVal<TypedValType>;
}

interface PropValConstructor {
  new (): PropVal;
  new (propIdent: PropIdent, propVal: TypedVal<TypedValType>): PropVal;
  readonly prototype: PropVal;
}

declare const PropVal: PropValConstructor;
