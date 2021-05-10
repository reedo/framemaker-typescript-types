// Type definitions for global FrameMaker commands
// Definitions by Dan Reed <https://danreed.dev>

/** @todo UNDOCUMENTED */
declare function AddCommand(): void;

/** @todo UNDOCUMENTED */
declare function AddLocationToProject(): void;

/**
 * Adds a menu to a specified menu.
 * 
 * @param toMenu The menu tag to which the menu is to be added.
 * @param menu   The new menu which is being added to the existing menu.
 * @param label  The name by which the newly added menu is visible.
 */
declare function AddMenu(toMenu: string, menu: string, label: string): Constants['FE_Success'] | void;

/**
 * Displays an alert box with a message. Depending on the constant you specify for the type parameter, the alert displays either the OK and Cancel buttons, Yes and No buttons or a Continue button.
 * 
 * @param message The message that appears in the dialog box. Messages longer than 255 characters, are truncated.
 * @param type    The dialog box type.
 * 
 * @returns 0 if the user clicked OK, Continue, or Yes. -1 if the user clicked Cancel or No.
 */
declare function Alert(message: string, type: AlertType): 0 | -1;

/**
 * Checks whether the current asynchronous client has a connection with a FrameMaker process. Call this method after registering the asynchronous client using `WinConnectSession()`.
 * 
 * @returns A positive integer if there is a current connection to a FrameMaker process. Otherwise it returns 0.
 */
declare function Alive(): number;

/**
 * Allocates memory for a property list.
 * 
 * On success, the method returns a property list (a PropVals data structure). The returned PropVals structure references memory that is allocated by the method. If `AllocatePropVals()` fails, the method sets the len field of the returned structure to 0.
 * 
 * Can also use `new PropVals()`.
 * 
 * @param numProps The number of properties in the property list.
 */
declare function AllocatePropVals(numProps?: number): PropVals;

/** @todo UNDOCUMENTED */
declare function AppendIntProp(): void;

/** @todo UNDOCUMENTED */
declare function AppendMetricProp(): void;

/** @todo UNDOCUMENTED */
declare function AppendStringProp(): void;

/** @todo UNDOCUMENTED */
declare function AppendStringsProp(): void;

/** @todo UNDOCUMENTED */
declare function AppendVal(): void;

/** @todo Move to ExtendScript globals. */
declare function BridgeTalk(): void;

/**
 * Allows a client to call another client. The method is useful for calling FrameMaker clients, such as the structure generator and the element catalog manager.
 * 
 * __NOTE:__ Calls to the structure generator always return `Constants.FE_Success` no matter what string is passed to it as an argument.
 * 
 * @param clname The registered name of the target client.
 * @param arg    A string that is passed to the target client.
 * 
 * @returns `Constants.FE_Success` or the value specified by the target client’s last call to `ReturnValue()`.
 */
declare function CallClient(clname: string, arg: string): Constants['FE_Success'] | number;

/**
 * Allows a client to call another client. The method is useful for calling FrameMaker clients, such as the structure generator and the element catalog manager.
 * 
 * __NOTE:__ Calls to the structure generator always return `Constants.FE_Success` no matter what string is passed to it as an argument.
 * 
 * @param clname The registered name of the target client.
 * @param arg    A string that is passed to the target client.
 * 
 * @returns `Constants.FE_Success` or the value specified by the target client’s last call to `ReturnValue()`.
 */
declare function CallClientEx(clname: string, arg: string): Constants['FE_Success'] | TypedVal;

/**
 * Checks the scripts returned by `Open()`, `Import()`, `Save()`, and `UpdateBook()` to determine if a specified status bit is set.
 * 
 * @param p         The property list returned by `Open()`, `Save()`, `Import()`, or `UpdateBook()`.
 * @param statusBit The status bit to test.
 * 
 * @returns Returns 1 if the bit is set, else returns 0.
 */
declare function CheckStatus(p: PropVals, statusBit: number): 0 | 1;

/**
 * Displays dialog boxes similar to a FrameMaker’s Open and Save dialog boxes. The method displays directories and files in a scroll list and allows the user to choose a file or directory.
 * 
 * @param title     The message that appears in the dialog box.
 * @param directory The default directory when the dialog box is first displayed. If you specify an empty string, the last directory used by an ESTK client is used. If no ESTK client has used a directory, the directory specified by the session property, `OpenDir`, is used.
 * @param stuffVal  The default value that appears in the input field when the dialog box first appears. If the dialog box type specified by mode does not have an input field, this string is ignored.
 * @param mode      A constant specifying the type of dialog box.
 * 
 * @returns 0 if the user clicked Open, Select, Use, or Save; a nonzero value if the user clicked Cancel or an error occurred.
 */
declare function ChooseFile(title: string, directory: string, stuffVal: string, mode: ChooseFileMode): number;

/** @returns The name of the current ESTK client’s directory. */
declare function ClientDir(): string;

/** @returns The registered name of the current client (the client that calls `ClientName()`). */
declare function ClientName(): string;

/** @todo UNDOCUMENTED */
declare function ClientNumber(): void;

/** @todo UNDOCUMENTED */
declare function CloseModalDialog(): void;

/** The global `Command` object. */
// @ts-expect-error
declare var Cmd: Command;

/**
 * Adds a custom menu entry in the context menu within the FrameMaker interface.
 * 
 * @todo Check the types for this.
 * 
 * @param menuId    The ID of the Parent menu.
 * @param menuEntry The `CMSMenuItem` structure describes a custom menu definition.
 */
// @ts-expect-error
declare function CMSAddMenuEntry(menuId: number, menuEntry: number): CMSObject;

/**
 * Gets the CMS registration id from CMS name.
 * 
 * @todo Check the types for this.
 * 
 * @param cmsName The Name of the CMS.
 */
// @ts-expect-error
declare function CMSGetCmsIdFromName(cmsName: number): CMSObject;

/** @todo UNDOCUMENTED */
declare function CMSLogin(): void;

/**
 * Registers a CMS client.
 * 
 * @todo Check the types for this.
 * 
 * @param cmsName Name of the CMS to register.
 */
// @ts-expect-error
declare function CMSRegister(cmsName: number): CMSObject;

/** The global Command object. */
// @ts-expect-error
declare var Command: Command;

/**
 * Prints a message to the FrameMaker console.
 * 
 * @param message The message to print.
 */
declare function Console(message: string): void;

/**
 * Creates a new custom document using the FrameMaker product’s default new document template.
 * 
 * @param width              The document page width.
 * @param height             The document page height.
 * @param numCols            The default number of columns.
 * @param columnGap          The default column spacing.
 * @param topMargin          The document page top margin.
 * @param botMargin          The document page bottom margin.
 * @param leftinsideMargin   The left margin for single-sided documents, or the inside margin for double-sided documents.
 * @param rightoutsideMargin The right margin for single-sided documents, or the outside margin for double-sided documents.
 * @param sidedness          A constant that specifies whether the document is single-sided or doublesided and on which side the document starts.
 * @param makeVisible        Specifies whether the document is visible after it is created. Set to true to make the document visible.
 * 
 * @returns The new document.
 */
