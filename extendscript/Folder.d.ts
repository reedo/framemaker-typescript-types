// Type definitions for the Folder ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/** Represents a file-system folder or directory in a platform-independent manner. All properties and methods resolve file system aliases automatically and act on the original file unless otherwise noted. */
interface Folder extends ESObject {
  /** The full path name for the referenced folder in URI notation. */
  readonly absoluteURI: string;

  /** When true, the object refers to a file system alias or shortcut. */
  readonly alias: boolean;

  /**
   * Changes the path specification of the referenced folder.
   *
   * @param path A string containing the new path, absolute or relative to the current parent folder.
   *
   * @returns true on success.
   */
  changePath(path: string): boolean;

  /**
   * Creates a folder at the location given by this object’s path property.
   *
   * @returns true if the folder was created successfully.
   */
  create(): boolean;

  /** The creation date of the referenced folder, or null if the object does not refer to a folder on disk. */
  readonly created: Date | null;

  /** The localized name of the referenced folder, without the path. */
  readonly displayName: string;

  /** A message describing the most recent file system error. Typically set by the file system, but a script can set it. Setting this value clears any error message and resets the error bit for opened files. Contains the empty string if there is no error. */
  error: string;

  /**
   * Opens this folder in the platform-specific file browser (as if it had been double-clicked in the file browser).
   *
   * @returns true immediately if the folder was opened successfully.
   */
  execute(): boolean;

  /** When true, this object refers to a folder that currently exists in the file system. */
  readonly exists: boolean;

  /** The platform-specific name of the referenced folder as a full path name. */
  readonly fsName: string;

  /** The full path name for the referenced folder in URI notation. */
  readonly fullName: string;

  /**
   * Retrieves the contents of this folder, filtered by the supplied mask.
   *
   * @param mask A search mask for file names. A string that can contain question mark (?) and asterisk (\*) wild cards. Default is "\*", which matches all file names.
   *
   * Can also be the name of a function that takes a File or Folder object as its argument. It is called for each file or folder found in the search; if it returns true, the object is added to the return array.
   *
   * __NOTE__: In Windows, all aliases end with the extension .lnk; ExtendScript strips this from the file name when found, in order to preserve compatibility with other operating systems. You can search for all aliases by supplying the search mask "\*.lnk", but note that such code is not portable.
   *
   * @returns An array of File and Folder objects, or null if this object’s referenced folder does not exist.
   */
  getFiles(mask?: string): (File | Folder)[] | null;

  /**
   * Retrieves the path for this folder relative to the specified base path or the current folder, in URI notation.
   *
   * @param basePath A string containing the base path for the relative URI. Default is the current folder.
   *
   * @returns A string containing the relative URI.
   */
  getRelativeURI(basePath?: string): string;

  /** A localized version of the folder name portion of the absolute URI for the referenced file, without the path specification. */
  readonly localizedName: string;

  /** The date of the referenced folder’s last modification, or null if the object does not refer to a folder on disk. */
  readonly modified: Date | null;

  /** The folder name portion of the absolute URI for the referenced file, without the path specification. */
  readonly name: string;

  /** The Folder object for the folder that contains this folder, or null if this object refers to the root folder of a volume. */
  readonly parent: Folder | null;

  /** The path portion of the absolute URI for the referenced folder, without the folder name. */
  readonly path: string;

  /** The path name for the referenced folder in URI notation, relative to the current folder. */
  readonly relativeURI: string;

  /**
   * Deletes the empty folder associated with this object from disk, immediately, without moving it to the system trash. Folders must be empty before they can be deleted. Does not resolve aliases; instead, deletes the referenced alias or shortcut file itself.
   *
   * __NOTE__: Cannot be undone. It is recommended that you prompt the user for permission before deleting.
   *
   * @returns true if the folder is deleted successfully.
   */
  remove(): boolean;

