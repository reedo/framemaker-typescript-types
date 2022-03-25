// Type definitions for the TextItem FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A single unit of text in a document. */
interface TextItem {
	/** Offset from the beginning of the paragraph or the text line. */
	offset: number;

	/** Type of the text item. */
	dataType: FTI_Constant;

	/** Denotes the text item if the text item is a string. */
	sdata: string;

	/** ID of the object if the text item is an object. */
	idata: number;

	/** Denotes the text item if the text item is an object. */
	obj: FMObject;
}

interface TextItemConstructor {
	new (): TextItem;
	new (dataType: FTI_Constant, data: number | string | FMObject): TextItem;
	readonly prototype: TextItem;
}

declare const TextItem: TextItemConstructor;
