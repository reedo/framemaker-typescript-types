// Type definitions for FrameMaker AttrCondExpr object
// Definitions by Dan Reed <https://danreed.dev>

interface AttrCondExpr extends FMObject {

	/** Applies the attribute expression to the document. */
	Apply(): Constants['FE_Success'] | FE_Constant;

	/** Applies the attribute expression to the document. */
	ApplyAttributeExpression(): Constants['FE_Success'] | FE_Constant;

	/**
	 * Set to `true` if this expression is applied to the document.
	 * 
	 * (Application will mean filtering the document according the constraints in the expression.)
	 * 
	 * Set to `false`, otherwise.
	 */
	AttrCondExprIsActive: boolean;

	/** The AttrCondExpr expression in string format. */
	AttrCondExprStr: string | null;

	/** Indicates the next AttrCondExpr object in the document. */
	NextAttrCondExprInDoc: AttrCondExpr;

}

declare const AttrCondExpr: AttrCondExpr;