// @ts-expect-error
declare function CustomDoc(width: number, height: number, numCols: number, columnGap: number, topMargin: number, botMargin: number, leftinsideMargin: number, rightoutsideMargin: number, sidedness: CustomDocSidedness, makeVisible: boolean): Doc;

/** @todo UNDOCUMENTED */
declare function DefineCommand(): void;

/** @todo UNDOCUMENTED */
declare function DefineCommandEx(): void;

/**
 * Defines a menu (`FO_Menu` object). After you define a menu, you can add it to a menu or a menu bar with `AddMenuToMenu()`.
 * 
 * If you call `DefineMenu()` and specify the name of a menu that is already defined in the user’s menu configuration files, the FrameMaker product gives precedence to the definition in the configuration files. If the configuration files assign a label to the menu, the FrameMaker product uses it instead of the one you specify.
 * 
 * If the user has already defined a menu with the name specified by name, `DefineMenu()` ignores the label parameter and uses the label specified by the user.
 * 
 * @param name  A unique name for the menu. If the user or an ESTK client has already defined a command or menu with this name, the new menu replaces it.
 * @param label The title of the menu as it appears on the menu bar or menu.
 * 
 * @returns The new menu.
 */
// @ts-expect-error
declare function DefineMenu(name: string, label: string): FO_Menu;

/** @todo UNDOCUMENTED */
declare function DeleteComponentFromProject(): void;

/** @todo UNDOCUMENTED */
declare function DialogAction(): void;

/** @todo UNDOCUMENTED */
declare function DialogEvent(): void;

/**
 * Ends communication with a FrameMaker product process.
 * 
 * @returns `Constants.FE_Success` if it succeeds, or a system error code if an error occurs.
 */
declare function DisconnectFromSession(): Constants['FE_Success'] | number;

/** @todo UNDOCUMENTED */
declare function EditComponentOfProject(): void;

/** @todo UNDOCUMENTED */
declare function Emergency(): void;

/**
 * Prints the client’s name and a message to the console.
 * 
 * @param message The message to print.
 */
declare function Err(message: string): void;

/**
 * Returns the string corresponding to the value of FA_errno.
 * 
 * __NOTE:__ Seems to crash FM 15.0.3 when FA_errno is 0.
 * 
 * @param i An error number.
 */
declare function ErrorName(i?: number): string;

/** @todo UNDOCUMENTED */
declare function ExploreComponentOfProject(): void;

/** @todo UNDOCUMENTED */
declare function Externalize(): void;

/** The current value of FA_errno. */
declare var FA_errno: number;

/** The number of notifications. */
declare var FA_Note_All: number;

/**
 * Returns a Fonts object with the permutations of angles, variations, and weights available for a specified font family.
 * 
 * @param family The index of the font family (in the list of fonts in the session).
 */
// @ts-expect-error
declare function FamilyFonts(family: number): Fonts;

/**
 * @todo UNDOCUMENTED
 * 
 * This is an ExtendScript located in the startup folder.
 */
declare function FarsiToNConverter(): void;

/** @todo UNDOCUMENTED */
declare function FCMarker(): void;

/**
 * @todo UNDOCUMENTED
 * 
 * @param codes An array of FCodes.
 */
declare function Fcodes(codes: FCodes[]): void;

/**
 * Displays a file scrollbox using the given title and the given directory as the path.
 * 
 * @param title     The title to display on the scroll box.
 * @param directory The directory path to display.
 */
declare function FileScrollBox(title: string, directory: string): string | null;

/** @todo UNDOCUMENTED */
declare function Find(): void;

/** @todo UNDOCUMENTED */
declare function FindChangeInDocSelection(): void;

/**
 * Returns the encoding that FrameMaker uses for the font family.
 * 
 * If the returned string is "Multiple", the font family includes variations that are represented by different encodings.
 * 
 * You should use `FamilyFonts()` to get a list of the variations for the family.
 * 
 * Then you can use `GetEncodingForFont()` to get the encoding for a specific variation.
 * 
 * @param family The font family for which the encoding is to be retrieved.
 */
declare function GetEncodingForFamily(family: number): 'FrameRoman' | 'JISX0208.ShiftJIS' | 'BIG5' | 'GB2312-80.EUC' | 'KSC5601-1992' | 'Multiple';

/**
 * Returns the encoding that FrameMaker uses for a specific font with a specific combination of weight, angle, and variation.
 * 
 * @param font
 */
// @ts-expect-error
declare function GetEncodingForFont(font: Font): 'FrameRoman' | 'JISX0208.ShiftJIS' | 'BIG5' | 'GB2312-80.EUC' | 'KSC5601-1992';

/** Returns the PropVals structure containing the default export parameters. */
declare function GetExportDefaultParams(): PropVals;

/** @todo UNDOCUMENTED */
declare function GetFontAngleValue(): void;

/** @todo UNDOCUMENTED */
declare function GetFontFamilyValue(): void;

/** @todo UNDOCUMENTED */
declare function GetFontVariationValue(): void;

/** @todo UNDOCUMENTED */
declare function GetFontWeightValue(): void;

/**
 * Gets a default property list that you can use to call `Import()`.
 * 
 * @returns A PropVals structure containing the properties retreived.
 */
declare function GetImportDefaultParams(): PropVals;

/** @todo UNDOCUMENTED */
declare function GetIteratorDefaultParams(): void;

/**
 * Finds a key catalog with the specified 'tag'.
 * 
 * @param tag The tag of the new Key Catalog being created.
 */
// @ts-expect-error
declare function GetKeyCatalog(tag: string): KeyCatalog;

/** @todo UNDOCUMENTED */
declare function GetLocalizationStrings(): void;

/** Generates default open-parameters for `NewXML()`. */
declare function GetNewXMLDefaultParams(): PropVals;

/**
 * Gets a default property list that you can use to call `Open()`.
 * 
 * @returns A `PropVals` structure containing the properties retreived.
 */
declare function GetOpenDefaultParams(): PropVals;

/**
 * Gets the index of a property-value pair (`PropVal` structure) within a property list.
 * 
 * `GetPropIndex()` is a convenience routine that makes it easier to manipulate the properties in a property list.
 * 
 * @param propVals The property list.
 * @param propNum  The property for which the index is to be retrieved.
 */
declare function GetPropIndex(propVals: PropVals, propNum: number): Constants['FE_BadPropNum'] | number;

/** Gets a default property list that you can use to call `Save()`. */
declare function GetSaveDefaultParams(): PropVals;

/** @todo UNDOCUMENTED */
declare function GetSearchSurface(): void;

/** Returns the font encodings supported for the current session. */
declare function GetSupportedEncodings(): Strings;

/** Gets a default property list that you can use to call `UpdateBook()`. */
declare function GetUpdateBookDefaultParams(): PropVals;

/** Gets the name of the current workspace. */
declare function GetWorkspaceName(): string;

/** @todo UNDOCUMENTED */
declare function GlineObj(): void;

