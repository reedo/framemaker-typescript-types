// Type definitions for FrameMaker app object
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * @todo Finish adding declarations.
 * @todo Check readonly status of all vars.
 */

declare namespace app {

  /** The book with input focus. */
  var ActiveBook: Book;

  /** The document with input focus. */
  var ActiveDoc: Doc;

  /** Sets the current view. */
  type ActiveViewType = "WYSIWYG View" | "Author View" | "XML View";
  var ActiveView: ActiveViewType;

  /** The name of a marker type to add to the standard list of marker types. Use SetString() to set a marker type name to this property of the Constants.FV_SessionId (0). */
  var AddMarkerTypeToStandardMarkers: string;

  /** When True, allows usage of file:/and file: URLs for referring to a file. */
  var AllowNewFileURL: boolean;

  /** 1 if element reformatting is enabled. */
  var ApplyFormatRules: 0 | 1;

  /** 1 if Automatic Backup is enabled. */
  var AutoBackup: 0 | 1;

  /** 1 if Automatic Save is enabled. */
  var AutoSave: 0 | 1;

  /** Time between automatic saves in seconds (60 seconds to 10800 seconds). */
  var AutoSaveSeconds: number;

  /** Directory path of $FMHOME/bin. */
  var BinDir: string;

  /** When True, if there are leading/trailing whitespaces (spaces and tabs) in elements, save the whitespaces as character references to enable round-tripping. Else set to False. Default: False. */
  var CharacterReferencesOnXMLExport: boolean;

  /**
   * Closes a Frame session.
   * The flags parameter specifies whether to abort or to close open documents or books if they have unsaved changes. Set theConstants.FF_CLOSE_MODIFIED flag to True (1) to close open documents and books regardless of their state.
   * 
   * @param flags FF_CLOSE_MODIFIED flag to True (1) to close open documents and books regardless of their state.
   * 
   * @returns FE_Success on success; Constants.FE_DocModified (-8): The document was modified and the flags parameter was set to 0.
   */
  function Close(flags?: number): number;

  /** Name of the directory from which the FrameMaker product was started. */
  var CurrentDir: string;

  /** Type of menu set. */
  var CurrentMenuSet: Constants.FV_MENU_QUICK | Constants.FV_MENU_COMPLETE | Constants.FV_MENU_CUSTOM;
}