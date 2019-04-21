// Type definitions for FrameMaker app object
// Definitions by: Dan Reed <http://danreed.dev>

declare namespace app {





  /** CHECKED: 0 if screen refresh is completely turned off. */
  let Displaying: 0 | 1;

  /** CHECKED: The name of the display on which the FrameMaker product session is running. */
  let DisplayName: string;

  /** CHECKED: Default Key Catalog for the current workflow. Workflow values: KeyCatalogWorkflowAuthoring, KeyCatalogWorkflowPublishing, KeyCatalogWorkflowSearching. */
  let DefaultKeyCatalog: KeyCatalog;

  /**
   * @todo Check the actual data type for this.
   * 
   * First Key Catalog in the session.
   */
  let FirstKeyCatalogInSession: Doc;

  /** Current workflow related to Key Catalogs. */
  let KeyCatalogWorkflow: number;

  /** Gets whether temporary open/save is in progress. Temporary open/save happens during view switching operations. */
  let IsTempOpenSave: boolean | number;

  /** List of export filters available in the current session. */
  let ExportFilters: string;

  /** First command in the list of commands in the session. */
  let FirstCommandInSession: Command;

  /** First menu item or menu in the list of menus, menu items, and menu item separators in the session. */
  let FirstMenuItemInSession: Command | Menu | MenuItemSeparator;

  /** First open book in session. */
  let FirstOpenBook: Book;

  /** First open document in session. */
  let FirstOpenDoc: Doc;





  

  /** Path of the FrameMaker product help directory. */
  let HelpDir: string;

  /** Path of $FMHOME. */
  let HomeDir: string;

  /** Name of the FrameMaker app directory. As defined by: %appdata%\Adobe\FrameMaker\<version number>. Returns the HomeDir if the app directory is not found. */
  let UserSettingsDir: string;

  /** List of import filters available in the current session. */
  let iportFilters: string;

  /** Directory path of $FMHOME/fminit. */
  let InitDir: string;

  /** List of font angles available in the current session. */
  let FontAngleNames: Strings;

  /** An array of flags that indicate attributes for each font family listed by FontFamilyNames. This array of integers is indexed the same as the list of font family names, and corresponds directly to that list. Each Int is a packed field; the high order 16 bits indicate a surrogate font, and the low order bits indicate attributes for the font family.
   * The flags, their mask values, and their meaning follow:
   *     Constants.FV_FAMILY_VISIBLE (0x00000001): Family is visible in menu.
   *     Constants.FV_FAMILY_SELECTABLE (0x00000002): Family can be selected in menu.
   *     Constants.FV_FAMILY_MAPPED (0x00000004): Family is always mapped to another family.
   *     Constants.FV_FAMILY_SURROGATE (0xFFFF0000): The family mapped to, if Constants.FV_FAMILY_MAPPED (0x00000004) is True.
   */
  let FontFamilyAttributes: Ints;

  /** List of font family names available in the current session. This list does not include combined fonts. */
  let FontFamilyNames: Strings;

  /** List of font variations available in the current session. */
  let FontVariationNames: Strings;

  /** List of font weights available in the current session. */
  let FontWeightNames: Strings;

  /** True or 1 if Gravity is turned on for the session. */
  let Gravity: boolean | number;

  /** Size at which to greek text. */
  let GreekSize: number;

  /** Name of the host computer. */
  let HostName: string;

  /** True or 1 if the four icons that appear on the upper-right side of the document window are on. Changing this property affects only the documents that are opened subsequently; it does not affect documents that are already open. */
  let IconBarOn: boolean | number;

  /** True or 1 if the FrameMaker product window is iconified. */
  let IsIconified: boolean | number;

  /** True or 1 if the FrameMaker product window is in front of other application windows. You can use this property to bring the FrameMaker product to the front or back. */
  let IsInFront: boolean | number;

  /** True or 1 if the FrameMaker product window is visible on the screen. */
  let IsOnScreen: boolean | number;

  /** The title in the FrameMaker product window title bar. */
  let Label: string;

  /** Product language. */
  let Language: Constants.FV_LANG_NOLANGUAGE | Constants.FV_LANG_ENGLISH | Constants.FV_LANG_BRITISH | Constants.FV_LANG_GERMAN | Constants.FV_LANG_FRENCH | Constants.FV_LANG_SPANISH | Constants.FV_LANG_ITALIAN | Constants.FV_LANG_SWEDISH | Constants.FV_LANG_JAPANESE | Constants.FV_LANG_TRADITIONAL_CHINESE | Constants.FV_LANG_SIMPLIFIED_CHINESE | Constants.FV_LANG_KOREAN;

  /** List of standard marker types for the current session. For versions prior to 5.5, this property returned the list of all marker types for the current session. In version 5.5, marker types are assigned to the document; use the MarkerTypeNames property of Constants.FO_Doc (4) to get the full list of marker types. */
  let MarkerNames: Strings;

  /** Directory in which FrameMaker is installed. */
  let OpenDir: string;

  /** Path to search to start the FrameMaker product. */
  let Path: string;

  /** Name of the platform on which the current session is running. */
  let Platform: string;

