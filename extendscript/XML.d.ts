// Type definitions for the XML ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/** A javascript object containing five properties, which correspond to the five XML class properties. */
interface XMLSettings {

	/** When true, comments are stripped from the XML during parsing. Default is false. */
	ignoreComments: boolean;

	/** When true, processing instructions (<?xxx?> elements) are stripped from the XML during parsing. Default is false. */
	ignoreProcessingInstructions: boolean;

	/** When true, white-space characters are stripped from the XML during parsing. Default is true. */
	ignoreWhitespace: boolean;

	/** The number of spaces to use for indenting when pretty-printing. Default is 2. */
	prettyIndent: number;

	/** When true, toXMLString() uses indenting and line feeds to create the XML string. Default is true. */
	prettyPrinting: boolean;

}

/**
 * The XML object provides both static properties and functions, available through the XML class, and dynamic properties and functions available through each instance.
 *
 * __WARNING:__ The methods cannot be documented since the object uses string indexing.
 *
 * Refer to 'JavaScript Tools Guide CC' for this object's methods and usage.
 */
interface XML {

	[subXML: string]: XML | Function;

	[n: number]: XML;

}

interface XMLConstructor {
	(): XML;
	(xmlCode: string | XML): XML;
	new(): XML;
	new(xmlCode: string | XML): XML;
	readonly prototype: XML;

	/** Retrieves the default global option settings that control how XML is parsed and generated. */
	defaultSettings(): XMLSettings;

	/** When true, comments are stripped from the XML during parsing. Default is false. */
	ignoreComments: boolean;

	/** When true, processing instructions (<?xxx?> elements) are stripped from the XML during parsing. Default is false. */
	ignoreProcessingInstructions: boolean;

	/** When true, white-space characters are stripped from the XML during parsing. Default is true. */
	ignoreWhitespace: boolean;

	/** The number of spaces to use for indenting when pretty-printing. Default is 2. */
	prettyIndent: number;

	/** When true, toXMLString() uses indenting and line feeds to create the XML string. Default is true. */
	prettyPrinting: boolean;

	/**
	 * Sets the global option settings that control how XML is parsed and generated. You can use this to restore settings retrieved with `settings()` or `defaultSettings()`.
	 *
	 * @param settings An XML settings object.
	 */
	setSettings(settings: XMLSettings): void;

	/** Retrieves the current global option settings that control how XML is parsed and generated. */
	settings(): XMLSettings;

}

declare const XML: XMLConstructor;