/** @todo UNDOCUMENTED */
declare function HtmlDialogEventEx(): void;

/** @todo UNDOCUMENTED */
declare function HtmlDialogEx(): void;

/** @todo UNDOCUMENTED */
declare function HtmlNotifyPropertyChange(): void;

/** @todo UNDOCUMENTED */
declare function HtmlUpdateUrl(): void;

/**
 * @todo UNDOCUMENTED
 * 
 * This is an ExtendScript located in the startup folder.
 */
declare function IndicToNConverter(): void;

/** @todo UNDOCUMENTED */
declare function InitializationName(): void;

/** @todo UNDOCUMENTED */
declare function IsDataDifferentFromTemplateData(): void;

/** @todo UNDOCUMENTED */
declare function IsDRL(): void;

/**
 * Checks whether the specified encoding is supported for the current session.
 * 
 * For example, unless FrameMaker is running on a system that supports Japanese text, Japanese encoding is not supported.
 * 
 * @param encodingName The encoding that you want to test.
 * 
 * @returns `true` if the specified encoding is supported for the current session, else returns `false`.
 */
declare function IsEncodingSupported(encodingName: string): boolean;

/** @todo UNDOCUMENTED */
declare function IsFileValid(): void;

/** The JSON parser. */
// @ts-expect-error
declare var JSON: JSON;

/**
 * Loads a menu customization file.
 * 
 * A menu customization file is a text file containing statements that change the menus and commands the user sees in FrameMaker.
 * 
 * For example, a menu customization file can change the name of a command or move a command from one menu to another.
 * 
 * @param pathname The pathname of the menu customization file to load. If you specify only a filename, the function looks in the client directory. If silent is set to `false`, the pathname specified by pathname is used as the default in the Menu Customization File dialog box.
 * @param silent   Specifies whether to display the Menu Customization File dialog box and allow the user to choose the file. To display the dialog box and allow the user to choose the file, specify `false`. To use the file specified by pathname without asking the user, specify `true`.
 */
declare function LoadMenuCustomizationFile(pathname: string, silent: boolean): Constants['FE_Success'] | void;

/** An object of strings. */
declare var locStrings: object;

/** @todo UNDOCUMENTED */
declare function LogFMPIPEvent(): void;

/** @todo UNDOCUMENTED */
declare function Menu(): void;

/**
 * Indicates whether a specified menu exists.
 * 
 * @param menu The menu to be checked for existence.
 */
declare function MenuExists(menu: string): 0 | 1;

/** @todo UNDOCUMENTED */
// @ts-expect-error
declare var mMenu: Menu;

/**
 * Creates a new key catalog with the specified 'tag'.
 * 
 * @param tag The tag of the new Key Catalog being created.
 */
// @ts-expect-error
declare function NewKeyCatalog(tag: string): KeyCatalog;

/** @todo UNDOCUMENTED */
declare function NewProject(): void;

/**
 * Creates a new, untitled XML.
 * 
 * @param opennewXMLParams   A property list telling the FrameMaker product how to open the file and how to respond to errors and other conditions. To use the default list, specify null.
 * @param newXMLReturnParams A property list that returns the filename and provides information about how the FrameMaker product opened the file. It must be initialized before you call `NewXML()`.
 */
// @ts-expect-error
declare function NewXML(opennewXMLParams: PropVals, newXMLReturnParams: PropVals): Doc;

/**
 * Requests that the FrameMaker product notify your client whenever a specified event, or stage of an event, occurs.
 * 
 * __NOTE:__ If FrameMaker encounters an internal error and exits, it does not send any notification to your client about operations performed after the error occured.
 * 
 * For example, after an error, FrameMaker allows the user to save changes in open documents, but it does not notify any clients of the save operations.
 * 
 * @param notification Constant that specifies the notification point.
 * @param state        Specifies whether to turn notification on or off. 1 turns it on, and 0 turns it off.
 */
declare function Notification(notification: NotificationType, state: 0 | 1): Constants['FE_Success'] | void;

/**
 * @todo Document this.
 * 
 * __NOTE:__ Seems to crash FM 15.0.3.
 * 
 * @param i
 */
declare function NotificationName(i: number): string;

/** @todo UNDOCUMENTED */
declare function Notify(): void;

/**
 * @todo UNDOCUMENTED
 * 
 * This is an ExtendScript located in the startup folder.
 */
declare function NToFarsiConverter(): void;

/**
 * @todo UNDOCUMENTED
 * 
 * This is an ExtendScript located in the startup folder.
 */
declare function NToIndicConverter(): void;

/**
 * Opens a document or book. It can also create a new document.
 * 
 * `Open()` allows you to specify a property list telling FrameMaker how to open or create the file and how to deal with error and warning conditions.
 * 
 * For example, you can specify whether to abort or to continue opening a document if it contains fonts that are not available. If the file is already open and invisible, it will make the file visible.
 * 
 * To get a property list to specify for the openParams parameter, use `GetOpenDefaultParams()` or create the list from scratch.
 * 
 * To create a new document with `Open()`, set the `Constants.FS_NewDoc` (29) property in the openParams property list to true.
 * 
 * __NOTE:__ When creating a new document (`Constants.FS_NewDoc` (29) is true) and you display the New dialog box (`Constants.FS_ShowBrowser` (1) is true) and if the user clicks etiher Portrait, Custom, or Landscape in the New dialog box, `Open()` does not create a document.
 * 
 * Instead, it returns 0 and sets FA_errno to either `Constants.FE_WantsPortrait` (-48), `Constants.FE_WantsCustom` (-46), or `Constants.FE_WantsLandscape` (-47), respectively. It is up to your client to create a portrait, custom, or landscape document.
 * 
 * @param fileName         The full pathname of the file to open. If you are using `Open()` to create a document, specify the name of the template to use.
 * @param openParams       A property list telling the FrameMaker product how to open the file and how to respond to errors and other conditions. To use the default list, specify null.
 * @param openReturnParams A property list that returns the filename and provides information about how FrameMaker opened the file. It must be initialized before you call `Open()`.
 * 
 * @returns The document or book if it opens it successfully, or 0 if an error occurs.
 */
// @ts-expect-error
declare function Open(fileName: string, openParams: PropVals, openReturnParams: PropVals): Book | Doc | 0;

/** @todo UNDOCUMENTED */
declare function OpenAnyHow(): void;

/** @todo UNDOCUMENTED */
declare function OpenProject(): void;

/** @todo UNDOCUMENTED */
declare function OpenXML(): void;

/** Pops the Clipboard stack, moving the entry on the top of the stack to the Clipboard. */
declare function PopClipboard(): Constants['FE_Success'] | void;

/**
 * Prints the value of `FA_errno` to the console.
 * 
 * @param i An error number.
 */
declare function PrintErrno(i?: number): void;

/**
 * @todo Document this.
 * 
 * @param p
 */
declare function PrintExportStatus(p: PropVals): void;

