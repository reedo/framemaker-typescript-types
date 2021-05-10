// Type definitions for FrameMaker app object
// Definitions by Dan Reed <https://danreed.dev>

/** The global `app` object. */
interface Session {

	/** The book with input focus. */
	// @ts-expect-error
	ActiveBook: Book;

	/** The document with input focus. */
	// @ts-expect-error
	ActiveDoc: Doc;

	/** Sets the current view. */
	ActiveView: 'WYSIWYG View' | 'Author View' | 'XML View';

	/**
	 * The name of a marker type to add to the standard list of marker types.
	 * 
	 * Use `SetString()` to set a marker type name to this property of the `Constants.FV_SessionId` (0).
	 */
	AddMarkerTypeToStandardMarkers: string;

	/** When True, allows usage of `file:/` and `file:` URLs for referring to a file. */
	AllowNewFileURL: boolean;

	/** 1 if element reformatting is enabled. */
	ApplyFormatRules: 0 | 1;

	/** 1 if Automatic Backup is enabled. */
	AutoBackup: 0 | 1;

	/** 1 if Automatic Save is enabled. */
	AutoSave: 0 | 1;

	/** Time between automatic saves in seconds (60 seconds to 10800 seconds). */
	AutoSaveSeconds: number;

	/** Directory path of `$FMHOME/bin`. */
	BinDir: string;

	/**
	 * When `true`, if there are leading/trailing whitespaces (spaces and tabs) in elements, save the whitespaces as character references to enable round-tripping.
	 * 
	 * Else set to `false`.
	 * 
	 * Default: `false`.
	 */
	CharacterReferencesOnXMLExport: boolean;

	/**
	 * Closes a Frame session.
	 * 
	 * The flags parameter specifies whether to abort or to close open documents or books if they have unsaved changes.
	 * 
	 * Set the `Constants.FF_CLOSE_MODIFIED` flag to True (1) to close open documents and books regardless of their state.
	 * 
	 * @param flags `FF_CLOSE_MODIFIED` flag to True (1) to close open documents and books regardless of their state.
	 * 
	 * @returns FE_Success on success; `Constants.FE_DocModified` (-8): The document was modified and the flags parameter was set to 0.
	 */
	Close(flags?: number): number;

	/** Name of the directory from which the FrameMaker product was started. */
	CurrentDir: string;

	/** Type of menu set. */
	CurrentMenuSet: MenuSetType;

	/**
	 * Default Key Catalog for the current workflow.
	 * 
	 * Workflow values:
	 * * KeyCatalogWorkflowAuthoring
	 * * KeyCatalogWorkflowPublishing
	 * * KeyCatalogWorkflowSearching
	 */
	// @ts-expect-error
	DefaultKeyCatalog: KeyCatalog;

	/** @todo UNDOCUMENTED */
	DefaultVectorFormatForXMLExport: string;

	/** 0 if screen refresh is completely turned off. */
	Displaying: 0 | 1;

	/** The name of the display on which the FrameMaker product session is running. */
	DisplayName: string;

	/** @todo UNDOCUMENTED */
	DocOpenClientEncounteredErrors: number;

	/** When `true`, FrameMaker does not save the XML on disk if there are validation errors during XML export. */
	DoNotExportInvalidXML: boolean;

	/** When 1, the FrameMaker error log is not generated. */
	DoNotGenerateErrorLog: 0 | 1;

	/** `true` when FrameMaker is set not to show the Welcome screen. */
	DontShowWelcomeScreen: boolean;

	/** If `true`, XML is validated after doing XSLT while exporting. */
	DoPostXSLTValidationOnExport: boolean;

	/** @todo UNDOCUMENTED */
	EddUpdateOn: boolean;

	/** List of export filters available in the current session. */
	ExportFilters: string;

	/** When `true`, Auto Spell Check is enabled. */
	EnableAutoSpellCheck: boolean;

	/** First command in the list of commands in the session. */
	// @ts-expect-error
	FirstCommandInSession: Command;

	/** First Key Catalog in the session. */
	// @ts-expect-error
	FirstKeyCatalogInSession: KeyCatalog;

	/** First menu item or menu in the list of menus, menu items, and menu item separators in the session. */
	// @ts-expect-error
	FirstMenuItemInSession: Command | Menu | MenuItemSeparator;

	/** First open book in session. */
	// @ts-expect-error
	FirstOpenBook: Book;

	/** First open document in session. */
	// @ts-expect-error
	FirstOpenDoc: Doc;

	/** The FrameMaker console string. */
	FMConsoleString: string;

	/** List of font angles available in the current session. */
	FontAngleNames: Strings;

