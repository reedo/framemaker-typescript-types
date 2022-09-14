// Type definitions for FrameMaker FmtRule object
// Definitions by Dan Reed <https://danreed.dev>

interface FmtRule extends FMObject {
  CountElements: Strings;

  ElementDef: ElementDef;

  FmtRuleClause: FmtRuleClause;

  readonly FmtRuleClauses: FMObjectArray<FmtRuleClause>;

  FmtRuleType: FV_CONTEXT_RULE | FV_LEVEL_RULE;

  StopCountingAt: string;

  Delete(): FrameErrorCode;

  NewFmtRuleClauses(): FmtRuleClause;
}