/**
 * Prints the current error status, represented by the global variable, `FA_errno`. The method is useful for debugging clients.
 * 
 * When a method fails, it stores an error code in the global variable, `FA_errno`. `FA_errno` retains the error code until another function fails and sets it or until your code explicitly sets it.
 * 
 * To determine whether a method call has failed, initialize `FA_errno` to `FE_Success` once before calling the method and check it once after the method call is completed.
 * 
 * For example, if you call the `Notification()` method and specify an invalid notification constant, the method sets `FA_errno` to `Constants.FE_BadNotificationNum` (-30). If you subsequently call `PrintFAErrno()`, it prints the string `FE_BadNotificationNum`.
 */
declare function PrintFAErrno(): void;

/**
 * Prints status flags returned by `Import()`. It is useful for debugging your clients.
 * 
 * @param p The property list that `Import()` returns in importReturnParams.
 */
declare function PrintImportStatus(p: PropVals): void;

/** @todo UNDOCUMENTED */
declare function PrintInitialization(): void;

/** @todo UNDOCUMENTED */
declare function PrintNotification(): void;

/**
 * Prints status flags returned by `Open()`. It is useful for debugging your clients.
 * 
 * @param p The property list that `Open()` returns in openReturnParams.
 */
declare function PrintOpenStatus(p: PropVals): void;

/**
 * Prints the value of a specified property. It is useful for debugging your clients.
 * 
 * @param p The property to print.
 */
declare function PrintPropVal(p: PropVal): void;

/**
 * Prints the values in a specified property list. It is useful for debugging your clients.
 * 
 * @param p The properties to print.
 */
declare function PrintPropVals(p: PropVals): void;

/**
 * Prints errors returned by `Save()`. It is useful for debugging your clients.
 * 
 * @param p The property list that `Save()` returns in saveReturnParams.
 */
declare function PrintSaveStatus(p: PropVals): void;

/**
 * Prints the text in a specified text item. It is useful for debugging clients.
 * 
 * @param textItem The text item to print.
 */
declare function PrintTextItem(textItem: TextItem): void;

/**
 * Prints the text in a specified set of text items (`TextItems` structure). It is useful for debugging clients.
 * 
 * @param textItems The set of text items to print.
 */
declare function PrintTextItems(textItems: TextItems): void;

/**
 * Prints errors returned by `UpdateBook()`. It is useful for debugging your clients.
 * 
 * @param p The property list that `UpdateBook()` returns in updateReturnParams.
 */
declare function PrintUpdateBookStatus(p: PropVals): void;

/** @todo UNDOCUMENTED */
declare function ProgressBarEx(): void;

/** @todo Move to ExtendScript globals. */
declare function prompt(): void;

/**
 * Displays a dialog box that prompts the user for a single integer value. It allows you to provide a default value, which appears in the entry field when the dialog box appears. The dialog box has OK and Cancel buttons.
 * 
 * `PromptInt()` does not assign a return value if the user clicks Cancel. If the user types alphabetic text after a number, the method ignores the text and just returns the value of the number.
 * 
 * @param message  The message that appears in the dialog box. It must be 255 characters or less.
 * @param stuffVal The default value that appears in the input field when the dialog box is first displayed.
 */
declare function PromptInt(message?: string, stuffVal?: string): number | null;

/**
 * Displays a dialog box that prompts the user for a single metric value. It allows you to provide a default value, which appears in the entry field when the dialog box appears. The dialog box has OK and Cancel buttons.
 * 
 * `PromptMetric()` does not assign a return value if the user clicks Cancel.
 * 
 * `PromptMetric()` dialog boxes behave like metric dialog boxes in the user interface. If the user types a number followed by a string that represents a unit (for example 10pts or 5"), the method converts the number into the equivalent number of metric units. If the user does not specify a unit, the method uses points (metric 65536).
 * 
 * @param message     The message that appears in the dialog box. It must be 255 characters or less.
 * @param stuffVal    The default value that appears in the input field when the dialog box is first displayed.
 * @param defaultunit The metric unit to use if the user does not specify one.
 */
declare function PromptMetric(message: string, stuffVal: string, defaultunit: number): number | null;

/**
 * Displays a dialog box that prompts the user for a single string value. It allows you to provide a default string, which appears in the entry field when the dialog box appears. The dialog box has OK and Cancel buttons.
 * 
 * __NOTE:__ Do not call PromptString() to prompt the user for a pathname. If the user enters a pathname as a string, the backslash character (\\) is interpreted as a special escape character. For example, the character `\s` represents a space. If the user enters the pathname `c:\sample`, this string is interpreted as `c: ample`. To prompt the user for a pathname, use `ChooseFile()` to display a file selection dialog box.
 * 
 * @param message  The message that appears in the dialog box. It must be 255 characters or less. Newline and linefeed characters are ignored.
 * @param stuffVal The default value that appears in the input field when the dialog box is first displayed.
 */
declare function PromptString(message: string, stuffVal: string): string | null;

/**
 * Pushes the current Clipboard contents onto the Clipboard stack.
 * 
 * The method is useful if you want to use Clipboard functions, such as `Copy()` or `Cut()`, without losing the Clipboard’s original contents.
 */
declare function PushClipboard(): void;

/**
 * Deletes the specified menu.
 * 
 * @param fromMenu The parent menu from which the menu is to be deleted.
 * @param label    The menu to delete.
 */
declare function RemoveMenu(fromMenu: string, label: string): Constants['FE_Success'] | void;

/** @todo UNDOCUMENTED */
declare function RenameComponentofProject(): void;

/**
 * Sets a return value for a client-defined callback. The method allows a client to provide status information to the FrameMaker product or client that called the callback. You can call this method in the following callbacks: `DialogEvent()`, `Notify()`.
 * 
 * `ReturnValue()` is useful for canceling FrameMaker product operations. When your client receives a `Constants.FA_PreNotificationPoint` notification for an operation, it can cancel the operation by calling `ReturnValue()` with retvalue set to `Constants.FR_CancelOperation` (-10001).
 * 
 * For example, if your client’s `Notify()` callback responds to all `Constants.FA_Note_PrePrint` (48) notifications by calling `ReturnValue()` with retvalue set to `Constants.FR_CancelOperation` (-10001), FrameMaker cancels all print operations.
 * 
 * Your client can also call `ReturnValue()` in a `DialogEvent()` callback to prevent FrameMaker from closing a modal dialog box. You can set retvalue to any integer.
 * 
 * Calling `ReturnValue()` for notifications other than those listed in the documentation, has no effect.
 * 
 * A client can also call `ReturnValue()` in a `DialogEvent()` callback that responds to actions in a client-defined modal dialog box.
 * 
 * Normally, when the user clicks a button in a client-defined modal dialog box, FrameMaker calls the client’s `DialogEvent()` callback and then closes the dialog box. However, if the client’s `DialogEvent()` callback calls `ReturnValue()` with retvalue set to `Constants.FR_DialogStayUp` (-10000), FrameMaker does not close the dialog box.
 * 
 * @param retvalue The value to return.
 * 
 * @returns On success, `ReturnValue()` returns the value of the retvalue parameter that was set, the previous time `ReturnValue()` was called in the current callback function.
 */
