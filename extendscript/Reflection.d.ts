// Type definitions for the Reflection ExtendScript interface
// Definitions by Dan Reed <https://danreed.dev>

/**
 * Every object has a reflect property that returns a reflection object that reports the contents of the object.
 *
 * You can, for example, show the values of all the properties of an object with code like this:
 *
 * @example
 * var f = new File ("myfile");
 * var props = f.reflect.properties;
 * for (var i = 0; i < props.length; i++) {
 *   $.writeln(’this property ’ + props[i].name + ’ is ’ + f[props[i].name]);
 * }
 */
interface Reflection {

	/** Short text describing the reflected object, or `undefined` if no description is available. */
	description: string | undefined;

	/**
	 * Use this method to get information about dynamic properties that have not yet been accessed, but that are known to exist.
	 *
	 * @param name The property for which to retrieve information.
	 *
	 * @returns The `ReflectionInfo` object for the named property of the reflected object, or `null` if no such property exists.
	 */
	find(name: string): ReflectionInfo | null;

	/** Longer text describing the reflected object more completely, or undefined if no description is available. */
	help: string;

	/** An Array of `ReflectionInfo` objects containing all methods of the reflected object, defined in the class or in the specific instance. */
	methods: ReflectionInfo[];

	/** The class name of the reflected object. */
	name: string;

	/**
	 * An Array of ReflectionInfo objects containing all properties of the reflected object, defined in the class or in the specific instance.
	 *
	 * For objects with dynamic properties (defined at runtime) the list contains only those dynamic properties that have already been accessed by the script.
	 *
	 * For example, in an object wrapping an HTML tag, the names of the HTML attributes are determined at run time.
	*/
	properties: ReflectionInfo[];

}