	/**
	 * An array of flags that indicate attributes for each font family listed by FontFamilyNames.
	 * 
	 * This array of integers is indexed the same as the list of font family names, and corresponds directly to that list.
	 * 
	 * Each Int is a packed field; the high order 16 bits indicate a surrogate font, and the low order bits indicate attributes for the font family.
	 * 
	 * The flags, their mask values, and their meaning follow:
	 * 
	 * | Constant                       | Hex Code   | Description                                                                 |
	 * | ------------------------------ | ---------- | --------------------------------------------------------------------------- |
	 * | Constants.FV_FAMILY_VISIBLE    | 0x00000001 | Family is visible in menu.                                                  |
	 * | Constants.FV_FAMILY_SELECTABLE | 0x00000002 | Family can be selected in menu.                                             |
	 * | Constants.FV_FAMILY_MAPPED     | 0x00000004 | Family is always mapped to another family.                                  |
	 * | Constants.FV_FAMILY_SURROGATE  | 0xFFFF0000 | The family mapped to, if `Constants.FV_FAMILY_MAPPED` (0x00000004) is True. |
	 */
	FontFamilyAttributes: Ints;

	/** List of font family names available in the current session. This list does not include combined fonts. */
	FontFamilyNames: Strings;

	/** List of font variations available in the current session. */
	FontVariationNames: Strings;

	/** List of font weights available in the current session. */
	FontWeightNames: Strings;

	/**
	 * Gets the book object with a specified name.
	 * 
	 * @param name The name of the book object you want to get.
	 * 
	 * @returns The named book.
	 */
	// @ts-expect-error
	GetNamedBook(name: string): Book;

	/**
	 * Gets a Command object with the specified command string.
	 * 
	 * @param name The name of the command object you want to get.
	 * 
	 * @returns The named Command.
	 */
	// @ts-expect-error
	GetNamedCommand(name: string): Command;

	/**
	 * Gets a menu object with the specified menu string.
	 * 
	 * @param name The name of the menu object you want to get.
	 * 
	 * @returns The named Menu.
	 */
	// @ts-expect-error
	GetNamedMenu(name: string): Menu;

	/**
	 * Gets a menu item separator object with the specified menu item separator string.
	 * 
	 * @param name The name of the menu item separator you want to get.
	 * 
	 * @returns The named MenuItemSeparator.
	 */
	// @ts-expect-error
	GetNamedMenuItemSeparator(name: string): MenuItemSeparator;

	/**
	 * Gets the object with a specified name (`Name` property) and object type.
	 * 
	 * @param objType Type of the object to get (`FO_Constant`).
	 * @param name    Name of the object to get.
	 * 
	 * @returns The object, or 0.
	 */
	// @ts-expect-error
	GetNamedObject(objType: FO_Constant, name: string): FMObject | 0;

	/**
	 * The `GetProps()` method retrieves the complete property list for a specified object.
	 * 
	 * The `GetProps()` method takes no arguments.
	 * 
	 * The method returns a `PropVals` object that contains an array of property-value pairs, on success.
	 * 
	 * If the `GetProps()` method fails, it sets the len field of the returned structure to 0 and assigns one of the following values to `FA_errno`.
	 * 
	 * @returns The property values.
	 */
	GetProps(): PropVals;

	/** 1 if Gravity is turned on for the session. */
	Gravity: 0 | 1;

	/** Size at which to greek text. */
	GreekSize: number;

	/** Path of the FrameMaker product help directory. */
	HelpDir: string;

	/** Path of `$FMHOME`. */
	HomeDir: string;

	/** Name of the host computer. */
	HostName: string;

	/**
	 * 1 if the four icons that appear on the upper-right side of the document window are on.
	 * 
	 * Changing this property affects only the documents that are opened subsequently; it does not affect documents that are already open.
	 */
	IconBarOn: 0 | 1;

	/** Temporary id of the FrameMaker session. */
	id: number;

	/** List of import filters available in the current session. */
	ImportFilters: string;

	/** Directory path of `$FMHOME/fminit`. */
	InitDir: string;

	/** [This property is a string on the Inset class. Boolean here. I don't see how a session can be an inset, but this property is here if you want it.] */
	InsetURL: boolean;

	/** Maybe setting this to false gives you a free copy of FrameMaker? */
	IsFMRunningInTrialPeriod: boolean;

	/** @todo UNDOCUMENTED */
	IsFormViewEnabled: boolean;

	/** 1 if the FrameMaker product window is iconified. */
	IsIconified: 0 | 1;

	/**
	 * 1 if the FrameMaker product window is in front of other application windows.
	 * 
	 * You can use this property to bring the FrameMaker product to the front or back.
	 */
	IsInFront: 0 | 1;

	/** 1 if the FrameMaker product window is visible on the screen. */
	IsOnScreen: 0 | 1;

