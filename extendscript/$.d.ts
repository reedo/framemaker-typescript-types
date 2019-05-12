// Type definitions for the ExtendScript $ object
// Definitions by Dan Reed <https://danreed.dev>

/** Object containing information about the display screens attached to your computer. */
interface Screen {
	left: number;
	top: number;
	right: number;
	bottom: number;
	primary: boolean;
	toString: Function;
}

/** This global ExtendScript object provides a number of debugging facilities and informational methods. The properties of the $ object allow you to get global information such as the most recent run-time error, and set flags that control debugging and localization behavior. The methods allow you to output text to the JavaScript Console during script execution, control execution and other ExtendScript behavior programmatically, and gather statistics on object use. */
interface $ {

	/** Displays the About box for the ExtendScript component, and returns the text of the About box as a string. */
	about(): string;

	/**
   * The Internet name of the application’s default character encoding, such as “CP1252” or “X-SHIFT-JIS”. Valid values are implementation- and OS-dependent.
   * Set to change the default encoding for the application. The returned value can differ from the value set. In Windows, for example, if set to “x-latin1”, the returned value is the synonymous “ISO-8859-1”.
   */
	appEncoding: string;

	/**
   * Executes a breakpoint at the current position.
   * If no condition is needed, it is recommended that you use the JavaScript debugger statement in the script, rather than this method.
   * @param condition A string containing a JavaScript statement to be used as a condition. If the statement evaluates to true or nonzero when this point is reached, execution stops.
   */
	bp(condition?: string): void;

	/** The version information for the current ExtendScript build. */
	readonly build: string;

	/** The date the current JavaScript engine was built. */
	readonly buildDate: Date;

	/**
   * Invokes the platform-specific color selection dialog, and returns the selected color as a hexadecimal RGB value: 0xRRGGBB.
   * @param name The color to be preselected in the dialog, as a hexadecimal RGB value (0xRRGGBB), or -1 for the platform default.
   */
	colorPicker(name: number): number;

	/** The character used in formatted numeric output for a decimal point, for the current locale. */
	readonly decimalPoint: string;

	/** @todo UNDOCUMENTED */
	dictionary: any;

	/** The name of the current JavaScript engine, if set. */
	readonly engineName: string;

	/**
   * The most recent run-time error information, contained in a JavaScript Error object.
   * Assigning error text to this property generates a run-time error; however, the preferred way to generate a run-time error is to throw an Error object.
   */
	error: Error | string;

	/**
   * Loads a JavaScript script file from disk, evaluates it, and returns the result of evaluation.
   * @param path The name and location of the file.
   * @param timeout A number of milliseconds to wait before returning undefined, if the script cannot be evaluated. Default is 10000 milliseconds.
   */
	evalFile(path: File | string, timeout?: number): any;

	/** The file name of the current script. */
	readonly fileName: string;

	/**
   * Gets or sets low-level debug output flags.
   * A logical AND of bit flag values:
   * 0x0002 (2): Displays each line with its line number as it is executed.
   * 0x0040 (64): Enables excessive garbage collection. Usually, garbage collection starts when the number of objects has increased by a certain amount since the last garbage collection. This flag causes ExtendScript to garbage collect after almost every statement. This impairs performance severely, but is useful when you suspect that an object gets released too soon.
   * 0x0080 (128): Displays all calls with their arguments and the return value.
   * 0x0100 (256): Enables extended error handling (see strict).
   * 0x0200 (512): Enables the localization feature of the toString method. Equivalent to the localize property.
   * NOTE: Other bit values are not public and should not be used.
   */
	flags: number;

	/** Initiates garbage collection in the JavaScript engine. */
	gc(): void;

	/**
   * Retrieves the value of the specified environment variable, or null if no such variable is defined.
   * @param envname The name of the environment variable.
   */
	getenv(envname: string): string | null;

	/** Provides access to the Global object, which contains the JavaScript global namespace. */
	readonly global: any;

	/** A high-resolution timer that measures the number of microseconds since this property was last accessed. Value is initialized as early as possible, so the first access returns the startup time for ExtendScript. The property is thread-local; that is, the first access on a thread returns the time needed to create and initialize that thread. */
	readonly hiresTimer: number;

	/** The path for include files for the current script. */
	readonly includePath: string;

	/** The current debugging level, which enables or disables the JavaScript debugger. */
	readonly level: 0 | 1 | 2;

	/** The current line of the currently executing script; the first line is number 1. */
	readonly line: number;

	/**
	 * Gets or sets the current locale. The string contains five characters in the form LL_RR, where LL is an ISO 639 language specifier, and RR is an ISO 3166 region specifier.
	 * Initially, this is the value that the application or the platform returns for the current user. You can set it to temporarily change the locale for testing. To return to the application or platform setting, set to undefined, null, or the empty string.
	 */
	locale: number;

	/** Enable or disable the extended localization features of the built-in toString method. */
	localize: boolean;

	/** Gets or sets the ExtendScript memory cache size in bytes. */
	memCache: number;

	/** The current operating system version information. */
	readonly os: string;

	/** An array of objects containing information about the display screens attached to your computer. */
	screens: Screen[];

	/**
   * Sets the value of the specified environment variable, if no such variable is defined.
   * @param envname The name of the environment variable.
   * @param value The new value, a string.
   */
	setenv(envname: string, value: string): void;

	/**
   * Suspends the calling thread for the given number of milliseconds.
   * During a sleep period, checks at 100 millisecond intervals to see whether the sleep should be terminated. This can happen if there is a break request, or if the script timeout has expired.
   * @param milliseconds The number of milliseconds to wait.
   */
	sleep(milliseconds: number): void;

	/** The current stack trace. */
	stack: string;

	/** When true, any attempt to write to a read-only property causes a runtime error. Some objects do not permit the creation of new properties when true. */
	strict: boolean;

	/** @todo UNDOCUMENTED */
	summary(): any;

	/** The version number of the JavaScript engine as a three-part number and description; for example: "3.92.95 (debug)". */
	readonly version: string;

	/**
   * Writes the specified text to the JavaScript Console.
   * @param text A text string to write.
   * @param rest Any number of additional strings. All are concatenated to form a single string.
   */
	write(text: string, ...rest: string[]): void;

	/**
	 * Writes the specified text to the JavaScript Console and appends a linefeed sequence.
	 * @param text A text string to write.
	 * @param rest Any number of additional strings. All are concatenated to form a single string.
	 */
	writeln(text: string, ...rest: string[]): void;
}

declare const $: $;