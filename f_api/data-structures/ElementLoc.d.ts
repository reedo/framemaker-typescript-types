// Type definitions for the ElementLoc FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** ElementLoc specifies a location within the structure of a document or book. */
interface ElementLoc {
	/** The parent element. */
	// @ts-expect-error
	parent: Element;

	/** The child element. */
	// @ts-expect-error
	child: Element;

	/** Offset within the parent or child element. */
	offset: number;
}

interface ElementLocConstructor {
	new (): ElementLoc;
	// @ts-expect-error
	new (parent: Element, child: Element, offset: number): ElementLoc;
	readonly prototype: ElementLoc;
}

declare const ElementLoc: ElementLocConstructor;
