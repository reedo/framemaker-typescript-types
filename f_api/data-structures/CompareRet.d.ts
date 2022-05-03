// Type definitions for FrameMaker CompareRet object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes the result of a document compare. */
interface CompareRet {
	/** Specifies the summary document. */
	sum: Doc;

	/** Specifies the composite document. */
	comp: Doc;
}

interface CompareRetConstructor {
	new (): CompareRet;
	new (sum: Doc, comp: Doc): CompareRet;
	readonly prototype: CompareRet;
}

declare const CompareRet: CompareRetConstructor;
