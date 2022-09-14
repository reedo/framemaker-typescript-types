// Type definitions for FrameMaker FmtRuleClause object
// Definitions by Dan Reed <https://danreed.dev>

interface FmtRuleClause extends FMObject {
  ContextLabel: string;

  ElemPrefixSuffix: string;

  readonly FmtChangeList: FmtChangeList;

  FmtChangeListTag: string;

  readonly FmtRule: FmtRule;

  FormatTag: string;

  IsTextRange: boolean;

  readonly RuleClauseType:
    | FV_RC_TAG
    | FV_RC_SUB_FMTRULE
    | FV_RC_CHANGELIST
    | FV_RC_CHANGELIST_TAG;

  Specification: string;

  readonly SpecificationForCSS: Strings;

  readonly SubFmtRule: FmtRule;

  Delete(): FrameErrorCode;

  NewFmtChangeList(): FmtChangeList;

  NewSubFmtRule(): FmtRule;
}