declare function ReturnValue(retvalue: number): number | void;

/** @todo UNDOCUMENTED */
declare function Run(): void;

/** @todo UNDOCUMENTED */
declare function SaveAs(): void;

/** @todo UNDOCUMENTED */
declare function SaveProject(): void;

/**
 * Displays an array of items and allows the user to choose one.
 * 
 * __NOTE:__ If you set `_default` to -1, always check to make sure the value returned in selected_item is 0 or greater before you use it as an array index. If you set default to -1 and the user clicks OK without choosing an item, the value returned in selected_item will be -1.
 * 
 * @param title       The title that appears on the dialog box.
 * @param stringslist The list of items to appear in the scroll list.
 * @param _default    The index of the item that is selected when the dialog box first appears. For no default, specify -1.
 * 
 * @returns 0 if the user clicked OK, or a nonzero value if the user clicked Cancel or an error occurred.
 */
declare function ScrollBox(title: string, stringslist: Strings | string[], _default: number): number;

/**
 * Services calls from FrameMaker to the ESTK API.
 * 
 * `Service()` waits for and dispatches a single Windows message. If your application contains its own message processing loop you need not call this routine.
 * 
 * It is not feasible for console applications to receive ESTK notifications since there is no way for them to both wait for user input and call `Service()`. Consequently, console applications should not register for notifications.
 * 
 * @returns The number of bits the call to `select()` selected, if any.
 */
declare function Service(): number;

/** @todo UNDOCUMENTED */
declare function Session(): void;

/**
 * Sets the current workspace to the specified string.
 * 
 * @param str The name of the workspace to set.
 */
declare function SetCurrentWorkspace(str: string): null;

/** @todo UNDOCUMENTED */
declare function SetDdeInstance(): void;

/**
 * Indicates whether a specified command exists.
 * 
 * @param shortcut The command to be checked for existence.
 */
declare function ShortcutExists(shortcut: string): 0 | 1;

/** Closes an ESTK client’s connection. */
declare function ShutDown(): void;

/** @todo UNDOCUMENTED */
declare function SilentNewBook(): void;

/**
 * Creates a new document from a specified template.
 * 
 * __NOTE:__ If you call `SimpleNewDoc()` with interactive set to true and the user clicks etiher Portrait, Custom, or Landscape in the New dialog box, `SimpleNewDoc()` does not create a document. Intead, it returns 0 and sets `FA_errno` to either `Constants.FE_WantsPortrait` (-48), `Constants.FE_WantsCustom` (-46), or `Constants.FE_WantsLandscape` (-47), respectively. It is up to your client to create a portrait, custom, or landscape document.
 * 
 * @param templateName The absolute pathname of the template to use.
 * @param interactive  Specifies whether FrameMaker displays messages and warnings to the user.
 */
// @ts-expect-error
declare function SimpleNewDoc(templateName: string, interactive: boolean): Doc;

/**
 * Opens a document or book.
 * 
 * If you call `SimpleOpen()` with interactive set to true, FrameMaker displays the Open dialog box. It uses the path specified by the session property, OpenDir, as the default path.
 * 
 * If a warning or error condition arises, FrameMaker notifies the user. For example, if a document uses fonts that are not available, FrameMaker displays a dialog box that allows the user to cancel the operation or to continue and remap the fonts. If you set interactive to false, FrameMaker does not display the Open dialog box or other messages and warnings. If it is necessary to modify a file to continue opening it, `SimpleOpen()` aborts the operation without notifying the user, and returns 0.
 * 
 * __NOTE:__ You cannot use `SimpleOpen()` to open filterable files. To open filterable files, use Open.
 * 
 * @param fileName    The absolute pathname of the file to open.
 * @param interactive Specifies whether the FrameMaker product displays messages and warnings to the user. true instructs the FrameMaker product to display messages and warnings.
 */
// @ts-expect-error
declare function SimpleOpen(fileName: string, interactive: boolean): Book | Doc | 0;

/** @todo UNDOCUMENTED */
declare function Sleep(): void;

/** @todo UNDOCUMENTED */
declare var sMsg: string;

/** @todo UNDOCUMENTED */
declare function StringLen(): void;

/** @todo UNDOCUMENTED */
declare function TableObj(): void;

/** @todo UNDOCUMENTED */
declare function TextObj(): void;

/** @todo UNDOCUMENTED */
declare function updateMathml(): void;

/**
 * Updates the top order menu set.
 * 
 * For example, when a new menu file is read, or when a view only, book menu, quick menu or similar is loaded, this updates the newly read menus (in case of menu file) or different top menu bar (in case of view only, book and quick menus).
 */
declare function UpdateMenus(): void;

/**
 * Determines whether the user has chosen the Cancel command (ESC) since the current callback function was called.
 * 
 * `UserCancel()` is useful for clients that conduct extensive processing that the user may want to cancel. For example, if your client processes all the documents in a book, it can call `UserCancel()` after it processes each document.
 * 
 * If `UserCancel()` returns true, your client can abort the processing.
 * 
 * @returns `true` if the user has executed the Cancel gesture, or `false` if the user has not executed the Cancel gesture.
 */
declare function UserCancel(): boolean;

/** @todo UNDOCUMENTED */
declare function USleep(): void;

/** @todo UNDOCUMENTED */
declare function WinInstallDefaultMessageFilter(): void;

/**
 * Can be one of:
 * * Constants.FF_ALERT_OK_DEFAULT (0)
 * * Constants.FF_ALERT_CANCEL_DEFAULT (1)
 * * Constants.FF_ALERT_CONTINUE_NOTE (2)
 * * Constants.FF_ALERT_CONTINUE_WARN (3)
 * * Constants.FF_ALERT_YES_DEFAULT (4)
 * * Constants.FF_ALERT_NO_DEFAULT (5)
 * * Constants.FF_ALERT_YES_NO_CANCEL (6)
 * * Constants.FF_ALERT_DNS_OK (7)
 */
type AlertType =
	Constants['FF_ALERT_OK_DEFAULT'] |
	Constants['FF_ALERT_CANCEL_DEFAULT'] |
	Constants['FF_ALERT_CONTINUE_NOTE'] |
	Constants['FF_ALERT_CONTINUE_WARN'] |
	Constants['FF_ALERT_YES_DEFAULT'] |
	Constants['FF_ALERT_NO_DEFAULT'] |
	Constants['FF_ALERT_YES_NO_CANCEL'] |
	Constants['FF_ALERT_DNS_OK'];

/**
 * Can be one of:
 * * Constants.FV_ChooseSelect (0)
 * * Constants.FV_ChooseOpen (1)
 * * Constants.FV_ChooseSave (2)
 * * Constants.FV_ChooseOpenDir (4)
 * * Constants.FV_ChooseMultiSelect (8)
 * * Constants.FV_ChooseMultiOpen (16)
 */
