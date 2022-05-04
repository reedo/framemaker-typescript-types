// Type definitions for the File ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/** Represents a file in the local file system in a platform-independent manner. All properties and methods resolve file system aliases automatically and act on the original file unless otherwise noted. */
interface File extends ESObject {
	/** The full path name for the referenced file in URI notation. */
	readonly absoluteURI: string;

	/** When true, the object refers to a file system alias or shortcut. */
	readonly alias: boolean;

	/**
	 * Changes the path specification of the referenced file.
	 *
	 * @param path A string containing the new path, absolute or relative to the current folder.
	 */
	changePath(path: string): boolean;

	/**
	 * Closes this open file.
	 *
	 * @returns true on success, false if there are I/O errors.
	 */
	close(): boolean;

	/**
	 * Copies this object’s referenced file to the specified target location. Resolves any aliases to find the source file. If a file exists at the target location, it is overwritten.
	 *
	 * @param target A string with the URI path to the target location, or a File object that references the target location.
	 *
	 * @returns true if the copy was successful, false otherwise.
	 */
	copy(target: File | string): boolean;

	/**
	 * Makes this file a file-system alias or shortcut to the specified file. The referenced file for this object must not yet exist on disk.
	 *
	 * @param path A string containing the path of the target file.
	 */
	createAlias(path: string): boolean;

	/** The creation date of the referenced file, or null if the object does not refer to a file on disk. */
	readonly created: Date | null;

	/** In Mac OS, the file creator as a four-character string. In Windows or UNIX, value is "????". */
	readonly creator: string;

	/** The localized name of the referenced file, without the path. */
	readonly displayName: string;

	/**
	 * Gets or sets the encoding for subsequent read/write operations. If the value is not recognized, uses the system default encoding.
	 *
	 * A special encoder, BINARY, is used to read binary files. It stores each byte of the file as one Unicode character regardless of any encoding. When writing, the lower byte of each Unicode character is treated as a single byte to write.
	 */
	encoding: string;

	/** When true, a read attempt caused the current position to be at the end of the file, or the file is not open. */
	readonly eof: boolean;

	/** A message describing the last file system error. Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error. */
	error: string;

	/** When true, this object refers to a file or file-system alias that actually exists in the file system. */
	readonly exists: boolean;

	/**
	 * Opens this file using the appropriate application, as if it had been double-clicked in a file browser. You can use this method to run scripts, launch applications, and so on.
	 *
	 * @returns true immediately if the application launch was successful.
	 */
	execute(): boolean;

	/** The platform-specific full path name for the referenced file. */
	readonly fsName: string;

	/** The full path name for the referenced file in URI notation. */
	readonly fullName: string;

	/**
	 * Retrieves the URI for this file, relative to the specified base path, in URI notation. If no base path is supplied, the URI is relative to the path of the current folder.
	 *
	 * @param basePath A string containing the base path for the relative URI. Default is the current folder.
	 *
	 * @returns A string containing the relative URI.
	 */
	getRelativeURI(basePath?: string): string;

	/** When true, the file is not shown in the platform-specific file browser. If the object references a file-system alias or shortcut, the flag is altered on the alias, not on the original file. */
	hidden: boolean;

	/** The size of the file in bytes. Can be set only for a file that is not open, in which case it truncates or pads the file with 0-bytes to the new length. */
	length: number;

	/** How line feed characters are written in the file system. */
	lineFeed: 'Windows' | 'Macintosh' | 'Unix';

	/** A localized version of the file name portion of the absolute URI for the referenced file, without the path specification. */
	readonly localizedName: string;

	/** The date of the referenced file’s last modification, or null if the object does not refer to a file on disk. */
	readonly modified: Date | null;

	/** The file name portion of the absolute URI for the referenced file, without the path specification. */
	readonly name: string;