	/** Maybe setting this to 1 gives you a free copy of FrameMaker? */
	IsTechnicalSuiteLicensed: 0 | 1;

	/** Gets whether temporary open/save is in progress. Temporary open/save happens during view switching operations. */
	IsTempOpenSave: 0 | 1;

	/** Current workflow related to Key Catalogs. */
	KeyCatalogWorkflow: number;

	/** The title in the FrameMaker product window title bar. */
	Label: string;

	/** Product language. */
	Language: SessionLanguage;

	/**
	 * List of standard marker types for the current session.
	 * 
	 * For versions prior to 5.5, this property returned the list of all marker types for the current session.
	 * 
	 * In version 5.5, marker types are assigned to the document; use the MarkerTypeNames property of `Constants.FO_Doc` (4) to get the full list of marker types.
	 */
	MarkerNames: Strings;

	/** The product name. */
	Name: string;

	/**
	 * Creates a new book objects and returns it.
	 * 
	 * @param name The name of the book object to create.
	 * 
	 * @returns The newly created Book.
	 */
	// @ts-expect-error
	NewNamedBook(name: string): Book;

	/**
	 * Creates a new command object and returns it.
	 * 
	 * @param name Name of the new command object to create.
	 * 
	 * @returns The newly created Command.
	 */
	// @ts-expect-error
	NewNamedCommand(name: string): Command;

	/**
	 * Creates a menu object with the specified name and returns it.
	 * 
	 * @param name Name of the menu object to create.
	 * 
	 * @returns The newly created Menu.
	 */
	// @ts-expect-error
	NewNamedMenu(name: string): Menu;

	/**
	 * Creates a new menu item separator with the specified name and returns it.
	 * 
	 * @param name Name of the new menu item separator object.
	 * 
	 * @returns The newly created MenuItemSeparator.
	 */
	// @ts-expect-error
	NewNamedMenuItemSeparator(name: string): MenuItemSeparator;

	/**
	 * Creates a new object and returns it.
	 * 
	 * @param objType The type of the object you want to create (FO Constant).
	 * @param name    The name of the object you want to create.
	 * 
	 * @returns The newly created object.
	 */
	NewNamedObject(objType: Constants, name: string): FMObject;

	/**
	 * When `true`, the 3D objects in the generated PDF become 2-dimensional.
	 * 
	 * When `false`, 3D objects get embedded in the PDF and do not become 2 dimensional.
	 * 
	 * Default is `false`.
	 */
	No3DInPDF: boolean;

	/**
	 * When `true`, the Flash content in the PDF becomes static.
	 * 
	 * When `false`, Flash objects get embedded in the PDF and are playable.
	 * 
	 * Default is `false`.
	 */
	NoFlashInPDF: boolean;

	/**
	 * When `true`, the Rich Media (audio and video) objects in the PDF become static.
	 * 
	 * When `false`, Rich Media objects get embedded in the PDF and are playable.
	 * 
	 * Default is `false`.
	 */
	NoMultiMediaInPDF: boolean;

	/**
	 * @returns `true` if the object exists in the FrameMaker session.
	 */
	ObjectValid(): 0 | 1;

	/** @todo UNDOCUMENTED */
	OpenAndSaveXmlBookComponentDoc: boolean;

	/** Directory in which FrameMaker is installed. */
	OpenDir: string;

	/** Operating system under which the current session is running: Always 'DOS'. */
	OperatingSystem: string;

	/** The users PATH. */
	Path: string;

	/** Name of the platform on which the current session is running. */
	Platform: string;

	/** The sessions PID. */
	ProcessNumber: number;

	/** The FrameMaker product family name. */
	ProductFamily: 'FrameMaker' | 'FrameMaker XML Author';

	/** True if the current session is for a demo version of FrameMaker. */
	ProductIsDemo: boolean;

	/** True if FrameMaker is running in structured mode for the current session. */
	ProductIsStructured: boolean;

	/** The FrameMaker product name. The names for FrameMaker+SGML indicate FrameMaker running under the structured product interface. FrameViewer is retained for backward compatibility. */
	ProductName: 'FrameMaker' | 'FrameMaker+SGML' | 'FrameViewer' | 'DemoMaker' | 'DemoMaker+SGML';

	/** 1 if reformatting is enabled. */
	Reformatting: 0 | 1;

	/** 1 if Remember Missing Font Names is activated. */
	RememberMissingFontNames: 0 | 1;

	/** When `true`, the extra while spaces are removed while importing XML. */
	RemoveExtraWhiteSpacesOnXMLImport: boolean;

	/** @todo UNDOCUMENTED */
	RpcProgramNumber: number;

	/** @todo UNDOCUMENTED */
	RpcPropertyName: string;

	/** Height of the FrameMaker product window in pixels. */
	ScreenHeight: number;

