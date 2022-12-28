// Type definitions for FrameMaker ElementDef object
// Definitions by Dan Reed <https://danreed.dev>

interface ElementDef extends FMNamedObject {
  AllowedDataRange: unknown;

  AlsoInsert: Strings;

  AlsoInserts: TypedVal<TypedValType>;

  AttributeDefs: AttributeDefs;

  BannerText: string;

  Comment: string;

  DescriptiveTag: string;

  ElementDataType: number;

  ElementDefType: ElementType;

  ElementDescription: string;

  ElementInCatalog: boolean;

  ElementPgfFormat: string;

  Exclusions: Strings;

  readonly FirstPgfRules: FMObjectArray<FmtRule>;

  GeneralRule: string;

  readonly GeneralRuleErrorOffsets: Ints;

  Inclusions: Strings;

  InitStructurePattern: string;

  readonly LastPgfRules: FMObjectArray<FmtRule>;

  readonly NextElementDefInDoc: ElementDef;

  readonly ObjectFmtRules: FMObjectArray<FmtRule>;

  readonly PrefixRules: FMObjectArray<FmtRule>;

  readonly SuffixRules: FMObjectArray<FmtRule>;

  readonly TextFmtRules: FMObjectArray<FmtRule>;

  ValidHighestLevel: boolean;

  Delete(): FrameErrorCode;

  ElementDefIsText(): boolean;

  GetAttributeDefs(): AttributeDefs;

  NewElement(textLoc: TextLoc): Element;

  NewElementInHierarchy(elemLoc: ElementLoc): Element;

  NewFirstPgfRules(): FmtRule;

  NewLastPgfRules(): FmtRule;

  NewObjectFmtRules(): FmtRule;

  NewPrefixRules(): FmtRule;

  NewSuffixRules(): FmtRule;

  NewTextFmtRules(): FmtRule;

  WrapElement(): void;
}