	/**
	 * Opens the referenced file for subsequent read/write operations. The method resolves any aliases to find the file.
	 *
	 * The method attempts to detect the encoding of the open file. It reads a few bytes at the current location and tries to detect the Byte Order Mark character 0xFFFE. If found, the current position is advanced behind the detected character and the encoding property is set to one of the strings UCS-2BE, UCS-2LE, UCS4-BE, UCS-4LE, or UTF-8. If the marker character is not found, it checks for zero bytes at the current location and makes an assumption about one of the above formats (except UTF-8). If everything fails, the encoding property is set to the system encoding.
	 *
	 * __NOTE__: Be careful about opening a file more than once. The operating system usually permits you to do so, but if you start writing to the file using two different File objects, you can destroy your data.
	 *
	 * @param mode A string indicating the read/write mode. One of: r: (read), w: (write), e: (edit) or a: (append).
	 * @param type In Mac OS, the type of a newly created file, a 4-character string. Ignored in Windows and UNIX.
	 * @param creator In Mac OS, the creator of a newly created file, a 4-character string. Ignored in Windows and UNIX.
	 *
	 * @returns true if the file has been opened successfully, false otherwise.
	 */
	open(mode: 'r' | 'w' | 'e' | 'a', type?: string, creator?: string): boolean;

	/**
	 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file or files, and creates new File objects to represent the selected files. Differs from the class method openDialog() in that it presets the current folder to this File object’s parent folder and the current file to this object’s associated file.
	 *
	 * If the user clicks OK, returns a File or Folder object for the selected file or folder, or an array of objects. If the user cancels, returns null.
	 *
	 * @param prompt A string containing the prompt text, if the dialog allows a prompt.
	 * @param filter A filter that limits the types of files displayed in the dialog. In Windows, a filter expression, such as "JavaScript:\*.jsx;All files:\*.\*".
	 * @param multiSelect When true, the user can select multiple files and the return value is an array. Default is false.
	 */
	openDlg(
		prompt?: string,
		filter?: string,
		multiSelect?: boolean
	): File | Folder | (File | Folder)[] | null;

	/** The Folder object for the folder that contains this file. */
	readonly parent: Folder;

	/** The path portion of the absolute URI for the referenced file, without the file name. */
	readonly path: string;

	/**
	 * Reads the contents of the file starting at the current position.
	 *
	 * @param chars An integer specifying the number of characters to read. By default, reads from the current position to the end of the file. If the file is encoded, multiple bytes might be read to create single Unicode characters.
	 *
	 * @returns A string that contains up to the specified number of characters.
	 */
	read(chars?: number): string;

	/**
	 * Reads a single text character from the file at the current position. Line feeds are recognized as CR, LF, CRLF, or LFCR pairs. If the file is encoded, multiple bytes might be read to create single Unicode characters.
	 *
	 * @returns A string that contains the character.
	 */
	readch(): string;

	/**
	 * Reads a single line of text from the file at the current position, and returns it in a string. Line feeds are recognized as CR, LF, CRLF, or LFCR pairs. If the file is encoded, multiple bytes might be read to create single Unicode characters.
	 *
	 * @returns A string that contains the text.
	 */
	readln(): string;

	/** When true, prevents the file from being altered or deleted. If the referenced file is a file-system alias or shortcut, the flag is altered on the alias, not on the original file. */
	readonly: boolean;

	/** The path name for the referenced file in URI notation, relative to the current folder. */
	readonly relativeURI: string;

	/**
	 * Deletes the file associated with this object from disk, immediately, without moving it to the system trash. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself.
	 *
	 * __NOTE__: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
	 */
	remove(): boolean;

	/**
	 * Renames the associated file. Does not resolve aliases, but renames the referenced alias or shortcut file itself.
	 *
	 * @param newName The new file name, with no path.
	 */
	rename(newName: string): boolean;

	/**
	 * If this object references an alias or shortcut, this method resolves that alias and returns a new File object that references the file-system element to which the alias resolves.
	 *
	 * @returns The new File object, or null if this object does not reference an alias, or if the alias cannot be resolved.
	 */
	resolve(): File | null;

	/**
	 * Opens the built-in platform-specific file-browsing dialog, in which the user can select an existing file location to which to save information, and creates a new File object to represent the selected file.
	 *
	 * Differs from the class method `saveDialog()` in that it presets the current folder to this File object’s parent folder and the file to this object’s associated file.
	 *
	 * If the user clicks OK, returns a File object for the selected file. If the user cancels, returns null.
	 *
	 * @param prompt A string containing the prompt text, if the dialog allows a prompt.
	 * @param preset A filter that limits the types of files displayed in the dialog. A filter expression, such as "JavaScript:\*.jsx;All files:\*.\*".
	 */
	saveDlg(prompt?: string, preset?: string): File | null;