	/** Width of the FrameMaker product window in pixels. */
	ScreenWidth: number;

	/** The offset of the FrameMaker product window in pixels from the left side of the screen. If you set a value that would result in the product window being off the screen, that value is ignored and the old value is retained. */
	ScreenX: number;

	/** The offset of the FrameMaker product window in pixels from the top of the screen. If you set a value that would result in the product window being off the screen, that value is ignored and the old value is retained. */
	ScreenY: number;

	/**
	 * Sets the properties of a specified object. The method does not return anything on success.
	 * 
	 * @param setVal The property list.
	 */
	SetProps(setVal: PropVals): void;

	/** Directory path of `$FMHOME/structure/sgml`. */
	SgmlDir: string;

	/** 1 if Snap is turned on for the session. */
	Snap: 0 | 1;

	/** @todo UNDOCUMENTED */
	StackWarningLevel: number;

	/** Directory path of `$FMHOME/structure`. */
	StructureDir: string;

	/** When `true`, the warning messages about duplicate declarations in DTD/Schema do not appear in the FrameMaker log. */
	SuppressXMLParserWarnings: boolean;

	/** @todo UNDOCUMENTED */
	TechSuiteInternal: number;

	/** Path of the temporary directory for internal FrameMaker product processes; the directory specified by the DOS `$TEMP` environment variable. */
	TmpDir: string;

	/** @todo UNDOCUMENTED */
	type: number;

	/** @todo UNDOCUMENTED */
	UndoFDKRecording: boolean;

	/** @todo UNDOCUMENTED */
	UserHomeDir: string;

	/** User login name. */
	UserLogin: string;

	/** User name. */
	UserName: string;

	/** Name of the FrameMaker app directory. As defined by: `%appdata%\Adobe\FrameMaker\<version number>`. Returns the HomeDir if the app directory is not found. */
	UserSettingsDir: string;

	/** A string to which clients can store private data. */
	UserString: string;

	/** 1 if validation is enabled (FrameMaker only). */
	Validating: 0 | 1;

	/** Frame version number (before the decimal). */
	VersionMajor: number;

	/** Frame version number (after the first decimal). */
	VersionMinor: number;

	/** Frame version number (after the second decimal). */
	VersionRevision: number;

	/** 1 if the formatting bar is visible. */
	ViewFormattingBar: 0 | 1;

	/** 1 if the QuickAccess bar is visible. */
	ViewQuickAccessBar: 0 | 1;

	/** @todo UNDOCUMENTED */
	VisualCaretMovement: boolean;

	/** Name of window system that the FrameMaker product is running under. */
	WindowSystem: string;

	/** Directory path of `$FMHOME/structure/xml`. */
	XmlDir: string;

	/** @todo UNDOCUMENTED */
	XmlIsBook: boolean;

}

/** The global app object. */
declare var app: Session;

/**
 * Can be one of:
 * * Constants.FV_MENU_QUICK (1)
 * * Constants.FV_MENU_COMPLETE (2)
 * * Constants.FV_MENU_CUSTOM (3)
 */
type MenuSetType =
	Constants['FV_MENU_QUICK'] |
	Constants['FV_MENU_COMPLETE'] |
	Constants['FV_MENU_CUSTOM'];

/**
 * Can be one of:
 * * Constants.FV_LANG_NOLANGUAGE (0)
 * * Constants.FV_LANG_ENGLISH (1)
 * * Constants.FV_LANG_BRITISH (2)
 * * Constants.FV_LANG_GERMAN (3)
 * * Constants.FV_LANG_FRENCH (5)
 * * Constants.FV_LANG_SPANISH (7)
 * * Constants.FV_LANG_ITALIAN (9)
 * * Constants.FV_LANG_SWEDISH (17)
 * * Constants.FV_LANG_JAPANESE (18)
 * * Constants.FV_LANG_TRADITIONAL_CHINESE (19)
 * * Constants.FV_LANG_SIMPLIFIED_CHINESE (20)
 * * Constants.FV_LANG_KOREAN (21)
 */
type SessionLanguage =
	Constants['FV_LANG_NOLANGUAGE'] |
	Constants['FV_LANG_ENGLISH'] |
	Constants['FV_LANG_BRITISH'] |
	Constants['FV_LANG_GERMAN'] |
	Constants['FV_LANG_FRENCH'] |
	Constants['FV_LANG_SPANISH'] |
	Constants['FV_LANG_ITALIAN'] |
	Constants['FV_LANG_SWEDISH'] |
	Constants['FV_LANG_JAPANESE'] |
	Constants['FV_LANG_TRADITIONAL_CHINESE'] |
	Constants['FV_LANG_SIMPLIFIED_CHINESE'] |
	Constants['FV_LANG_KOREAN'];