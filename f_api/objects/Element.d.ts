// Type definitions for FrameMaker Element object
// Definitions by Dan Reed <https://danreed.dev>

interface Element extends FMUniqueObject {
	AllowAsSpecialCase: boolean;

	AttrDisplay: number;

	AttributeValueInvalid: boolean;

	Attributes: Attributes;

	AttributesEx: AttributesEx;

	readonly BookComponent: BookComponent;

	readonly BookComponentMissing: boolean;

	readonly ContentIsLooselyValid: boolean;

	readonly ContentIsStrictlyValid: boolean;

	readonly ContentMustBeEmpty: boolean;

	readonly ContentNeededAtBegin: boolean;

	readonly ContentNeededAtEnd: boolean;

	readonly ContextLabel: string;

	Direction: number;

	ElementDef: ElementDef;

	ElementIsCollapsed: boolean;

	readonly ElementIsExcludedInContext: boolean;

	readonly ElementIsInvalidInParent: boolean;

	readonly ElementIsInvalidInPosition: boolean;

	readonly ElementIsTopicGroup: boolean;

	readonly ElementIsTopicHead: boolean;

	readonly ElementIsTopicRef: boolean;

	readonly ElementIsUndefined: boolean;

	ElementMarkedForNamedDestination: boolean;

	readonly ElementType: ElementType;

	readonly ErrorInBookComponent: boolean;

	readonly FirstChildElement: Element;

	readonly FormatOverride: boolean;

	readonly HoleBeforeElement: boolean;

	readonly InvalidHighestLevel: boolean;

	readonly LastChildElement: Element;

	readonly MatchingFirstPgfClauses: FMObjectArray<FmtRuleClause>;

	readonly MatchingLastPgfClauses: FMObjectArray<FmtRuleClause>;

	readonly MatchingObjectClauses: FMObjectArray<FmtRuleClause>;

	readonly MatchingPrefixClauses: FMObjectArray<FmtRuleClause>;

	readonly MatchingSuffixClauses: FMObjectArray<FmtRuleClause>;

	readonly MatchingTextClauses: FMObjectArray<FmtRuleClause>;

	Namespace: Strings;

	readonly NamespaceScope: Element;

	readonly NextDITAConrefElementInDoc: Element;

	readonly NextDITALinkElementInDoc: Element;

	readonly NextDITATopicrefElementInDoc: Element;

	readonly NextDITATopicsetrefElementInDoc: Element;

	readonly NextDITAXrefElementInDoc: Element;

	readonly NextElementDFS: Element;

	readonly NextInvalidElement: Element;

	readonly NextSiblingElement: Element;

	readonly NumNamespaces: number;

	readonly Object: FMObject;

	readonly ParentElement: Element;

	readonly PrevElementDFS: Element;

	readonly PrevSiblingElement: Element;

	ResolvedDirection: number;

	readonly TextIsInvalidInElement: boolean;

	readonly TextRange: TextRange;

	readonly TopicRefAbsoluteFilePath: string;

	UserString: string;

	readonly ValidationFlags: number;

	Delete(): FrameErrorCode;

	GetAttributes(): Attributes;

	GetText(flags: number): TextItems;

	GetText2(flags: number, flags2: number): TextItems;

	UpdateDITAReference(): FrameErrorCode;
}