	/**
	 * Seeks to the specified position in the file. The new position cannot be less than 0 or greater than the current file size.
	 *
	 * @param pos The new current position in the file as an offset in bytes from the start, current position, or end, depending on the mode.
	 * @param mode Optional. The seek mode, one of: 0 = Seek to absolute position, where pos=0 is the first byte of the file. This is the default. 1 = Seek relative to the current position. 2 = Seek backward from the end of the file.
	 *
	 * @returns true if the position was changed.
	 */
	seek(pos: number, mode?: 0 | 1 | 2): boolean;

	/**
	 * Retrieves the current position as a byte offset from the start of the file.
	 *
	 * @returns The position index.
	 */
	tell(): number;

	/**
	 * The file type as a four-character string.
	 *
	 * In Windows, "appl" for .EXE files, "shlb" for .DLL files and "TEXT" for any other file.
	 *
	 * If the file does not exist, the value is "????".
	 */
	readonly type: string;

	/**
	 * Writes the specified text to the file at the current position. For encoded files, writing a single Unicode character may write multiple bytes.
	 *
	 * __NOTE__: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
	 *
	 * @param text A string to write.
	 * @param rest Any number of additional strings.
	 */
	write(text: string, ...rest: string[]): boolean;

	/**
	 * Writes the specified text to the file at the current position, and appends a Line Feed sequence in the style specified by the linefeed property.For encoded files, writing a single Unicode character may write multiple bytes.
	 *
	 * __NOTE__: Be careful not to write to a file that is open in another application or object, as this can overwrite existing data.
	 *
	 * @param text A string to write.
	 * @param rest Any number of additional strings.
	 */
	writeln(text: string, ...rest: string[]): boolean;
}

interface FileConstructor extends ESObject {
	(): File | Folder;
	(path: string): File | Folder;
	new (): File;
	new (path: string): File;
	readonly prototype: File;

	/**
	 * Decodes the specified string as required by RFC 2396.
	 *
	 * @param uri The encoded string to decode. All special characters must be encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string `my%20file` is decoded as `my file`.
	 *
	 * Special characters are those with a numeric value greater than 127, except the following: `/ - _ . ! ~ * ' ( )`
	 */
	decode(uri: string): string;

	/**
	 * Encodes the specified string as required by RFC 2396. All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string `my file` is encoded as `my%20file`.
	 *
	 * Special characters are those with a numeric value greater than 127, except the following: `/ - _ . ! ~ * ' ( )`
	 *
	 * @param name The string to encode.
	 */
	encode(name: string): string;

	/** The name of the file system. One of Windows, Macintosh, or Unix. */
	readonly fs: 'Windows' | 'Macintosh' | 'Unix';

	/**
	 * Checks whether a given encoding is available.
	 *
	 * @param name The encoding name. Typical values are “ASCII,” “binary,” or “UTF-8”.
	 */
	isEncodingAvailable(name: string): boolean;

	/**
	 * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file or multiple files, and creates new File objects to represent the selected files.
	 *
	 * If the user clicks OK, returns a File object for the selected file, or an array of objects if multiple files are selected. If the user cancels, returns null.
	 *
	 * @param prompt A string containing the prompt text, if the dialog allows a prompt.
	 * @param filter A filter that limits the types of files displayed in the dialog. In Windows, a filter expression, such as `JavaScript:*.jsx;All files:*.*`.
	 * @param multiSelect When true, the user can select multiple files and the return value is an array. Default is false.
	 */
	openDialog(
		prompt?: string,
		filter?: string,
		multiSelect?: boolean
	): File | null;

	/**
	 * Opens the built-in platform-specific file-browsing dialog in which a user can select an existing file location to which to save information, and creates a new File object to represent the selected file location.
	 *
	 * If the user clicks OK, returns a File object for the selected file location. If the user cancels, returns null.
	 *
	 * @param prompt A string containing the prompt text, if the dialog allows a prompt.
	 * @param filter A filter that limits the types of files displayed in the dialog. A filter expression, such as `JavaScript:*.jsx;All files:*.*`.
	 */
	saveDialog(prompt: string, filter?: string): File | null;
}

declare const File: FileConstructor;
