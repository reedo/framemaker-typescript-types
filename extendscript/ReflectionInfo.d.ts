// Type definitions for the ReflectionInfo ExtendScript interface
// Definitions by Dan Reed <https://danreed.dev>

/**
 * This object contains information about a property, a method, or a method argument.
 *
 * You can access `ReflectionInfo` objects in a `Reflection` object’s properties and methods arrays, by name or index.
 *
 * You can access the `ReflectionInfo` objects for the arguments of a method in the arguments array of the `ReflectionInfo` object for the method, by index.
 *
 * @example
 * obj = new String ('hi');
 * obj.reflect.methods[0];
 * obj.reflect.methods['indexOf'];
 *
 * @example
 * obj.reflect.methods['indexOf'].arguments[0];
 * obj.reflect.methods.indexOf.arguments[0];
 */
interface ReflectionInfo {
  /** For a reflected method, an array of `ReflectionInfo` objects describing each method argument. */
  arguments: ReflectionInfo[];

  /**
   * The data type of the reflected element. One of:
   *
   * * boolean
   * * number
   * * string
   * * _Classname_ - The class name of an object.
   * * \* - Any type. This is the default.
   * * null
   * * undefined - Return data type for a function that does not return any value.
   * * unknown
   *
   * __NOTE__: Class names start with a capital letter. Thus, the value string stands for a javascript `string`, while `String` is a javascript `String` wrapper object.
   */
  dataType: string;

  /** The default value for a reflected property or method argument, or `undefined` if there is no default value, if the property is undefined, or if the element is a method. */
  defaultValue: any;

  /** Short text describing the reflected object, or `undefined` if no description is available. */
  description: string | undefined;

  /** Longer text describing the reflected object more completely, or `undefined` if no description is available. */
  help: string | undefined;

  /** When true, the reflected property or method returns a collection; otherwise, false. */
  isCollection: boolean;

  /** The maximum numeric value for the reflected element, or `undefined` if there is no maximum or if the element is a method. */
  max: number | undefined;

  /** The minimum numeric value for the reflected element, or `undefined` if there is no minimum or if the element is a method. */
  min: number | undefined;

  /** The name of the reflected element. A string, or a number for an array index. */
  name: string | number;

  /**
   * The type of the reflected element. One of:
   *
   * * `readonly` - A Read only property.
   * * `readwrite` - A read-write property.
   * * `createonly` - A property that is valid only during creation of an object.
   * * `method` - A method.
   */
  type: 'readonly' | 'readwrite' | 'createonly' | 'method';
}