type ChooseFileMode =
	Constants['FV_ChooseSelect'] |
	Constants['FV_ChooseOpen'] |
	Constants['FV_ChooseSave'] |
	Constants['FV_ChooseOpenDir'] |
	Constants['FV_ChooseMultiSelect'] |
	Constants['FV_ChooseMultiOpen'];

/**
 * Can be one of:
 * * Constants.FF_Custom_SingleSided (0)
 * * Constants.FF_Custom_FirstPageRight (1)
 * * Constants.FF_Custom_FirstPageLeft (2)
 */
type CustomDocSidedness =
	Constants['FF_Custom_SingleSided'] |
	Constants['FF_Custom_FirstPageRight'] |
	Constants['FF_Custom_FirstPageLeft'];

/**
 * Can be one of:
 * * Constants.FA_Note_PreOpenDoc (1)
 * * Constants.FA_Note_PostOpenDoc (2)
 * * Constants.FA_Note_PreOpenMIF (3)
 * * Constants.FA_Note_PostOpenMIF (4)
 * * Constants.FA_Note_PreSaveDoc (5)
 * * Constants.FA_Note_PostSaveDoc (6)
 * * Constants.FA_Note_PreSaveMIF (7)
 * * Constants.FA_Note_PostSaveMIF (8)
 * * Constants.FA_Note_PreFileType (9)
 * * Constants.FA_Note_PostFileType (10)
 * * Constants.FA_Note_PreQuitDoc (11)
 * * Constants.FA_Note_DirtyDoc (12)
 * * Constants.FA_Note_ClientCall (13)
 * * Constants.FA_Note_FilterIn (14)
 * * Constants.FA_Note_FilterOut (15)
 * * Constants.FA_Note_PreOpenBook (16)
 * * Constants.FA_Note_PostOpenBook (17)
 * * Constants.FA_Note_PreOpenBookMIF (18)
 * * Constants.FA_Note_PostOpenBookMIF (19)
 * * Constants.FA_Note_PreSaveBook (20)
 * * Constants.FA_Note_PostSaveBook (21)
 * * Constants.FA_Note_PreSaveBookMIF (22)
 * * Constants.FA_Note_PostSaveBookMIF (23)
 * * Constants.FA_Note_PreQuitBook (24)
 * * Constants.FA_Note_DirtyBook (25)
 * * Constants.FA_Note_PreQuitSession (26)
 * * Constants.FA_Note_PostQuitSession (27)
 * * Constants.FA_Note_PreRevertDoc (28)
 * * Constants.FA_Note_PostRevertDoc (29)
 * * Constants.FA_Note_PreRevertBook (30)
 * * Constants.FA_Note_PostRevertBook (31)
 * * Constants.FA_Note_PreAutoSaveDoc (32)
 * * Constants.FA_Note_PostAutoSaveDoc (33)
 * * Constants.FA_Note_BackToUser (34)
 * * Constants.FA_Note_DisplayClientTiDialog (35)
 * * Constants.FA_Note_UpdateAllClientTi (36)
 * * Constants.FA_Note_UpdateClientTi (37)
 * * Constants.FA_Note_PreImport (38)
 * * Constants.FA_Note_PostImport (39)
 * * Constants.FA_Note_PostQuitDoc (40)
 * * Constants.FA_Note_PostQuitBook (41)
 * * Constants.FA_Note_PreFunction (42)
 * * Constants.FA_Note_PostFunction (43)
 * * Constants.FA_Note_PreMouseCommand (44)
 * * Constants.FA_Note_PostMouseCommand (45)
 * * Constants.FA_Note_PreHypertext (46)
 * * Constants.FA_Note_PostHypertext (47)
 * * Constants.FA_Note_PrePrint (48)
 * * Constants.FA_Note_PostPrint (49)
 * * Constants.FA_Note_BodyPageAdded (50)
 * * Constants.FA_Note_BodyPageDeleted (51)
 * * Constants.FA_Note_PreInsertElement (52)
 * * Constants.FA_Note_PostInsertElement (53)
 * * Constants.FA_Note_PreChangeElement (54)
 * * Constants.FA_Note_PostChangeElement (55)
 * * Constants.FA_Note_PreWrapElement (56)
 * * Constants.FA_Note_PostWrapElement (57)
 * * Constants.FA_Note_PreDragElement (58)
 * * Constants.FA_Note_PostDragElement (59)
 * * Constants.FA_Note_PreCopyElement (60)
 * * Constants.FA_Note_PostCopyElement (61)
 * * Constants.FA_Note_PreSetAttrValue (62)
 * * Constants.FA_Note_PostSetAttrValue (63)
 * * Constants.FA_Note_PreImportElemDefs (64)
 * * Constants.FA_Note_PostImportElemDefs (65)
 * * Constants.FA_Note_ECMInternal (66)
 * * Constants.FA_Note_PreExport (67)
 * * Constants.FA_Note_PostExport (68)
 * * Constants.FA_Note_PreInlineTypeIn (69)
 * * Constants.FA_Note_PostInlineTypeIn (70)
 * * Constants.FA_Note_PreSaveAsPDFDialog (71)
 * * Constants.FA_Note_PostSaveAsPDFDialog (72)
 * * Constants.FA_Note_PreDistill (73)
 * * Constants.FA_Note_PostDistill (74)
 * * Constants.FA_Note_FilterFileToFile (75)
 * * Constants.FA_Note_PreBookComponentOpen (76)
 * * Constants.FA_Note_PostBookComponentOpen (77)
 * * Constants.FA_Note_PreGenerate (78)
 * * Constants.FA_Note_PostGenerate (79)
 * * Constants.FA_Note_PreGoToXrefSrc (80)
 * * Constants.FA_Note_PostGoToXrefSrc (81)
 * * Constants.FA_Note_PreOpenSGML (82)
 * * Constants.FA_Note_PostOpenSGML (83)
 * * Constants.FA_Note_Dialog (84)
 * * Constants.FA_Note_Alert (85)
 * * Constants.FA_Note_Palette (86)
 * * Constants.FA_Note_ToolBar (87)
 * * Constants.FA_Note_ConsoleMessage (88)
 * * Constants.FA_Note_Help (89)
 * * Constants.FA_Note_URL (90)
 * * Constants.FA_Note_CursorChange (91)
 * * Constants.FA_Note_FontSubstitution (92)
 * * Constants.FA_Note_UndoCheckpoint (93)
 * * Constants.FA_Note_FileOpen (94)
 * * Constants.FA_Note_PreOpenXML (95)
 * * Constants.FA_Note_PostOpenXML (96)
 * * Constants.FA_Note_PreSaveXML (97)
 * * Constants.FA_Note_PostSaveXML (98)
 * * Constants.FA_Note_PreSaveSGML (99)
 * * Constants.FA_Note_PostSaveSGML (100)
 * * Constants.FA_Note_U3DCommand (101)
 * * Constants.FA_Note_Not_U3DCommand (102)
 * * Constants.FA_Note_Not_RSC_Supported_File (103)
 * * Constants.FA_Note_RSC_Supported_File (104)
 * * Constants.FA_Note_PostActiveDocChange (105)
 * * Constants.FA_Note_PreUpdateXRefs (106)
 * * Constants.FA_Note_PostUpdateXRefs (107)
 * * Constants.FA_Note_DisplayClientXRefDialog (108)
 * * Constants.FA_Note_QuitModelessDialog (109)
 * * Constants.FA_Note_InsertTopicRef (110)
 * * Constants.FA_Note_InsertConRef (111)
 * * Constants.FA_Note_GenerateFM (112)
 * * Constants.FA_Note_OpenAllTopicrefs (113)
 * * Constants.FA_Note_UpdateRefs (114)
 * * Constants.FA_Note_AssignId (115)
 * * Constants.FA_Note_DITAOptions (116)
 * * Constants.FA_Note_NewDitamapFile (117)
 * * Constants.FA_Note_NewBookmapFile (118)
 * * Constants.FA_Note_NewTopicFile (119)
 * * Constants.FA_Note_NewTaskFile (120)
 * * Constants.FA_Note_NewConceptFile (121)
 * * Constants.FA_Note_NewReferenceFile (122)
 * * Constants.FA_Note_NewGlossEntryFile (123)
 * * Constants.FA_Note_SWF_File (124)
 * * Constants.FA_Note_Not_SWF_File (125)
 * * Constants.FA_Note_Enable_Disable_DITA_Menu_Commands (126)
 * * Constants.FA_Note_Dialog_Create (127)
 * * Constants.FA_Note_SetAttrValue (128)
 * * Constants.FA_Note_UpdateRefs_On_Save (129)
 * * Constants.FA_Note_Read_Struct_App (130)
 * * Constants.FA_Note_Struct_Wizard (131)
 * * Constants.FA_Note_Open_Dtd (132)
 * * Constants.FA_Note_Open_Schema (133)
 * * Constants.FA_Note_Open_EDD_For_App (134)
 * * Constants.FA_Note_PostSetPropertyValue (135)
 * * Constants.FA_Note_Not_AI_Supported_File (136)
 * * Constants.FA_Note_AI_Supported_File (137)
 * * Constants.FA_Note_Poster_Applied (138)
 * * Constants.FA_Note_PrePublishDitamap (139)
 * * Constants.FA_Note_PostPublishDitamap (140)
 * * Constants.FA_Note_UpdateDITAReference (141)
 * * Constants.FA_Note_UpdateDITAReferences (142)
 * * Constants.FA_Note_LoadKeyCatalog (143)
 * * Constants.FA_Note_ReLoadKeyCatalog (144)
 * * Constants.FA_Note_EnumeratedComponent (145)
 * * Constants.FA_Note_PreSwitchView (146)
 * * Constants.FA_Note_PostSwitchView (147)
 * * Constants.FA_Note_IsCommandEnabled (148)
 * * Constants.FA_Note_MATHML_Selected (149)
 * * Constants.FA_Note_MATHML_Deselected (150)
 * * Constants.FA_Note_MATHML_DblClicked (151)
 * * Constants.FA_Note_MATHML_GenerateImage (152)
 * * Constants.FA_Note_MATHML_PopulateObj (153)
 * * Constants.FA_Note_PreCreateMML (154)
 * * Constants.FA_Note_PostCreateMML (155)
 * * Constants.FA_Note_MATHML_CHANGE_NSPREFIX (156)
 * * Constants.FA_Note_SetUniqueAttr (157)
 * * Constants.FA_Note_PreSetPropertyValue (158)
 * * Constants.FA_Note_GraphicPropChanged (159)
 * * Constants.FA_Note_In_App_Message (160)
 * * Constants.FA_Note_Reset_Client_State (161)
 * * Constants.FA_Note_Frame_Idle_State (162)
 * * Constants.FA_Note_CMS_PreCheckOutItem (163)
 * * Constants.FA_Note_CMS_PostCheckOutItem (164)
 * * Constants.FA_Note_CMS_PreOpenItem (165)
 * * Constants.FA_Note_CMS_PostOpenItem (166)
 * * Constants.FA_Note_RTL_NumberUtility (167)
 * * Constants.FA_Note_MATHML_CHANGE_XML_PROPERTY (168)
 * * Constants.FA_Note_WelcomeScreen_Command (169)
 * * Constants.FA_Note_HtmlNotify (170)
 * * Constants.FA_Note_Num (171)
 */
