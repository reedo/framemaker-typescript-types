// Type definitions for FrameMaker app object
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * @todo Check readonly status of all vars.
 */

declare namespace app {

	/** The book with input focus. */
	var ActiveBook: Book;

	/** The document with input focus. */
	var ActiveDoc: Doc;

	/** Sets the current view. */
	var ActiveView: "WYSIWYG View" | "Author View" | "XML View";

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

	/** Default Key Catalog for the current workflow. Workflow values: KeyCatalogWorkflowAuthoring, KeyCatalogWorkflowPublishing, KeyCatalogWorkflowSearching. */
	var DefaultKeyCatalog: KeyCatalog;

	/** @todo UNDOCUMENTED */
	var DefaultVectorFormatForXMLExport: string;

	/** 0 if screen refresh is completely turned off. */
	var Displaying: 0 | 1;

	/** The name of the display on which the FrameMaker product session is running. */
	var DisplayName: string;

	/** @todo UNDOCUMENTED */
	var DocOpenClientEncounteredErrors: number;

	/** When true, FrameMaker does not save the XML on disk if there are validation errors during XML export. */
	var DoNotExportInvalidXML: boolean;

	/** When 1, the FrameMaker error log is not generated. */
	var DoNotGenerateErrorLog: 0 | 1;

	/** True when FrameMaker is set not to show the Welcome screen. */
	let DontShowWelcomeScreen: boolean;

	/** If true, XML is validated after doing XSLT while exporting. */
	var DoPostXSLTValidationOnExport: boolean;

	/** @todo UNDOCUMENTED */
	var EddUpdateOn: boolean;

	/** List of export filters available in the current session. */
	let ExportFilters: string;

	/** When true, Auto Spell Check is enabled. */
	var EnableAutoSpellCheck: boolean;

	/** First command in the list of commands in the session. */
	var FirstCommandInSession: Command;

	/** First Key Catalog in the session. */
	var FirstKeyCatalogInSession: KeyCatalog;

	/** First menu item or menu in the list of menus, menu items, and menu item separators in the session. */
	var FirstMenuItemInSession: Command | Menu | MenuItemSeparator;

	/** First open book in session. */
	var FirstOpenBook: Book;

	/** First open document in session. */
	var FirstOpenDoc: Doc;

	/** The FrameMaker console string. */
	var FMConsoleString: string;

	/** List of font angles available in the current session. */
	var FontAngleNames: Strings;

	/** An array of flags that indicate attributes for each font family listed by FontFamilyNames. This array of integers is indexed the same as the list of font family names, and corresponds directly to that list. Each Int is a packed field; the high order 16 bits indicate a surrogate font, and the low order bits indicate attributes for the font family.
   * The flags, their mask values, and their meaning follow:
   *     Constants.FV_FAMILY_VISIBLE (0x00000001): Family is visible in menu.
   *     Constants.FV_FAMILY_SELECTABLE (0x00000002): Family can be selected in menu.
   *     Constants.FV_FAMILY_MAPPED (0x00000004): Family is always mapped to another family.
   *     Constants.FV_FAMILY_SURROGATE (0xFFFF0000): The family mapped to, if Constants.FV_FAMILY_MAPPED (0x00000004) is True.
   */
	var FontFamilyAttributes: Ints;

	/** List of font family names available in the current session. This list does not include combined fonts. */
	var FontFamilyNames: Strings;

	/** List of font variations available in the current session. */
	var FontVariationNames: Strings;

	/** List of font weights available in the current session. */
	var FontWeightNames: Strings;

	/**
   * Gets the book object with a specified name.
   * 
   * @param name The name of the book object you want to get.
   * 
   * @returns The named book.
   */
	function GetNamedBook(name: string): Book;

	/**
   * Gets a Command object with the specified command string.
   * 
   * @param name The name of the command object you want to get.
   * 
   * @returns The named Command.
   */
	function GetNamedCommand(name: string): Command;

	/**
   * Gets a menu object with the specified menu string.
   * 
   * @param name The name of the menu object you want to get.
   * 
   * @returns The named Menu.
   */
	function GetNamedMenu(name: string): Menu;

	/**
   * Gets a menu item separator object with the specified menu item separator string.
   * 
   * @param name The name of the menu item separator you want to get.
   * 
   * @returns The named MenuItemSeparator.
   */
	function GetNamedMenuItemSeparator(name: string): MenuItemSeparator;

	/**
   * Gets the object with a specified name (Name property) and object type.
   * 
   * @param objType Type of the object to get (FO Constant).
   * @param name Name of the object to get.
   * 
   * @returns The object, or 0.
   */
	function GetNamedObject(objType: Constants, name: string): FMObject | 0;

