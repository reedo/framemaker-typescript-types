// Type definitions for the Namespace ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/**
 * This object encapsulates the definition of an XML namespace. A namespace associates an XML-name prefix with a complete URI. The prefix is a string that precedes the local name of an XML element or attribute and identifies the namespace, while the URI points to the actual location where the definition of the namespace is found.
 * 
 * For example, this XML definition contains a namespace declaration:
 * 
 * ```xml
 * <?xml xmlns:adobe=http://www.adobe.com/test?>
 * ```
 * 
 * In the corresponding namespace, the prefix is adobe, and the URI is http://www.adobe.com/test.
 */
interface Namespace {

	/**
	 * The element-name prefix associated with the namespace URI.
	 * 
	 * The prefix value can be undefined, as when a specified prefix is not a valid XML name. Namespaces with an undefined prefix are completely ignored; they are not added to an XML namespace declaration.
	 */
	prefix: string | undefined;

	/** The location of the namespace definition, a URI. */
	uri: string;

}

interface NamespaceConstructor {
	/** Creates a namespace with an empty prefix and URI. */
	(): Namespace;

	/** Creates a Namespace object with an empty prefix and the given URI. */
	(uri: string): Namespace;

	/** Creates a namespace with an empty prefix and the URI set to the URI of the QName object (if the QName object contains a URI). */
	(prefix: QName): Namespace;

	/**
	 * Creates a copy of the given Namespace object.
	 * 
	 * If the Namespace() function is called without the new operator, and the only argument is a Namespace object, the function simply returns that object, rather than creating a copy.
	*/
	(ns: Namespace): Namespace;

	/** Creates a Namespace object with the given prefix and the given URI. */
	(prefix: string, uri: string): Namespace;

}

declare const Namespace: NamespaceConstructor;