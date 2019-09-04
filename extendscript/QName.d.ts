// Type definitions for the QName ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/** This object encapsulates a fully qualified XML name, the combination of a local XML name and its namespace URI. */
interface QName {

	/** The local element name portion of the XML element’s fully qualified XML name. */
	name: string;

	/** The namespace prefix of the XML element’s fully qualified XML name. */
	uri: string;

}

interface QNameConstructor {

	/** Creates a QName object with an empty local name and no URI. */
	(): QName;

	/**
	 * Creates a QName object with the given local name and the URI of the default namespace. Can be the wildcard character, “\*”.
	 */
	(name: string): QName;

	/** Creates a copy of an existing QName object. */
	(name: QName): QName;

	/** Creates a QName object with an empty local name and the URI of the Namespace object. */
	(ns: Namespace): QName;

	/**
	 * Create a QName object with the given namespace URI and local name.
	 * 
	 * If the local name is supplied as the wildcard character, “\*”, the uri argument is ignored, and the URI value is that of the default namespace.
	 */
	(uri: string, name: string): QName;

	/** Creates a QName object with an empty local name and no URI. */
	new(): QName;

	/**
	 * Creates a QName object with the given local name and the URI of the default namespace. Can be the wildcard character, “\*”.
	 */
	new(name: string): QName;

	/** Creates a copy of an existing QName object. */
	new(name: QName): QName;

	/** Creates a QName object with an empty local name and the URI of the Namespace object. */
	new(ns: Namespace): QName;

	/**
	 * Create a QName object with the given namespace URI and local name.
	 * 
	 * If the local name is supplied as the wildcard character, “\*”, the uri argument is ignored, and the URI value is that of the default namespace.
	 */
	new(uri: string, name: string): QName;

	readonly prototype: QName;

}

declare const QName: QNameConstructor;