type NotificationType =
	Constants['FA_Note_PreOpenDoc'] |
	Constants['FA_Note_PostOpenDoc'] |
	Constants['FA_Note_PreOpenMIF'] |
	Constants['FA_Note_PostOpenMIF'] |
	Constants['FA_Note_PreSaveDoc'] |
	Constants['FA_Note_PostSaveDoc'] |
	Constants['FA_Note_PreSaveMIF'] |
	Constants['FA_Note_PostSaveMIF'] |
	Constants['FA_Note_PreFileType'] |
	Constants['FA_Note_PostFileType'] |
	Constants['FA_Note_PreQuitDoc'] |
	Constants['FA_Note_DirtyDoc'] |
	Constants['FA_Note_ClientCall'] |
	Constants['FA_Note_FilterIn'] |
	Constants['FA_Note_FilterOut'] |
	Constants['FA_Note_PreOpenBook'] |
	Constants['FA_Note_PostOpenBook'] |
	Constants['FA_Note_PreOpenBookMIF'] |
	Constants['FA_Note_PostOpenBookMIF'] |
	Constants['FA_Note_PreSaveBook'] |
	Constants['FA_Note_PostSaveBook'] |
	Constants['FA_Note_PreSaveBookMIF'] |
	Constants['FA_Note_PostSaveBookMIF'] |
	Constants['FA_Note_PreQuitBook'] |
	Constants['FA_Note_DirtyBook'] |
	Constants['FA_Note_PreQuitSession'] |
	Constants['FA_Note_PostQuitSession'] |
	Constants['FA_Note_PreRevertDoc'] |
	Constants['FA_Note_PostRevertDoc'] |
	Constants['FA_Note_PreRevertBook'] |
	Constants['FA_Note_PostRevertBook'] |
	Constants['FA_Note_PreAutoSaveDoc'] |
	Constants['FA_Note_PostAutoSaveDoc'] |
	Constants['FA_Note_BackToUser'] |
	Constants['FA_Note_DisplayClientTiDialog'] |
	Constants['FA_Note_UpdateAllClientTi'] |
	Constants['FA_Note_UpdateClientTi'] |
	Constants['FA_Note_PreImport'] |
	Constants['FA_Note_PostImport'] |
	Constants['FA_Note_PostQuitDoc'] |
	Constants['FA_Note_PostQuitBook'] |
	Constants['FA_Note_PreFunction'] |
	Constants['FA_Note_PostFunction'] |
	Constants['FA_Note_PreMouseCommand'] |
	Constants['FA_Note_PostMouseCommand'] |
	Constants['FA_Note_PreHypertext'] |
	Constants['FA_Note_PostHypertext'] |
	Constants['FA_Note_PrePrint'] |
	Constants['FA_Note_PostPrint'] |
	Constants['FA_Note_BodyPageAdded'] |
	Constants['FA_Note_BodyPageDeleted'] |
	Constants['FA_Note_PreInsertElement'] |
	Constants['FA_Note_PostInsertElement'] |
	Constants['FA_Note_PreChangeElement'] |
	Constants['FA_Note_PostChangeElement'] |
	Constants['FA_Note_PreWrapElement'] |
	Constants['FA_Note_PostWrapElement'] |
	Constants['FA_Note_PreDragElement'] |
	Constants['FA_Note_PostDragElement'] |
	Constants['FA_Note_PreCopyElement'] |
	Constants['FA_Note_PostCopyElement'] |
	Constants['FA_Note_PreSetAttrValue'] |
	Constants['FA_Note_PostSetAttrValue'] |
	Constants['FA_Note_PreImportElemDefs'] |
	Constants['FA_Note_PostImportElemDefs'] |
	Constants['FA_Note_ECMInternal'] |
	Constants['FA_Note_PreExport'] |
	Constants['FA_Note_PostExport'] |
	Constants['FA_Note_PreInlineTypeIn'] |
	Constants['FA_Note_PostInlineTypeIn'] |
	Constants['FA_Note_PreSaveAsPDFDialog'] |
	Constants['FA_Note_PostSaveAsPDFDialog'] |
	Constants['FA_Note_PreDistill'] |
	Constants['FA_Note_PostDistill'] |
	Constants['FA_Note_FilterFileToFile'] |
	Constants['FA_Note_PreBookComponentOpen'] |
	Constants['FA_Note_PostBookComponentOpen'] |
	Constants['FA_Note_PreGenerate'] |
	Constants['FA_Note_PostGenerate'] |
	Constants['FA_Note_PreGoToXrefSrc'] |
	Constants['FA_Note_PostGoToXrefSrc'] |
	Constants['FA_Note_PreOpenSGML'] |
	Constants['FA_Note_PostOpenSGML'] |
	Constants['FA_Note_Dialog'] |
	Constants['FA_Note_Alert'] |
	Constants['FA_Note_Palette'] |
	Constants['FA_Note_ToolBar'] |
	Constants['FA_Note_ConsoleMessage'] |
	Constants['FA_Note_Help'] |
	Constants['FA_Note_URL'] |
	Constants['FA_Note_CursorChange'] |
	Constants['FA_Note_FontSubstitution'] |
	Constants['FA_Note_UndoCheckpoint'] |
	Constants['FA_Note_FileOpen'] |
	Constants['FA_Note_PreOpenXML'] |
	Constants['FA_Note_PostOpenXML'] |
	Constants['FA_Note_PreSaveXML'] |
	Constants['FA_Note_PostSaveXML'] |
	Constants['FA_Note_PreSaveSGML'] |
	Constants['FA_Note_PostSaveSGML'] |
	Constants['FA_Note_U3DCommand'] |
	Constants['FA_Note_Not_U3DCommand'] |
	Constants['FA_Note_Not_RSC_Supported_File'] |
	Constants['FA_Note_RSC_Supported_File'] |
	Constants['FA_Note_PostActiveDocChange'] |
	Constants['FA_Note_PreUpdateXRefs'] |
	Constants['FA_Note_PostUpdateXRefs'] |
	Constants['FA_Note_DisplayClientXRefDialog'] |
	Constants['FA_Note_QuitModelessDialog'] |
	Constants['FA_Note_InsertTopicRef'] |
	Constants['FA_Note_InsertConRef'] |
	Constants['FA_Note_GenerateFM'] |
	Constants['FA_Note_OpenAllTopicrefs'] |
	Constants['FA_Note_UpdateRefs'] |
	Constants['FA_Note_AssignId'] |
	Constants['FA_Note_DITAOptions'] |
	Constants['FA_Note_NewDitamapFile'] |
	Constants['FA_Note_NewBookmapFile'] |
	Constants['FA_Note_NewTopicFile'] |
	Constants['FA_Note_NewTaskFile'] |
	Constants['FA_Note_NewConceptFile'] |
	Constants['FA_Note_NewReferenceFile'] |
	Constants['FA_Note_NewGlossEntryFile'] |
	Constants['FA_Note_SWF_File'] |
	Constants['FA_Note_Not_SWF_File'] |
	Constants['FA_Note_Enable_Disable_DITA_Menu_Commands'] |
	Constants['FA_Note_Dialog_Create'] |
	Constants['FA_Note_SetAttrValue'] |
	Constants['FA_Note_UpdateRefs_On_Save'] |
	Constants['FA_Note_Read_Struct_App'] |
	Constants['FA_Note_Struct_Wizard'] |
	Constants['FA_Note_Open_Dtd'] |
	Constants['FA_Note_Open_Schema'] |
	Constants['FA_Note_Open_EDD_For_App'] |
	Constants['FA_Note_PostSetPropertyValue'] |
	Constants['FA_Note_Not_AI_Supported_File'] |
	Constants['FA_Note_AI_Supported_File'] |
	Constants['FA_Note_Poster_Applied'] |
	Constants['FA_Note_PrePublishDitamap'] |
	Constants['FA_Note_PostPublishDitamap'] |
	Constants['FA_Note_UpdateDITAReference'] |
	Constants['FA_Note_UpdateDITAReferences'] |
	Constants['FA_Note_LoadKeyCatalog'] |
	Constants['FA_Note_ReLoadKeyCatalog'] |
	Constants['FA_Note_EnumeratedComponent'] |
	Constants['FA_Note_PreSwitchView'] |
	Constants['FA_Note_PostSwitchView'] |
	Constants['FA_Note_IsCommandEnabled'] |
	Constants['FA_Note_MATHML_Selected'] |
	Constants['FA_Note_MATHML_Deselected'] |
	Constants['FA_Note_MATHML_DblClicked'] |
	Constants['FA_Note_MATHML_GenerateImage'] |
	Constants['FA_Note_MATHML_PopulateObj'] |
	Constants['FA_Note_PreCreateMML'] |
	Constants['FA_Note_PostCreateMML'] |
	Constants['FA_Note_MATHML_CHANGE_NSPREFIX'] |
	Constants['FA_Note_SetUniqueAttr'] |
	Constants['FA_Note_PreSetPropertyValue'] |
	Constants['FA_Note_GraphicPropChanged'] |
	Constants['FA_Note_In_App_Message'] |
	Constants['FA_Note_Reset_Client_State'] |
	Constants['FA_Note_Frame_Idle_State'] |
	Constants['FA_Note_CMS_PreCheckOutItem'] |
	Constants['FA_Note_CMS_PostCheckOutItem'] |
	Constants['FA_Note_CMS_PreOpenItem'] |
	Constants['FA_Note_CMS_PostOpenItem'] |
	Constants['FA_Note_RTL_NumberUtility'] |
	Constants['FA_Note_MATHML_CHANGE_XML_PROPERTY'] |
	Constants['FA_Note_WelcomeScreen_Command'] |
	Constants['FA_Note_HtmlNotify'] |
	Constants['FA_Note_Num'];