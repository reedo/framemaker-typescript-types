// Type definitions for FrameMaker AttrCondExpr object
// Definitions by Dan Reed <https://danreed.dev>

interface AttrCondExpr extends FMObject {
	/** Applies the attribute expression to the document. */
	Apply(): number;

	/** Applies the attribute expression to the document. */
	ApplyAttributeExpression(): number;

	/**
	 * Set to `true` if this expression is applied to the document.
	 *
	 * (Application will mean filtering the document according the constraints in the expression.)
	 *
	 * Set to `false`, otherwise.
	 */
	AttrCondExprIsActive: boolean;

	/** The AttrCondExpr expression in string format. */
	AttrCondExprStr?: string;

	/** Indicates the next AttrCondExpr object in the document. */
	NextAttrCondExprInDoc: AttrCondExpr;
}

declare const AttrCondExpr: AttrCondExpr;
