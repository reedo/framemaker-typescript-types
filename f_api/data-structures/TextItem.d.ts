// Type definitions for the TextItem FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/** A sibgle unit of text in a document. */
interface TextItem {

	/** Offset from the beginning of the paragraph or the text line. */
	offset: number;

	/** Type of the text item. */
	dataType: TextItemType;

	/** Denotes the text item if the text item is a string. */
	sdata: string;

	/** ID of the object if the text item is an object. */
	idata: number;

	/** Denotes the text item if the text item is an object. */
	obj: FMObject;

}

interface TextItemConstructor {
	new(): TextItem;
	new(): TextItem;
	readonly prototype: TextItem;
}

declare var TextItem: TextItemConstructor;