	/**
   * The GetProps() method retrieves the complete property list for a specified object. The GetProps() method takes no arguments. The method returns a PropVals object that contains an array of property-value pairs, on success. If the GetProps() method fails, it sets the len field of the returned structure to 0 and assigns one of the following values to FA_errno.
   * 
   * @returns The property values.
   */
	function GetProps(): PropVals;

	/** 1 if Gravity is turned on for the session. */
	var Gravity: 0 | 1;

	/** Size at which to greek text. */
	var GreekSize: number;

	/** Path of the FrameMaker product help directory. */
	var HelpDir: string;

	/** Path of $FMHOME. */
	var HomeDir: string;

	/** Name of the host computer. */
	var HostName: string;

	/** 1 if the four icons that appear on the upper-right side of the document window are on. Changing this property affects only the documents that are opened subsequently; it does not affect documents that are already open. */
	var IconBarOn: 0 | 1;

	/** Temporary id of the FrameMaker session. */
	var id: number;

	/** List of import filters available in the current session. */
	let ImportFilters: string;

	/** Directory path of $FMHOME/fminit. */
	var InitDir: string;

	/** [This property is a string on the Inset class. Boolean here. I don't see how a session can be an inset, but this property is here if you want it.] */
	var InsetURL: boolean;

	/** Maybe setting this to false gives you a free copy of FrameMaker? */
	var IsFMRunningInTrialPeriod: boolean;

	/** @todo UNDOCUMENTED */
	var IsFormViewEnabled: boolean;

	/** 1 if the FrameMaker product window is iconified. */
	var IsIconified: 0 | 1;

	/** 1 if the FrameMaker product window is in front of other application windows. You can use this property to bring the FrameMaker product to the front or back. */
	var IsInFront: 0 | 1;

	/** 1 if the FrameMaker product window is visible on the screen. */
	var IsOnScreen: 0 | 1;

	/** Maybe setting this to 1 gives you a free copy of FrameMaker? */
	var IsTechnicalSuiteLicensed: 0 | 1;

	/** Gets whether temporary open/save is in progress. Temporary open/save happens during view switching operations. */
	var IsTempOpenSave: 0 | 1;

	/** Current workflow related to Key Catalogs. */
	var KeyCatalogWorkflow: number;

	/** The title in the FrameMaker product window title bar. */
	var Label: string;

	/** Product language. */
	var Language: Constants.FV_LANG_NOLANGUAGE | Constants.FV_LANG_ENGLISH | Constants.FV_LANG_BRITISH | Constants.FV_LANG_GERMAN | Constants.FV_LANG_FRENCH | Constants.FV_LANG_SPANISH | Constants.FV_LANG_ITALIAN | Constants.FV_LANG_SWEDISH | Constants.FV_LANG_JAPANESE | Constants.FV_LANG_TRADITIONAL_CHINESE | Constants.FV_LANG_SIMPLIFIED_CHINESE | Constants.FV_LANG_KOREAN;

	/** List of standard marker types for the current session. For versions prior to 5.5, this property returned the list of all marker types for the current session. In version 5.5, marker types are assigned to the document; use the MarkerTypeNames property of Constants.FO_Doc (4) to get the full list of marker types. */
	var MarkerNames: Strings;

	/** The product name. */
	var Name: string;

	/**
   * Creates a new book objects and returns it.
   * 
   * @param name The name of the book object to create.
   * 
   * @returns The newly created Book.
   */
	function NewNamedBook(name: string): Book;

	/**
   * Creates a new command object and returns it.
   * 
   * @param name Name of the new command object to create.
   * 
   * @returns The newly created Command.
   */
	function NewNamedCommand(name: string): Command;

	/**
   * Creates a menu object with the specified name and returns it.
   * 
   * @param name Name of the menu object to create.
   * 
   * @returns The newly created Menu.
   */
	function NewNamedMenu(name: string): Menu;

	/**
   * Creates a new menu item separator with the specified name and returns it.
   * 
   * @param name Name of the new menu item separator object.
   * 
   * @returns The newly created MenuItemSeparator.
   */
	function NewNamedMenuItemSeparator(name: string): MenuItemSeparator;

	/**
   * Creates a new object and returns it.
   * 
   * @param objType The type of the object you want to create (FO Constant).
   * @param name The name of the object you want to create.
   * 
   * @returns The newly created object.
   */
	function NewNamedObject(objType: Constants, name: string): FMObject;

	/** When True, the 3D objects in the generated PDF become 2-dimensional. When False, 3D objects get embedded in the PDF and do not become 2 dimensional. Default is False. */
	var No3DInPDF: boolean;

	/** When True, the Flash content in the PDF becomes static. When False, Flash objects get embedded in the PDF and are playable. Default is False. */
	var NoFlashInPDF: boolean;