  /**
   * Renames the associated folder. Does not resolve aliases; instead, renames the referenced alias or shortcut file itself.
   *
   * @param newName The new folder name, with no path.
   *
   * @returns true on success.
   */
  rename(newName: string): boolean;

  /**
   * If this object references an alias or shortcut, this method resolves that alias.
   *
   * Returns a new Folder object that references the file-system element to which the alias resolves, or null if this object does not reference an alias, or if the alias cannot be resolved.
   */
  resolve(): Folder | null;

  /**
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder. Differs from the class method selectDialog() in that it preselects this folder.
   *
   * @param prompt A string containing the prompt text, if the dialog allows a prompt.
   *
   * @returns If the user clicks OK, returns a File or Folder object for the selected file or folder. If the user cancels, returns null.
   */
  selectDlg(prompt: string): File | Folder | null;
}

interface FolderConstructor extends ESObject {
  (): Folder;
  (path: string): Folder;
  new (): Folder;
  new (path: string): Folder;
  readonly prototype: Folder;

  /** A Folder object for the folder that contains application data for all users. Value of %APPDATA%. */
  readonly appData: Folder;

  /** In Mac OS, the Folder object for the folder that contains the bundle of the running application. */
  readonly appPackage: string;

  /** A Folder object for the folder that contains files common to all programs. Value of %CommonProgramFiles%. */
  readonly commonFiles: Folder;

  /** A Folder object for the current folder. Assign either a Folder object or a string containing the new path name to set the current folder. */
  current: Folder;

  /**
   * Decodes the specified string as required by RFC 2396.
   *
   * @param uri String. The encoded string to decode. All special characters must be encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string `my%20file` is decoded as `my file`.
   *
   * Special characters are those with a numeric value greater than 127, except the following: `/ - _ . ! ~ * ' ( )`
   *
   * @returns The decoded string.
   */
  decode(uri: string): string;

  /** A Folder object for the folder that contains the user’s desktop. C:\Documents and Settings\username\Desktop. */
  readonly desktop: Folder;

  /**
   * Encodes the specified string as required by RFC 2396. All special characters are encoded in UTF-8 and stored as escaped characters starting with the percent sign followed by two hexadecimal digits. For example, the string `my file` is encoded as `my%20file`.
   *
   * Special characters are those with a numeric value greater than 127, except the following: `/ - _ . ! ~ * ' ( )`
   *
   * @param name The string to encode.
   *
   * @returns The encoded string.
   */
  encode(name: string): string;

  /** The name of the file system. */
  readonly fs: 'Windows' | 'Macintosh' | 'Unix';

  /**
   * Checks whether a given encoding is available.
   *
   * @param name The encoding name. Typical values are “ASCII,” “binary,” or “UTF-8.”
   *
   * @returns true if your system supports the specified encoding, false otherwise.
   */
  isEncodingAvailable(name: string): boolean;

  /** A Folder object for the user’s default document folder. C:\Documents and Settings\username\My Documents. */
  readonly myDocuments: Folder;

  /**
   * Opens the built-in platform-specific file-browsing dialog, and creates a new File or Folder object for the selected file or folder. Differs from the object method `selectDlg()` in that it does not preselect a folder.
   *
   * @param prompt A string containing the prompt text, if the dialog allows a prompt.
   *
   * @returns If the user clicks OK, returns a File or Folder object for the selected file or folder. If the user cancels, returns null.
   */
  selectDialog(prompt?: string): File | Folder | null;

  /** A Folder object for the folder containing the executable image of the running application. */
  readonly startup: Folder;

  /** A Folder object for the folder containing the operating system files. Value of %windir%. */
  readonly system: Folder;

  /** A Folder object for the default folder for temporary files. */
  readonly temp: Folder;

  /** Always null on Windows. */
  readonly trash: Folder | null;

  /** A Folder object for the folder that contains application data for the current user. Value of %USERDATA%. */
  readonly userData: Folder;
}

declare const Folder: FolderConstructor;
