// Type definitions for FrameMaker AttributeDef object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a single attribute definition. */
interface AttributeDef {
  /** Denotes the attribute value’s type. */
  attrType: number;

  /** The choices from which to select, if the `attrType` parameter is set to `Constants.FV_AT_CHOICES` (2). */
  choices: Strings;

  /** Default value of the attribute. */
  defValues: Strings;

  /** The flag value determines whether an attribute is hidden, read-only or neither. */
  flags: number;

  /** Name of the attribute. */
  name: string;

  /** The maximum permissible value, if any. */
  rangeMax: string;

  /** The minimum permissible value, if any. */
  rangeMin: string;

  /**
   * True if the attribute is required.
   */
  required: boolean;
}

interface AttributeDefConstructor {
  new (): AttributeDef;
  new (
    name: string,
    required: boolean,
    flags: number,
    attrType: number,
    choices: Strings,
    defValues: Strings,
    rangeMin: string,
    rangeMax: string
  ): AttributeDef;
  readonly prototype: AttributeDef;
}

declare const AttributeDef: AttributeDefConstructor;