  /** True or 1 if the current session is for a demo version of FrameMaker. */
  let ProductIsDemo: boolean | number;

  /** True or 1 if FrameMaker is running in structured mode for the current session. */
  let ProductIsStructured: boolean | number;

  /** The FrameMaker product name. The names for FrameMaker+SGML indicate FrameMaker running under the structured product interface. FrameViewer is retained for backward compatibility. */
  enum ProductNameType { "FrameMaker", "FrameMaker+SGML", "FrameViewer", "DemoMaker", "DemoMaker+SGML" }
  let ProductName: ProductNameType;

  /** The FrameMaker product family name. */
  enum ProductFamilyType { "FrameMaker", "FrameMaker XML Author" }
  let ProductFamily: ProductFamilyType;

  /** True or 1 if the QuickAccess bar is visible. */
  let ViewQuickAccessBar: boolean | number;

  /** True or 1 if the formatting bar is visible. */
  let ViewFormattingBar: boolean | number;

  /** True or 1 if reformatting is enabled. */
  let Reformatting: boolean | number;

  /** True or 1 if Remember Missing Font Names is activated. */
  let RememberMissingFontNames: boolean | number;

  /** Height of the FrameMaker product window in pixels. */
  let ScreenHeight: number;

  /** Width of the FrameMaker product window in pixels. */
  let ScreenWidth: number;

  /** The offset of the FrameMaker product window in pixels from the left side of the screen. If you set a value that would result in the product window being off the screen, that value is ignored and the old value is retained. */
  let ScreenX: number;

  /** The offset of the FrameMaker product window in pixels from the top of the screen. If you set a value that would result in the product window being off the screen, that value is ignored and the old value is retained. */
  let ScreenY: number;

  /** Directory path of $FMHOME/structure/sgml. */
  let SgmlDir: string;

  /** True or 1 if Snap is turned on for the session. */
  let Snap: boolean | number;

  /** Directory path of $FMHOME/structure. */
  let StructureDir: string;

  /** Path of the temporary directory for internal FrameMaker product processes; the directory specified by the DOS $TEMP environment variable. */
  let TmpDir: string;

  /** User login name. */
  let UserLogin: string;

  /** User name. */
  let UserName: string;

  /** True or 1 if validation is enabled (FrameMaker only). */
  let Validating: boolean | number;

  /** Frame version number (before the decimal). */
  let VersionMajor: number;

  /** Frame version number (after the decimal). */
  let VersionMinor: number;

  /** Name of window system that the FrameMaker product is running under. */
  let WindowSystem: string;

  /** Directory path of $FMHOME/structure/xml. */
  let XmlDir: string;

  /** When true or 1, the FrameMaker error log is not generated. */
  let DoNotGenerateErrorLog: boolean | number;

  /** When True, the Flash content in the PDF becomes static. When False, Flash objects get embedded in the PDF and are playable. Default is False. */
  let NoFlashInPDF: boolean;

  /** When True, the 3D objects in the generated PDF become 2-dimensional. When False, 3D objects get embedded in the PDF and do not become 2 dimensional. Default is False. */
  let No3DInPDF: boolean;

  /** True when FrameMaker is set not to show the Welcome screen. */
  let DontShowWelcomeScreen: boolean;

  /** When True, Auto Spell Check is enabled. */
  let EnableAutoSpellCheck: boolean;





  /** When True, FrameMaker does not save the XML on disk if there are validation errors during XML export. */
  let DoNotExportInvalidXML: boolean;

  /** When True, the warning messages about duplicate declarations in DTD/Schema do not appear in the FrameMaker log. */
  let SuppressXMLParserWarnings: boolean;

  /** When True, the extra while spaces are removed while importing XML. */
  let RemoveExtraWhiteSpacesOnXMLImport: boolean;

  /** When True, the Rich Media (audio and video) objects in the PDF become static. When False, Rich Media objects get embedded in the PDF and are playable. Default is False. */
  let NoMultiMediaInPDF: boolean;



  /**
   * Gets the object with a specified name (Name property) and object type.
   * 
   * @param objType Type of the object to get (FO Constant).
   * @param name Name of the object to get.
   * 
   * @returns The object, or 0.
   */
  function GetNamedObject(objType: Constants, name: string): object | number;

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
   * Creates a new object and returns it.
   * 
   * @param objType The type of the object you want to create (FO Constant).
   * @param name The name of the object you want to create.
   * 
   * @returns The newly created object.
   */
  function NewNamedObject(objType: Constants, name: string): FMObject;

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
   * The GetProps() method retrieves the complete property list for a specified object. The GetProps() method takes no arguments. The method returns a PropVals object that contains an array of property-value pairs, on success. If the GetProps() method fails, it sets the len field of the returned structure to 0 and assigns one of the following values to FA_errno.
   * 
   * @returns The property values.
   */
  function GetProps(): PropVals;

  /**
   * TheSetProps() method sets the properties of a specified object. The method takes one argument - An array containing the values of the object to be set. The method does not return anything on success.
   * 
   * @param setVal The property list.
   */
  function SetProps(setVal: PropVals): void;

  /**
   * @returns True if the object exists in the FrameMaker session.
   */
  function ObjectValid(): boolean | number;

}