	/** When True, the Rich Media (audio and video) objects in the PDF become static. When False, Rich Media objects get embedded in the PDF and are playable. Default is False. */
	var NoMultiMediaInPDF: boolean;

	/**
   * @returns True if the object exists in the FrameMaker session.
   */
	function ObjectValid(): 0 | 1;

	/** @todo UNDOCUMENTED */
	var OpenAndSaveXmlBookComponentDoc: boolean;

	/** Directory in which FrameMaker is installed. */
	var OpenDir: string;

	/** Operating system under which the current session is running: Always 'DOS'. */
	var OperatingSystem: string;

	/** The users PATH. */
	var Path: string;

	/** Name of the platform on which the current session is running. */
	var Platform: string;

	/** The sessions PID. */
	var ProcessNumber: number;

	/** The FrameMaker product family name. */
	var ProductFamily: "FrameMaker" | "FrameMaker XML Author";

	/** True if the current session is for a demo version of FrameMaker. */
	var ProductIsDemo: boolean;

	/** True if FrameMaker is running in structured mode for the current session. */
	var ProductIsStructured: boolean;

	/** The FrameMaker product name. The names for FrameMaker+SGML indicate FrameMaker running under the structured product interface. FrameViewer is retained for backward compatibility. */
	var ProductName: "FrameMaker" | "FrameMaker+SGML" | "FrameViewer" | "DemoMaker" | "DemoMaker+SGML";

	/** 1 if reformatting is enabled. */
	var Reformatting: 0 | 1;

	/** 1 if Remember Missing Font Names is activated. */
	var RememberMissingFontNames: 0 | 1;

	/** When true, the extra while spaces are removed while importing XML. */
	var RemoveExtraWhiteSpacesOnXMLImport: boolean;

	/** @todo UNDOCUMENTED */
	var RpcProgramNumber: number;

	/** @todo UNDOCUMENTED */
	var RpcPropertyName: string;

	/** Height of the FrameMaker product window in pixels. */
	var ScreenHeight: number;

	/** Width of the FrameMaker product window in pixels. */
	var ScreenWidth: number;

	/** The offset of the FrameMaker product window in pixels from the left side of the screen. If you set a value that would result in the product window being off the screen, that value is ignored and the old value is retained. */
	var ScreenX: number;

	/** The offset of the FrameMaker product window in pixels from the top of the screen. If you set a value that would result in the product window being off the screen, that value is ignored and the old value is retained. */
	var ScreenY: number;

	/**
   * TheSetProps() method sets the properties of a specified object. The method takes one argument - An array containing the values of the object to be set. The method does not return anything on success.
   * 
   * @param setVal The property list.
   */
	function SetProps(setVal: PropVals): void;

	/** Directory path of $FMHOME/structure/sgml. */
	var SgmlDir: string;

	/** 1 if Snap is turned on for the session. */
	var Snap: 0 | 1;

	/** @todo UNDOCUMENTED */
	var StackWarningLevel: number;

	/** Directory path of $FMHOME/structure. */
	var StructureDir: string;

	/** When true, the warning messages about duplicate declarations in DTD/Schema do not appear in the FrameMaker log. */
	var SuppressXMLParserWarnings: boolean;

	/** @todo UNDOCUMENTED */
	var TechSuiteInternal: number;

	/** Path of the temporary directory for internal FrameMaker product processes; the directory specified by the DOS $TEMP environment variable. */
	var TmpDir: string;

	/** @todo UNDOCUMENTED */
	var type: number;

	/** @todo UNDOCUMENTED */
	var UndoFDKRecording: boolean;

	/** @todo UNDOCUMENTED */
	var UserHomeDir: string;

	/** User login name. */
	var UserLogin: string;

	/** User name. */
	var UserName: string;

	/** Name of the FrameMaker app directory. As defined by: %appdata%\Adobe\FrameMaker\<version number>. Returns the HomeDir if the app directory is not found. */
	var UserSettingsDir: string;

	/** A string to which clients can store private data. */
	var UserString: string;

	/** 1 if validation is enabled (FrameMaker only). */
	var Validating: 0 | 1;

	/** Frame version number (before the decimal). */
	let VersionMajor: number;

	/** Frame version number (after the first decimal). */
	let VersionMinor: number;

	/** Frame version number (after the second decimal). */
	let VersionRevision: number;

	/** 1 if the formatting bar is visible. */
	let ViewFormattingBar: 0 | 1;

	/** 1 if the QuickAccess bar is visible. */
	let ViewQuickAccessBar: 0 | 1;

	/** @todo UNDOCUMENTED */
	var VisualCaretMovement: boolean;

	/** Name of window system that the FrameMaker product is running under. */
	let WindowSystem: string;

	/** Directory path of $FMHOME/structure/xml. */
	let XmlDir: string;

	/** @todo UNDOCUMENTED */
	var XmlIsBook: boolean;
}