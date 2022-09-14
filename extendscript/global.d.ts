// Type definitions for ExtendScript global objects and interfaces
// Definitions by Dan Reed <https://danreed.dev>

// ---- LOCALISATION -----

interface Localization {
  /** A locale name is an identifier string in that contains an ISO 639 language specifier, and optionally an ISO 3166 region specifier, separated from the language specifier by an underscore. */
  [localeName: string]: string;
}

/**
 *
 * @param localizationObj A JavaScript object literal whose property names are locale names, and whose property values are the localized text strings. The locale name is an identifier as specified in the ISO 3166 standard, a set of two-letter language abbreviations, such as "en" for English and "de" for German.
 *
 * The string value of each property can contain variables in the form `%1`, `%2`, and so on, corresponding to additional arguments. The variable is replaced with the result of evaluating the corresponding argument in the returned string.
 *
 * @param args Additional JavaScript expressions matching variables in the string values supplied in the localization object. The first argument corresponds to the variable `%1`, the second to `%2`, and so on.
 *
 * Each expression is evaluated and the result inserted in the variable's position in the returned string.
 */
declare function localize(localizationObj: string, args?: string[]): string;

/**
 * @param zString __Internal use only.__
 *
 * A ZString is an internal Adobe format for localized strings, which you might see in Adobe scripts.
 *
 * It is a string that begins with `$$$` and contains a path to the localized string in an installed ZString dictionary.
 *
 * @example
 * w = new Window ("dialog", localize ("$$$/UI/title1=Sample"));
 */
declare function localize(zString: string): string;

// ----- DIALOGS -----

/**
 * Displays a platform-standard dialog containing a short message and an OK button.
 *
 * @param message The string for the displayed message.
 * @param title A string to appear as the title of the dialog. The default title string is "Script Alert".
 * @param errorIcon When true, the platform-standard alert icon is replaced by the platform-standard error icon in the dialog. Default is false.
 */
declare function alert(
  message: string,
  title?: string,
  errorIcon?: boolean
): undefined;

/**
 * Displays a platform-standard dialog containing a short message and two buttons labeled __Yes__ and __No__.
 *
 * @param message The string for the displayed message.
 * @param noAsDflt When true, the __No__ button is the default choice, selected when the user types ENTER. Default is false, meaning that __Yes__ is the default choice.
 * @param title A string to appear as the title of the dialog. The default title string is "Script Alert".
 *
 * @returns True if the user clicked __Yes__, false if the user clicked __No__.
 */
declare function confirm(
  message: string,
  noAsDflt?: boolean,
  title?: string
): boolean;

/**
 * Displays a platform-standard dialog containing a short message, a text edit field, and two buttons labeled __OK__ and __Cancel__.
 *
 * @param message The string for the displayed message.
 * @param preset The initial value to be displayed in the text edit field.
 * @param title A string to appear as the title of the dialog. The default title string is "Script Alert".
 *
 * @returns The value of the text edit field if the user clicked __OK__, `null` if the user clicked __Cancel__.
 */
declare function prompt(
  message: string,
  preset: string,
  title?: string
): string | null;

// ----- XML RELATED FUNCTIONS -----

/**
 * Reports whether a string contains a name that conforms to valid XML syntax.
 *
 * __NOTE__: This implementation uses the same rules as for a JavaScript name, except for the `$` character, which is disallowed, and the `-` character, which as added. It does not follow the W3C definition of an XML name, which adds more Unicode characters to the valid set of characters.
 *
 * @param name A string.
 *
 * @returns True if the name is a valid XML name, false otherwise.
 */
declare function isXMLName(name: string): boolean;

/**
 * Sets the default namespace for XML objects.
 *
 * You can also set the default namespace using this syntax:
 *
 * `default xml namespace =` _Namespace object_
 *
 * `default xml namespace =` _URL string_
 *
 * @param ns A `Namespace` object. Any prefix is ignored.
 */
declare function setDefaultXMLNamespace(ns: Namespace): undefined;
