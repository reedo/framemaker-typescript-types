// Type definitions for FrameMaker Constants object
// Definitions by: Dan Reed <https://danreed.dev>

/**
 * Types of constants.
 */
declare type FDK_LIBRARY_VERSION = number;
declare type FMV_CMDSUPPORTED = -1;
declare type oldFT_ElementFmts = 11;

declare type EXCLUDE_CONREF_DEPENDENCIES = 0x20;
declare type EXCLUDE_GRAPHICS_DEPENDENCIES = 0x01;
declare type EXCLUDE_NONE = 0x10;
declare type EXCLUDE_OLE_DEPENDENCIES = 0x04;
declare type EXCLUDE_TEXT_INSET_DEPENDENCIES = 0x02;
declare type EXCLUDE_XREF_DEPENDENCIES = 0x08;

declare type EXCLUDE =
	| EXCLUDE_CONREF_DEPENDENCIES
	| EXCLUDE_GRAPHICS_DEPENDENCIES
	| EXCLUDE_NONE
	| EXCLUDE_OLE_DEPENDENCIES
	| EXCLUDE_TEXT_INSET_DEPENDENCIES
	| EXCLUDE_XREF_DEPENDENCIES;

// --------------------------------------------------
// Frame API codes
// --------------------------------------------------
declare type FA_CMSAdvancedSearch = 0;
declare type FA_CMSBuildContextMenu = 1;
declare type FA_CMSCloseConnection = 2;
declare type FA_CMSCommandMax = 3;
declare type FA_CMSCommandMin = 4;
declare type FA_CMSCreateConnMgrUI = 5;
declare type FA_CMSCreateConnection = 6;
declare type FA_CMSGetCommandMaxOpCode = 7;
declare type FA_CMSGetItemFromPath = 8;
declare type FA_CMSGetItems = 9;
declare type FA_CMSGetPropertyMaxOpCode = 10;
declare type FA_CMSIsValidCommand = 11;
declare type FA_CMSObjectCancelCheckout = 12;
declare type FA_CMSObjectCheckin = 13;
declare type FA_CMSObjectCheckout = 14;
declare type FA_CMSObjectDelete = 15;
declare type FA_CMSObjectDownload = 16;
declare type FA_CMSObjectDownloadForOpen = 17;
declare type FA_CMSObjectDownloadItem = 18;
declare type FA_CMSObjectEdit = 19;
declare type FA_CMSObjectGetChildren = 20;
declare type FA_CMSObjectIsSame = 21;
declare type FA_CMSObjectOpenReadOnly = 22;
declare type FA_CMSObjectRefresh = 23;
declare type FA_CMSObjectShowCheckOutFiles = 24;
declare type FA_CMSObjectShowDependents = 25;
declare type FA_CMSObjectShowProperties = 26;
declare type FA_CMSObjectShowVersion = 27;
declare type FA_CMSObjectUploadFile = 28;
declare type FA_CMSObjectUploadFolder = 29;
declare type FA_CMSReview = 30;
declare type FA_CMSSetRootObject = 31;
declare type FA_CMSSimpleSearch = 32;

declare type FA_COMPONENT_DEMOTE = 4;
declare type FA_COMPONENT_MOVEDOWN = 2;
declare type FA_COMPONENT_MOVEUP = 1;
declare type FA_COMPONENT_PROMOTE = 3;

declare type FA_COMPONENT_MOVE_ACTION =
	| FA_COMPONENT_DEMOTE
	| FA_COMPONENT_MOVEDOWN
	| FA_COMPONENT_MOVEUP
	| FA_COMPONENT_PROMOTE;

declare type FA_Init_DocReport = 4;
declare type FA_Init_First = 1;
declare type FA_Init_Subsequent = 2;
declare type FA_Init_TakeControl = 3;

declare type FA_Init =
	| FA_Init_DocReport
	| FA_Init_First
	| FA_Init_Subsequent
	| FA_Init_TakeControl;

declare type FA_Note_AI_Supported_File = 137;
declare type FA_Note_Alert = 85;
declare type FA_Note_AssignId = 115;
declare type FA_Note_BackToUser = 34;
declare type FA_Note_BodyPageAdded = 50;
declare type FA_Note_BodyPageDeleted = 51;
declare type FA_Note_CMS_PostCheckOutItem = 164;
declare type FA_Note_CMS_PostOpenItem = 166;
declare type FA_Note_CMS_PreCheckOutItem = 163;
declare type FA_Note_CMS_PreOpenItem = 165;
declare type FA_Note_ClientCall = 13;
declare type FA_Note_ConsoleMessage = 88;
declare type FA_Note_CursorChange = 91;
declare type FA_Note_DITAOptions = 116;
declare type FA_Note_Dialog = 84;
declare type FA_Note_Dialog_Create = 127;
declare type FA_Note_DirtyBook = 25;
declare type FA_Note_DirtyDoc = 12;
declare type FA_Note_DisplayClientTiDialog = 35;
declare type FA_Note_DisplayClientXRefDialog = 108;
declare type FA_Note_ECMInternal = 66;
declare type FA_Note_Enable_Disable_DITA_Menu_Commands = 126;
declare type FA_Note_EnumeratedComponent = 145;
declare type FA_Note_FileOpen = 94;
declare type FA_Note_FilterFileToFile = 75;
declare type FA_Note_FilterIn = 14;
declare type FA_Note_FilterOut = 15;
declare type FA_Note_FontSubstitution = 92;
declare type FA_Note_Frame_Idle_State = 162;
declare type FA_Note_GenerateFM = 112;
declare type FA_Note_GraphicPropChanged = 159;
declare type FA_Note_Help = 89;
declare type FA_Note_HtmlNotify = 170;
declare type FA_Note_In_App_Message = 160;
declare type FA_Note_InsertConRef = 111;
declare type FA_Note_InsertTopicRef = 110;
declare type FA_Note_IsCommandEnabled = 148;
declare type FA_Note_LoadKeyCatalog = 143;
declare type FA_Note_MATHML_CHANGE_NSPREFIX = 156;
declare type FA_Note_MATHML_CHANGE_XML_PROPERTY = 168;
declare type FA_Note_MATHML_DblClicked = 151;
declare type FA_Note_MATHML_Deselected = 150;
declare type FA_Note_MATHML_GenerateImage = 152;
declare type FA_Note_MATHML_PopulateObj = 153;
declare type FA_Note_MATHML_Selected = 149;
declare type FA_Note_NewBookmapFile = 118;
declare type FA_Note_NewConceptFile = 121;
declare type FA_Note_NewDitamapFile = 117;
declare type FA_Note_NewGlossEntryFile = 123;
declare type FA_Note_NewReferenceFile = 122;
declare type FA_Note_NewTaskFile = 120;
declare type FA_Note_NewTopicFile = 119;
declare type FA_Note_Not_AI_Supported_File = 136;
declare type FA_Note_Not_RSC_Supported_File = 103;
declare type FA_Note_Not_SWF_File = 125;
declare type FA_Note_Not_U3DCommand = 102;
declare type FA_Note_Num = 171;
declare type FA_Note_OpenAllTopicrefs = 113;
declare type FA_Note_Open_Dtd = 132;
declare type FA_Note_Open_EDD_For_App = 134;
declare type FA_Note_Open_Schema = 133;
declare type FA_Note_Palette = 86;
declare type FA_Note_PostActiveDocChange = 105;
declare type FA_Note_PostAutoSaveDoc = 33;
declare type FA_Note_PostBookComponentOpen = 77;
declare type FA_Note_PostChangeElement = 55;
declare type FA_Note_PostCopyElement = 61;
declare type FA_Note_PostCreateMML = 155;
declare type FA_Note_PostDistill = 74;
declare type FA_Note_PostDragElement = 59;
declare type FA_Note_PostExport = 68;
declare type FA_Note_PostFileType = 10;
declare type FA_Note_PostFunction = 43;
declare type FA_Note_PostGenerate = 79;
declare type FA_Note_PostGoToXrefSrc = 81;
declare type FA_Note_PostHypertext = 47;
declare type FA_Note_PostImport = 39;
declare type FA_Note_PostImportElemDefs = 65;
declare type FA_Note_PostInlineTypeIn = 70;
declare type FA_Note_PostInsertElement = 53;
declare type FA_Note_PostMouseCommand = 45;
declare type FA_Note_PostOpenBook = 17;
declare type FA_Note_PostOpenBookMIF = 19;
declare type FA_Note_PostOpenDoc = 2;
declare type FA_Note_PostOpenMIF = 4;
declare type FA_Note_PostOpenSGML = 83;
declare type FA_Note_PostOpenXML = 96;
declare type FA_Note_PostPrint = 49;
declare type FA_Note_PostPublishDitamap = 140;
declare type FA_Note_PostQuitBook = 41;
declare type FA_Note_PostQuitDoc = 40;
declare type FA_Note_PostQuitSession = 27;
declare type FA_Note_PostRevertBook = 31;
declare type FA_Note_PostRevertDoc = 29;
declare type FA_Note_PostSaveAsPDFDialog = 72;
declare type FA_Note_PostSaveBook = 21;
declare type FA_Note_PostSaveBookMIF = 23;
declare type FA_Note_PostSaveDoc = 6;
declare type FA_Note_PostSaveMIF = 8;
declare type FA_Note_PostSaveSGML = 100;
declare type FA_Note_PostSaveXML = 98;
declare type FA_Note_PostSetAttrValue = 63;
declare type FA_Note_PostSetPropertyValue = 135;
declare type FA_Note_PostSwitchView = 147;
declare type FA_Note_PostUpdateXRefs = 107;
declare type FA_Note_PostWrapElement = 57;
declare type FA_Note_Poster_Applied = 138;
declare type FA_Note_PreAutoSaveDoc = 32;
declare type FA_Note_PreBookComponentOpen = 76;
declare type FA_Note_PreChangeElement = 54;
declare type FA_Note_PreCopyElement = 60;
declare type FA_Note_PreCreateMML = 154;
declare type FA_Note_PreDistill = 73;
declare type FA_Note_PreDragElement = 58;
declare type FA_Note_PreExport = 67;
declare type FA_Note_PreFileType = 9;
declare type FA_Note_PreFunction = 42;
declare type FA_Note_PreGenerate = 78;
declare type FA_Note_PreGoToXrefSrc = 80;
declare type FA_Note_PreHypertext = 46;
declare type FA_Note_PreImport = 38;
declare type FA_Note_PreImportElemDefs = 64;
declare type FA_Note_PreInlineTypeIn = 69;
declare type FA_Note_PreInsertElement = 52;
declare type FA_Note_PreMouseCommand = 44;
declare type FA_Note_PreOpenBook = 16;
declare type FA_Note_PreOpenBookMIF = 18;
declare type FA_Note_PreOpenDoc = 1;
declare type FA_Note_PreOpenMIF = 3;
declare type FA_Note_PreOpenSGML = 82;
declare type FA_Note_PreOpenXML = 95;
declare type FA_Note_PrePrint = 48;
declare type FA_Note_PrePublishDitamap = 139;
declare type FA_Note_PreQuitBook = 24;
declare type FA_Note_PreQuitDoc = 11;
declare type FA_Note_PreQuitSession = 26;
declare type FA_Note_PreRevertBook = 30;
declare type FA_Note_PreRevertDoc = 28;
declare type FA_Note_PreSaveAsPDFDialog = 71;
declare type FA_Note_PreSaveBook = 20;
declare type FA_Note_PreSaveBookMIF = 22;
declare type FA_Note_PreSaveDoc = 5;
declare type FA_Note_PreSaveMIF = 7;
declare type FA_Note_PreSaveSGML = 99;
declare type FA_Note_PreSaveXML = 97;
declare type FA_Note_PreSetAttrValue = 62;
declare type FA_Note_PreSetPropertyValue = 158;
declare type FA_Note_PreSwitchView = 146;
declare type FA_Note_PreUpdateXRefs = 106;
declare type FA_Note_PreWrapElement = 56;
declare type FA_Note_QuitModelessDialog = 109;
declare type FA_Note_RSC_Supported_File = 104;
declare type FA_Note_RTL_NumberUtility = 167;
declare type FA_Note_ReLoadKeyCatalog = 144;
declare type FA_Note_Read_Struct_App = 130;
declare type FA_Note_Reset_Client_State = 161;
declare type FA_Note_SWF_File = 124;
declare type FA_Note_SetAttrValue = 128;
declare type FA_Note_SetUniqueAttr = 157;
declare type FA_Note_Struct_Wizard = 131;
declare type FA_Note_ToolBar = 87;
declare type FA_Note_U3DCommand = 101;
declare type FA_Note_URL = 90;
declare type FA_Note_UndoCheckpoint = 93;
declare type FA_Note_UpdateAllClientTi = 36;
declare type FA_Note_UpdateClientTi = 37;
declare type FA_Note_UpdateDITAReference = 141;
declare type FA_Note_UpdateDITAReferences = 142;
declare type FA_Note_UpdateRefs = 114;
declare type FA_Note_UpdateRefs_On_Save = 129;
declare type FA_Note_WelcomeScreen_Command = 169;

declare type FA_Note =
	| FA_Note_AI_Supported_File
	| FA_Note_Alert
	| FA_Note_AssignId
	| FA_Note_BackToUser
	| FA_Note_BodyPageAdded
	| FA_Note_BodyPageDeleted
	| FA_Note_CMS_PostCheckOutItem
	| FA_Note_CMS_PostOpenItem
	| FA_Note_CMS_PreCheckOutItem
	| FA_Note_CMS_PreOpenItem
	| FA_Note_ClientCall
	| FA_Note_ConsoleMessage
	| FA_Note_CursorChange
	| FA_Note_DITAOptions
	| FA_Note_Dialog
	| FA_Note_Dialog_Create
	| FA_Note_DirtyBook
	| FA_Note_DirtyDoc
	| FA_Note_DisplayClientTiDialog
	| FA_Note_DisplayClientXRefDialog
	| FA_Note_ECMInternal
	| FA_Note_Enable_Disable_DITA_Menu_Commands
	| FA_Note_EnumeratedComponent
	| FA_Note_FileOpen
	| FA_Note_FilterFileToFile
	| FA_Note_FilterIn
	| FA_Note_FilterOut
	| FA_Note_FontSubstitution
	| FA_Note_Frame_Idle_State
	| FA_Note_GenerateFM
	| FA_Note_GraphicPropChanged
	| FA_Note_Help
	| FA_Note_HtmlNotify
	| FA_Note_In_App_Message
	| FA_Note_InsertConRef
	| FA_Note_InsertTopicRef
	| FA_Note_IsCommandEnabled
	| FA_Note_LoadKeyCatalog
	| FA_Note_MATHML_CHANGE_NSPREFIX
	| FA_Note_MATHML_CHANGE_XML_PROPERTY
	| FA_Note_MATHML_DblClicked
	| FA_Note_MATHML_Deselected
	| FA_Note_MATHML_GenerateImage
	| FA_Note_MATHML_PopulateObj
	| FA_Note_MATHML_Selected
	| FA_Note_NewBookmapFile
	| FA_Note_NewConceptFile
	| FA_Note_NewDitamapFile
	| FA_Note_NewGlossEntryFile
	| FA_Note_NewReferenceFile
	| FA_Note_NewTaskFile
	| FA_Note_NewTopicFile
	| FA_Note_Not_AI_Supported_File
	| FA_Note_Not_RSC_Supported_File
	| FA_Note_Not_SWF_File
	| FA_Note_Not_U3DCommand
	| FA_Note_Num
	| FA_Note_OpenAllTopicrefs
	| FA_Note_Open_Dtd
	| FA_Note_Open_EDD_For_App
	| FA_Note_Open_Schema
	| FA_Note_Palette
	| FA_Note_PostActiveDocChange
	| FA_Note_PostAutoSaveDoc
	| FA_Note_PostBookComponentOpen
	| FA_Note_PostChangeElement
	| FA_Note_PostCopyElement
	| FA_Note_PostCreateMML
	| FA_Note_PostDistill
	| FA_Note_PostDragElement
	| FA_Note_PostExport
	| FA_Note_PostFileType
	| FA_Note_PostFunction
	| FA_Note_PostGenerate
	| FA_Note_PostGoToXrefSrc
	| FA_Note_PostHypertext
	| FA_Note_PostImport
	| FA_Note_PostImportElemDefs
	| FA_Note_PostInlineTypeIn
	| FA_Note_PostInsertElement
	| FA_Note_PostMouseCommand
	| FA_Note_PostOpenBook
	| FA_Note_PostOpenBookMIF
	| FA_Note_PostOpenDoc
	| FA_Note_PostOpenMIF
	| FA_Note_PostOpenSGML
	| FA_Note_PostOpenXML
	| FA_Note_PostPrint
	| FA_Note_PostPublishDitamap
	| FA_Note_PostQuitBook
	| FA_Note_PostQuitDoc
	| FA_Note_PostQuitSession
	| FA_Note_PostRevertBook
	| FA_Note_PostRevertDoc
	| FA_Note_PostSaveAsPDFDialog
	| FA_Note_PostSaveBook
	| FA_Note_PostSaveBookMIF
	| FA_Note_PostSaveDoc
	| FA_Note_PostSaveMIF
	| FA_Note_PostSaveSGML
	| FA_Note_PostSaveXML
	| FA_Note_PostSetAttrValue
	| FA_Note_PostSetPropertyValue
	| FA_Note_PostSwitchView
	| FA_Note_PostUpdateXRefs
	| FA_Note_PostWrapElement
	| FA_Note_Poster_Applied
	| FA_Note_PreAutoSaveDoc
	| FA_Note_PreBookComponentOpen
	| FA_Note_PreChangeElement
	| FA_Note_PreCopyElement
	| FA_Note_PreCreateMML
	| FA_Note_PreDistill
	| FA_Note_PreDragElement
	| FA_Note_PreExport
	| FA_Note_PreFileType
	| FA_Note_PreFunction
	| FA_Note_PreGenerate
	| FA_Note_PreGoToXrefSrc
	| FA_Note_PreHypertext
	| FA_Note_PreImport
	| FA_Note_PreImportElemDefs
	| FA_Note_PreInlineTypeIn
	| FA_Note_PreInsertElement
	| FA_Note_PreMouseCommand
	| FA_Note_PreOpenBook
	| FA_Note_PreOpenBookMIF
	| FA_Note_PreOpenDoc
	| FA_Note_PreOpenMIF
	| FA_Note_PreOpenSGML
	| FA_Note_PreOpenXML
	| FA_Note_PrePrint
	| FA_Note_PrePublishDitamap
	| FA_Note_PreQuitBook
	| FA_Note_PreQuitDoc
	| FA_Note_PreQuitSession
	| FA_Note_PreRevertBook
	| FA_Note_PreRevertDoc
	| FA_Note_PreSaveAsPDFDialog
	| FA_Note_PreSaveBook
	| FA_Note_PreSaveBookMIF
	| FA_Note_PreSaveDoc
	| FA_Note_PreSaveMIF
	| FA_Note_PreSaveSGML
	| FA_Note_PreSaveXML
	| FA_Note_PreSetAttrValue
	| FA_Note_PreSetPropertyValue
	| FA_Note_PreSwitchView
	| FA_Note_PreUpdateXRefs
	| FA_Note_PreWrapElement
	| FA_Note_QuitModelessDialog
	| FA_Note_RSC_Supported_File
	| FA_Note_RTL_NumberUtility
	| FA_Note_ReLoadKeyCatalog
	| FA_Note_Read_Struct_App
	| FA_Note_Reset_Client_State
	| FA_Note_SWF_File
	| FA_Note_SetAttrValue
	| FA_Note_SetUniqueAttr
	| FA_Note_Struct_Wizard
	| FA_Note_ToolBar
	| FA_Note_U3DCommand
	| FA_Note_URL
	| FA_Note_UndoCheckpoint
	| FA_Note_UpdateAllClientTi
	| FA_Note_UpdateClientTi
	| FA_Note_UpdateDITAReference
	| FA_Note_UpdateDITAReferences
	| FA_Note_UpdateRefs
	| FA_Note_UpdateRefs_On_Save
	| FA_Note_WelcomeScreen_Command;

// --------------------------------------------------
// Frame Error codes
// --------------------------------------------------
declare type FE_AcceptRejectCalledOnWrongPreviewState = -110;
declare type FE_AsianSystemRequired = -90;
declare type FE_BadBaseColor = -97;
declare type FE_BadBookId = -66;
declare type FE_BadCompPath = -68;
declare type FE_BadCompare = -35;
declare type FE_BadContainer = -104;
declare type FE_BadDelete = -17;
declare type FE_BadDocId = -2;
declare type FE_BadElementDefId = -28;
declare type FE_BadElementId = -29;
declare type FE_BadElementSelection = -69;
declare type FE_BadFamilyName = -98;
declare type FE_BadFileType = -83;
declare type FE_BadFilterType = -184;
declare type FE_BadInkName = -99;
declare type FE_BadInsertPos = -65;
declare type FE_BadKey = -177;
declare type FE_BadKeyField = -178;
declare type FE_BadMenuBar = -77;
declare type FE_BadName = -33;
declare type FE_BadNew = -23;
declare type FE_BadNewFrame = -14;
declare type FE_BadNewGroup = -15;
declare type FE_BadNewSibling = -16;
declare type FE_BadNotificationNum = -30;
declare type FE_BadObjId = -3;
declare type FE_BadOperation = -27;
declare type FE_BadPageDelete = -18;
declare type FE_BadParameter = -43;
declare type FE_BadPropNum = -4;
declare type FE_BadPropType = -5;
declare type FE_BadRange = -36;
declare type FE_BadRefElementId = -64;
declare type FE_BadRefFlowId = -62;
declare type FE_BadSaveFileName = -50;
declare type FE_BadSelectionForOperation = -59;
declare type FE_BadShortcut = -76;
declare type FE_BadTemplatePath = -105;
declare type FE_BadValue = -179;
declare type FE_BadXRefSrcDocId = -103;
declare type FE_BadXmlApplication = -106;
declare type FE_BookComponentAlreadyHasTrackedEdits = -109;
declare type FE_BookStructured = -61;
declare type FE_BookUnStructured = -67;
declare type FE_Busy = -88;
declare type FE_CMSBadCommandId = -116;
declare type FE_CMSBadItemContainerType = -121;
declare type FE_CMSBadItemFileType = -119;
declare type FE_CMSBadItemType = -120;
declare type FE_CMSBadObjectId = -114;
declare type FE_CMSBadSessionId = -113;
declare type FE_CMSFailedCancelCheckout = -153;
declare type FE_CMSFailedCheckin = -152;
declare type FE_CMSFailedCheckout = -151;
declare type FE_CMSFailedDelete = -154;
declare type FE_CMSFailedDownloadObject = -157;
declare type FE_CMSFailedGetItemFrompath = -158;
declare type FE_CMSFailedLogin = -150;
declare type FE_CMSFailedLogout = -159;
declare type FE_CMSFailedOpenFile = -155;
declare type FE_CMSFailedUploadObject = -156;
declare type FE_CMSIsValidCMSCommand = -123;
declare type FE_CMSNameAlreadyRegistered = -112;
declare type FE_CMSObjectCreationFailed = -117;
declare type FE_CMSRootObjectExists = -118;
declare type FE_CMSSessionCreationFailed = -122;
declare type FE_CMSSessionFailed = -115;
declare type FE_Canceled = -44;
declare type FE_CanceledByClient = -86;
declare type FE_CannotAddEditExpressionsInOneOrMoreComponents = -205;
declare type FE_CantSmooth = -38;
declare type FE_CantUpdateMacEdition = -85;
declare type FE_CircularReference = -81;
declare type FE_CompareTypes = -34;
declare type FE_Disabled = -196;
declare type FE_DocAlreadyHasTrackedEdits = -108;
declare type FE_DocModified = -8;
declare type FE_DupName = -32;
declare type FE_EmptyTextObject = -87;
declare type FE_ExpressionNotFound = -204;
declare type FE_FDKUndoNotAllowed = -193;
declare type FE_FailedExportedFileInvalid = -111;
declare type FE_FailedState = -45;
declare type FE_FailedToApplyOnOneOrMoreComponents = -206;
declare type FE_FileClosedByClient = -70;
declare type FE_FilterFailed = -89;
declare type FE_FlowStructured = -63;
declare type FE_GenRuleAmbiguous = -55;
declare type FE_GenRuleConnectorExpected = -57;
declare type FE_GenRuleItemExpected = -51;
declare type FE_GenRuleLeftBracketExpected = -53;
declare type FE_GenRuleMixedConnectors = -52;
declare type FE_GenRuleRightBracketExpected = -54;
declare type FE_GenRuleSyntaxError = -56;
declare type FE_GraphicInLockedTi = -207;
declare type FE_GroupSelect = -9;
declare type FE_HiddenPage = -40;
declare type FE_InternalErrorFailedToWriteInsets = -94;
declare type FE_InvAttribute = -80;
declare type FE_InvAttributeDef = -79;
declare type FE_InvContextSpec = 0;
declare type FE_InvalidAttrExpr = -107;
declare type FE_InvalidEmailId = -201;
declare type FE_InvalidFileName = -200;
declare type FE_InvalidFilePath = -199;
declare type FE_InvalidPhoneNumber = -198;
declare type FE_InvalidSize = -202;
declare type FE_InvalidString = -58;
declare type FE_KeyCatalogIsStale = -181;
declare type FE_KeyCatalogNotLoaded = -180;
declare type FE_KeyCatalogNotSpecified = -185;
declare type FE_KeyDefinitionAlreadyExists = -183;
declare type FE_KeyDefinitionDoesNotExist = -182;
declare type FE_LanguageNotAvailable = -96;
declare type FE_MissingFile = -84;
declare type FE_NameNotFound = -20;
declare type FE_NoColorFamily = -92;
declare type FE_NoSuchFlow = -82;
declare type FE_NonDITADocument = -186;
declare type FE_NotApiCommand = -74;
declare type FE_NotBodyPage = -24;
declare type FE_NotBookComponent = -26;
declare type FE_NotCommand = -73;
declare type FE_NotFound = -95;
declare type FE_NotFrame = -12;
declare type FE_NotGraphic = -11;
declare type FE_NotGroup = -13;
declare type FE_NotInMenu = -75;
declare type FE_NotMenu = -72;
declare type FE_NotPgf = -25;
declare type FE_NotPgfOrFlow = -71;
declare type FE_NotTextFrame = -39;
declare type FE_NotTextObject = -41;
declare type FE_OffsetNotFound = -21;
declare type FE_OutOfRange = -7;
declare type FE_OverWriteError = -203;
declare type FE_PageFrame = -37;
declare type FE_PropNotSet = -78;
declare type FE_ReadOnly = -6;
declare type FE_ReservedColor = -100;
declare type FE_SomeUnresolved = -22;
declare type FE_StringTooLong = -93;
declare type FE_Success = 0;
declare type FE_SystemError = -42;
declare type FE_TableInLockedTi = -101;
declare type FE_TintedColor = -91;
declare type FE_Transport = -1;
declare type FE_TypeUnNamed = -19;
declare type FE_UnLicensed = -197;
declare type FE_UpdateDITAReferenceFailed = -192;
declare type FE_UpdateDITAReferenceFailedCannotConvertToFMObject = -191;
declare type FE_UpdateDITAReferenceFailedCannotFindReferencedFile = -189;
declare type FE_UpdateDITAReferenceFailedCannotOpenReferencedFile = -190;
declare type FE_UpdateDITAReferenceFailedCannotResolveReference = -188;
declare type FE_UpdateDITAReferenceFailedErrorImportingReferencedFile = -208;
declare type FE_UpdateDITAReferenceFailedInvalidElementType = -187;
declare type FE_ViewOnly = -49;
declare type FE_WantsCustom = -46;
declare type FE_WantsLandscape = -47;
declare type FE_WantsPortrait = -48;
declare type FE_WithinFrame = -10;
declare type FE_WrongProduct = -60;
declare type FE_WrongView = -194;
declare type FE_WrongWindow = -195;
declare type FE_XRefUnresolved = -102;
declare type FE_XrefTitleNotFound = -209;

declare type FrameErrorCode =
	| FE_AcceptRejectCalledOnWrongPreviewState
	| FE_AsianSystemRequired
	| FE_BadBaseColor
	| FE_BadBookId
	| FE_BadCompPath
	| FE_BadCompare
	| FE_BadContainer
	| FE_BadDelete
	| FE_BadDocId
	| FE_BadElementDefId
	| FE_BadElementId
	| FE_BadElementSelection
	| FE_BadFamilyName
	| FE_BadFileType
	| FE_BadFilterType
	| FE_BadInkName
	| FE_BadInsertPos
	| FE_BadKey
	| FE_BadKeyField
	| FE_BadMenuBar
	| FE_BadName
	| FE_BadNew
	| FE_BadNewFrame
	| FE_BadNewGroup
	| FE_BadNewSibling
	| FE_BadNotificationNum
	| FE_BadObjId
	| FE_BadOperation
	| FE_BadPageDelete
	| FE_BadParameter
	| FE_BadPropNum
	| FE_BadPropType
	| FE_BadRange
	| FE_BadRefElementId
	| FE_BadRefFlowId
	| FE_BadSaveFileName
	| FE_BadSelectionForOperation
	| FE_BadShortcut
	| FE_BadTemplatePath
	| FE_BadValue
	| FE_BadXRefSrcDocId
	| FE_BadXmlApplication
	| FE_BookComponentAlreadyHasTrackedEdits
	| FE_BookStructured
	| FE_BookUnStructured
	| FE_Busy
	| FE_CMSBadCommandId
	| FE_CMSBadItemContainerType
	| FE_CMSBadItemFileType
	| FE_CMSBadItemType
	| FE_CMSBadObjectId
	| FE_CMSBadSessionId
	| FE_CMSFailedCancelCheckout
	| FE_CMSFailedCheckin
	| FE_CMSFailedCheckout
	| FE_CMSFailedDelete
	| FE_CMSFailedDownloadObject
	| FE_CMSFailedGetItemFrompath
	| FE_CMSFailedLogin
	| FE_CMSFailedLogout
	| FE_CMSFailedOpenFile
	| FE_CMSFailedUploadObject
	| FE_CMSIsValidCMSCommand
	| FE_CMSNameAlreadyRegistered
	| FE_CMSObjectCreationFailed
	| FE_CMSRootObjectExists
	| FE_CMSSessionCreationFailed
	| FE_CMSSessionFailed
	| FE_Canceled
	| FE_CanceledByClient
	| FE_CannotAddEditExpressionsInOneOrMoreComponents
	| FE_CantSmooth
	| FE_CantUpdateMacEdition
	| FE_CircularReference
	| FE_CompareTypes
	| FE_Disabled
	| FE_DocAlreadyHasTrackedEdits
	| FE_DocModified
	| FE_DupName
	| FE_EmptyTextObject
	| FE_ExpressionNotFound
	| FE_FDKUndoNotAllowed
	| FE_FailedExportedFileInvalid
	| FE_FailedState
	| FE_FailedToApplyOnOneOrMoreComponents
	| FE_FileClosedByClient
	| FE_FilterFailed
	| FE_FlowStructured
	| FE_GenRuleAmbiguous
	| FE_GenRuleConnectorExpected
	| FE_GenRuleItemExpected
	| FE_GenRuleLeftBracketExpected
	| FE_GenRuleMixedConnectors
	| FE_GenRuleRightBracketExpected
	| FE_GenRuleSyntaxError
	| FE_GraphicInLockedTi
	| FE_GroupSelect
	| FE_HiddenPage
	| FE_InternalErrorFailedToWriteInsets
	| FE_InvAttribute
	| FE_InvAttributeDef
	| FE_InvContextSpec
	| FE_InvalidAttrExpr
	| FE_InvalidEmailId
	| FE_InvalidFileName
	| FE_InvalidFilePath
	| FE_InvalidPhoneNumber
	| FE_InvalidSize
	| FE_InvalidString
	| FE_KeyCatalogIsStale
	| FE_KeyCatalogNotLoaded
	| FE_KeyCatalogNotSpecified
	| FE_KeyDefinitionAlreadyExists
	| FE_KeyDefinitionDoesNotExist
	| FE_LanguageNotAvailable
	| FE_MissingFile
	| FE_NameNotFound
	| FE_NoColorFamily
	| FE_NoSuchFlow
	| FE_NonDITADocument
	| FE_NotApiCommand
	| FE_NotBodyPage
	| FE_NotBookComponent
	| FE_NotCommand
	| FE_NotFound
	| FE_NotFrame
	| FE_NotGraphic
	| FE_NotGroup
	| FE_NotInMenu
	| FE_NotMenu
	| FE_NotPgf
	| FE_NotPgfOrFlow
	| FE_NotTextFrame
	| FE_NotTextObject
	| FE_OffsetNotFound
	| FE_OutOfRange
	| FE_OverWriteError
	| FE_PageFrame
	| FE_PropNotSet
	| FE_ReadOnly
	| FE_ReservedColor
	| FE_SomeUnresolved
	| FE_StringTooLong
	| FE_Success
	| FE_SystemError
	| FE_TableInLockedTi
	| FE_TintedColor
	| FE_Transport
	| FE_TypeUnNamed
	| FE_UnLicensed
	| FE_UpdateDITAReferenceFailed
	| FE_UpdateDITAReferenceFailedCannotConvertToFMObject
	| FE_UpdateDITAReferenceFailedCannotFindReferencedFile
	| FE_UpdateDITAReferenceFailedCannotOpenReferencedFile
	| FE_UpdateDITAReferenceFailedCannotResolveReference
	| FE_UpdateDITAReferenceFailedErrorImportingReferencedFile
	| FE_UpdateDITAReferenceFailedInvalidElementType
	| FE_ViewOnly
	| FE_WantsCustom
	| FE_WantsLandscape
	| FE_WantsPortrait
	| FE_WithinFrame
	| FE_WrongProduct
	| FE_WrongView
	| FE_WrongWindow
	| FE_XRefUnresolved
	| FE_XrefTitleNotFound;

// --------------------------------------------------
// Frame Flags for API functions
// --------------------------------------------------
declare type FF_ALERT_CANCEL_DEFAULT = 1;
declare type FF_ALERT_CONTINUE_NOTE = 2;
declare type FF_ALERT_CONTINUE_WARN = 3;
declare type FF_ALERT_DNS_OK = 7;
declare type FF_ALERT_NO_DEFAULT = 5;
declare type FF_ALERT_OK_DEFAULT = 0;
declare type FF_ALERT_YES_DEFAULT = 4;
declare type FF_ALERT_YES_NO_CANCEL = 6;

declare type FF_ALERT =
	| FF_ALERT_CANCEL_DEFAULT
	| FF_ALERT_CONTINUE_NOTE
	| FF_ALERT_CONTINUE_WARN
	| FF_ALERT_DNS_OK
	| FF_ALERT_NO_DEFAULT
	| FF_ALERT_OK_DEFAULT
	| FF_ALERT_YES_DEFAULT
	| FF_ALERT_YES_NO_CANCEL;

declare type FF_ALT_KEY = 0x0004;
declare type FF_ATTACH_ALL = 31; // 0x0001 | 0x0002 | 0x0004 | 0x0008 | 0x0010
declare type FF_ATTACH_BORDER_PAGENUM = 0x0002;
declare type FF_ATTACH_BORDER_PAGEUPDOWN = 0x0008;
declare type FF_ATTACH_BORDER_RIGHTICONS = 0x0010;
declare type FF_ATTACH_BORDER_STATUS = 0x0001;
declare type FF_ATTACH_BORDER_ZOOM = 0x0004;
declare type FF_ATTRDISP = 86;
declare type FF_ATTRDISP_ALL = 87;
declare type FF_ATTR_SEL = 89;
declare type FF_BOR_EXT = 72;
declare type FF_BOR_SEL = 71;
declare type FF_BUBBLE_CONTEXT = 49;
declare type FF_BUBBLE_COPY = 55;
declare type FF_BUBBLE_EXT = 54;
declare type FF_BUBBLE_EXT_CONTEXT = 50;
declare type FF_BUBBLE_SEL = 53;
declare type FF_CELLS_RES = 25;
declare type FF_CELL_EXT = 22;
declare type FF_CELL_RES = 24;
declare type FF_CELL_SEL = 21;
declare type FF_CLEAR_SEL = 0;
declare type FF_CLOSE_MODIFIED = 1;
declare type FF_CMD_KEY = 0x0010;
declare type FF_CMP_ATTRIBUTES = 0x20;
declare type FF_CMP_CHANGE_BARS = 0x02;
declare type FF_CMP_COMPKIT = 0x10;
declare type FF_CMP_HYPERLINKS = 0x04;
declare type FF_CMP_SUMKIT = 0x08;
declare type FF_CMP_SUMMARY_ONLY = 0x01;
declare type FF_COLLAPSE_ALL = 57;
declare type FF_COLLAPSE_ELEM = 56;
declare type FF_CONTEXT_DRAG = 73;
declare type FF_CONTEXT_DRAGTXT = 4;
declare type FF_CONTEXT_DRAG_EXT = 74;
declare type FF_CONTEXT_MENU = 33;
declare type FF_CONTROL_KEY = 0x0002;
declare type FF_COPY_TO_CLIP = 13;
declare type FF_CUT_TBL_CELLS = 0x0002;
declare type FF_Custom_FirstPageLeft = 2;
declare type FF_Custom_FirstPageRight = 1;
declare type FF_Custom_SingleSided = 0;
declare type FF_DIALOG_ALL = 0xffff;
declare type FF_DIALOG_INSET_POD = 0x01;
declare type FF_DITAUpdateAllConrefs = 0x01;
declare type FF_DITAUpdateAllLinks = 0x04;
declare type FF_DITAUpdateAllReferences = 31; // 0x01 | 0x02 | 0x04 | 0x08 | 0x10
declare type FF_DITAUpdateAllTopicrefs = 0x08;
declare type FF_DITAUpdateAllTopicsetrefs = 0x10;
declare type FF_DITAUpdateAllXrefs = 0x02;
declare type FF_DONT_APPLY_ALL_ROWS = 0x0040;
declare type FF_DONT_DELETE_HIDDEN_TEXT = 0x0004;
declare type FF_DUPLICATE_KEY_DEFINITION = 0x01;
declare type FF_EDIT_ATTRIBUTE = 88;
declare type FF_ELEMENT_CONTEXT = 47;
declare type FF_ELEMENT_EXT = 52;
declare type FF_ELEMENT_EXT_CONTEXT = 48;
declare type FF_ELEMENT_SEL = 51;
declare type FF_FIND_BACKWARDS = 0x08;
declare type FF_FIND_CONSIDER_CASE = 0x01;
declare type FF_FIND_USE_REGEX = 0x10;
declare type FF_FIND_USE_WILDCARDS = 0x04;
declare type FF_FIND_WHOLE_WORD = 0x02;
declare type FF_FOUND_IN_REFERENCED_FILE = 0x02;
declare type FF_HYPERTEXT = 41;
declare type FF_IED_DELETE_EMPTY_PAGES = 0x0010;
declare type FF_IED_DO_NOT_IMPORT_EDD = 0x0004;
declare type FF_IED_DO_NOT_IMPORT_STRUCTAPP = 0x0040;
declare type FF_IED_NO_NOTIFY = 0x0008;
declare type FF_IED_REMOVE_BOOK_INFO = 0x0002;
declare type FF_IED_REMOVE_OVERRIDES = 0x0001;
declare type FF_IMAGE_BACKGROUND = 0x0001;
declare type FF_IMAGE_CLIP = 0x0004;
declare type FF_IMAGE_MASTER = 0x0002;
declare type FF_IMAGE_NOTRIM = 0x0008;
declare type FF_IMAGE_PAGEFRAME = 0x000f;
declare type FF_INSERT_BELOW_RIGHT = 0x0008;
declare type FF_INTERACTIVE = 0x0001;
declare type FF_INVALID_KEY = 0x04;
declare type FF_OBJ_CROTATE = 67;
declare type FF_OBJ_EXT = 63;
declare type FF_OBJ_EXT_BOR = 64;
declare type FF_OBJ_Q_COPY = 65;
declare type FF_OBJ_ROTATE = 66;
declare type FF_OBJ_SEL = 62;
declare type FF_OPEN_BOOK_COMP = 58;
declare type FF_PASTE_CLIP_OBJ = 61;
declare type FF_PASTE_CLIP_TEXT = 12;
declare type FF_PASTE_SEL_TEXT = 11;
declare type FF_REPLACE_CELLS = 0x0020;
declare type FF_RES_ADD = 84;
declare type FF_RES_DEL = 85;
declare type FF_RES_MOVE = 81;
declare type FF_RES_MOVE1 = 82;
declare type FF_RES_VERTEX = 83;
declare type FF_SELECT_WHOLE_TABLE = 0x80000000;
declare type FF_SHIFT_KEY = 0x0001;
declare type FF_STRIP_HYPERTEXT = 0x0080;
declare type FF_STRUCTURE_MENU = 34;
declare type FF_TABLE_SELALL = 23;
declare type FF_TEXT_EXT = 2;
declare type FF_TEXT_Q_COPY = 3;
declare type FF_TEXT_SEL = 1;
declare type FF_UFF_ALL = 0xffff;
declare type FF_UFF_COLOR = 0x0100;
declare type FF_UFF_COMBINED_FONTS = 0x0800;
declare type FF_UFF_COND = 0x0010;
declare type FF_UFF_DOCUMENT_PROPS = 0x0400;
declare type FF_UFF_FBA = 0x1000;
declare type FF_UFF_FONT = 0x0002;
declare type FF_UFF_MATH = 0x0200;
declare type FF_UFF_PAGE = 0x0004;
declare type FF_UFF_PGF = 0x0001;
declare type FF_UFF_REFPAGE = 0x0020;
declare type FF_UFF_REMOVE_EXCEPTIONS = 0x8000;
declare type FF_UFF_REMOVE_PAGE_BREAKS = 0x4000;
declare type FF_UFF_STYLE = 0x2000;
declare type FF_UFF_TABLE = 0x0008;
declare type FF_UFF_VAR = 0x0040;
declare type FF_UFF_XREF = 0x0080;
declare type FF_UNTAGGED_ASK = 0;
declare type FF_UNTAGGED_DELETE = 2;
declare type FF_UNTAGGED_UNCOND = 1;
declare type FF_VIEWER_MENU = 32;
declare type FF_VISIBLE_ONLY = 0x0010;
declare type FF_XRUI_CLOSED_DOCS = 0x04;
declare type FF_XRUI_EVERYTHING = 7; // 0x01 | 0x02 | 0x04
declare type FF_XRUI_FORCE_UPDATE = 0x08;
declare type FF_XRUI_INTERNAL = 0x01;
declare type FF_XRUI_OPEN_DOCS = 0x02;

// --------------------------------------------------
// Frame Info on plugins
// --------------------------------------------------
declare type FI_PLUGIN_DESCRIPTION = 4;
declare type FI_PLUGIN_FACET = 6;
declare type FI_PLUGIN_FORMATID = 7;
declare type FI_PLUGIN_INFORMAT = 10;
declare type FI_PLUGIN_NAME = 2;
declare type FI_PLUGIN_OUTFORMAT = 11;
declare type FI_PLUGIN_PRODUCTNAME = 1;
declare type FI_PLUGIN_PRODUCTS = 5;
declare type FI_PLUGIN_SUFFIX = 9;
declare type FI_PLUGIN_TYPE = 3;
declare type FI_PLUGIN_VENDOR = 8;

declare type FI_PLUGIN =
	| FI_PLUGIN_DESCRIPTION
	| FI_PLUGIN_FACET
	| FI_PLUGIN_FORMATID
	| FI_PLUGIN_INFORMAT
	| FI_PLUGIN_NAME
	| FI_PLUGIN_OUTFORMAT
	| FI_PLUGIN_PRODUCTNAME
	| FI_PLUGIN_PRODUCTS
	| FI_PLUGIN_SUFFIX
	| FI_PLUGIN_TYPE
	| FI_PLUGIN_VENDOR;

// --------------------------------------------------
// Frame Object codes
// --------------------------------------------------
declare type FO_AFrame = 23;
declare type FO_Alert = 69;
declare type FO_AnchoredFrame = 23;
declare type FO_Arc = 11;
declare type FO_AttrCondExpr = 71;
declare type FO_Bad = 255;
declare type FO_BodyPage = 5;
declare type FO_Book = 2;
declare type FO_BookComponent = 3;
declare type FO_CMSConnection = 98;
declare type FO_CMSObject = 76;
declare type FO_CMSObject2 = 99;
declare type FO_CMSRegistration = 74;
declare type FO_CMSSession = 75;
declare type FO_Cblock = 86;
declare type FO_Cell = 39;
declare type FO_CharFmt = 33;
declare type FO_Color = 35;
declare type FO_Column = 82;
declare type FO_CombinedFontDefn = 67;
declare type FO_Command = 56;
declare type FO_CondFmt = 34;
declare type FO_CursorResource = 70;
declare type FO_DBGroup = 22;
declare type FO_DialogResource = 43;
declare type FO_DitaMap = 96;
declare type FO_DlgBox = 44;
declare type FO_DlgButton = 45;
declare type FO_DlgCheckBox = 47;
declare type FO_DlgDate = 80;
declare type FO_DlgEditBox = 50;
declare type FO_DlgImage = 53;
declare type FO_DlgLabel = 52;
declare type FO_DlgListView = 72;
declare type FO_DlgPopUp = 48;
declare type FO_DlgRadioButton = 51;
declare type FO_DlgScrollBar = 54;
declare type FO_DlgScrollBox = 49;
declare type FO_DlgTriBox = 46;
declare type FO_Doc = 4;
declare type FO_Element = 42;
declare type FO_ElementDef = 41;
declare type FO_Ellipse = 13;
declare type FO_First_Internal = 83;
declare type FO_Flow = 30;
declare type FO_FmtChangeList = 58;
declare type FO_FmtRule = 59;
declare type FO_FmtRuleClause = 60;
declare type FO_Fn = 25;
declare type FO_Frame = 85;
declare type FO_Graphic = 84;
declare type FO_GraphicsFmt = 73;
declare type FO_Group = 10;
declare type FO_HiddenPage = 8;
declare type FO_InlineComponent = 81;
declare type FO_Inset = 20;
declare type FO_Iterator = 78;
declare type FO_KeyCatalog = 77;
declare type FO_Last_Graphic = 22;
declare type FO_Last_Internal = 97;
declare type FO_Last_Page = 8;
declare type FO_Line = 17;
declare type FO_Marker = 24;
declare type FO_MarkerType = 66;
declare type FO_MasterPage = 6;
declare type FO_Math = 21;
declare type FO_MathML = 79;
declare type FO_Menu = 55;
declare type FO_MenuCell = 94;
declare type FO_MenuItemSeparator = 57;
declare type FO_Num = 83;
declare type FO_Page = 83;
declare type FO_Pgf = 31;
declare type FO_PgfFmt = 32;
declare type FO_Polygon = 16;
declare type FO_Polyline = 15;
declare type FO_Rectangle = 12;
declare type FO_RefPage = 7;
declare type FO_RoundRect = 14;
declare type FO_Row = 38;
declare type FO_Rubi = 68;
declare type FO_RulingFmt = 40;
declare type FO_Session = 0;
declare type FO_StringResource = 1;
declare type FO_SubCell = 90;
declare type FO_SubCol = 65;
declare type FO_SubCond = 87;
declare type FO_SubDash = 89;
declare type FO_SubPblock = 92;
declare type FO_SubStyle = 88;
declare type FO_SubTbl = 91;
declare type FO_SubTextDef = 93;
declare type FO_Tbl = 36;
declare type FO_TblFmt = 37;
declare type FO_TextFrame = 19;
declare type FO_TextInset = 95;
declare type FO_TextLine = 18;
declare type FO_TiApiClient = 64;
declare type FO_TiFlow = 61;
declare type FO_TiText = 62;
declare type FO_TiTextTable = 63;
declare type FO_UFrame = 9;
declare type FO_UnanchoredFrame = 9;
declare type FO_Var = 28;
declare type FO_VarFmt = 29;
declare type FO_XLast_Graphic = 23;
declare type FO_XRef = 26;
declare type FO_XRefFmt = 27;

declare type FO_Constant =
	| FO_AFrame
	| FO_Alert
	| FO_AnchoredFrame
	| FO_Arc
	| FO_AttrCondExpr
	| FO_Bad
	| FO_BodyPage
	| FO_Book
	| FO_BookComponent
	| FO_CMSConnection
	| FO_CMSObject
	| FO_CMSObject2
	| FO_CMSRegistration
	| FO_CMSSession
	| FO_Cblock
	| FO_Cell
	| FO_CharFmt
	| FO_Color
	| FO_Column
	| FO_CombinedFontDefn
	| FO_Command
	| FO_CondFmt
	| FO_CursorResource
	| FO_DBGroup
	| FO_DialogResource
	| FO_DitaMap
	| FO_DlgBox
	| FO_DlgButton
	| FO_DlgCheckBox
	| FO_DlgDate
	| FO_DlgEditBox
	| FO_DlgImage
	| FO_DlgLabel
	| FO_DlgListView
	| FO_DlgPopUp
	| FO_DlgRadioButton
	| FO_DlgScrollBar
	| FO_DlgScrollBox
	| FO_DlgTriBox
	| FO_Doc
	| FO_Element
	| FO_ElementDef
	| FO_Ellipse
	| FO_First_Internal
	| FO_Flow
	| FO_FmtChangeList
	| FO_FmtRule
	| FO_FmtRuleClause
	| FO_Fn
	| FO_Frame
	| FO_Graphic
	| FO_GraphicsFmt
	| FO_Group
	| FO_HiddenPage
	| FO_InlineComponent
	| FO_Inset
	| FO_Iterator
	| FO_KeyCatalog
	| FO_Last_Graphic
	| FO_Last_Internal
	| FO_Last_Page
	| FO_Line
	| FO_Marker
	| FO_MarkerType
	| FO_MasterPage
	| FO_Math
	| FO_MathML
	| FO_Menu
	| FO_MenuCell
	| FO_MenuItemSeparator
	| FO_Num
	| FO_Page
	| FO_Pgf
	| FO_PgfFmt
	| FO_Polygon
	| FO_Polyline
	| FO_Rectangle
	| FO_RefPage
	| FO_RoundRect
	| FO_Row
	| FO_Rubi
	| FO_RulingFmt
	| FO_Session
	| FO_StringResource
	| FO_SubCell
	| FO_SubCol
	| FO_SubCond
	| FO_SubDash
	| FO_SubPblock
	| FO_SubStyle
	| FO_SubTbl
	| FO_SubTextDef
	| FO_Tbl
	| FO_TblFmt
	| FO_TextFrame
	| FO_TextInset
	| FO_TextLine
	| FO_TiApiClient
	| FO_TiFlow
	| FO_TiText
	| FO_TiTextTable
	| FO_UFrame
	| FO_UnanchoredFrame
	| FO_Var
	| FO_VarFmt
	| FO_XLast_Graphic
	| FO_XRef
	| FO_XRefFmt;

// --------------------------------------------------
// Frame Property names
// --------------------------------------------------
declare type FP_AFrameIsCropped = 878;
declare type FP_AFrameIsFloating = 876;
declare type FP_AcrobatBookmarkDisplayTags = 2251;
declare type FP_AcrobatLevel = 589;
declare type FP_ActiveAlert = 105;
declare type FP_ActiveBook = 52;
declare type FP_ActiveCMSSession = 2438;
declare type FP_ActiveDoc = 51;
declare type FP_ActiveView = 2422;
declare type FP_AddMarkerTypeToStandardMarkers = 150;
declare type FP_AdjHyphens = 559;
declare type FP_AlertClientName = 2291;
declare type FP_AlertClientUnique = 2290;
declare type FP_AlertString = 2292;
declare type FP_AlertType = 2293;
declare type FP_Alignment = 886;
declare type FP_AllowAsSpecialCase = 1649;
declare type FP_AllowBaseFamilyBoldedAndObliqued = 2283;
declare type FP_AllowNewFileURL = 2416;
declare type FP_AllowedDataRange = 1594;
declare type FP_AlsoInsert = 1591;
declare type FP_AlsoInserts = 1595;
declare type FP_AnchorType = 875;
declare type FP_Angle = 780;
declare type FP_ApplyEOPRules = 2030;
declare type FP_ApplyFormatRules = 93;
declare type FP_ArrowBaseAngle = 746;
declare type FP_ArrowLength = 748;
declare type FP_ArrowScaleFactor = 747;
declare type FP_ArrowScaleHead = 750;
declare type FP_ArrowTipAngle = 745;
declare type FP_ArrowType = 749;
declare type FP_AsianComposer = 3039;
declare type FP_AttrCondExprIsActive = 2818;
declare type FP_AttrCondExprStr = 2817;
declare type FP_AttrDisplay = 1635;
declare type FP_AttributeDefs = 1584;
declare type FP_AttributeValueInvalid = 1667;
declare type FP_AttributeValueRequired = 1666;
declare type FP_Attributes = 1634;
declare type FP_AttributesEx = 1670;
declare type FP_AutoBackup = 50;
declare type FP_AutoChangeBars = 238;
declare type FP_AutoNumChar = 549;
declare type FP_AutoNumString = 548;
declare type FP_AutoSave = 48;
declare type FP_AutoSaveSeconds = 49;
declare type FP_BIBGetAddressProc = 2299;
declare type FP_BannerText = 1599;
declare type FP_BannerTextDisplay = 1600;
declare type FP_BaseFamily = 2282;
declare type FP_BasePointX = 1116;
declare type FP_BasePointY = 1117;
declare type FP_BaselineOffset = 881;
declare type FP_BkColor = 992;
declare type FP_BkGndColor = 1502;
declare type FP_Black = 1460;
declare type FP_BlockLines = 561;
declare type FP_BookComponent = 1628;
declare type FP_BookComponentFileType = 2339;
declare type FP_BookComponentIsFolderWithTemplate = 2341;
declare type FP_BookComponentIsFolderWithoutTemplate = 2342;
declare type FP_BookComponentIsGeneratable = 520;
declare type FP_BookComponentMissing = 1662;
declare type FP_BookComponentParent = 2325;
declare type FP_BookComponentSequenceLevel = 2353;
declare type FP_BookComponentTemplatePath = 2327;
declare type FP_BookComponentTitle = 2328;
declare type FP_BookComponentType = 531;
declare type FP_BookDontUpdateReferences = 494;
declare type FP_BookIsModified = 492;
declare type FP_BookIsSelected = 499;
declare type FP_BookIsViewOnly = 497;
declare type FP_BookParent = 515;
declare type FP_BooleanConditionExpression = 2321;
declare type FP_BooleanConditionExpressionTag = 995;
declare type FP_BooleanConditionState = 2322;
declare type FP_BorderWidth = 740;
declare type FP_BottomMargin = 231;
declare type FP_BottomRowSelection = 1342;
declare type FP_BottomSepAtIndent = 2010;
declare type FP_BottomSeparator = 569;
declare type FP_Box_BG_Color = 1722;
declare type FP_CMSItemProperty_ItemCheckedOutByCurrentUser = 33;
declare type FP_CMSItemProperty_ItemFileType = 34;
declare type FP_CMSItemProperty_ItemIsCheckedOut = 35;
declare type FP_CMSItemProperty_ItemIsContainer = 36;
declare type FP_CMSItemProperty_ItemLocalPath = 37;
declare type FP_CMSItemProperty_ItemName = 38;
declare type FP_CMSItemProperty_ItemServerPath = 39;
declare type FP_CMSItemProperty_ItemType = 40;
declare type FP_CMSItemProperty_ItemVersion = 41;
declare type FP_CMSItemProperty_Max = 42;
declare type FP_CMSItemProperty_Min = 43;
declare type FP_CMSObjectLocalPath = 2392;
declare type FP_CMSObjectServerURL = 2391;
declare type FP_CTFontContext = 72;
declare type FP_CanHaveCheckMark = 1931;
declare type FP_Capitalization = 619;
declare type FP_CellAboveInCol = 1203;
declare type FP_CellAngle = 1209;
declare type FP_CellBelowInCol = 1204;
declare type FP_CellBelowInTbl = 1200;
declare type FP_CellBottomMargin = 582;
declare type FP_CellBottomMarginChange = 2023;
declare type FP_CellBottomMarginFixed = 2016;
declare type FP_CellColNum = 1205;
declare type FP_CellColumn = 2435;
declare type FP_CellDefaultBottomRuling = 1215;
declare type FP_CellDefaultLeftRuling = 1216;
declare type FP_CellDefaultRightRuling = 1217;
declare type FP_CellDefaultTopRuling = 1214;
declare type FP_CellIsShown = 1218;
declare type FP_CellIsStraddled = 1206;
declare type FP_CellLeftMargin = 583;
declare type FP_CellLeftMarginChange = 2024;
declare type FP_CellLeftMarginFixed = 2017;
declare type FP_CellMarginSpacingDelta = 990;
declare type FP_CellMarginsFixed = 586;
declare type FP_CellNumColsStraddled = 1208;
declare type FP_CellNumRowsStraddled = 1207;
declare type FP_CellOverrideBottomRuling = 1211;
declare type FP_CellOverrideFill = 1195;
declare type FP_CellOverrideLeftRuling = 1212;
declare type FP_CellOverrideRightRuling = 1213;
declare type FP_CellOverrideShading = 1194;
declare type FP_CellOverrideTopRuling = 1210;
declare type FP_CellRightMargin = 584;
declare type FP_CellRightMarginChange = 2025;
declare type FP_CellRightMarginFixed = 2018;
declare type FP_CellRow = 1198;
declare type FP_CellTopMargin = 581;
declare type FP_CellTopMarginChange = 2022;
declare type FP_CellTopMarginFixed = 2015;
declare type FP_CellUseOverrideBRuling = 1193;
declare type FP_CellUseOverrideFill = 1196;
declare type FP_CellUseOverrideLRuling = 1190;
declare type FP_CellUseOverrideRRuling = 1191;
declare type FP_CellUseOverrideShading = 1197;
declare type FP_CellUseOverrideTRuling = 1192;
declare type FP_CellVAlignment = 585;
declare type FP_ChangeBar = 611;
declare type FP_ChangeBarColor = 262;
declare type FP_ChangeBarDistance = 259;
declare type FP_ChangeBarPosition = 260;
declare type FP_ChangeBarThickness = 261;
declare type FP_ChapNumComputeMethod = 215;
declare type FP_ChapterNumStyle = 217;
declare type FP_ChapterNumText = 218;
declare type FP_ChapterNumber = 216;
declare type FP_CharTag = 602;
declare type FP_CharacterReferencesOnXMLExport = 2887;
declare type FP_CheckMarkIsOn = 1932;
declare type FP_ColGap = 234;
declare type FP_ColGapWidth = 985;
declare type FP_Color = 751;
declare type FP_ColorOverprint = 1468;
declare type FP_ColorPrintCtl = 1462;
declare type FP_ColorTintPercent = 1466;
declare type FP_ColorViewCtl = 1461;
declare type FP_ColumnIsShown = 2434;
declare type FP_ColumnNum = 2436;
declare type FP_ColumnTbl = 2433;
declare type FP_ColumnsAreBalanced = 1175;
declare type FP_CombinedFontFamily = 2287;
declare type FP_CommandNum = 1928;
declare type FP_Comment = 1581;
declare type FP_ComponentDisplayText = 532;
declare type FP_ComponentElement = 1551;
declare type FP_ComponentIsDitaMap = 2331;
declare type FP_ComponentIsSelected = 529;
declare type FP_ComponentType = 2329;
declare type FP_CondFmtIsShown = 1139;
declare type FP_ContentHeight = 2219;
declare type FP_ContentIsLooselyValid = 1652;
declare type FP_ContentIsStrictlyValid = 1651;
declare type FP_ContentMustBeEmpty = 1665;
declare type FP_ContentNeededAtBegin = 1653;
declare type FP_ContentNeededAtEnd = 1654;
declare type FP_ContextForCSS = 2162;
declare type FP_ContextLabel = 2157;
declare type FP_CorrespondingXmlPath = 1158;
declare type FP_CountElements = 2101;
declare type FP_CurrentDoc = 2401;
declare type FP_CurrentInset = 240;
declare type FP_CurrentMenuSet = 99;
declare type FP_CurrentPage = 236;
declare type FP_CursorData = 2294;
declare type FP_CursorTypes = 2295;
declare type FP_CustomDelimiter = 2420;
declare type FP_CustomDocPath = 2885;
declare type FP_CustomElementList = 1496;
declare type FP_Cyan = 1457;
declare type FP_DTheta = 830;
declare type FP_Dash = 752;
declare type FP_Day = 1724;
declare type FP_DbAttributes = 1817;
declare type FP_DbCancelButton = 1811;
declare type FP_DbCheckBoxState = 1807;
declare type FP_DbDefaultButton = 1809;
declare type FP_DbEditable = 1818;
declare type FP_DbFbCurrentDir = 1814;
declare type FP_DbFbScrollBox = 1813;
declare type FP_DbFbStatus = 1815;
declare type FP_DbFbTextBox = 1812;
declare type FP_DbFirstFocus = 1808;
declare type FP_DbIdentifier = 1802;
declare type FP_DbItemNum = 1800;
declare type FP_DbNoHelp = 1819;
declare type FP_DbOKButton = 1810;
declare type FP_DbRadioButtonGroup = 1806;
declare type FP_DbSbxNumLines = 1805;
declare type FP_DbStuffItem = 1804;
declare type FP_DbTitleLabel = 1816;
declare type FP_DbType = 1801;
declare type FP_DbVarLabelWidth = 1803;
declare type FP_DefaultExclusions = 1487;
declare type FP_DefaultFontAngle = 71;
declare type FP_DefaultFontFamily = 68;
declare type FP_DefaultFontVariation = 69;
declare type FP_DefaultFontWeight = 70;
declare type FP_DefaultInclusions = 1486;
declare type FP_DefaultKeyCatalog = 2871;
declare type FP_DefaultVectorFormatForXMLExport = 2874;
declare type FP_Description = 1947;
declare type FP_DescriptiveTag = 1596;
declare type FP_DesktopHeight = 791;
declare type FP_DesktopWidth = 790;
declare type FP_DesktopX = 788;
declare type FP_DesktopY = 789;
declare type FP_DialogEncodingName = 598;
declare type FP_Dictionary = 203;
declare type FP_DirectOLESupportInXml = 2881;
declare type FP_Direction = 3036;
declare type FP_DisableAutofitAfterZoom = 67;
declare type FP_DisplayName = 78;
declare type FP_Displaying = 92;
declare type FP_DitaMaxRefLevels = 2396;
declare type FP_DitaMode = 1504;
declare type FP_DoNotExportInvalidXML = 2418;
declare type FP_DoNotGenerateErrorLog = 819;
declare type FP_DoPostXSLTValidationOnExport = 2417;
declare type FP_DocAcrobatColumnArticleThreads = 2256;
declare type FP_DocAcrobatDefaultsChanged = 2252;
declare type FP_DocAcrobatElementList = 2254;
declare type FP_DocAcrobatElements = 2253;
declare type FP_DocAcrobatNoArticleThreads = 2255;
declare type FP_DocCMSType = 2393;
declare type FP_DocFluidFlow = 147;
declare type FP_DocFonts = 2380;
declare type FP_DocInTempState = 2900;
declare type FP_DocIsDoubleSided = 226;
declare type FP_DocIsHelp = 132;
declare type FP_DocIsInternal = 2372;
declare type FP_DocIsModified = 131;
declare type FP_DocIsSave = 833;
declare type FP_DocIsStructuredDummy = 2882;
declare type FP_DocIsUIOpen = 832;
declare type FP_DocIsViewOnly = 133;
declare type FP_DocIsViewOnlyWinPalette = 134;
declare type FP_DocOpenClientEncounteredErrors = 820;
declare type FP_DocOpenType = 130;
declare type FP_DocSaveFormat = 2415;
declare type FP_DocSaveType = 145;
declare type FP_DocSequenceLevel = 2356;
declare type FP_DockDialog = 2344;
declare type FP_DontLoadStartupClients = 2894;
declare type FP_DontShowWelcomeScreen = 2408;
declare type FP_DontUpdateTextInsets = 160;
declare type FP_DontUpdateXRefs = 159;
declare type FP_DoubleClick = 1706;
declare type FP_DownloadFonts = 496;
declare type FP_EddUpdateOn = 829;
declare type FP_ElemPrefixSuffix = 2158;
declare type FP_Element = 2170;
declare type FP_ElementBoundaryDisplay = 1484;
declare type FP_ElementCatalog = 1488;
declare type FP_ElementCatalogDisplay = 1485;
declare type FP_ElementDataType = 1593;
declare type FP_ElementDef = 1621;
declare type FP_ElementDefType = 1579;
declare type FP_ElementDescription = 1597;
declare type FP_ElementInCatalog = 1573;
declare type FP_ElementIsCollapsed = 1627;
declare type FP_ElementIsExcludedInContext = 1655;
declare type FP_ElementIsInvalidInParent = 1656;
declare type FP_ElementIsInvalidInPosition = 1657;
declare type FP_ElementIsTopicGroup = 2338;
declare type FP_ElementIsTopicHead = 2337;
declare type FP_ElementIsTopicRef = 2336;
declare type FP_ElementIsUndefined = 1650;
declare type FP_ElementMarkedForNamedDestination = 1669;
declare type FP_ElementPgfFormat = 1586;
declare type FP_ElementSelection = 1494;
declare type FP_ElementType = 1636;
declare type FP_ElementTypeMismatch = 1658;
declare type FP_EnableAutoSpellCheck = 2413;
declare type FP_EnabledWhen = 1935;
declare type FP_EqnIntegralSizeLarge = 348;
declare type FP_EqnIntegralSizeMed = 347;
declare type FP_EqnIntegralSizeSmall = 346;
declare type FP_EqnLevel1SizeLarge = 354;
declare type FP_EqnLevel1SizeMed = 353;
declare type FP_EqnLevel1SizeSmall = 352;
declare type FP_EqnLevel2SizeLarge = 357;
declare type FP_EqnLevel2SizeMed = 356;
declare type FP_EqnLevel2SizeSmall = 355;
declare type FP_EqnLevel3SizeLarge = 360;
declare type FP_EqnLevel3SizeMed = 359;
declare type FP_EqnLevel3SizeSmall = 358;
declare type FP_EqnSigmaSizeLarge = 351;
declare type FP_EqnSigmaSizeMed = 350;
declare type FP_EqnSigmaSizeSmall = 349;
declare type FP_ErrorInBookComponent = 1663;
declare type FP_ExcludeBookComponent = 2326;
declare type FP_Exclusions = 1576;
declare type FP_ExpandOMaticParent = 1934;
declare type FP_ExportFilters = 2289;
declare type FP_ExtractElementTags = 1552;
declare type FP_ExtractTags = 516;
declare type FP_FMConsoleString = 826;
declare type FP_FMInterfaceEncodingName = 599;
declare type FP_FM_BinDir = 88;
declare type FP_FM_CurrentDir = 90;
declare type FP_FM_HelpDir = 103;
declare type FP_FM_HomeDir = 87;
declare type FP_FM_InitDir = 89;
declare type FP_FM_SgmlDir = 100;
declare type FP_FM_StructureDir = 2031;
declare type FP_FM_XmlDir = 2032;
declare type FP_FamilyName = 1464;
declare type FP_Fcode = 1936;
declare type FP_Fcodes = 1937;
declare type FP_FileExtensionOverride = 2813;
declare type FP_FileInfoPacket = 2262;
declare type FP_FileOpenInProgress = 828;
declare type FP_Fill = 741;
declare type FP_FirstAFrame = 974;
declare type FP_FirstAttrCondExprInDoc = 2815;
declare type FP_FirstBodyPageInDoc = 415;
declare type FP_FirstCell = 978;
declare type FP_FirstCellInRow = 1247;
declare type FP_FirstCharFmtInDoc = 123;
declare type FP_FirstChildElement = 1623;
declare type FP_FirstColorInDoc = 127;
declare type FP_FirstColumnInSelection = 2427;
declare type FP_FirstColumnInTbl = 2423;
declare type FP_FirstCombinedFontDefnInDoc = 2280;
declare type FP_FirstCommandInSession = 98;
declare type FP_FirstComponentInBook = 491;
declare type FP_FirstComponentInBookComponent = 2324;
declare type FP_FirstCondFmtInDoc = 124;
declare type FP_FirstDITAConrefElementInDoc = 2861;
declare type FP_FirstDITALinkElementInDoc = 2863;
declare type FP_FirstDITATopicrefElementInDoc = 2864;
declare type FP_FirstDITATopicsetrefElementInDoc = 2865;
declare type FP_FirstDITAXrefElementInDoc = 2862;
declare type FP_FirstElementDefInDoc = 1483;
declare type FP_FirstFlowInDoc = 121;
declare type FP_FirstFmtChangeListInDoc = 1489;
declare type FP_FirstFn = 976;
declare type FP_FirstFnInDoc = 119;
declare type FP_FirstGraphicInDoc = 112;
declare type FP_FirstGraphicInFrame = 882;
declare type FP_FirstGraphicInGroup = 807;
declare type FP_FirstGraphicsFmtInDoc = 3101;
declare type FP_FirstIndent = 556;
declare type FP_FirstIndentChange = 2005;
declare type FP_FirstIndentIsRelative = 2019;
declare type FP_FirstIndentRelPos = 2020;
declare type FP_FirstInlineComponentInDoc = 2897;
declare type FP_FirstKeyCatalogInSession = 2872;
declare type FP_FirstMarkerInDoc = 114;
declare type FP_FirstMarkerTypeInDoc = 148;
declare type FP_FirstMasterPageInDoc = 417;
declare type FP_FirstMenuItemInMenu = 1927;
declare type FP_FirstMenuItemInSession = 97;
declare type FP_FirstOpenBook = 54;
declare type FP_FirstOpenDoc = 53;
declare type FP_FirstPageNum = 224;
declare type FP_FirstPageVerso = 227;
declare type FP_FirstPgf = 972;
declare type FP_FirstPgfFmtInDoc = 122;
declare type FP_FirstPgfInDoc = 113;
declare type FP_FirstPgfRules = 1589;
declare type FP_FirstRefPageInDoc = 419;
declare type FP_FirstRowInTbl = 1338;
declare type FP_FirstRubiInDoc = 194;
declare type FP_FirstRulingFmtInDoc = 126;
declare type FP_FirstSelectedComponentInBook = 493;
declare type FP_FirstSelectedGraphicInDoc = 128;
declare type FP_FirstSelectedTiInDoc = 142;
declare type FP_FirstSubCol = 986;
declare type FP_FirstTblFmtInDoc = 125;
declare type FP_FirstTblInDoc = 120;
declare type FP_FirstTextFrameInFlow = 1169;
declare type FP_FirstTiInDoc = 141;
declare type FP_FirstVarFmtInDoc = 116;
declare type FP_FirstVarInDoc = 115;
declare type FP_FirstVis = 1705;
declare type FP_FirstVisibleColumnInTbl = 2425;
declare type FP_FirstXRefFmtInDoc = 118;
declare type FP_FirstXRefInDoc = 117;
declare type FP_Flow = 982;
declare type FP_FlowIsAutoConnect = 1165;
declare type FP_FlowIsFeathered = 1166;
declare type FP_FlowIsPostScript = 1168;
declare type FP_FlowIsSynchronized = 1163;
declare type FP_Fmt = 1050;
declare type FP_FmtChangeList = 2155;
declare type FP_FmtChangeListInCatalog = 2021;
declare type FP_FmtChangeListTag = 2154;
declare type FP_FmtRule = 2159;
declare type FP_FmtRuleClause = 2104;
declare type FP_FmtRuleClauses = 2103;
declare type FP_FmtRuleType = 2100;
declare type FP_FnAnchorString = 1006;
declare type FP_FnCustNumString = 285;
declare type FP_FnFirstNum = 284;
declare type FP_FnFmt = 283;
declare type FP_FnHeightPerCol = 289;
declare type FP_FnInstancePosition = 287;
declare type FP_FnInstancePrefix = 294;
declare type FP_FnInstanceSuffix = 288;
declare type FP_FnNum = 1002;
declare type FP_FnNumComputeMethod = 295;
declare type FP_FnNumStyle = 290;
declare type FP_FnNumberingPerPage = 291;
declare type FP_FnRefPosition = 292;
declare type FP_FnRefPrefix = 286;
declare type FP_FnRefSuffix = 293;
declare type FP_Focus = 2358;
declare type FP_FontAngle = 607;
declare type FP_FontAngleNames = 58;
declare type FP_FontEncodingName = 642;
declare type FP_FontFamily = 604;
declare type FP_FontFamilyAttributes = 60;
declare type FP_FontFamilyFullNames = 73;
declare type FP_FontFamilyNames = 55;
declare type FP_FontPanoseName = 641;
declare type FP_FontPlatformName = 639;
declare type FP_FontPostScriptName = 640;
declare type FP_FontSize = 615;
declare type FP_FontSizeChange = 2012;
declare type FP_FontVariation = 605;
declare type FP_FontVariationNames = 56;
declare type FP_FontWeight = 606;
declare type FP_FontWeightNames = 57;
declare type FP_FormViewConfigFile = 1510;
declare type FP_FormatOverride = 590;
declare type FP_FormatTag = 2153;
declare type FP_FormattingLocked = 2891;
declare type FP_FrameParent = 774;
declare type FP_Functions = 339;
declare type FP_GeneralRule = 1575;
declare type FP_GeneralRuleErrorOffsets = 1578;
declare type FP_GenerateAcrobatInfo = 2250;
declare type FP_GenerateInclude = 517;
declare type FP_GraphicCantBeSelected = 772;
declare type FP_GraphicIsButton = 773;
declare type FP_GraphicIsSelected = 771;
declare type FP_Gravity = 107;
declare type FP_GreekSize = 63;
declare type FP_GroupDialog = 2349;
declare type FP_GroupParent = 777;
declare type FP_HasShiftOrUnshiftCommand = 1939;
declare type FP_HeadArrow = 743;
declare type FP_Height = 784;
declare type FP_HelpLink = 1938;
declare type FP_HelpPending = 102;
declare type FP_HiddenPage = 421;
declare type FP_HighestLevelElement = 1509;
declare type FP_HoleAtEnd = 1654;
declare type FP_HoleBeforeElement = 1659;
declare type FP_HorizontalSpreadLarge = 342;
declare type FP_HorizontalSpreadMed = 341;
declare type FP_HorizontalSpreadSmall = 340;
declare type FP_HostName = 81;
declare type FP_HotspotCmdStr = 2876;
declare type FP_HotspotTitle = 2877;
declare type FP_Hypertext = 1943;
declare type FP_HypertextCommandText = 2301;
declare type FP_HypertextDoValidate = 2300;
declare type FP_HypertextParseBadParam = 2305;
declare type FP_HypertextParseErr = 2303;
declare type FP_HypertextParseErrMsg = 2306;
declare type FP_HypertextParsedArgs = 2302;
declare type FP_HypertextParsedClientName = 2317;
declare type FP_HypertextParsedCmdCode = 2307;
declare type FP_HypertextParsedCmdDest = 2308;
declare type FP_HypertextParsedCmdDestObjID = 2310;
declare type FP_HypertextParsedCmdDestObjType = 2309;
declare type FP_HypertextParsedCmdMatrixColumns = 2312;
declare type FP_HypertextParsedCmdMatrixRows = 2311;
declare type FP_HypertextParsedDIFileName = 2320;
declare type FP_HypertextParsedFlowName = 2315;
declare type FP_HypertextParsedLinkName = 2313;
declare type FP_HypertextParsedMessage = 2319;
declare type FP_HypertextParsedPageName = 2314;
declare type FP_HypertextParsedRangeName = 2316;
declare type FP_HypertextParsedTitle = 2318;
declare type FP_HypertextValidateErr = 2304;
declare type FP_HyphMinPrefix = 575;
declare type FP_HyphMinSuffix = 560;
declare type FP_HyphMinWord = 576;
declare type FP_Hyphenate = 564;
declare type FP_IDAttrValue = 1637;
declare type FP_INSETinfo = 858;
declare type FP_Icon = 1716;
declare type FP_IconBarOn = 101;
declare type FP_IconColorPref = 1508;
declare type FP_IconSizePref = 1507;
declare type FP_ImportFilters = 2288;
declare type FP_ImportFmtInclude = 518;
declare type FP_ImportHint = 2055;
declare type FP_InCond = 1150;
declare type FP_InTableSortOperation = 2833;
declare type FP_InTextFrame = 1001;
declare type FP_InTextObj = 1000;
declare type FP_Inclusions = 1577;
declare type FP_IncrVal = 1711;
declare type FP_InitStructurePattern = 1585;
declare type FP_InkName = 1465;
declare type FP_InlineComponentType = 2896;
declare type FP_InsertLinks = 528;
declare type FP_InsetCuePointList = 2354;
declare type FP_InsetDpi = 853;
declare type FP_InsetEditor = 850;
declare type FP_InsetFile = 852;
declare type FP_InsetFileOrigName = 2814;
declare type FP_InsetGenericData = 2832;
declare type FP_InsetGfxActiveInPdf = 2836;
declare type FP_InsetGfxName = 2834;
declare type FP_InsetGfxPlayWindowInPdf = 2835;
declare type FP_InsetIsFixedSize = 854;
declare type FP_InsetIsFlippedSideways = 855;
declare type FP_InsetIsInverted = 856;
declare type FP_InsetJavaScriptAttached = 2837;
declare type FP_InsetJavaScriptFile = 2838;
declare type FP_InsetLinkToText = 2355;
declare type FP_InsetMonikerFilePath = 2849;
declare type FP_InsetMonikerPath = 2848;
declare type FP_InsetPosterFile = 2822;
declare type FP_InsetPosterFileOrigName = 2824;
declare type FP_InsetPosterIsExternal = 2821;
declare type FP_InsetRasterDpi = 857;
declare type FP_InsetSaveDIBFacetToFile = 2823;
declare type FP_InsetSaveFacetToFile = 2839;
declare type FP_InsetU3dAnimationList = 2844;
declare type FP_InsetU3dPartList = 2845;
declare type FP_InsetU3dViewList = 2846;
declare type FP_InsetURL = 2407;
declare type FP_InsetUpdater = 851;
declare type FP_InternalAlignment = 2390;
declare type FP_InternalAnchorType = 2383;
declare type FP_InternalBaselineOffset = 2384;
declare type FP_InternalHeight = 2374;
declare type FP_InternalMathMLApplyPgfStyle = 2389;
declare type FP_InternalMathMLComposeDpi = 2375;
declare type FP_InternalMathMLDpi = 2385;
declare type FP_InternalMathMLFontSize = 2376;
declare type FP_InternalMathMLInline = 2387;
declare type FP_InternalMathMLXmlData = 2377;
declare type FP_InternalWidth = 2373;
declare type FP_InvalidHighestLevel = 1661;
declare type FP_InvariantName = 1029;
declare type FP_IsDefault = 2850;
declare type FP_IsDialogDocked = 2345;
declare type FP_IsDialogVisible = 2346;
declare type FP_IsDitamapInResourceManager = 2332;
declare type FP_IsDocDita = 2880;
declare type FP_IsDocDitamap = 2879;
declare type FP_IsFMRunningAsServer = 2348;
declare type FP_IsFMRunningInTrialPeriod = 2412;
declare type FP_IsFateRun = 2847;
declare type FP_IsFormViewEnabled = 2437;
declare type FP_IsHotspot = 2875;
declare type FP_IsIconified = 31;
declare type FP_IsInFront = 32;
declare type FP_IsOnScreen = 110;
declare type FP_IsRestoring = 2892;
declare type FP_IsStale = 2851;
declare type FP_IsTechnicalSuiteLicensed = 2410;
declare type FP_IsTempOpenSave = 827;
declare type FP_IsTextRange = 2151;
declare type FP_KByteAllocationSize = 106;
declare type FP_KeepWithNext = 565;
declare type FP_KeepWithPrev = 551;
declare type FP_KernX = 616;
declare type FP_KernY = 617;
declare type FP_KeyCatalog = 2856;
declare type FP_KeyCatalogClientName = 2873;
declare type FP_KeyCatalogType = 2857;
declare type FP_KeyCatalogWorkflow = 2859;
declare type FP_KeyCount = 2860;
declare type FP_KeyboardShortcutLabel = 1929;
declare type FP_KeyboardShortcuts = 1930;
declare type FP_Label = 30;
declare type FP_LabelBold = 1721;
declare type FP_LabelColor = 1720;
declare type FP_Labels = 1703;
declare type FP_Language = 577;
declare type FP_LastAFrame = 975;
declare type FP_LastBodyPageInDoc = 416;
declare type FP_LastCell = 979;
declare type FP_LastChildElement = 1624;
declare type FP_LastColumnInSelection = 2428;
declare type FP_LastColumnInTbl = 2424;
declare type FP_LastFn = 977;
declare type FP_LastGraphicInFrame = 883;
declare type FP_LastGraphicInGroup = 808;
declare type FP_LastMasterPageInDoc = 418;
declare type FP_LastPgf = 973;
declare type FP_LastPgfRules = 1590;
declare type FP_LastRefPageInDoc = 420;
declare type FP_LastRowInTbl = 1339;
declare type FP_LastSubCol = 987;
declare type FP_LastTextFrameInFlow = 1170;
declare type FP_LastUpdate = 2052;
declare type FP_LastVisibleColumnInTbl = 2426;
declare type FP_Leading = 558;
declare type FP_LeadingChange = 2007;
declare type FP_LeftColNum = 1343;
declare type FP_LeftIndent = 555;
declare type FP_LeftIndentChange = 2004;
declare type FP_LeftMargin = 232;
declare type FP_LeftMasterPage = 413;
declare type FP_LetterSpace = 550;
declare type FP_LineAscent = 1900;
declare type FP_LineBaseline = 1902;
declare type FP_LineBreakAfter = 177;
declare type FP_LineCap = 753;
declare type FP_LineDescent = 1901;
declare type FP_LineNumColor = 4006;
declare type FP_LineNumDistance = 4001;
declare type FP_LineNumFont = 4004;
declare type FP_LineNumRestart = 4002;
declare type FP_LineNumShow = 4003;
declare type FP_LineNumSize = 4005;
declare type FP_LineSpacing = 587;
declare type FP_LineSpacingFactor = 988;
declare type FP_LineSpacingFixed = 2008;
declare type FP_LoadStartupScripts = 2886;
declare type FP_LocX = 781;
declare type FP_LocY = 782;
declare type FP_Locked = 588;
declare type FP_LogMissingFontsWarning = 2901;
declare type FP_Magenta = 1458;
declare type FP_MagicMarker = 488;
declare type FP_MainFlowInDoc = 422;
declare type FP_MarkerNames = 59;
declare type FP_MarkerText = 1025;
declare type FP_MarkerTypeId = 1027;
declare type FP_MarkerTypeNames = 149;
declare type FP_MasterPage = 690;
declare type FP_MatchesContextInUserString = 1642;
declare type FP_MatchingFirstPgfClauses = 1638;
declare type FP_MatchingLastPgfClauses = 1639;
declare type FP_MatchingObjectClauses = 1632;
declare type FP_MatchingPrefixClauses = 1640;
declare type FP_MatchingSuffixClauses = 1641;
declare type FP_MatchingTextClauses = 1631;
declare type FP_MathFullForm = 865;
declare type FP_MathMLApplyPgfStyle = 2388;
declare type FP_MathMLComposeDpi = 2367;
declare type FP_MathMLData = 2365;
declare type FP_MathMLDpi = 2360;
declare type FP_MathMLExportEntitiesAsValues = 2394;
declare type FP_MathMLFile = 2363;
declare type FP_MathMLFontSize = 2371;
declare type FP_MathMLImportGraphicsDpi = 2369;
declare type FP_MathMLInline = 2386;
declare type FP_MathMLIsFixedSize = 2361;
declare type FP_MathMLIsFlippedSideways = 2366;
declare type FP_MathMLIsInverted = 2362;
declare type FP_MathMLNamespacePrefix = 2378;
declare type FP_MathMLXmlData = 2359;
declare type FP_MathSize = 866;
declare type FP_MaxBottomMargin = 709;
declare type FP_MaxFirstIndent = 472;
declare type FP_MaxFontSize = 484;
declare type FP_MaxInterPgfPadding = 471;
declare type FP_MaxInterlinePadding = 470;
declare type FP_MaxJLetSpace = 596;
declare type FP_MaxJRomSpace = 593;
declare type FP_MaxLeading = 482;
declare type FP_MaxLeftIndent = 474;
declare type FP_MaxLeftMargin = 703;
declare type FP_MaxRightIndent = 476;
declare type FP_MaxRightMargin = 705;
declare type FP_MaxSize = 2352;
declare type FP_MaxSpace = 572;
declare type FP_MaxSpaceAbove = 478;
declare type FP_MaxSpaceBelow = 480;
declare type FP_MaxSpread = 486;
declare type FP_MaxStretch = 711;
declare type FP_MaxTabPosition = 701;
declare type FP_MaxTopMargin = 707;
declare type FP_MaxVal = 1710;
declare type FP_MenuBar = 143;
declare type FP_MenuItemIsEnabled = 1922;
declare type FP_MenuItemType = 1933;
declare type FP_MenuType = 1926;
declare type FP_Mif8bitOutput = 62;
declare type FP_MifFileEntity = 2828;
declare type FP_MifFileName = 2829;
declare type FP_MifFileOrigFormat = 2878;
declare type FP_MinBottomMargin = 710;
declare type FP_MinFirstIndent = 473;
declare type FP_MinFontSize = 485;
declare type FP_MinHang = 1164;
declare type FP_MinJLetSpace = 594;
declare type FP_MinJRomSpace = 591;
declare type FP_MinLeading = 483;
declare type FP_MinLeftIndent = 475;
declare type FP_MinLeftMargin = 704;
declare type FP_MinRightIndent = 477;
declare type FP_MinRightMargin = 706;
declare type FP_MinSize = 2351;
declare type FP_MinSpace = 571;
declare type FP_MinSpaceAbove = 479;
declare type FP_MinSpaceBelow = 481;
declare type FP_MinSpread = 487;
declare type FP_MinStretch = 712;
declare type FP_MinTabPosition = 702;
declare type FP_MinTopMargin = 708;
declare type FP_MinVal = 1709;
declare type FP_Mode = 1941;
declare type FP_ModelessDialogUpdate = 2895;
declare type FP_ModelessDlgIconN = 1728;
declare type FP_ModelessDlgIconR = 1729;
declare type FP_Month = 1725;
declare type FP_MoveTabs = 2014;
declare type FP_Name = 20;
declare type FP_Namespace = 1643;
declare type FP_NamespaceScope = 1644;
declare type FP_NarrowRubiSpaceForJapanese = 188;
declare type FP_NarrowRubiSpaceForOther = 190;
declare type FP_NewElemAttrDisplay = 1490;
declare type FP_NewElemAttrEditing = 1491;
declare type FP_NextAFrame = 885;
declare type FP_NextAttrCondExprInDoc = 2816;
declare type FP_NextBookComponentInDFSOrder = 2333;
declare type FP_NextCell = 1220;
declare type FP_NextCellInRow = 1202;
declare type FP_NextCellInTbl = 1199;
declare type FP_NextCharFmtInDoc = 603;
declare type FP_NextColorInDoc = 1455;
declare type FP_NextColumnInTbl = 2430;
declare type FP_NextCombinedFontDefnInDoc = 2281;
declare type FP_NextCommandInSession = 1942;
declare type FP_NextComponentInBook = 527;
declare type FP_NextCondFmtInDoc = 1138;
declare type FP_NextDITAConrefElementInDoc = 2866;
declare type FP_NextDITALinkElementInDoc = 2868;
declare type FP_NextDITATopicrefElementInDoc = 2869;
declare type FP_NextDITATopicsetrefElementInDoc = 2870;
declare type FP_NextDITAXrefElementInDoc = 2867;
declare type FP_NextElementDFS = 2334;
declare type FP_NextElementDefInDoc = 1572;
declare type FP_NextFlowInDoc = 1162;
declare type FP_NextFmtChangeListInDoc = 2000;
declare type FP_NextFn = 1005;
declare type FP_NextFnInDoc = 1003;
declare type FP_NextGraphicInDoc = 786;
declare type FP_NextGraphicInFrame = 776;
declare type FP_NextGraphicInGroup = 779;
declare type FP_NextGraphicsFmtInDoc = 3102;
declare type FP_NextInlineComponentInDoc = 2898;
declare type FP_NextInvalidElement = 1664;
declare type FP_NextKeyCatalogInSession = 2852;
declare type FP_NextMarkerInDoc = 1026;
declare type FP_NextMarkerTypeInDoc = 1028;
declare type FP_NextMenuItemInMenu = 1923;
declare type FP_NextMenuItemInSession = 1925;
declare type FP_NextOpenBookInSession = 490;
declare type FP_NextOpenDocInSession = 111;
declare type FP_NextPgfFmtInDoc = 580;
declare type FP_NextPgfInDoc = 716;
declare type FP_NextPgfInFlow = 717;
declare type FP_NextRowInTbl = 1245;
declare type FP_NextRubiInDoc = 1469;
declare type FP_NextRulingFmtInDoc = 1430;
declare type FP_NextSelectedComponentInBook = 530;
declare type FP_NextSelectedGraphicInDoc = 785;
declare type FP_NextSiblingElement = 1626;
declare type FP_NextSubCol = 2202;
declare type FP_NextTag = 552;
declare type FP_NextTblFmtInDoc = 1276;
declare type FP_NextTblInDoc = 1337;
declare type FP_NextTextFrameInFlow = 981;
declare type FP_NextTiInDoc = 2050;
declare type FP_NextVarFmtInDoc = 1051;
declare type FP_NextVarInDoc = 1046;
declare type FP_NextVisibleColumnInTbl = 2432;
declare type FP_NextXRefFmtInDoc = 1074;
declare type FP_NextXRefInDoc = 1072;
declare type FP_No3DInPDF = 2406;
declare type FP_NoAppOutputPIFiltered = 2884;
declare type FP_NoFlashInPDF = 2405;
declare type FP_NoMultiMediaInPDF = 2831;
declare type FP_NotLoaded = 2853;
declare type FP_NumAtEnd = 563;
declare type FP_NumCols = 235;
declare type FP_NumColumns = 984;
declare type FP_NumItems = 1707;
declare type FP_NumLines = 1704;
declare type FP_NumNamespaces = 1645;
declare type FP_NumPoints = 907;
declare type FP_NumTabs = 573;
declare type FP_Numbers = 338;
declare type FP_Object = 1630;
declare type FP_ObjectAttributes = 23;
declare type FP_ObjectFmtRules = 1583;
declare type FP_OldTypeNum = 1024;
declare type FP_OpenAndSaveXmlBookComponentDoc = 822;
declare type FP_OpenDir = 80;
declare type FP_OperatingSystem = 46;
declare type FP_OptJLetSpace = 595;
declare type FP_OptJRomSpace = 592;
declare type FP_OptSpace = 557;
declare type FP_OriginalDpi = 2397;
declare type FP_OriginalHeight = 2381;
declare type FP_OriginalWidth = 2382;
declare type FP_OrphanRows = 1291;
declare type FP_Outline = 612;
declare type FP_Overflowed = 983;
declare type FP_Overline = 610;
declare type FP_Overprint = 756;
declare type FP_OyamojiTextRange = 1470;
declare type FP_PDFAllNamedDestinations = 2257;
declare type FP_PDFBookmark = 2261;
declare type FP_PDFBookmarksOpenLevel = 2275;
declare type FP_PDFConvertCMYKtoRGB = 2274;
declare type FP_PDFDestsMarked = 2258;
declare type FP_PDFDistillerAbsent = 2276;
declare type FP_PDFDocInfo = 2260;
declare type FP_PDFEndPage = 2273;
declare type FP_PDFGenerateForReview = 2279;
declare type FP_PDFJobOption = 2263;
declare type FP_PDFJobOptions = 2899;
declare type FP_PDFJobOptionsAbsent = 2277;
declare type FP_PDFOpenPage = 2264;
declare type FP_PDFPageHeight = 2270;
declare type FP_PDFPageNum = 2402;
declare type FP_PDFPageWidth = 2269;
declare type FP_PDFPrintPageRange = 2271;
declare type FP_PDFRegistrationMarks = 2268;
declare type FP_PDFSeparateFiles = 2267;
declare type FP_PDFStartPage = 2272;
declare type FP_PDFStructure = 2259;
declare type FP_PDFStructureLevel = 600;
declare type FP_PDFViewPDF = 2278;
declare type FP_PDFZoomFactor = 2266;
declare type FP_PDFZoomType = 2265;
declare type FP_PageBackground = 689;
declare type FP_PageFrame = 695;
declare type FP_PageFramePage = 880;
declare type FP_PageHeight = 692;
declare type FP_PageIsRecto = 697;
declare type FP_PageNext = 694;
declare type FP_PageNum = 687;
declare type FP_PageNumComputeMethod = 524;
declare type FP_PageNumString = 696;
declare type FP_PageNumStyle = 225;
declare type FP_PagePrefix = 521;
declare type FP_PagePrev = 693;
declare type FP_PageRounding = 229;
declare type FP_PageSide = 523;
declare type FP_PageSuffix = 522;
declare type FP_PageWidth = 691;
declare type FP_PairKern = 614;
declare type FP_Pantone = 1456;
declare type FP_ParentElement = 1622;
declare type FP_ParentTextFrame = 2200;
declare type FP_ParseFullSpecification = 2163;
declare type FP_ParsedGeneralRule = 1592;
declare type FP_ParsedSpecification = 2160;
declare type FP_PasswordStyle = 1714;
declare type FP_Path = 85;
declare type FP_Pen = 742;
declare type FP_PercentDone = 104;
declare type FP_PgfAlignment = 547;
declare type FP_PgfBoxColor = 2364;
declare type FP_PgfCatalogReference = 2001;
declare type FP_PgfIsAutoNum = 562;
declare type FP_PgfMarkedForNamedDestination = 722;
declare type FP_PgfNumComputeMethod = 525;
declare type FP_PgfNumber = 719;
declare type FP_PgfSpacingFactor = 989;
declare type FP_PgfSpellChecked = 720;
declare type FP_PgfSplit = 721;
declare type FP_Placement = 579;
declare type FP_Platform = 45;
declare type FP_PointPageNum = 688;
declare type FP_PointPageNumStyle = 228;
declare type FP_Points = 908;
declare type FP_PolyIsBezier = 906;
declare type FP_Position = 620;
declare type FP_PrefixRules = 1587;
declare type FP_PreserveFormattingInXml = 2368;
declare type FP_PrevAFrame = 884;
declare type FP_PrevBookComponentInDFSOrder = 2340;
declare type FP_PrevCell = 1219;
declare type FP_PrevCellInRow = 1201;
declare type FP_PrevColumnInTbl = 2429;
declare type FP_PrevComponentInBook = 526;
declare type FP_PrevElementDFS = 2335;
declare type FP_PrevFn = 1004;
declare type FP_PrevGraphicInFrame = 775;
declare type FP_PrevGraphicInGroup = 778;
declare type FP_PrevMenuItemInMenu = 1924;
declare type FP_PrevPgfInFlow = 718;
declare type FP_PrevRowInTbl = 1244;
declare type FP_PrevSiblingElement = 1625;
declare type FP_PrevSubCol = 2201;
declare type FP_PrevTextFrameInFlow = 980;
declare type FP_PrevVisibleColumnInTbl = 2431;
declare type FP_PreviewState = 2820;
declare type FP_PrintBlankPages = 467;
declare type FP_PrintCollated = 446;
declare type FP_PrintCols = 441;
declare type FP_PrintDitavalFileName = 2343;
declare type FP_PrintDownloadAsianFonts = 501;
declare type FP_PrintDownloadTrueTypeAsType1 = 502;
declare type FP_PrintEmulsion = 466;
declare type FP_PrintEndPage = 453;
declare type FP_PrintEndPageName = 440;
declare type FP_PrintEndPoint = 454;
declare type FP_PrintEvenPages = 455;
declare type FP_PrintFileName = 451;
declare type FP_PrintImaging = 465;
declare type FP_PrintInclude = 519;
declare type FP_PrintLastSheetFirst = 456;
declare type FP_PrintLowRes = 447;
declare type FP_PrintManualFeed = 458;
declare type FP_PrintNumCopies = 459;
declare type FP_PrintOddPages = 445;
declare type FP_PrintPaperHeight = 462;
declare type FP_PrintPaperWidth = 461;
declare type FP_PrintRegMarkDate = 469;
declare type FP_PrintRegistrationMarks = 457;
declare type FP_PrintRows = 442;
declare type FP_PrintScale = 450;
declare type FP_PrintScope = 452;
declare type FP_PrintSeps = 463;
declare type FP_PrintSpotBW = 498;
declare type FP_PrintStartPage = 443;
declare type FP_PrintStartPageName = 439;
declare type FP_PrintStartPoint = 444;
declare type FP_PrintThumbnails = 448;
declare type FP_PrintToFile = 460;
declare type FP_PrintTomboMarks = 468;
declare type FP_PrinterName = 449;
declare type FP_ProcessNumber = 79;
declare type FP_Product = 1944;
declare type FP_ProductFamily = 2893;
declare type FP_ProductIsDemo = 66;
declare type FP_ProductIsStructured = 65;
declare type FP_ProductName = 42;
declare type FP_ProgId = 2421;
declare type FP_Public = 1030;
declare type FP_Radius = 950;
declare type FP_RasterFilterDpi = 2400;
declare type FP_ReadOnly = 1723;
declare type FP_RectangleIsSmoothed = 929;
declare type FP_Reformatting = 91;
declare type FP_RememberMissingFontNames = 61;
declare type FP_RemoveExtraWhiteSpacesOnXMLImport = 2830;
declare type FP_Required = 1032;
declare type FP_ReservedColor = 1463;
declare type FP_ResizeGripperBarVisibility = 2395;
declare type FP_ResizeGripperPos = 2350;
declare type FP_ResolvedDirection = 3038;
declare type FP_RestartFrameAlertRequired = 2370;
declare type FP_RetainUndoState = 64;
declare type FP_ReviewTime = 994;
declare type FP_ReviewerName = 993;
declare type FP_ReviewerNameList = 2825;
declare type FP_RightColNum = 1344;
declare type FP_RightIndent = 570;
declare type FP_RightIndentChange = 2006;
declare type FP_RightMargin = 233;
declare type FP_RightMasterPage = 414;
declare type FP_RowIsShown = 1254;
declare type FP_RowKeepWithNext = 1248;
declare type FP_RowKeepWithPrev = 1249;
declare type FP_RowMaxHeight = 1250;
declare type FP_RowMinHeight = 1251;
declare type FP_RowStart = 1252;
declare type FP_RowTbl = 1246;
declare type FP_RowType = 1253;
declare type FP_RpcProgramNumber = 77;
declare type FP_RpcPropertyName = 76;
declare type FP_RubiAlignAtLineBounds = 193;
declare type FP_RubiElement = 2176;
declare type FP_RubiFixedSize = 187;
declare type FP_RubiOverhang = 192;
declare type FP_RubiSize = 186;
declare type FP_RubiTextRange = 1471;
declare type FP_RuleClauseType = 2152;
declare type FP_RulingGap = 1433;
declare type FP_RulingLines = 1435;
declare type FP_RulingPenWidth = 1432;
declare type FP_RulingSep = 1434;
declare type FP_RunInSeparator = 578;
declare type FP_Runaround = 787;
declare type FP_RunaroundGap = 754;
declare type FP_ScreenCaptureDocToFile = 195;
declare type FP_ScreenHeight = 36;
declare type FP_ScreenWidth = 35;
declare type FP_ScreenX = 33;
declare type FP_ScreenY = 34;
declare type FP_SecNumComputeMethod = 915;
declare type FP_SectionNumStyle = 916;
declare type FP_SectionNumText = 918;
declare type FP_SectionNumber = 917;
declare type FP_SelectedRow = 1730;
declare type FP_SelectedRowId = 1731;
declare type FP_SelectedRowItems = 1719;
declare type FP_SelectedTbl = 129;
declare type FP_Sensitivity = 1708;
declare type FP_SepOverride = 1140;
declare type FP_SeparateInclusions = 1493;
declare type FP_ServerState = 2808;
declare type FP_ServerUrl = 2807;
declare type FP_Shadow = 613;
declare type FP_ShiftOrUnshiftCommand = 1940;
declare type FP_ShowAll = 155;
declare type FP_ShowCondIndicators = 156;
declare type FP_ShowElementDescriptiveNames = 1501;
declare type FP_SideHeadGap = 1173;
declare type FP_SideHeadPlacement = 1171;
declare type FP_SideHeadRoomInFlow = 1174;
declare type FP_SideHeadWidth = 1172;
declare type FP_SideOffset = 877;
declare type FP_Size = 1712;
declare type FP_SkipBlankSeps = 464;
declare type FP_SmallCapsSize = 182;
declare type FP_SmallCapsStretch = 185;
declare type FP_SmartQuotes = 237;
declare type FP_SmartSpaces = 239;
declare type FP_Snap = 151;
declare type FP_SnapAngle = 394;
declare type FP_SnapGridUnits = 393;
declare type FP_SortingEnabled = 1718;
declare type FP_Source = 2854;
declare type FP_SourceType = 2855;
declare type FP_SpaceAbove = 553;
declare type FP_SpaceAboveChange = 2002;
declare type FP_SpaceBelow = 568;
declare type FP_SpaceBelowChange = 2003;
declare type FP_Spacing = 1167;
declare type FP_Specification = 2150;
declare type FP_SpecificationForCSS = 2161;
declare type FP_SpecifiedKeyCatalog = 2858;
declare type FP_SpotColorView = 392;
declare type FP_Spread = 618;
declare type FP_SpreadChange = 2013;
declare type FP_StackWarningLevel = 2404;
declare type FP_Start = 567;
declare type FP_State = 1702;
declare type FP_StatusLine = 108;
declare type FP_StopCountingAt = 2102;
declare type FP_Stretch = 643;
declare type FP_StretchChange = 2026;
declare type FP_Strikethrough = 609;
declare type FP_Strings = 337;
declare type FP_StructAppAttrConfigFile = 1500;
declare type FP_StructAppsFile = 2889;
declare type FP_StructAppsFileId = 2890;
declare type FP_StructureCursorTypes = 2296;
declare type FP_StructuredApplication = 1495;
declare type FP_StructuredApplicationForOpen = 1498;
declare type FP_StructuredApplicationList = 1497;
declare type FP_StructuredDummyDocText = 2883;
declare type FP_StyleOverride = 1142;
declare type FP_StyleOverrides = 1151;
declare type FP_StyleTag = 770;
declare type FP_SubFmtRule = 2156;
declare type FP_SubScriptShift = 181;
declare type FP_SubScriptSize = 180;
declare type FP_SubScriptStretch = 184;
declare type FP_SubsecNumComputeMethod = 815;
declare type FP_SubsectionNumStyle = 816;
declare type FP_SubsectionNumText = 818;
declare type FP_SubsectionNumber = 817;
declare type FP_SuffixRules = 1588;
declare type FP_SuperScriptShift = 179;
declare type FP_SuperScriptSize = 178;
declare type FP_SuperScriptStretch = 183;
declare type FP_SuppressXMLParserWarnings = 2419;
declare type FP_Symbols = 334;
declare type FP_SymbolsList = 335;
declare type FP_SystemVar = 1049;
declare type FP_TabStops = 1715;
declare type FP_TableTagging = 1585;
declare type FP_Tabs = 574;
declare type FP_TailArrow = 744;
declare type FP_TblAlignment = 1282;
declare type FP_TblBodyElement = 2174;
declare type FP_TblBodyFirstColor = 1299;
declare type FP_TblBodyFirstFill = 1298;
declare type FP_TblBodyFirstPeriod = 1301;
declare type FP_TblBodyNextColor = 1304;
declare type FP_TblBodyNextFill = 1302;
declare type FP_TblBodyNextPeriod = 1303;
declare type FP_TblBodyRowRuling = 1310;
declare type FP_TblBodyRowRulingPeriod = 1294;
declare type FP_TblBodyShadeBy = 1300;
declare type FP_TblBottomRuling = 1306;
declare type FP_TblCatalogEntry = 1292;
declare type FP_TblCellBottomMargin = 1316;
declare type FP_TblCellLeftMargin = 1317;
declare type FP_TblCellRightMargin = 1318;
declare type FP_TblCellTopMargin = 1315;
declare type FP_TblColRuling = 1309;
declare type FP_TblColRulingPeriod = 1293;
declare type FP_TblColWidths = 1345;
declare type FP_TblElement = 2171;
declare type FP_TblFnCellPosition = 318;
declare type FP_TblFnCellPrefix = 320;
declare type FP_TblFnCellSuffix = 319;
declare type FP_TblFnCustNumString = 317;
declare type FP_TblFnFmt = 315;
declare type FP_TblFnNumComputeMethod = 324;
declare type FP_TblFnNumStyle = 316;
declare type FP_TblFnPosition = 321;
declare type FP_TblFnPrefix = 322;
declare type FP_TblFnSuffix = 323;
declare type FP_TblFooterElement = 2175;
declare type FP_TblHFColor = 1297;
declare type FP_TblHFFill = 1296;
declare type FP_TblHFRowRuling = 1312;
declare type FP_TblHFSeparatorRuling = 1311;
declare type FP_TblHeaderElement = 2173;
declare type FP_TblInLockedTi = 1319;
declare type FP_TblInitNumBodyRows = 1286;
declare type FP_TblInitNumCols = 1284;
declare type FP_TblInitNumFRows = 1287;
declare type FP_TblInitNumHRows = 1285;
declare type FP_TblLastBodyRuling = 1295;
declare type FP_TblLeftIndent = 1278;
declare type FP_TblLeftRuling = 1307;
declare type FP_TblNumCols = 1335;
declare type FP_TblNumRows = 1336;
declare type FP_TblNumbering = 1288;
declare type FP_TblOtherBodyRowRuling = 1313;
declare type FP_TblOtherColRuling = 1314;
declare type FP_TblPlacement = 1283;
declare type FP_TblRightIndent = 1279;
declare type FP_TblRightRuling = 1308;
declare type FP_TblSpaceAbove = 1280;
declare type FP_TblSpaceBelow = 1281;
declare type FP_TblTag = 1275;
declare type FP_TblTitleElement = 2172;
declare type FP_TblTitleGap = 1290;
declare type FP_TblTitlePosition = 1289;
declare type FP_TblTitleSelected = 1346;
declare type FP_TblTopRuling = 1305;
declare type FP_TblWidth = 1340;
declare type FP_TechSuiteInternal = 2409;
declare type FP_TechSuiteInternal2 = 2411;
declare type FP_TemplateDatas = 4007;
declare type FP_Text = 1701;
declare type FP_TextColor = 1503;
declare type FP_TextFmtRules = 1582;
declare type FP_TextIsInvalidInElement = 1660;
declare type FP_TextLineType = 1095;
declare type FP_TextLoc = 879;
declare type FP_TextRange = 1071;
declare type FP_TextSelection = 109;
declare type FP_Theta = 831;
declare type FP_TiAutomaticUpdate = 2051;
declare type FP_TiByRows = 2069;
declare type FP_TiClientData = 2079;
declare type FP_TiClientName = 2076;
declare type FP_TiClientSource = 2077;
declare type FP_TiClientType = 2078;
declare type FP_TiClientUpdateSilent = 2080;
declare type FP_TiEOLisEOP = 2065;
declare type FP_TiFile = 2053;
declare type FP_TiFileModDate = 2057;
declare type FP_TiFlowName = 2060;
declare type FP_TiFlowPageSpace = 2061;
declare type FP_TiFormat = 2062;
declare type FP_TiHeadersEmpty = 2068;
declare type FP_TiIsNested = 2058;
declare type FP_TiIsUnresolved = 2075;
declare type FP_TiLocked = 2056;
declare type FP_TiMacEdition = 2054;
declare type FP_TiMainFlow = 2059;
declare type FP_TiNumCols = 2072;
declare type FP_TiNumHeaderRows = 2067;
declare type FP_TiNumSeparators = 2071;
declare type FP_TiRemoveOverrides = 2064;
declare type FP_TiRemovePageBreaks = 2063;
declare type FP_TiSeparator = 2070;
declare type FP_TiTblTag = 2066;
declare type FP_TiTextEncoding = 2073;
declare type FP_TintBaseColor = 1467;
declare type FP_TintPercent = 755;
declare type FP_TmpDir = 86;
declare type FP_ToolBar = 95;
declare type FP_ToolTipText = 1727;
declare type FP_TopMargin = 230;
declare type FP_TopRowSelection = 1341;
declare type FP_TopSepAtIndent = 2009;
declare type FP_TopSeparator = 554;
declare type FP_TopicRefAbsoluteFilePath = 2347;
declare type FP_TrackChangesAddedColor = 2826;
declare type FP_TrackChangesDeletedColor = 2827;
declare type FP_TrackChangesOn = 2819;
declare type FP_Transient = 1031;
declare type FP_TrapwiseCompatibility = 495;
declare type FP_Tsume = 649;
declare type FP_TypeOfDisplayText = 500;
declare type FP_UIColorBackground = 2297;
declare type FP_UIColorRuler = 2298;
declare type FP_Underlining = 608;
declare type FP_UndoFDKRecording = 2403;
declare type FP_Unique = 21;
declare type FP_Untouchable = 146;
declare type FP_UpdatingStructure = 2888;
declare type FP_UseAFrameIsCropped = 3015;
declare type FP_UseAFrameIsFloating = 3014;
declare type FP_UseAlignment = 3018;
declare type FP_UseAnchorType = 3013;
declare type FP_UseAngle = 3007;
declare type FP_UseBaselineOffset = 3017;
declare type FP_UseBkColor = 991;
declare type FP_UseBorderWidth = 3001;
declare type FP_UseCapitalization = 636;
declare type FP_UseChangeBar = 628;
declare type FP_UseColGapWidth = 3020;
declare type FP_UseColor = 638;
declare type FP_UseColumnsAreBalanced = 3028;
declare type FP_UseDTheta = 3024;
declare type FP_UseFMConsoleForErrorLog = 825;
declare type FP_UseFill = 3002;
declare type FP_UseFlowIsAutoConnect = 3031;
declare type FP_UseFlowIsPostScript = 3032;
declare type FP_UseFontAngle = 624;
declare type FP_UseFontFamily = 621;
declare type FP_UseFontSize = 632;
declare type FP_UseFontVariation = 622;
declare type FP_UseFontWeight = 623;
declare type FP_UseHeight = 3011;
declare type FP_UseInitialStructure = 1492;
declare type FP_UseInitialStructureOfAutoInsertedElements = 1499;
declare type FP_UseInsetDpi = 3027;
declare type FP_UseKernX = 633;
declare type FP_UseKernY = 634;
declare type FP_UseLanguage = 645;
declare type FP_UseLocX = 3008;
declare type FP_UseLocY = 3009;
declare type FP_UseMathMLApplyPgfStyle = 3104;
declare type FP_UseMathMLComposeDpi = 3033;
declare type FP_UseMathMLDpi = 3035;
declare type FP_UseMathMLFontSize = 3034;
declare type FP_UseMathMLInline = 3103;
declare type FP_UseMathSize = 3026;
declare type FP_UseNextTag = 566;
declare type FP_UseNumColumns = 3019;
declare type FP_UseOutline = 629;
declare type FP_UseOverline = 627;
declare type FP_UseOverprint = 3006;
declare type FP_UsePairKern = 631;
declare type FP_UsePen = 3003;
declare type FP_UsePosition = 637;
declare type FP_UseRadius = 3030;
declare type FP_UseRunaround = 3012;
declare type FP_UseRunaroundGap = 3004;
declare type FP_UseSepOverride = 1141;
declare type FP_UseShadow = 630;
declare type FP_UseSideHeadGap = 3022;
declare type FP_UseSideHeadPlacement = 3029;
declare type FP_UseSideHeadWidth = 3021;
declare type FP_UseSideOffset = 3016;
declare type FP_UseSpread = 635;
declare type FP_UseStretch = 644;
declare type FP_UseStrikethrough = 626;
declare type FP_UseTextLineType = 3025;
declare type FP_UseTheta = 3023;
declare type FP_UseTintPercent = 3005;
declare type FP_UseTsume = 650;
declare type FP_UseUnderlining = 625;
declare type FP_UseWidth = 3010;
declare type FP_UserHomeDir = 84;
declare type FP_UserLogin = 83;
declare type FP_UserName = 82;
declare type FP_UserSettingsDir = 152;
declare type FP_UserString = 22;
declare type FP_ValidHighestLevel = 1574;
declare type FP_Validating = 94;
declare type FP_ValidationFlags = 1668;
declare type FP_VarFmt = 1047;
declare type FP_Variables = 336;
declare type FP_VersionDescription = 1512;
declare type FP_VersionMajor = 43;
declare type FP_VersionMinor = 44;
declare type FP_VersionRevision = 41;
declare type FP_VerticalSpreadLarge = 345;
declare type FP_VerticalSpreadMed = 344;
declare type FP_VerticalSpreadSmall = 343;
declare type FP_View = 1945;
declare type FP_ViewBorders = 382;
declare type FP_ViewBreadCrumbs = 2902;
declare type FP_ViewDisplayUnits = 390;
declare type FP_ViewFontSizeUnits = 396;
declare type FP_ViewGrid = 389;
declare type FP_ViewGridUnits = 386;
declare type FP_ViewHotspotIndicators = 2357;
declare type FP_ViewLinkBoundaries = 395;
declare type FP_ViewNoGraphics = 384;
declare type FP_ViewOnlyDeadCodes = 140;
declare type FP_ViewOnlyMenuBar = 144;
declare type FP_ViewOnlySelect = 139;
declare type FP_ViewOnlyWinBorders = 136;
declare type FP_ViewOnlyWinMenubar = 135;
declare type FP_ViewOnlyWinPalette = 134;
declare type FP_ViewOnlyWinPopup = 137;
declare type FP_ViewOnlyXRef = 138;
declare type FP_ViewPageScrolling = 385;
declare type FP_ViewRulerUnits = 391;
declare type FP_ViewRulers = 383;
declare type FP_ViewTextSymbols = 388;
declare type FP_Visibility = 1713;
declare type FP_VisualCaretMovement = 1511;
declare type FP_VolNumComputeMethod = 211;
declare type FP_VolumeNumStyle = 213;
declare type FP_VolumeNumText = 214;
declare type FP_VolumeNumber = 212;
declare type FP_WesternFamily = 2284;
declare type FP_WesternFontPanoseName = 648;
declare type FP_WesternFontPlatformName = 646;
declare type FP_WesternFontPostScriptName = 647;
declare type FP_WesternShift = 2286;
declare type FP_WesternSize = 2285;
declare type FP_WideRubiSpaceForJapanese = 189;
declare type FP_WideRubiSpaceForOther = 191;
declare type FP_Width = 783;
declare type FP_Window = 1946;
declare type FP_WindowHandle = 1717;
declare type FP_WindowSystem = 47;
declare type FP_XMLStructuredApplicationList = 1598;
declare type FP_XRefAltText = 1153;
declare type FP_XRefClientName = 1154;
declare type FP_XRefClientType = 1155;
declare type FP_XRefFile = 1070;
declare type FP_XRefFmt = 1073;
declare type FP_XRefIsUnresolved = 1077;
declare type FP_XRefResolvedWithKeyref = 1156;
declare type FP_XRefRetainKeydefText = 1157;
declare type FP_XRefSrcElemNonUniqueId = 1152;
declare type FP_XRefSrcIsElem = 1076;
declare type FP_XRefSrcText = 1075;
declare type FP_XSLTProcessors = 1506;
declare type FP_XSLTTransformationScenarioFile = 1505;
declare type FP_XmlApplicationForBookComponent = 2330;
declare type FP_XmlDocType = 2810;
declare type FP_XmlEncoding = 2801;
declare type FP_XmlFileEncoding = 2809;
declare type FP_XmlIsBook = 823;
declare type FP_XmlLock = 2841;
declare type FP_XmlPublicId = 2811;
declare type FP_XmlStandAlone = 2802;
declare type FP_XmlStyleSheet = 2803;
declare type FP_XmlStyleSheetList = 2804;
declare type FP_XmlSystemId = 2812;
declare type FP_XmlUseBOM = 2805;
declare type FP_XmlVersion = 2800;
declare type FP_XmlWellFormed = 2806;
declare type FP_YakumonoType = 597;
declare type FP_Year = 1726;
declare type FP_Yellow = 1459;
declare type FP_Zoom = 387;

// --------------------------------------------------
// Frame Return values
// --------------------------------------------------
declare type FR_CancelInsertElementOperation = -10010;
declare type FR_CancelOperation = -10001;
declare type FR_ClosedXRefDialog = -10008;
declare type FR_CommandDisabled = -10022;
declare type FR_CommandEnabled = -10021;
declare type FR_DialogStayUp = -10000;
declare type FR_DisplayedModalDialogForNonContainerElem = -10012;
declare type FR_DisplayedModelessDialogForNonContainerElem = -10009;
declare type FR_DisplayedTiDialog = -10002;
declare type FR_DisplayedXRefDialog = -10007;
declare type FR_ECMImportSuccess = -10003;
declare type FR_HideDialogOnClose = -10011;
declare type FR_KeyCatalogLoaded = -10020;
declare type FR_ModalCloseAlways = -10024;
declare type FR_ModalStayUp = -10000;
declare type FR_NoOperation = -10006;
declare type FR_SkipStep = -10004;
declare type FR_USE_EGREP = 3;
declare type FR_USE_GREP = 2;
declare type FR_USE_PERL = 1;
declare type FR_UpdateDITAReferenceFailed = -10014;
declare type FR_UpdateDITAReferenceFailedCannotConvertToFMObject = -10019;
declare type FR_UpdateDITAReferenceFailedCannotFindReferencedFile = -10017;
declare type FR_UpdateDITAReferenceFailedCannotOpenReferencedFile = -10018;
declare type FR_UpdateDITAReferenceFailedCannotResolveReference = -10016;
declare type FR_UpdateDITAReferenceFailedErrorImportingReferencedFile = -10023;
declare type FR_UpdateDITAReferenceFailedInvalidElementType = -10015;
declare type FR_UpdateDITAReferenceSuccess = -10013;
declare type FR_YesOperation = -10005;

// --------------------------------------------------
// Frame Scriptable function properties
// --------------------------------------------------
declare type FS_ActiveConditionalExpression = 6;
declare type FS_AddEditExpressions = 1;
declare type FS_AlertUserAboutFailure = 2;
declare type FS_AllowInconsistentNumProps = 6;
declare type FS_AllowNonFMFiles = 1;
declare type FS_AllowViewOnlyFiles = 3;
declare type FS_ApplyConditionalSettingsShowBookErrorLog = 10;
declare type FS_ApplyConditionalSettingsToNestedBooks = 9;
declare type FS_ApplyConditionalSettingsToViewOnlyDoc = 8;
declare type FS_AutoBackupOnSave = 6;
declare type FS_BeefyDoc = 32;
declare type FS_BleedBottom = 41;
declare type FS_BleedInside = 42;
declare type FS_BleedMarks = 35;
declare type FS_BleedOutside = 43;
declare type FS_BleedTop = 40;
declare type FS_BookIsInUse = 18;
declare type FS_CMSId = 48;
declare type FS_CMSSessionId = 49;
declare type FS_CellSeparator = 29;
declare type FS_ClickButton = 14;
declare type FS_ClientUpdateSilent = 47;
declare type FS_ColorBars = 36;
declare type FS_ConditionalExpressions = 5;
declare type FS_CropMarks = 34;
declare type FS_DeleteExpressions = 2;
declare type FS_DisallowBookDoc = 10;
declare type FS_DisallowBookMIF = 9;
declare type FS_DisallowDoc = 8;
declare type FS_DisallowFilterTypes = 11;
declare type FS_DisallowGraphicTypes = 9;
declare type FS_DisallowMIF = 7;
declare type FS_DisallowMacEditions = 10;
declare type FS_DisallowPlainText = 12;
declare type FS_DisallowSgml = 33;
declare type FS_DisallowXml = 43;
declare type FS_DitaApplyOutputTemaples = 82;
declare type FS_DitaBookChapterTemplate = 66;
declare type FS_DitaBookChapterTitleTemplate = 67;
declare type FS_DitaBookIndexTemplate = 68;
declare type FS_DitaBookLOFTemplate = 70;
declare type FS_DitaBookLOTTemplate = 69;
declare type FS_DitaBookSectionTemplate = 72;
declare type FS_DitaBookSectionTitleTemplate = 73;
declare type FS_DitaBookSubsectionTemplate = 74;
declare type FS_DitaBookSubsectionTitleTemplate = 75;
declare type FS_DitaBookTOCTemplate = 71;
declare type FS_DitaBookTitleTemplate = 65;
declare type FS_DitaCompositeDocTemplate = 30;
declare type FS_DitaGenerateBookTitlePage = 80;
declare type FS_DitaGenerateComponentsAtOneLoc = 26;
declare type FS_DitaGenerateFlatBook = 25;
declare type FS_DitaGenerateFolderTitlePage = 81;
declare type FS_DitaGenerateIndex = 77;
declare type FS_DitaGenerateLOF = 79;
declare type FS_DitaGenerateLOT = 78;
declare type FS_DitaGenerateTOC = 76;
declare type FS_DitaMaxRefLevels = 53;
declare type FS_DitaOptimizePostProcess = 83;
declare type FS_DitaPostProcessingOnBook = 27;
declare type FS_DitaSavePdfViaBook = 28;
declare type FS_DitavalCondTag = 23;
declare type FS_DitavalFile = 22;
declare type FS_DoNotLockFile = 54;
declare type FS_Doctype = 2;
declare type FS_DontNotifyAPIClients = 3;
declare type FS_Export = 4;
declare type FS_ExportFileName = 1;
declare type FS_ExportFileTypeHint = 14;
declare type FS_ExportNativeError = 2;
declare type FS_ExportObjectId = 7;
declare type FS_ExportObjectNeedsDpi = 12;
declare type FS_ExportStatus = 3;
declare type FS_ExportTextRange = 6;
declare type FS_ExportType = 5;
declare type FS_Extension = 5;
declare type FS_FileIsGraphic = 13;
declare type FS_FileIsInUse = 17;
declare type FS_FileIsMakerDoc = 18;
declare type FS_FileIsOldVersion = 20;
declare type FS_FileIsSgmlDoc = 32;
declare type FS_FileIsStructured = 21;
declare type FS_FileIsText = 16;
declare type FS_FileIsXmlDoc = 37;
declare type FS_FileName = 1;
declare type FS_FileQverwrite = 6;
declare type FS_FileType = 1;
declare type FS_FileTypeHint = 34;
declare type FS_FindCharFmt = 3;
declare type FS_FindCharTag = 5;
declare type FS_FindCondTextInCondTags = 13;
declare type FS_FindCondTextNotInCondTags = 14;
declare type FS_FindCustomizationFlags = 15;
declare type FS_FindElementTag = 2;
declare type FS_FindMarkerOfType = 9;
declare type FS_FindMarkerText = 10;
declare type FS_FindNamedVariable = 12;
declare type FS_FindObject = 8;
declare type FS_FindPgfTag = 4;
declare type FS_FindSelection = 19;
declare type FS_FindStyleTag = 18;
declare type FS_FindTableTag = 6;
declare type FS_FindText = 1;
declare type FS_FindWrap = 16;
declare type FS_FindXRefWithFormat = 11;
declare type FS_FitGraphicInSelectedRect = 14;
declare type FS_FontChangedMetric = 23;
declare type FS_FontNotFoundInCatalog = 28;
declare type FS_FontNotFoundInDoc = 22;
declare type FS_ForceImportAsText = 17;
declare type FS_ForceOpenAsText = 13;
declare type FS_FormatImportedText = 22;
declare type FS_GetCheckBoxState = 3;
declare type FS_GetDropDownActive = 12;
declare type FS_GetDropDownLabels = 11;
declare type FS_GetEditBoxText = 1;
declare type FS_GetListBoxActive = 9;
declare type FS_GetListBoxLabels = 7;
declare type FS_GetListViewRowCheckState = 17;
declare type FS_GetListViewRowData = 16;
declare type FS_GetListViewRows = 15;
declare type FS_GetRadioState = 5;
declare type FS_GraphicDpi = 15;
declare type FS_HasUnsupportedHotspotShapes = 29;
declare type FS_HideConditions = 3;
declare type FS_HowToImport = 4;
declare type FS_ImportAsType = 36;
declare type FS_ImportExportVersion = 17;
declare type FS_ImportFlowPageSpace = 21;
declare type FS_ImportFlowTag = 20;
declare type FS_ImportNativeError = 2;
declare type FS_ImportStatus = 3;
declare type FS_ImportTblTag = 25;
declare type FS_ImportedFileName = 1;
declare type FS_InsetData = 50;
declare type FS_InsetElementDef = 52;
declare type FS_IsErrorDoc = 46;
declare type FS_IterParamGetBookComponentFolder = 4;
declare type FS_IterParamGetBookComponentGroup = 5;
declare type FS_IterParamGetBookComponentRefBook = 6;
declare type FS_IterParamGetBookComponentRefMap = 7;
declare type FS_IterParamGetMapRef = 12;
declare type FS_IterParamParseBookInBook = 1;
declare type FS_IterParamParseMapInBook = 2;
declare type FS_IterParamParseMapInMap = 8;
declare type FS_IterParamSkipExcludedBookComponents = 3;
declare type FS_IterParamSkipNonPrintTopicrefs = 10;
declare type FS_IterParamSkipResourceOnlyTopicrefs = 9;
declare type FS_IterParamSkipTopicsetrefs = 11;
declare type FS_IteratorItemFieldBookId = 1;
declare type FS_IteratorItemFieldDocId = 2;
declare type FS_IteratorItemFieldObjId = 3;
declare type FS_IteratorItemMaxFields = 3;
declare type FS_LanguageNotAvailable = 25;
declare type FS_LeaveHeadingRowsEmpty = 27;
declare type FS_LockCantBeReset = 19;
declare type FS_MakeIconic = 6;
declare type FS_MakePageCount = 7;
declare type FS_MakeVisible = 5;
declare type FS_ManualUpdate = 5;
declare type FS_MappingFile = 53;
declare type FS_MarksOffset = 39;
declare type FS_MarksWeight = 38;
declare type FS_MathMLExportEntityAsValue = 2;
declare type FS_MathMLNamespacePrefix = 1;
declare type FS_ModDateChanged = 21;
declare type FS_NameStripe = 31;
declare type FS_NewDoc = 29;
declare type FS_NoStructuredErrorLog = 44;
declare type FS_NumCellSeparators = 30;
declare type FS_NumColumns = 31;
declare type FS_NumConditionalSettingsParams = 10;
declare type FS_NumExportParams = 17;
declare type FS_NumExportReturnParams = 3;
declare type FS_NumImportParams = 48;
declare type FS_NumImportReturnParams = 3;
declare type FS_NumIteratorParams = 12;
declare type FS_NumManageConditionalExpressionsParams = 2;
declare type FS_NumNewXMLParams = 6;
declare type FS_NumOpenParams = 54;
declare type FS_NumOpenReturnParams = 3;
declare type FS_NumSaveParams = 83;
declare type FS_NumSaveReturnParams = 3;
declare type FS_NumSpellParams = 8;
declare type FS_NumUpdateBookParams = 14;
declare type FS_NumUpdateBookReturnParams = 1;
declare type FS_OpenAsType = 41;
declare type FS_OpenBookViewOnly = 42;
declare type FS_OpenDocFluid = 37;
declare type FS_OpenDocViewOnly = 30;
declare type FS_OpenFileNotWritable = 40;
declare type FS_OpenId = 27;
declare type FS_OpenInNewWindow = 26;
declare type FS_OpenNativeError = 2;
declare type FS_OpenOldVersionFiles = 13;
declare type FS_OpenStatus = 3;
declare type FS_OpenedFileName = 1;
declare type FS_OutputFilePathName = 1006;
declare type FS_PDFColorSpace = 55;
declare type FS_PDFCompatibility = 47;
declare type FS_PDFEmbedPageThumbnails = 57;
declare type FS_PDFLayout = 50;
declare type FS_PDFOpenPage = 48;
declare type FS_PDFOptimizedWebView = 58;
declare type FS_PDFPageNum = 45;
declare type FS_PDFPageRangeEnd = 54;
declare type FS_PDFPageRangeStart = 53;
declare type FS_PDFPages = 52;
declare type FS_PDFPassword = 33;
declare type FS_PDFPreset = 45;
declare type FS_PDFPrimaryOutput = 51;
declare type FS_PDFStandard = 46;
declare type FS_PDFTag = 56;
declare type FS_PDFUseDistiller = 60;
declare type FS_PDFView = 59;
declare type FS_PDFZoom = 49;
declare type FS_PageHeight = 63;
declare type FS_PageInfo = 37;
declare type FS_PageWidth = 64;
declare type FS_PublicId = 3;
declare type FS_PublishLogFilePath = 84;
declare type FS_QrCodeType = 2;
declare type FS_QrCodeTypeParams = 3;
declare type FS_QrDocGraphicsDpi = 5;
declare type FS_QrImageDimensions = 4;
declare type FS_RasterDpi = 38;
declare type FS_RasterImageHeight = 40;
declare type FS_RasterImageWidth = 39;
declare type FS_RefFileNotFound = 24;
declare type FS_RegMarks = 62;
declare type FS_RegexFlavour = 17;
declare type FS_RemoveManualPageBreaks = 23;
declare type FS_RemoveOverrides = 24;
declare type FS_RetainNameStripe = 12;
declare type FS_SaveAsModeName = 5;
declare type FS_SaveFileNotWritable = 20;
declare type FS_SaveFileTypeHint = 16;
declare type FS_SaveMode = 4;
declare type FS_SaveNativeError = 2;
declare type FS_SaveStatus = 3;
declare type FS_SaveTextExtraBlankLineAtEOP = 10;
declare type FS_SaveTextTblSetting = 9;
declare type FS_SavedFileName = 1;
declare type FS_SelectListViewRows = 19;
declare type FS_SetCheckBoxState = 4;
declare type FS_SetDropDownActive = 13;
declare type FS_SetEditBoxText = 2;
declare type FS_SetListBoxActive = 10;
declare type FS_SetListBoxLabels = 8;
declare type FS_SetListViewRowCheckState = 18;
declare type FS_SetRadioState = 6;
declare type FS_SgmlBookFileName = 39;
declare type FS_ShowBookErrorLog = 4;
declare type FS_ShowBookErrorLogPublishing = 32;
declare type FS_ShowBrowser = 1;
declare type FS_ShowConditionIndicators = 7;
declare type FS_ShowConditions = 2;
declare type FS_ShowIfAllCond = 4;
declare type FS_ShowProgressBar = 31;
declare type FS_ShowRasterDpiDialog = 41;
declare type FS_ShowSaveTextDialog = 8;
declare type FS_ShowState = 1;
declare type FS_SilentlyDisallowXML = 51;
declare type FS_SlugArea = 61;
declare type FS_SpellAction = 1005;
declare type FS_SpellOptions = 1000;
declare type FS_SpellWrap = 1007;
declare type FS_StructuredApplication = 1;
declare type FS_StructuredExportApplication = 16;
declare type FS_StructuredImportApplication = 35;
declare type FS_StructuredOpenApplication = 38;
declare type FS_StructuredSaveApplication = 18;
declare type FS_SystemId = 4;
declare type FS_TblNumHeadingRows = 26;
declare type FS_TemplateShouldInsertRoot = 47;
declare type FS_TextAfterString = 1003;
declare type FS_TextBeforeString = 1002;
declare type FS_TextInsetName = 6;
declare type FS_TreatParaAsRow = 28;
declare type FS_TwoInARowString = 1001;
declare type FS_UNIXpermissions = 13;
declare type FS_UpdateBookGeneratedFiles = 7;
declare type FS_UpdateBookInlineComponents = 14;
declare type FS_UpdateBookMasterPages = 12;
declare type FS_UpdateBookNumbering = 8;
declare type FS_UpdateBookOleLinks = 9;
declare type FS_UpdateBookStatus = 1;
declare type FS_UpdateBookTextReferences = 10;
declare type FS_UpdateBookXRefs = 11;
declare type FS_UpdateBrowserDirectory = 4;
declare type FS_UpdateFRVList = 14;
declare type FS_UpdateMTOC = 52;
declare type FS_UpdateTemplateData = 50;
declare type FS_UpdateTextReferences = 35;
declare type FS_UpdateXRefs = 36;
declare type FS_UseAutoSaveFile = 15;
declare type FS_UseDefaultUNIXpermissions = 11;
declare type FS_UseHTTP = 51;
declare type FS_UseMainFlow = 19;
declare type FS_UseRecoverFile = 14;
declare type FS_VerifyInsets = 45;
declare type FS_Visible = 6;
declare type FS_WordContainString = 1004;

// --------------------------------------------------
// Frame Types
// --------------------------------------------------
declare type FT_AttributeDefs = 17;
declare type FT_Attributes = 18;
declare type FT_AttributesEx = 21;
declare type FT_Bad = 0;
declare type FT_ElementCatalog = 12;
declare type FT_ElementRange = 19;
declare type FT_FormatBranches = 16;
declare type FT_Id = 4;
declare type FT_Integer = 1;
declare type FT_Ints = 13;
declare type FT_Metric = 2;
declare type FT_Metrics = 5;
declare type FT_Num = 23;
declare type FT_Points = 7;
declare type FT_String = 3;
declare type FT_Strings = 6;
declare type FT_Tabs = 8;
declare type FT_TemplateDatas = 22;
declare type FT_TextLoc = 9;
declare type FT_TextRange = 10;
declare type FT_UBytes = 14;
declare type FT_UInts = 15;
declare type FT_Vals = 20;

// --------------------------------------------------
// Frame Text Flags
// --------------------------------------------------
declare type FTF_ALL = 0xfffffe03;
declare type FTF_ANGLE = 0x10000000;
declare type FTF_CAPITALIZATION = 0x00004000;
declare type FTF_CHANGEBAR = 0x01000000;
declare type FTF_CHARTAG = 0x00008000;
declare type FTF_COLOR = 0x00010000;
declare type FTF_CONDITIONTAG = 0x00000001;
declare type FTF_ENCODING = 0x00000200;
declare type FTF_FAMILY = 0x80000000;
declare type FTF_IIF = 0x00000002;
declare type FTF_KERNX = 0x00080000;
declare type FTF_KERNY = 0x00040000;
declare type FTF_LANGUAGE = 0x00000800;
declare type FTF_OUTLINE = 0x00800000;
declare type FTF_OVERLINE = 0x02000000;
declare type FTF_PAIRKERN = 0x00200000;
declare type FTF_POSITION = 0x00002000;
declare type FTF_SHADOW = 0x00400000;
declare type FTF_SIZE = 0x00100000;
declare type FTF_SPREAD = 0x00020000;
declare type FTF_STRETCH = 0x00001000;
declare type FTF_STRIKETHROUGH = 0x04000000;
declare type FTF_TSUME = 0x00000400;
declare type FTF_UNDERLINING = 0x08000000;
declare type FTF_VARIATION = 0x40000000;
declare type FTF_WEIGHT = 0x20000000;

// --------------------------------------------------
// Frame Text Item codes
// --------------------------------------------------
declare type FTI_CharPropsChange = 0x00200000;
declare type FTI_ElemPrefixBegin = 0x08000000;
declare type FTI_ElemPrefixEnd = 0x10000000;
declare type FTI_ElemSuffixBegin = 0x20000000;
declare type FTI_ElemSuffixEnd = 0x40000000;
declare type FTI_ElementBegin = 0x00080000;
declare type FTI_ElementEnd = 0x00100000;
declare type FTI_FlowBegin = 0x00000020;
declare type FTI_FlowEnd = 0x00000040;
declare type FTI_FnAnchor = 0x00001000;
declare type FTI_FrameAnchor = 0x00000800;
declare type FTI_HardLineEnd = 1;
declare type FTI_HyphenLineEnd = 2;
declare type FTI_LineBegin = 0x00000002;
declare type FTI_LineEnd = 0x00000004;
declare type FTI_MarkerAnchor = 0x00004000;
declare type FTI_PageBegin = 0x00000080;
declare type FTI_PageEnd = 0x00000100;
declare type FTI_PgfBegin = 0x00000008;
declare type FTI_PgfEnd = 0x00000010;
declare type FTI_String = 0x00000001;
declare type FTI_SubColBegin = 0x00000200;
declare type FTI_SubColEnd = 0x00000400;
declare type FTI_TblAnchor = 0x00002000;
declare type FTI_TextFrameBegin = 0x00400000;
declare type FTI_TextFrameEnd = 0x00800000;
declare type FTI_TextInsetBegin = 0x02000000;
declare type FTI_TextInsetEnd = 0x04000000;
declare type FTI_TextObjId = 0x01000000;
declare type FTI_VarBegin = 0x00020000;
declare type FTI_VarEnd = 0x00040000;
declare type FTI_XRefBegin = 0x00008000;
declare type FTI_XRefEnd = 0x00010000;

declare type FTI2_InlineComponentBegin = 0x80000010;
declare type FTI2_InlineComponentEnd = 0x80000020;
declare type FTI2_RubiCompositeBegin = 0x80000004;
declare type FTI2_RubiCompositeEnd = 0x80000008;
declare type FTI2_RubiTextBegin = 0x80000001;
declare type FTI2_RubiTextEnd = 0x80000002;

// --------------------------------------------------
// Frame Values
// --------------------------------------------------
declare type FV_ACCESSBAR_CLOSE = 2;
declare type FV_ACCESSBAR_OPEN = 1;
declare type FV_AF_FIXED = 0x0004;
declare type FV_AF_HIDDEN = 0x0002;
declare type FV_AF_READ_ONLY = 0x0001;
declare type FV_ALIGN_CENTER = 1;
declare type FV_ALIGN_INSIDE = 3;
declare type FV_ALIGN_LEFT = 0;
declare type FV_ALIGN_OUTSIDE = 4;
declare type FV_ALIGN_RIGHT = 2;
declare type FV_ALIGN_TBL_CENTER = 1;
declare type FV_ALIGN_TBL_LEFT = 0;
declare type FV_ALIGN_TBL_RIGHT = 2;
declare type FV_ALTERNATIVE = 0x04;
declare type FV_ANCHOR_BELOW = 3;
declare type FV_ANCHOR_BOTTOM = 4;
declare type FV_ANCHOR_INLINE = 1;
declare type FV_ANCHOR_RUN_INTO_PARAGRAPH = 17;
declare type FV_ANCHOR_SUBCOL_FARTHEST = 8;
declare type FV_ANCHOR_SUBCOL_INSIDE = 9;
declare type FV_ANCHOR_SUBCOL_LEFT = 5;
declare type FV_ANCHOR_SUBCOL_NEAREST = 7;
declare type FV_ANCHOR_SUBCOL_OUTSIDE = 10;
declare type FV_ANCHOR_SUBCOL_RIGHT = 6;
declare type FV_ANCHOR_TEXTFRAME_FARTHEST = 14;
declare type FV_ANCHOR_TEXTFRAME_INSIDE = 15;
declare type FV_ANCHOR_TEXTFRAME_LEFT = 11;
declare type FV_ANCHOR_TEXTFRAME_NEAREST = 13;
declare type FV_ANCHOR_TEXTFRAME_OUTSIDE = 16;
declare type FV_ANCHOR_TEXTFRAME_RIGHT = 12;
declare type FV_ANCHOR_TOP = 2;
declare type FV_ANSI = 3;
declare type FV_ARROW_FILLED = 0x3;
declare type FV_ARROW_HOLLOW = 0x2;
declare type FV_ARROW_STICK = 0x1;
declare type FV_ASCII = 2;
declare type FV_ATTR_DISP_ALL = 3;
declare type FV_ATTR_DISP_NONE = 1;
declare type FV_ATTR_DISP_REQSPEC = 2;
declare type FV_ATTR_EDIT_ALWAYS = 2;
declare type FV_ATTR_EDIT_NONE = 0;
declare type FV_ATTR_EDIT_REQUIRED = 1;
declare type FV_AT_CHOICES = 2;
declare type FV_AT_INTEGER = 3;
declare type FV_AT_INTEGERS = 4;
declare type FV_AT_NUMTYPES = 10;
declare type FV_AT_REAL = 5;
declare type FV_AT_REALS = 6;
declare type FV_AT_STRING = 0;
declare type FV_AT_STRINGS = 1;
declare type FV_AT_UNIQUE_ID = 7;
declare type FV_AT_UNIQUE_IDREF = 8;
declare type FV_AT_UNIQUE_IDREFS = 9;
declare type FV_AUTORECOGNIZE = 0x00;
declare type FV_AV_IDREF_UNRESOLVED = 4;
declare type FV_AV_ID_DUPLICATE_IN_BOOK = 6;
declare type FV_AV_ID_DUPLICATE_IN_DOC = 5;
declare type FV_AV_INVALID_CHOICE = 2;
declare type FV_AV_INVALID_FORMAT = 3;
declare type FV_AV_OUT_OF_RANGE = 9;
declare type FV_AV_REQUIRED = 1;
declare type FV_AV_TOO_MANY_TOKENS = 7;
declare type FV_AV_UNDEFINED = 8;
declare type FV_Above = 1240;
declare type FV_AlertOneButton = 1;
declare type FV_AlertThreeButton = 3;
declare type FV_AlertTwoButton = 2;
declare type FV_AllElements = 2;
declare type FV_AllowAllRefFilesUnFindable = 11;
declare type FV_ApiClientCanceledExport = 34;
declare type FV_AutoSaveFileUsed = 34;
declare type FV_BGD_DEFAULT = 0x00;
declare type FV_BGD_NONE = 0x01;
declare type FV_BGD_OTHER = 0x02;
declare type FV_BIG5 = 8;

declare type FV_BK_BOOK = 0x4;
declare type FV_BK_BOOKMAP = 0x100;
declare type FV_BK_DITAMAP = 0x80;
declare type FV_BK_FILE = 0x200;
declare type FV_BK_FILENAME = 1;
declare type FV_BK_FM = 0x8;
declare type FV_BK_FOLDER = 0x2;
declare type FV_BK_GENERAL = 0x1;
declare type FV_BK_GROUP = 0x40;
declare type FV_BK_INDEX_AUTHOR = 8;
declare type FV_BK_INDEX_FORMATS = 13;
declare type FV_BK_INDEX_MARKER = 10;
declare type FV_BK_INDEX_REFERENCES = 14;
declare type FV_BK_INDEX_STAN = 7;
declare type FV_BK_INDEX_SUBJECT = 9;
declare type FV_BK_LIST_FIGURE = 1;
declare type FV_BK_LIST_FORMATS = 11;
declare type FV_BK_LIST_MARKER = 4;
declare type FV_BK_LIST_MARKER_ALPHA = 5;
declare type FV_BK_LIST_PGF = 3;
declare type FV_BK_LIST_PGF_ALPHA = 6;
declare type FV_BK_LIST_REFERENCES = 12;
declare type FV_BK_LIST_TABLE = 2;
declare type FV_BK_MIF = 0x10;
declare type FV_BK_NOT_GENERATABLE = 16;
declare type FV_BK_NUM_BOOK_LIST = 15;
declare type FV_BK_START_FROM_FILE = 0x01;
declare type FV_BK_START_LEFT = 0x03;
declare type FV_BK_START_NEXT_AVAILABLE = 0x02;
declare type FV_BK_START_RIGHT = 0x04;
declare type FV_BK_TEXT = 2;
declare type FV_BK_TOC = 0;
declare type FV_BK_XML = 0x20;

declare type BookComponentType =
	| FV_BK_TOC
	| FV_BK_LIST_FIGURE
	| FV_BK_LIST_TABLE
	| FV_BK_LIST_PGF
	| FV_BK_LIST_MARKER
	| FV_BK_LIST_MARKER_ALPHA
	| FV_BK_LIST_PGF_ALPHA
	| FV_BK_INDEX_STAN
	| FV_BK_INDEX_AUTHOR
	| FV_BK_INDEX_SUBJECT
	| FV_BK_INDEX_MARKER
	| FV_BK_LIST_FORMATS
	| FV_BK_LIST_REFERENCES
	| FV_BK_INDEX_FORMATS
	| FV_BK_INDEX_REFERENCES
	| FV_BK_NOT_GENERATABLE;

declare type FV_BODY_PAGE = 0x00;
declare type FV_BadEnclosingDocId = 28;
declare type FV_BadExportDocId = 20;
declare type FV_BadExportFileName = 16;
declare type FV_BadExportObjectId = 18;
declare type FV_BadExportScriptValue = 21;
declare type FV_BadFileId = 35;
declare type FV_BadFileName = 67;
declare type FV_BadFileRefsWereMapped = 46;
declare type FV_BadFileType = 66;
declare type FV_BadImportFileName = 16;
declare type FV_BadImportFileType = 17;
declare type FV_BadImportScriptValue = 18;
declare type FV_BadSaveFileName = 34;
declare type FV_BadSaveObjectId = 40;
declare type FV_BadSaveScriptValue = 36;
declare type FV_BadScriptValue = 70;
declare type FV_BadTemplate = 129;
declare type FV_BadTextFileTypeHint = 29;
declare type FV_BadUpdateBookFileId = 64;
declare type FV_BadUpdateBookScriptValue = 65;
declare type FV_BeefyDoc = 40;
declare type FV_Below = 1241;
declare type FV_Body = 1237;
declare type FV_BodyPage = 10;
declare type FV_BookNotSelfConsistent = 0;
declare type FV_BrowseCmsOnly = 0x00020000;
declare type FV_BrowseLocalOnly = 0x00010000;
declare type FV_BrowseLocalWithWebdavOnly = 0x00040000;
declare type FV_CAPITAL_CASE_LOWER = 2;
declare type FV_CAPITAL_CASE_NORM = 0;
declare type FV_CAPITAL_CASE_SMALL = 1;
declare type FV_CAPITAL_CASE_UPPER = 3;
declare type FV_CAP_BUTT = 0x00;
declare type FV_CAP_ROUND = 0x01;
declare type FV_CAP_SQUARE = 0x02;
declare type FV_CB_COL_FURTHEST = 0x03;
declare type FV_CB_COL_LEFT = 0x00;
declare type FV_CB_COL_NEAREST = 0x02;
declare type FV_CB_COL_RIGHT = 0x01;
declare type FV_CB_DOUBLE_UNDERLINE = 2;
declare type FV_CB_NO_UNDERLINE = 0;
declare type FV_CB_NUMERIC_UNDERLINE = 3;
declare type FV_CB_SINGLE_UNDERLINE = 1;
declare type FV_CHAR_CATALOG = 6;
declare type FV_CMSCheckinUI_Id_CheckinComment = 44;
declare type FV_CMSCheckinUI_Id_Description = 45;
declare type FV_CMSCheckinUI_Id_MajorVersion = 46;
declare type FV_CMSCheckinUI_Id_MakeThisCurrentVersion = 47;
declare type FV_CMSCheckinUI_Id_MinorVersion = 48;
declare type FV_CMSCheckinUI_Id_SameVersion = 49;
declare type FV_CMSCheckinUI_Id_VersionLabel = 50;
declare type FV_CMSCheckoutUI_Id_ShowDependents = 51;
declare type FV_CMSCommandAdvancedSearchStringId = 52;
declare type FV_CMSCommandCheckinCommentId = 53;
declare type FV_CMSCommandCheckinDescriptionId = 54;
declare type FV_CMSCommandCheckinKeepLocalCopyId = 55;
declare type FV_CMSCommandCheckinMakeCurrentVersionId = 56;
declare type FV_CMSCommandCheckinMinorVersionId = 57;
declare type FV_CMSCommandCheckinVersionLabelId = 58;
declare type FV_CMSCommandCheckoutWithDescendentId = 59;
declare type FV_CMSCommandConnTypeId = 60;
declare type FV_CMSCommandDeleteAllDependentsId = 61;
declare type FV_CMSCommandDeleteAllVersionId = 62;
declare type FV_CMSCommandFilePathId = 63;
declare type FV_CMSCommandId = 64;
declare type FV_CMSCommandId_Max = 65;
declare type FV_CMSCommandId_Min = 66;
declare type FV_CMSCommandNameId = 67;
declare type FV_CMSCommandOpenReadOnlyId = 68;
declare type FV_CMSCommandPasswordId = 69;
declare type FV_CMSCommandRefreshDependentsId = 70;
declare type FV_CMSCommandRepositoryId = 71;
declare type FV_CMSCommandSearchStringId = 72;
declare type FV_CMSCommandServerId = 73;
declare type FV_CMSCommandSilentOpenId = 74;
declare type FV_CMSCommandUserField1 = 75;
declare type FV_CMSCommandUserField2 = 76;
declare type FV_CMSCommandUserNameId = 77;
declare type FV_CMSContextMenuId = 78;
declare type FV_CMSContextMenuString = 79;
declare type FV_CMSDeleteUI_DeleteAllDependents = 80;
declare type FV_CMSDeleteUI_DeleteAllVersion = 81;
declare type FV_CMSItemFileTypeValue_DitaMap = 82;
declare type FV_CMSItemFileTypeValue_DitaTopic = 83;
declare type FV_CMSItemFileTypeValue_FmBook = 84;
declare type FV_CMSItemFileTypeValue_FmDoc = 85;
declare type FV_CMSItemFileTypeValue_General = 86;
declare type FV_CMSItemFileTypeValue_Img = 87;
declare type FV_CMSItemFileTypeValue_Max = 88;
declare type FV_CMSItemFileTypeValue_Mif = 89;
declare type FV_CMSItemFileTypeValue_Min = 90;
declare type FV_CMSItemFileTypeValue_Text = 91;
declare type FV_CMSItemFileTypeValue_Xml = 92;
declare type FV_CMSItemTypeValue_File = 93;
declare type FV_CMSItemTypeValue_Folder = 94;
declare type FV_CMSItemTypeValue_General = 95;
declare type FV_CMSItemTypeValue_Max = 96;
declare type FV_CMSItemTypeValue_Min = 97;
declare type FV_CMSItemTypeValue_Root = 98;
declare type FV_CMSMajorVersion = 99;
declare type FV_CMSMenu_Is_Disabled = 100;
declare type FV_CMSMenu_Is_Item = 101;
declare type FV_CMSMenu_Is_Separator = 102;
declare type FV_CMSMenu_Is_SubMenu = 103;
declare type FV_CMSMenu_Max = 104;
declare type FV_CMSMenu_Min = 105;
declare type FV_CMSMinorVersion = 106;
declare type FV_CMSOpChildAdded = 107;
declare type FV_CMSOpDependentsDeleted = 108;
declare type FV_CMSOpDependentsUpdated = 109;
declare type FV_CMSOpDocumentOpened = 110;
declare type FV_CMSOpItemDeleted = 111;
declare type FV_CMSOpItemUpdated = 112;
declare type FV_CMSOpNone = 113;
declare type FV_CMSOpRootUpdated = 114;
declare type FV_CMSSameVersion = 115;
declare type FV_CMSSilentOperation = 116;
declare type FV_CMSUserFieldType_Edit = 117;
declare type FV_CMSUserFieldType_FileBrowse = 118;
declare type FV_CMSUserFieldType_FolderBrowse = 119;
declare type FV_CMSVersion_Max = 120;
declare type FV_CMSVersion_Min = 121;
declare type FV_CMS_TYPE_DITAEXCHANGE = 0x03;
declare type FV_CMS_TYPE_DOCUMENTUM = 0x01;
declare type FV_CMS_TYPE_NONE = 0x00;
declare type FV_CMS_TYPE_SHAREPOINT = 0x02;
declare type FV_CN_CHANGEBAR = 5;
declare type FV_CN_DOUBLE_UNDERLINE = 4;
declare type FV_CN_NMRIC_AND_CHNGBAR = 7;
declare type FV_CN_NO_OVERRIDE = 0;
declare type FV_CN_NUMERIC_UNDERLINE = 6;
declare type FV_CN_OVERLINE = 1;
declare type FV_CN_SINGLE_UNDERLINE = 3;
declare type FV_CN_STRIKETHROUGH = 2;
declare type FV_COLOR_BLACK = 4;
declare type FV_COLOR_BLUE = 8;
declare type FV_COLOR_CYAN = 1;
declare type FV_COLOR_DARKGREY = 9;
declare type FV_COLOR_DARKYELLOW = 15;
declare type FV_COLOR_FORESTGREEN = 11;
declare type FV_COLOR_GREEN = 7;
declare type FV_COLOR_KNOCKOUT = 0x00;
declare type FV_COLOR_LIGHTSALMON = 14;
declare type FV_COLOR_MAGENTA = 2;
declare type FV_COLOR_MAUVE = 13;
declare type FV_COLOR_NOT_RESERVED = 0;
declare type FV_COLOR_OVERPRINT = 0x01;
declare type FV_COLOR_PALEGREEN = 10;
declare type FV_COLOR_RED = 6;
declare type FV_COLOR_ROYALBLUE = 12;
declare type FV_COLOR_SALMON = 16;
declare type FV_COLOR_WHITE = 5;
declare type FV_COLOR_YELLOW = 3;
declare type FV_CONTEXT_RULE = 0;
declare type FV_CS_CHANGEBAR = 0x10;
declare type FV_CS_DOUBLE_UNDERLINE = 0x08;
declare type FV_CS_NO_OVERRIDE = 0x00;
declare type FV_CS_NUMERIC_UNDERLINE = 0x20;
declare type FV_CS_OVERLINE = 0x01;
declare type FV_CS_SINGLE_UNDERLINE = 0x04;
declare type FV_CS_STRIKETHROUGH = 0x02;
declare type FV_CancelBeefyDoc = 114;
declare type FV_CancelBook = 108;
declare type FV_CancelBookMIF = 109;
declare type FV_CancelFileBrowser = 113;
declare type FV_CancelFileDoc = 33;
declare type FV_CancelFileFilterable = 35;
declare type FV_CancelFileGraphic = 36;
declare type FV_CancelFileHasStructure = 100;
declare type FV_CancelFileIsDoc = 106;
declare type FV_CancelFileIsFilterable = 110;
declare type FV_CancelFileIsInUse = 99;
declare type FV_CancelFileIsMIF = 107;
declare type FV_CancelFileIsMacEdition = 39;
declare type FV_CancelFileIsOldVersion = 111;
declare type FV_CancelFileIsSgml = 115;
declare type FV_CancelFileIsText = 98;
declare type FV_CancelFileIsXml = 119;
declare type FV_CancelFileMIF = 34;
declare type FV_CancelFileSgml = 40;
declare type FV_CancelFileText = 32;
declare type FV_CancelFileXml = 41;
declare type FV_CancelFontMetricsChanged = 104;
declare type FV_CancelFontsMapped = 103;
declare type FV_CancelFontsMappedInCatalog = 105;
declare type FV_CancelFontsWithUnavailableEncodings = 116;
declare type FV_CancelImportBrowser = 38;
declare type FV_CancelInconsistentNumPropsInFileInBook = 34;
declare type FV_CancelLanguagesNotFound = 102;
declare type FV_CancelNonFMFileInBook = 32;
declare type FV_CancelOpenFileNotWritable = 117;
declare type FV_CancelReferencedFilesNotFound = 101;
declare type FV_CancelSaveExportedFileInvalid = 53;
declare type FV_CancelSaveFileIsInUse = 50;
declare type FV_CancelSaveFileNotWritable = 51;
declare type FV_CancelSaveModDateChanged = 52;
declare type FV_CancelTempDiskFull = 118;
declare type FV_CancelUseAutoSaveFile = 97;
declare type FV_CancelUseRecoverFile = 96;
declare type FV_CancelViewOnlyFileInBook = 33;
declare type FV_CancelWrongProduct = 121;
declare type FV_CancelWrongView = 120;
declare type FV_CanceledExportObjectNeedsDpi = 33;
declare type FV_CantForceImportAsText = 20;
declare type FV_CantForceOpenAsText = 72;
declare type FV_CantNewBooks = 68;
declare type FV_CantOpenBooksFluid = 78;
declare type FV_CantOpenBooksViewOnly = 69;
declare type FV_ChangePersonalDictionary = 8;
declare type FV_CheckCurrentPage = 2;
declare type FV_CheckDocument = 1;
declare type FV_ChecksumDamage = 77;
declare type FV_ChooseMultiOpen = 0x00000010;
declare type FV_ChooseMultiSelect = 0x00000008;
declare type FV_ChooseOpen = 0x00000001;
declare type FV_ChooseOpenDir = 0x00000004;
declare type FV_ChooseSave = 0x00000002;
declare type FV_ChooseSelect = 0x00000000;
declare type FV_ClearDocDictionary = 7;
declare type FV_CmdAlert = 8;
declare type FV_CmdAlertTitle = 9;
declare type FV_CmdApplyMathRules = 259;
declare type FV_CmdBeginRange = 263;
declare type FV_CmdEndRange = 264;
declare type FV_CmdError = 1;
declare type FV_CmdExit = 10;
declare type FV_CmdFCodes = 256;
declare type FV_CmdGoToLink = 11;
declare type FV_CmdGoToLinkFitWin = 12;
declare type FV_CmdGoToNew = 13;
declare type FV_CmdGoToObjectId = 15;
declare type FV_CmdGoToObjectIdFitWin = 16;
declare type FV_CmdGoToPage = 14;
declare type FV_CmdHelpLink = 262;
declare type FV_CmdInCodes = 258;
declare type FV_CmdMatrix = 17;
declare type FV_CmdMessage = 18;
declare type FV_CmdMultiMedia = 33;
declare type FV_CmdNative = 261;
declare type FV_CmdNewLink = 19;
declare type FV_CmdNextPage = 20;
declare type FV_CmdNoop = 3;
declare type FV_CmdNotTyped = 0;
declare type FV_CmdOpenLink = 22;
declare type FV_CmdOpenLinkFitWin = 23;
declare type FV_CmdOpenNew = 24;
declare type FV_CmdOpenObjectId = 25;
declare type FV_CmdOpenObjectIdFitWin = 26;
declare type FV_CmdOpenPage = 27;
declare type FV_CmdOpenXmlElementId = 821;
declare type FV_CmdOutCodes = 257;
declare type FV_CmdPopup = 28;
declare type FV_CmdPreviousLink = 29;
declare type FV_CmdPreviousLinkFitWin = 30;
declare type FV_CmdPreviousPage = 21;
declare type FV_CmdQuit = 31;
declare type FV_CmdQuitAll = 32;
declare type FV_CmdThesaurusLookup = 260;
declare type FV_CmdUnknown = 2;
declare type FV_DEPENDENCIES_SHOW_PROGRESSBAR = 0x01;
declare type FV_DIALOG_DOCK_ALL = 0xff;
declare type FV_DIALOG_DOCK_BOTTOM = 8; // 0x1 << 3
declare type FV_DIALOG_DOCK_LEFT = 0x1;
declare type FV_DIALOG_DOCK_NONE = 0x00;
declare type FV_DIALOG_DOCK_RIGHT = 2; // 0x1 << 1
declare type FV_DIALOG_DOCK_TOP = 4; // 0x1 << 2
declare type FV_DIALOG_GRIPPERBAR_FALSE = 1;
declare type FV_DIALOG_GRIPPERBAR_TRUE = 0;
declare type FV_DIALOG_GROUP_ALL = 0xff;
declare type FV_DIALOG_GROUP_ALLPANELS = 128; // 0x1 << 7
declare type FV_DIALOG_GROUP_ATTRIBUTES = 8; // 0x1 << 3
declare type FV_DIALOG_GROUP_CATALOGS = 2; // 0x1 << 1
declare type FV_DIALOG_GROUP_DESIGNERS = 4; // 0x1 << 2
declare type FV_DIALOG_GROUP_EDIT = 64; // 0x1 << 6
declare type FV_DIALOG_GROUP_NONE = 0x0;
declare type FV_DIALOG_GROUP_PODS = 16; // 0x1 << 4
declare type FV_DIALOG_GROUP_PODSRIGHT = 32; // 0x1 << 5
declare type FV_DIALOG_GROUP_RIGHT_BOTTOM = 1024; // 0x1 << 10
declare type FV_DIALOG_GROUP_RIGHT_TOP = 512; // 0x1 << 9
declare type FV_DIALOG_GROUP_RMKITS = 256; // 0x1 << 8
declare type FV_DIALOG_GROUP_SPECIAL = 0x1;
declare type FV_DIALOG_RESIZEGRIPPERPOS_BELOW = 2;
declare type FV_DIALOG_RESIZEGRIPPERPOS_FRONT = 1;
declare type FV_DIALOG_RESIZEGRIPPERPOS_NONE = 0;
declare type FV_DIR_Inherit = 0;
declare type FV_DIR_LTR = 1;
declare type FV_DIR_RTL = 2;
declare type FV_DITAObjTypeAuto = 0;
declare type FV_DITAObjTypeConref = 1;
declare type FV_DITAObjTypeLink = 3;
declare type FV_DITAObjTypeMax = 6;
declare type FV_DITAObjTypeTopicref = 4;
declare type FV_DITAObjTypeTopicsetref = 5;
declare type FV_DITAObjTypeXref = 2;
declare type FV_DITA_TYPE_ANCHOR = 12;
declare type FV_DITA_TYPE_GENERAL = 1;
declare type FV_DITA_TYPE_KEYDEF = 3;
declare type FV_DITA_TYPE_MAPREF = 8;
declare type FV_DITA_TYPE_NAVREF = 9;
declare type FV_DITA_TYPE_RELTABLE = 2;
declare type FV_DITA_TYPE_TITLE = 10;
declare type FV_DITA_TYPE_TOPICGROUP = 4;
declare type FV_DITA_TYPE_TOPICHEAD = 5;
declare type FV_DITA_TYPE_TOPICREF = 11;
declare type FV_DITA_TYPE_TOPICSET = 7;
declare type FV_DITA_TYPE_TOPICSETREF = 6;
declare type FV_DOC_ISNOT_DITAMAP = 31;
declare type FV_DOC_TYPE_BINARY = 0x01;
declare type FV_DOC_TYPE_FILTER = 0x04;
declare type FV_DOC_TYPE_MIF = 0x03;
declare type FV_DOC_TYPE_TEXT = 0x02;
declare type FV_DT_FLOAT = 2;
declare type FV_DT_INTEGER = 1;
declare type FV_DT_NUMTYPES = 3;
declare type FV_DT_UNSPECIFIED = 0;
declare type FV_DeleteEmptyPages = 4;
declare type FV_DestFirstPage = 2;
declare type FV_DestFluidFlow = 5;
declare type FV_DestLastPage = 3;
declare type FV_DestMarker = 6;
declare type FV_DestMarkerNewLink = 1;
declare type FV_DestNowhere = 0;
declare type FV_DestObjectId = 7;
declare type FV_DestPageNum = 4;
declare type FV_DestXRef = 8;
declare type FV_DisallowedImportType = 21;
declare type FV_DisallowedType = 73;
declare type FV_DlgClose = -1;
declare type FV_DlgEnter = -4;
declare type FV_DlgHide = -10;
declare type FV_DlgInit = -9;
declare type FV_DlgNeedsUpdate = -8;
declare type FV_DlgNextPage = -7;
declare type FV_DlgNoChange = -3;
declare type FV_DlgOptActive = 1;
declare type FV_DlgOptDontCare = 2;
declare type FV_DlgOptNotActive = 0;
declare type FV_DlgPrefCommit = -102;
declare type FV_DlgPrefSetInitialState = -100;
declare type FV_DlgPrefVerify = -101;
declare type FV_DlgPrevPage = -6;
declare type FV_DlgReset = -2;
declare type FV_DlgResize = -12;
declare type FV_DlgShow = -11;
declare type FV_DlgTypeModal = 1;
declare type FV_DlgTypeModeless = 2;
declare type FV_DlgUndo = -5;
declare type FV_DoByCopy = 6;
declare type FV_DoByRef = 5;
declare type FV_DoCancel = 0;
declare type FV_DoImportAsTable = 8;
declare type FV_DoNo = 3;
declare type FV_DoOK = 1;
declare type FV_DoOnline = 0;
declare type FV_DoPrint = 1;
declare type FV_DoShowDialog = 4;
declare type FV_DoUserChoice = 7;
declare type FV_DoUserPreference = 12;
declare type FV_DoYes = 2;
declare type FV_DocDamagedByTextFilter = 74;
declare type FV_DocHeadersDamaged = 75;
declare type FV_DocKeyCatalogTypeDefault = 0;
declare type FV_DocKeyCatalogTypeMax = 3;
declare type FV_DocKeyCatalogTypeNone = 2;
declare type FV_DocKeyCatalogTypeSpecified = 1;
declare type FV_DocWrongSize = 76;
declare type FV_DocumentDictionary = 2;
declare type FV_DontChangePageCount = 1;
declare type FV_DuplicateFileInBook = 1;
declare type FV_EDT_AFTER = 49;
declare type FV_EDT_ALL = 43;
declare type FV_EDT_ANY = 42;
declare type FV_EDT_ATTRGRPO = 30;
declare type FV_EDT_BEFORE = 50;
declare type FV_EDT_BETWEEN = 53;
declare type FV_EDT_ELEMENT = 25;
declare type FV_EDT_FIRST = 44;
declare type FV_EDT_INSERTPAR = 23;
declare type FV_EDT_LAST = 46;
declare type FV_EDT_MIDDLE = 45;
declare type FV_EDT_NOTFIRST = 47;
declare type FV_EDT_NOTLAST = 48;
declare type FV_EDT_ONLY = 62;
declare type FV_EDT_TEXT = 40;
declare type FV_EDT_TEXTONLY = 41;
declare type FV_ELCAT_ALL = 0x03;
declare type FV_ELCAT_CHILDREN = 0x02;
declare type FV_ELCAT_CUSTOM = 0x04;
declare type FV_ELCAT_LOOSE = 0x01;
declare type FV_ELCAT_STRICT = 0x00;
declare type FV_ELEMENT_CATALOG = 8;
declare type FV_ELEM_ATTRVAL_INVALID = 0x4000;
declare type FV_ELEM_ATTRVAL_REQUIRED = 0x2000;
declare type FV_ELEM_BOOK_COMP_INVALID = 0x1000;
declare type FV_ELEM_BOOK_COMP_MISSING = 0x0800;
declare type FV_ELEM_CONTENT_LOOSELY_VALID = 0x20000;
declare type FV_ELEM_CONTENT_MUST_BE_EMPTY = 0x0040;
declare type FV_ELEM_CONTENT_STRICTLY_VALID = 0x10000;
declare type FV_ELEM_DISP_BRACKETS = 1;
declare type FV_ELEM_DISP_NONE = 0;
declare type FV_ELEM_DISP_TAGS = 2;
declare type FV_ELEM_EXCLUDED = 0x0004;
declare type FV_ELEM_HAS_TEXT_INVALID = 0x0020;
declare type FV_ELEM_INVALID_AT_POSITION = 0x0010;
declare type FV_ELEM_INVALID_IN_PARENT = 0x0008;
declare type FV_ELEM_INVISIBLE_ATTRVAL_INVALID = 0x80000;
declare type FV_ELEM_INVISIBLE_ATTRVAL_REQUIRED = 0x40000;
declare type FV_ELEM_MISSING_CONTENT_AT_BEG = 0x0100;
declare type FV_ELEM_MISSING_CONTENT_AT_END = 0x0200;
declare type FV_ELEM_MISSING_CONTENT_BEFORE = 0x0080;
declare type FV_ELEM_NOT_VALID_AS_ROOT = 0x0400;
declare type FV_ELEM_TYPE_MISMATCH = 0x0002;
declare type FV_ELEM_UNDEFINED = 0x0001;
declare type FV_EMUL_DOWN = 1;
declare type FV_EMUL_UP = 0;
declare type FV_ENABLE_ALWAYS_DISABLE = 2;
declare type FV_ENABLE_ALWAYS_ENABLE = 1;
declare type FV_ENABLE_BOOK_HAS_SELECTION = 29;
declare type FV_ENABLE_CAN_PASTE = 24;
declare type FV_ENABLE_COPY = 22;
declare type FV_ENABLE_COPY_FONT = 23;
declare type FV_ENABLE_DOC_OR_BOOK_HAS_SELECTION = 30;
declare type FV_ENABLE_IN_CELL_TEXT = 11;
declare type FV_ENABLE_IN_FLOW = 21;
declare type FV_ENABLE_IN_MATH = 6;
declare type FV_ENABLE_IN_PARA_TEXT = 3;
declare type FV_ENABLE_IN_TABLE = 9;
declare type FV_ENABLE_IN_TABLE_TITLE = 10;
declare type FV_ENABLE_IN_TEXT = 7;
declare type FV_ENABLE_IN_TEXT_LINE = 4;
declare type FV_ENABLE_IS_AFRAME = 18;
declare type FV_ENABLE_IS_CELL = 12;
declare type FV_ENABLE_IS_CELLS = 13;
declare type FV_ENABLE_IS_GRAPHIC_INSET = 20;
declare type FV_ENABLE_IS_OBJ = 15;
declare type FV_ENABLE_IS_OR_IN_FRAME = 17;
declare type FV_ENABLE_IS_TABLE = 14;
declare type FV_ENABLE_IS_TEXT_FRAME = 16;
declare type FV_ENABLE_IS_TEXT_INSET = 19;
declare type FV_ENABLE_IS_TEXT_SEL = 5;
declare type FV_ENABLE_IS_VIEW_ONLY = 25;
declare type FV_ENABLE_NEEDS_BOOKP_ONLY = 27;
declare type FV_ENABLE_NEEDS_DOCP_ONLY = 26;
declare type FV_ENABLE_NEEDS_DOCP_OR_BOOKP = 28;
declare type FV_ENABLE_OBJ_PROPS = 8;
declare type FV_ENUMERATE_BOOKCOMP_FOLDER = 256; // 1 << 8
declare type FV_ENUMERATE_BOOKCOMP_GROUP = 512; // 1 << 9
declare type FV_ENUMERATE_COMPFILE_BOOKBINARY = 16384; // 1 << 14
declare type FV_ENUMERATE_COMPFILE_BOOKMIF = 32768; // 1 << 15
declare type FV_ENUMERATE_COMPFILE_FMBINARY = 4096; // 1 << 12
declare type FV_ENUMERATE_COMPFILE_FMMIF = 8192; // 1 << 13
declare type FV_ENUMERATE_COMPFILE_XML = 65536; // 1 << 16
declare type FV_ENUMERATE_COMP_CHILDBOOK_COMPONENTS = 128; // 1 << 7
declare type FV_ENUMERATE_COMP_CHILDMAP_COMPONENTS = 64; // 1 << 6
declare type FV_ENUMERATE_COMP_FOLDER_COMPONENTS = 1024; // 1 << 10
declare type FV_ENUMERATE_COMP_GROUP_COMPONENTS = 2048; // 1 << 11
declare type FV_ENUMERATE_DITACOMP_KEYDEF = 32; // 1 << 5
declare type FV_ENUMERATE_DITACOMP_MAPREF = 4; // 1 << 2
declare type FV_ENUMERATE_DITACOMP_TOPICREF = 2; // 1 << 1
declare type FV_ENUMERATE_DITACOMP_TOPICSET = 8; // 1 << 3
declare type FV_ENUMERATE_DITACOMP_TOPICSETREF = 16; // 1 << 4
declare type FV_EUC = 7;
declare type FV_EUC_CNS = 9;
declare type FV_EXCLUDE_CONREF_DEPENDENCIES = 0x20;
declare type FV_EXCLUDE_GRAPHICS_DEPENDENCIES = 0x01;
declare type FV_EXCLUDE_NONE = 0x10;
declare type FV_EXCLUDE_OLE_DEPENDENCIES = 0x04;
declare type FV_EXCLUDE_TEXT_INSET_DEPENDENCIES = 0x02;
declare type FV_EXCLUDE_XREF_DEPENDENCIES = 0x08;
declare type FV_EditableCopyOpened = 45;
declare type FV_Element = 0;
declare type FV_ElementsOfType = 1;
declare type FV_EnclosingDoc = 1;
declare type FV_EvCaps = 0x0008;
declare type FV_EvCommand = 0x0010;
declare type FV_EvControl = 0x0002;
declare type FV_EvMax = 0x0010;
declare type FV_EvMeta = 0x0004;
declare type FV_EvOption = 0x0004;
declare type FV_EvShift = 0x0001;
declare type FV_ExportDocument = 0;
declare type FV_ExportFileHasNewName = 0;
declare type FV_ExportFileNotWritable = 2;
declare type FV_ExportObject = 1;
declare type FV_ExportProductIsViewer = 1;
declare type FV_FAMILY_MAPPED = 0x00000004;
declare type FV_FAMILY_SELECTABLE = 0x00000002;
declare type FV_FAMILY_SURROGATE = 0xffff0000;
declare type FV_FAMILY_VISIBLE = 0x00000001;
declare type FV_FILL_BLACK = 0;
declare type FV_FILL_CLEAR = 15;
declare type FV_FILL_WHITE = 7;
declare type FV_FIT_FRAME_TO_IMAGE = 0;
declare type FV_FIT_FRAME_TO_IMAGE_PROPORTIONAL = 2;
declare type FV_FIT_IMAGE_TO_FRAME = 1;
declare type FV_FIT_WINDOW_TO_PAGE = -3;
declare type FV_FIXED_YAKUMONO = 0x02;
declare type FV_FLOATING_YAKUMONO = 0x00;
declare type FV_FN_NUM_ABJAD_NUMERIC = 0x14;
declare type FV_FN_NUM_ALIFBATA_NUMERIC = 0x15;
declare type FV_FN_NUM_ALPHA_LC = 0x04;
declare type FV_FN_NUM_ALPHA_UC = 0x03;
declare type FV_FN_NUM_CHINESE_NUMERIC = 0x10;
declare type FV_FN_NUM_CUSTOM = 0x05;
declare type FV_FN_NUM_DAIJI = 0x0b;
declare type FV_FN_NUM_FARSI_ALPHA = 0x18;
declare type FV_FN_NUM_FARSI_NUMERIC = 0x12;
declare type FV_FN_NUM_FULL_WIDTH = 0x0c;
declare type FV_FN_NUM_FULL_WIDTH_LC = 0x0e;
declare type FV_FN_NUM_FULL_WIDTH_UC = 0x0d;
declare type FV_FN_NUM_HEBREW_ALPHA = 0x19;
declare type FV_FN_NUM_HEBREW_NUMERIC = 0x13;
declare type FV_FN_NUM_INDIC_NUMERIC = 0x11;
declare type FV_FN_NUM_KANJI = 0x06;
declare type FV_FN_NUM_KANJI_KAZU = 0x0a;
declare type FV_FN_NUM_NUMERIC = 0x00;
declare type FV_FN_NUM_ROMAN_LC = 0x02;
declare type FV_FN_NUM_ROMAN_UC = 0x01;
declare type FV_FN_NUM_THAI_ALPHA = 0x17;
declare type FV_FN_NUM_THAI_NUMERIC = 0x16;
declare type FV_FN_NUM_ZENKAKU = 0x07;
declare type FV_FN_NUM_ZENKAKU_LC = 0x09;
declare type FV_FN_NUM_ZENKAKU_UC = 0x08;
declare type FV_FN_POS_BASELINE = 0x01;
declare type FV_FN_POS_SUB = 0x02;
declare type FV_FN_POS_SUPER = 0x00;
declare type FV_FORMATBAR_CLOSE = 5;
declare type FV_FORMATBAR_OPEN = 4;
declare type FV_FO_CONTAINER = 1;
declare type FV_FO_EQN = 7;
declare type FV_FO_FOOTNOTE = 5;
declare type FV_FO_GRAPHIC = 6;
declare type FV_FO_MARKER = 4;
declare type FV_FO_MMLEQN = 17;
declare type FV_FO_NUMTYPES = 18;
declare type FV_FO_RUBI = 16;
declare type FV_FO_RUBI_GROUP = 15;
declare type FV_FO_SYS_VAR = 2;
declare type FV_FO_TBL = 8;
declare type FV_FO_TBL_BODY = 11;
declare type FV_FO_TBL_CELL = 14;
declare type FV_FO_TBL_FOOTING = 12;
declare type FV_FO_TBL_HEADING = 10;
declare type FV_FO_TBL_ROW = 13;
declare type FV_FO_TBL_TITLE = 9;
declare type FV_FO_TEXTNODE = 0;
declare type FV_FO_UNSPECIFIED = 0;
declare type FV_FO_XREF = 3;
declare type FV_FROMCOLOR = 0x02;
declare type FV_FTON = 2;
declare type FV_FileAlreadyOpen = 48;
declare type FV_FileAlreadyOpenThisSession = 65;
declare type FV_FileHadStructure = 64;
declare type FV_FileHasNewName = 32;
declare type FV_FileInBookNotOpened = 96;
declare type FV_FileInBookNotSaved = 97;
declare type FV_FileIsNotWritable = 6;
declare type FV_FileIsOldVersion = 41;
declare type FV_FileIsText = 43;
declare type FV_FileIsViewOnly = 4;
declare type FV_FileModDateChanged = 7;
declare type FV_FileNotReadable = 130;
declare type FV_FileNotSupported = 0;
declare type FV_FileNotSupportedFormViewXml = -1;
declare type FV_FileNotSupportedValidXml = -2;
declare type FV_FileNotWritable = 33;
declare type FV_FileOpenAlertUserAboutFailure = 0x00000002;
declare type FV_FileOpenMakeVisible = 0x00000001;
declare type FV_FileOpenUpdateTextReferences = 0x00000008;
declare type FV_FileOpenUpdateXRefs = 0x00000004;
declare type FV_FileStructureStripped = 42;
declare type FV_FileSupported = 1;
declare type FV_FileTypeBinaryBook = 2;
declare type FV_FileTypeBinaryDoc = 1;
declare type FV_FileTypeCompositeDoc = 13;
declare type FV_FileTypeEquation = 11;
declare type FV_FileTypeErrorDoc = 10;
declare type FV_FileTypeFilter = 7;
declare type FV_FileTypeFolder = 8;
declare type FV_FileTypeGeneral = 9;
declare type FV_FileTypeMif = 3;
declare type FV_FileTypeSgml = 5;
declare type FV_FileTypeSummaryDoc = 14;
declare type FV_FileTypeText = 6;
declare type FV_FileTypeThesaurus = 12;
declare type FV_FileTypeXml = 4;
declare type FV_FileWasExported = 49;
declare type FV_FileWasFiltered = 35;
declare type FV_FileWasInUse = 3;
declare type FV_FilterFailed = 22;
declare type FV_FindAnchoredFrame = 7;
declare type FV_FindAnyMarker = 0;
declare type FV_FindAnyPub = 5;
declare type FV_FindAnyRubi = 11;
declare type FV_FindAnyTable = 9;
declare type FV_FindAnyTextInset = 3;
declare type FV_FindAnyVariable = 6;
declare type FV_FindAnyXRef = 1;
declare type FV_FindAttrName = 1;
declare type FV_FindAttrValue = 2;
declare type FV_FindAutomaticHyphen = 10;
declare type FV_FindCharacterFormatOverride = 13;
declare type FV_FindElemTag = 0;
declare type FV_FindFootnote = 8;
declare type FV_FindPgfFormatOverride = 12;
declare type FV_FindStyleFormatOverride = 15;
declare type FV_FindTableFormatOverride = 14;
declare type FV_FindUnresolvedTextInset = 4;
declare type FV_FindUnresolvedXRef = 2;
declare type FV_FlowUnstructured = 30;
declare type FV_FontMetricsChanged = 37;
declare type FV_FontsMappedInCatalog = 38;
declare type FV_FontsWereMapped = 36;
declare type FV_FontsWithUnavailableEncodingsUsed = 53;
declare type FV_Footing = 1239;
declare type FV_GB = 10;
declare type FV_GRAPHIC = 9;
declare type FV_GRAPHICS_CATALOG = 14;
declare type FV_GetDictionaryStrings = 9;
declare type FV_HELP_CONTEXT = 5;
declare type FV_HELP_HYPERTEXT = 7;
declare type FV_HELP_INDEX = 0;
declare type FV_HELP_INIT_CONTEXT = 6;
declare type FV_HELP_KEYS = 1;
declare type FV_HELP_ONLINE_MANUALS = 4;
declare type FV_HELP_OVERVIEW = 3;
declare type FV_HELP_SAMPLES = 2;
declare type FV_HELP_WEBWORKS = 8;
declare type FV_HIST = 12;
declare type FV_HZ = 11;
declare type FV_Heading = 1238;
declare type FV_Hint_FilterName = 5;
declare type FV_Hint_FilterVersion = 4;
declare type FV_Hint_FormatId = 2;
declare type FV_Hint_HintVersion = 0;
declare type FV_Hint_Platform = 3;
declare type FV_Hint_VendorId = 1;
declare type FV_HypertextBadMatrixSize = 250;
declare type FV_HypertextBadSyntaxPathSpec = 10;
declare type FV_HypertextCantOpenDestFile = 212;
declare type FV_HypertextCommandIllegalWithinPopup = 273;
declare type FV_HypertextDestinationLinkNotFound = 220;
declare type FV_HypertextDuplicateLinkName = 221;
declare type FV_HypertextEmptyCommand = 1;
declare type FV_HypertextEmptyLineInMiddleOfPopup = 272;
declare type FV_HypertextExpectedANumberParam = 30;
declare type FV_HypertextExtraArguments = 4;
declare type FV_HypertextFcodeInvalid = 280;
declare type FV_HypertextFileNotMakerDoc = 211;
declare type FV_HypertextFileNotRegular = 210;
declare type FV_HypertextFlowMissingLines = 252;
declare type FV_HypertextHelpDirNotFound = 20;
declare type FV_HypertextMatrixCommandInvalid = 251;
declare type FV_HypertextMissingArguments = 3;
declare type FV_HypertextMissingPopupLabelItem = 271;
declare type FV_HypertextMissingPopupMarker = 270;
declare type FV_HypertextNoNamedFlow = 260;
declare type FV_HypertextObjectIDNotFound = 241;
declare type FV_HypertextPageNameNotFound = 230;
declare type FV_HypertextRecursiveFlow = 261;
declare type FV_HypertextSyntaxOK = 0;
declare type FV_HypertextUnanchoredPartialPath = 11;
declare type FV_HypertextUnrecognizedCommand = 2;
declare type FV_HypertextUnrecognizedObjectType = 240;
declare type FV_HypertextUsesDefaultText = 200;
declare type FV_HypertextValid = 0;
declare type FV_IMG_NEGATIVE = 1;
declare type FV_IMG_POSITIVE = 0;
declare type FV_INCLUSION = 0x08;
declare type FV_INCREMENT_MAIN_PROGRESS_STEP_SAVE_AS_PDF = 1;
declare type FV_INCREMENT_PROGRESS_STEP_SAVE_AS_PDF = 5;
declare type FV_INTERACT_ROTATE = 1;
declare type FV_INTERACT_ROTATE_CONSTRAIN = 2;
declare type FV_ITEM_HAS_NO_SHIFT_OR_UNSHIFT_COMMAND = 3;
declare type FV_ITEM_HAS_SHIFT_COMMAND = 1;
declare type FV_ITEM_HAS_UNSHIFT_COMMAND = 2;
declare type FV_ITON = 0;
declare type FV_ImportFileNotReadable = 48;
declare type FV_ImportedByCopy = 0;
declare type FV_ImportedFilteredFile = 5;
declare type FV_ImportedGraphicFile = 6;
declare type FV_ImportedMIF = 3;
declare type FV_ImportedMacEdition = 7;
declare type FV_ImportedMakerDoc = 4;
declare type FV_ImportedSgmlDoc = 8;
declare type FV_ImportedText = 1;
declare type FV_ImportedTextTable = 2;
declare type FV_ImportedXmlDoc = 9;
declare type FV_InsertionPointInFootnote = 26;
declare type FV_InsertionPointInTableCell = 25;
declare type FV_InsertionPointNotInText = 24;
declare type FV_InsufficientMem = 3;
declare type FV_InsufficientMemory = 27;
declare type FV_InternalMathMLMinDpi = 6;
declare type FV_InternalMathMLTypeUnknown = 2;
declare type FV_InvalidExportFilter = 23;
declare type FV_InvalidSaveFilter = 42;
declare type FV_InvalidTextRange = 19;
declare type FV_IsoLatin = 1;
declare type FV_JIS = 5;
declare type FV_KNOCKOUT = 0x00;
declare type FV_KeyCatalogWorkflowAuthoring = 0;
declare type FV_KeyCatalogWorkflowMax = 3;
declare type FV_KeyCatalogWorkflowPublishing = 1;
declare type FV_KeyCatalogWorkflowSearching = 2;
declare type FV_KeyDefFieldSize = 2;
declare type FV_KeyDefFieldsTypeAll = 1;
declare type FV_KeyDefFieldsTypeMax = 2;
declare type FV_KeyDefFieldsTypePrimary = 0;
declare type FV_KeyDefMaxFields = 11;
declare type FV_KeyDefMaxPrimaryFields = 5;
declare type FV_KeySrcTypeDitamap = 1;
declare type FV_KeySrcTypeNone = 0;
declare type FV_KeydefKeyAttrs = 10;
declare type FV_KeydefKeyAttrsType = 21;
declare type FV_KeydefKeyDefaultText = 7;
declare type FV_KeydefKeyDefaultTextType = 3;
declare type FV_KeydefKeyDuplicate = 4;
declare type FV_KeydefKeyDuplicateType = 1;
declare type FV_KeydefKeyFoundInRefFile = 8;
declare type FV_KeydefKeyFoundInRefFileType = 1;
declare type FV_KeydefKeyInValid = 9;
declare type FV_KeydefKeyInValidType = 1;
declare type FV_KeydefKeySrcFile = 3;
declare type FV_KeydefKeySrcFileType = 3;
declare type FV_KeydefKeySrcType = 5;
declare type FV_KeydefKeySrcTypeType = 1;
declare type FV_KeydefKeyTag = 1;
declare type FV_KeydefKeyTagType = 3;
declare type FV_KeydefKeyTarget = 2;
declare type FV_KeydefKeyTargetType = 3;
declare type FV_KeydefKeyVarList = 6;
declare type FV_KeydefKeyVarListType = 20;
declare type FV_KeydefVariableInfoLen = 3;
declare type FV_KeydefVariableInfoTagPrimary = 0;
declare type FV_KeydefVariableInfoTagSecondary = 1;
declare type FV_KeydefVariableInfoText = 2;
declare type FV_Korean = 12;
declare type FV_LANG_ARABIC = 0x27;
declare type FV_LANG_BRAZILIAN = 0x0b;
declare type FV_LANG_BRITISH = 0x02;
declare type FV_LANG_BULGARIAN = 0x21;
declare type FV_LANG_CANADIAN_FRENCH = 0x06;
declare type FV_LANG_CATALAN = 0x08;
declare type FV_LANG_CROATIAN = 0x22;
declare type FV_LANG_CZECH = 0x1b;
declare type FV_LANG_DANISH = 0x0c;
declare type FV_LANG_DUTCH = 0x0d;
declare type FV_LANG_ENGLISH = 0x01;
declare type FV_LANG_ESTONIAN = 0x23;
declare type FV_LANG_FARSI = 0x2a;
declare type FV_LANG_FINNISH = 0x10;
declare type FV_LANG_FRENCH = 0x05;
declare type FV_LANG_GERMAN = 0x03;
declare type FV_LANG_GREEK = 0x19;
declare type FV_LANG_HEBREW = 0x28;
declare type FV_LANG_HUNGARIAN = 0x1d;
declare type FV_LANG_ITALIAN = 0x09;
declare type FV_LANG_JAPANESE = 0x12;
declare type FV_LANG_KOREAN = 0x15;
declare type FV_LANG_LATVIAN = 0x24;
declare type FV_LANG_LITHUANIAN = 0x25;
declare type FV_LANG_NEW_DUTCH = 0x18;
declare type FV_LANG_NEW_GERMAN = 0x16;
declare type FV_LANG_NEW_SWISS_GERMAN = 0x17;
declare type FV_LANG_NOLANGUAGE = 0x00;
declare type FV_LANG_NORWEGIAN = 0x0e;
declare type FV_LANG_NUM = 0x2b;
declare type FV_LANG_NYNORSK = 0x0f;
declare type FV_LANG_POLISH = 0x1c;
declare type FV_LANG_PORTUGUESE = 0x0a;
declare type FV_LANG_ROMANIAN = 0x26;
declare type FV_LANG_RUSSIAN = 0x1a;
declare type FV_LANG_SIMPLIFIED_CHINESE = 0x14;
declare type FV_LANG_SLOVAK = 0x1f;
declare type FV_LANG_SLOVENIAN = 0x20;
declare type FV_LANG_SPANISH = 0x07;
declare type FV_LANG_SWEDISH = 0x11;
declare type FV_LANG_SWISS_GERMAN = 0x04;
declare type FV_LANG_THAI = 0x29;
declare type FV_LANG_TRADITIONAL_CHINESE = 0x13;
declare type FV_LANG_TURKISH = 0x1e;
declare type FV_LEVELS_ALL = -1;
declare type FV_LEVELS_DEFAULT = -2;
declare type FV_LEVEL_RULE = 1;
declare type FV_LOOSELY_VALID = 0x02;
declare type FV_LanguagesWerentFound = 39;
declare type FV_Left = 1242;
declare type FV_ListViewActionMax = 10;
declare type FV_ListViewAddColumn = 2;
declare type FV_ListViewAddColumnNumParams = 4;
declare type FV_ListViewAddColumnParam1 = 3;
declare type FV_ListViewAddColumnParam2 = 1;
declare type FV_ListViewAddColumnParam3 = 1;
declare type FV_ListViewAddColumnParam4 = 1;
declare type FV_ListViewAddRow = 3;
declare type FV_ListViewAddRowNumParams = 1;
declare type FV_ListViewAddRowParam1 = 6;
declare type FV_ListViewDeleteAllRows = 4;
declare type FV_ListViewDeleteAllRowsNumParams = 0;
declare type FV_ListViewInit = 1;
declare type FV_ListViewInitNumParams = 0;
declare type FV_ListViewReSortAllRows = 5;
declare type FV_ListViewReSortAllRowsNumParams = 0;
declare type FV_ListViewSelectFirstRow = 7;
declare type FV_ListViewSelectRowFromColData = 8;
declare type FV_ListViewSelectRowFromRowId = 9;
declare type FV_ListViewSetSortEnabled = 6;
declare type FV_LockCouldntBeReset = 2;
declare type FV_LockNotReset = 1;
declare type FV_LockWasInvalid = 5;
declare type FV_LockWasReset = 0;
declare type FV_MATH = 3;
declare type FV_MATH_LARGE = 2;
declare type FV_MATH_MEDIUM = 0;
declare type FV_MATH_SMALL = 1;
declare type FV_MENUITEM_API = 2;
declare type FV_MENUITEM_EXPANDOMATIC = 4;
declare type FV_MENUITEM_FRAME = 1;
declare type FV_MENUITEM_MACRO = 3;
declare type FV_MENU_ADHOCRULER = 3;
declare type FV_MENU_COMPLETE = 2;
declare type FV_MENU_CUSTOM = 3;
declare type FV_MENU_DEFAULT = 4;
declare type FV_MENU_MENUBAR = 1;
declare type FV_MENU_POPUP = 2;
declare type FV_MENU_QUICK = 1;
declare type FV_MODE_ALL = 3;
declare type FV_MODE_MATH = 1;
declare type FV_MODE_NONMATH = 2;
declare type FV_MONOSPACE_YAKUMONO = 0x01;
declare type FV_MacANSI = 4;
declare type FV_MakePageCountEven = 2;
declare type FV_MakePageCountOdd = 3;
declare type FV_MergeDictionaryContents = 5;
declare type FV_MiniTOC = 0;
declare type FV_MissingExportScript = 17;
declare type FV_MissingImportScript = 19;
declare type FV_MissingScript = 71;
declare type FV_ModeSave = 0;
declare type FV_ModeSaveAs = 1;
declare type FV_NARROW = 1;
declare type FV_NO_BASE_COLOR = 0x00;
declare type FV_NO_ZOOM_MANGLING = -1;
declare type FV_NTOF = 3;
declare type FV_NTOI = 1;
declare type FV_NUMSTYLE_ABJAD_NUMERIC = 0x14;
declare type FV_NUMSTYLE_ALIFBATA_NUMERIC = 0x15;
declare type FV_NUMSTYLE_ALPHA_LC = 0x04;
declare type FV_NUMSTYLE_ALPHA_UC = 0x03;
declare type FV_NUMSTYLE_CHINESE_NUMERIC = 0x10;
declare type FV_NUMSTYLE_DAIJI = 0x0a;
declare type FV_NUMSTYLE_FARSI_ALPHA = 0x18;
declare type FV_NUMSTYLE_FARSI_NUMERIC = 0x12;
declare type FV_NUMSTYLE_FULLWIDTH = 0x0c;
declare type FV_NUMSTYLE_FULLWIDTH_LC = 0x0e;
declare type FV_NUMSTYLE_FULLWIDTH_UC = 0x0d;
declare type FV_NUMSTYLE_HEBREW_ALPHA = 0x19;
declare type FV_NUMSTYLE_HEBREW_NUMERIC = 0x13;
declare type FV_NUMSTYLE_INDIC_NUMERIC = 0x11;
declare type FV_NUMSTYLE_KANJI = 0x05;
declare type FV_NUMSTYLE_KANJI_KAZU = 0x09;
declare type FV_NUMSTYLE_MAXIMUM_NUMERIC = 0x19;
declare type FV_NUMSTYLE_NUMERIC = 0x00;
declare type FV_NUMSTYLE_ROMAN_LC = 0x02;
declare type FV_NUMSTYLE_ROMAN_UC = 0x01;
declare type FV_NUMSTYLE_TEXT = 0x0b;
declare type FV_NUMSTYLE_THAI_ALPHA = 0x17;
declare type FV_NUMSTYLE_THAI_NUMERIC = 0x16;
declare type FV_NUMSTYLE_ZENKAKU = 0x06;
declare type FV_NUMSTYLE_ZENKAKU_LC = 0x08;
declare type FV_NUMSTYLE_ZENKAKU_UC = 0x07;
declare type FV_NUM_CONTINUE = 0x01;
declare type FV_NUM_PERPAGE = 0x03;
declare type FV_NUM_READ_FROM_FILE = 0x00;
declare type FV_NUM_RESTART = 0x02;
declare type FV_NUM_SAME = 0x03;
declare type FV_NoFlowWithSpecifiedName = 23;
declare type FV_NoMainFlow = 22;
declare type FV_NoNonGeneratedFilesInBook = 2;
declare type FV_NonPortableFileRefs = 38;
declare type FV_NonPortableSaveName = 37;
declare type FV_NumExportStatusFields = 2;
declare type FV_NumFindElementItems = 3;
declare type FV_NumImportStatusFields = 2;
declare type FV_NumOpenStatusFields = 5;
declare type FV_NumSaveStatusFields = 2;
declare type FV_NumUpdateBookStatusFields = 4;
declare type FV_OBJ_END_OFFSET = 0x50000000;
declare type FV_OVERPRINT = 0x01;
declare type FV_OVERRIDDEN_CONREF_DUCT = 0x02;
declare type FV_OVERRIDDEN_DEFAULT = 0x00;
declare type FV_OVERRIDDEN_KEYDEF_TO_KEYREF = 0x03;
declare type FV_OVERRIDDEN_NOVALUE = 0x01;
declare type FV_ObjectDataLink = 7;
declare type FV_ObjectElement = 5;
declare type FV_ObjectGraphic = 4;
declare type FV_ObjectMarker = 1;
declare type FV_ObjectPgf = 2;
declare type FV_ObjectTextInset = 6;
declare type FV_ObjectUnknown = 0;
declare type FV_ObjectXref = 3;
declare type FV_OpenEditableCopy = 8;
declare type FV_OpenViewOnly = 5;
declare type FV_OpenedFluid = 51;
declare type FV_OpenedViewOnly = 44;
declare type FV_PAGE_NUM_ABJAD = 0x14;
declare type FV_PAGE_NUM_ALIFBATA = 0x15;
declare type FV_PAGE_NUM_ALPHA_LC = 0x04;
declare type FV_PAGE_NUM_ALPHA_UC = 0x03;
declare type FV_PAGE_NUM_CHINESE_NUMERIC = 0x10;
declare type FV_PAGE_NUM_DAIJI = 0x0a;
declare type FV_PAGE_NUM_FARSI = 0x12;
declare type FV_PAGE_NUM_FARSI_ALPHA = 0x18;
declare type FV_PAGE_NUM_FULLWIDTH = 0x0c;
declare type FV_PAGE_NUM_FULLWIDTH_LC = 0x0e;
declare type FV_PAGE_NUM_FULLWIDTH_UC = 0x0d;
declare type FV_PAGE_NUM_HEBREW = 0x13;
declare type FV_PAGE_NUM_HEBREW_ALPHA = 0x19;
declare type FV_PAGE_NUM_INDIC = 0x11;
declare type FV_PAGE_NUM_KANJI = 0x05;
declare type FV_PAGE_NUM_KANJI_KAZU = 0x09;
declare type FV_PAGE_NUM_NUMERIC = 0x00;
declare type FV_PAGE_NUM_ROMAN_LC = 0x02;
declare type FV_PAGE_NUM_ROMAN_UC = 0x01;
declare type FV_PAGE_NUM_THAI = 0x16;
declare type FV_PAGE_NUM_THAI_ALPHA = 0x17;
declare type FV_PAGE_NUM_ZENKAKU = 0x06;
declare type FV_PAGE_NUM_ZENKAKU_LC = 0x08;
declare type FV_PAGE_NUM_ZENKAKU_UC = 0x07;
declare type FV_PDFBookmarksOpenAllLevels = -2;
declare type FV_PDFBookmarksOpenDefaultLevel = -1;
declare type FV_PDFBookmarksOpenNoneLevel = -3;
declare type FV_PDFRegistrationMarksMax = 2;
declare type FV_PDFRegistrationMarksNone = 0;
declare type FV_PDFRegistrationMarksTombo = 2;
declare type FV_PDFRegistrationMarksWestern = 1;
declare type FV_PDFZoomDefault = 1;
declare type FV_PDFZoomHeight = 4;
declare type FV_PDFZoomMaxValue = 4;
declare type FV_PDFZoomNone = 0;
declare type FV_PDFZoomPage = 2;
declare type FV_PDFZoomWidth = 3;
declare type FV_PGF_ANYWHERE = 0x00;
declare type FV_PGF_CATALOG = 7;
declare type FV_PGF_CENTER = 0x03;
declare type FV_PGF_FIXED = 0x00;
declare type FV_PGF_FIXED_B_MARGIN = 0x02;
declare type FV_PGF_FIXED_L_MARGIN = 0x01;
declare type FV_PGF_FIXED_R_MARGIN = 0x04;
declare type FV_PGF_FIXED_T_MARGIN = 0x08;
declare type FV_PGF_FLOATING = 0x02;
declare type FV_PGF_JUSTIFIED = 0x04;
declare type FV_PGF_LEFT = 0x01;
declare type FV_PGF_PROPORTIONAL = 0x01;
declare type FV_PGF_RIGHT = 0x02;
declare type FV_PGF_RUN_IN = 4;
declare type FV_PGF_SIDEBODY = 0;
declare type FV_PGF_SIDEHEAD_FIRST_BASELINE = 2;
declare type FV_PGF_SIDEHEAD_LAST_BASELINE = 3;
declare type FV_PGF_SIDEHEAD_TOP = 1;
declare type FV_PGF_STRADDLE = 5;
declare type FV_PGF_STRADDLE_NORMAL_ONLY = 6;
declare type FV_PGF_TOP_OF_COL = 0x01;
declare type FV_PGF_TOP_OF_LEFT_PAGE = 0x03;
declare type FV_PGF_TOP_OF_PAGE = 0x02;
declare type FV_PGF_TOP_OF_RIGHT_PAGE = 0x04;
declare type FV_PGF_V_ALIGN_BOTTOM = 2;
declare type FV_PGF_V_ALIGN_MIDDLE = 1;
declare type FV_PGF_V_ALIGN_TOP = 0;
declare type FV_POINT_PAGE_CHINESE_NUMERIC = 0x10;
declare type FV_POINT_PAGE_FULLWIDTH = 0x0c;
declare type FV_POINT_PAGE_FULLWIDTH_LC = 0x0e;
declare type FV_POINT_PAGE_FULLWIDTH_UC = 0x0d;
declare type FV_POINT_PAGE_NUM_ABJAD = 0x14;
declare type FV_POINT_PAGE_NUM_ALIFBATA = 0x15;
declare type FV_POINT_PAGE_NUM_ALPHA_LC = 0x04;
declare type FV_POINT_PAGE_NUM_ALPHA_UC = 0x03;
declare type FV_POINT_PAGE_NUM_DAIJI = 0x0a;
declare type FV_POINT_PAGE_NUM_FARSI = 0x12;
declare type FV_POINT_PAGE_NUM_FARSI_ALPHA = 0x18;
declare type FV_POINT_PAGE_NUM_HEBREW = 0x13;
declare type FV_POINT_PAGE_NUM_HEBREW_ALPHA = 0x19;
declare type FV_POINT_PAGE_NUM_INDIC = 0x11;
declare type FV_POINT_PAGE_NUM_KANJI = 0x05;
declare type FV_POINT_PAGE_NUM_KANJI_KAZU = 0x09;
declare type FV_POINT_PAGE_NUM_NUMERIC = 0x00;
declare type FV_POINT_PAGE_NUM_ROMAN_LC = 0x02;
declare type FV_POINT_PAGE_NUM_ROMAN_UC = 0x01;
declare type FV_POINT_PAGE_NUM_THAI = 0x16;
declare type FV_POINT_PAGE_NUM_THAI_ALPHA = 0x17;
declare type FV_POINT_PAGE_NUM_ZENKAKU = 0x06;
declare type FV_POINT_PAGE_NUM_ZENKAKU_LC = 0x08;
declare type FV_POINT_PAGE_NUM_ZENKAKU_UC = 0x07;
declare type FV_POS_NORM = 0;
declare type FV_POS_SUB = 2;
declare type FV_POS_SUPER = 1;
declare type FV_PREVIEW_OFF_TRACK_CHANGE = 0;
declare type FV_PREVIEW_ON_FINAL = 2;
declare type FV_PREVIEW_ON_ORIGINAL = 1;
declare type FV_PRINT_NO = 0x2;
declare type FV_PRINT_PROCESS = 0x1;
declare type FV_PRINT_SPOT = 0x0;
declare type FV_PRODUCT_ALL = 7; // 0x01 | 0x02 | 0x04
declare type FV_PRODUCT_STRUCTURED = 0x02;
declare type FV_PRODUCT_UNSTRUCTURED = 0x01;
declare type FV_PRODUCT_XMLAUTHOR = 0x04;
declare type FV_PROPORTIONAL = 2;
declare type FV_PR_ALL = 1;
declare type FV_PR_DEL_EMPTY = 0x01;
declare type FV_PR_DONT_CHANGE = 0x04;
declare type FV_PR_DOWNLOAD_ALL = 2;
declare type FV_PR_DOWNLOAD_ALL_BUT_STANDARD_13 = 3;
declare type FV_PR_DOWNLOAD_ALL_BUT_STANDARD_35 = 4;
declare type FV_PR_DOWNLOAD_NONE = 1;
declare type FV_PR_KEEP_NUM_EVEN = 0x02;
declare type FV_PR_KEEP_NUM_ODD = 0x03;
declare type FV_PR_RANGE = 2;
declare type FV_PlainText = 2;
declare type FV_ProductIsMaker = 39;
declare type FV_ProductIsViewer = 32;
declare type FV_RC_CHANGELIST = 2;
declare type FV_RC_CHANGELIST_TAG = 3;
declare type FV_RC_SUB_FMTRULE = 1;
declare type FV_RC_TAG = 0;
declare type FV_REFERENCE_PAGE = 0x02;
declare type FV_ROW_ANYWHERE = 0;
declare type FV_ROW_BODY = 1;
declare type FV_ROW_FOOTING = 2;
declare type FV_ROW_HEADING = 0;
declare type FV_ROW_TOP_OF_COL = 1;
declare type FV_ROW_TOP_OF_LEFT_PAGE = 3;
declare type FV_ROW_TOP_OF_PAGE = 2;
declare type FV_ROW_TOP_OF_RIGHT_PAGE = 4;
declare type FV_RecoverFileUsed = 33;
declare type FV_RedoAll = 4;
declare type FV_ReferencePage = 9;
declare type FV_ReferencedFilesWerentFound = 47;
declare type FV_ResetLockAndContinue = 7;
declare type FV_Right = 1243;
declare type FV_SCROLL_FACING = 3;
declare type FV_SCROLL_HORIZONTAL = 1;
declare type FV_SCROLL_VARIABLE = 0;
declare type FV_SCROLL_VERTICAL = 2;
declare type FV_SEP_NONE = 0x1;
declare type FV_SEP_NORMAL = 0x0;
declare type FV_SEP_WHITE = 0x2;
declare type FV_SET_MAIN_PROGRESS_RANGE_SAVE_AS_PDF = 2;
declare type FV_SET_PROGRESS_RANGE_SAVE_AS_PDF = 6;
declare type FV_SH_INSIDE = 0x02;
declare type FV_SH_LEFT = 0x00;
declare type FV_SH_OUTSIDE = 0x03;
declare type FV_SH_RIGHT = 0x01;
declare type FV_STRICTLY_VALID = 0x01;
declare type FV_SaveAsNameAskUser = 0;
declare type FV_SaveAsNameProvided = 2;
declare type FV_SaveAsUseFileName = 1;
declare type FV_SaveFmtBinary = 0;
declare type FV_SaveFmtBinary100 = 21;
declare type FV_SaveFmtBinary110 = 23;
declare type FV_SaveFmtBinary120 = 25;
declare type FV_SaveFmtBinary130 = 27;
declare type FV_SaveFmtBinary140 = 29;
declare type FV_SaveFmtBinary150 = 31;
declare type FV_SaveFmtBinary60 = 11;
declare type FV_SaveFmtBinary70 = 12;
declare type FV_SaveFmtBinary80 = 13;
declare type FV_SaveFmtBinary90 = 16;
declare type FV_SaveFmtBookWithFm = 20;
declare type FV_SaveFmtBookWithXml = 19;
declare type FV_SaveFmtCompositeDoc = 18;
declare type FV_SaveFmtFilter = 8;
declare type FV_SaveFmtInterchange = 1;
declare type FV_SaveFmtInterchange100 = 22;
declare type FV_SaveFmtInterchange110 = 24;
declare type FV_SaveFmtInterchange120 = 26;
declare type FV_SaveFmtInterchange130 = 28;
declare type FV_SaveFmtInterchange140 = 30;
declare type FV_SaveFmtInterchange150 = 32;
declare type FV_SaveFmtInterchange70 = 14;
declare type FV_SaveFmtInterchange80 = 15;
declare type FV_SaveFmtInterchange90 = 17;
declare type FV_SaveFmtPdf = 9;
declare type FV_SaveFmtSgml = 7;
declare type FV_SaveFmtStationery = 3;
declare type FV_SaveFmtText = 6;
declare type FV_SaveFmtViewOnly = 4;
declare type FV_SaveFmtXml = 10;
declare type FV_SaveNoAutoBackup = 1;
declare type FV_SaveSkipTbls = 3;
declare type FV_SaveTblColsAsPgfs = 2;
declare type FV_SaveTblRowsAsPgfs = 1;
declare type FV_SaveTblUserPref = 0;
declare type FV_SaveUserPrefAutoBackup = 2;
declare type FV_SaveYesAutoBackup = 0;
declare type FV_SessionId = 0;
declare type FV_SetDictionaryToNoneDictionary = 6;
declare type FV_Shitf_JIS = 6;
declare type FV_ShowAll = 1;
declare type FV_ShowAsPerConditions = 2;
declare type FV_ShowAsPerExpression = 3;
declare type FV_SourceDoc = 0;
declare type FV_SpellCapitalization = 2;
declare type FV_SpellExtraSpace = 6;
declare type FV_SpellHyphenation = 5;
declare type FV_SpellMisspelling = 1;
declare type FV_SpellRepeatedLetter = 4;
declare type FV_SpellRepeatedWord = 3;
declare type FV_SpellSpaceAfter = 7;
declare type FV_SpellSpaceBefore = 8;
declare type FV_SpellStraightQuotes = 9;
declare type FV_StripStructureAndOpen = 10;
declare type FV_TAB_CENTER = 0x2;
declare type FV_TAB_DECIMAL = 0x4;
declare type FV_TAB_LEFT = 0x1;
declare type FV_TAB_RELATIVE_CENTER = 0x6;
declare type FV_TAB_RELATIVE_DECIMAL = 0x8;
declare type FV_TAB_RELATIVE_LEFT = 0x5;
declare type FV_TAB_RELATIVE_RIGHT = 0x7;
declare type FV_TAB_RIGHT = 0x3;
declare type FV_TBL_ANYWHERE = 0;
declare type FV_TBL_CATALOG = 13;
declare type FV_TBL_FLOAT = 5;
declare type FV_TBL_NO_TITLE = 0;
declare type FV_TBL_NUM_BY_COL = 1;
declare type FV_TBL_NUM_BY_ROW = 0;
declare type FV_TBL_TITLE_ABOVE = 1;
declare type FV_TBL_TITLE_BELOW = 2;
declare type FV_TBL_TOP_OF_COL = 1;
declare type FV_TBL_TOP_OF_LEFT_PAGE = 3;
declare type FV_TBL_TOP_OF_PAGE = 2;
declare type FV_TBL_TOP_OF_RIGHT_PAGE = 4;
declare type FV_TEMPLATE_BROWSER = 11;
declare type FV_TEXTLINE_CENTER = 2;
declare type FV_TEXTLINE_LEFT = 0;
declare type FV_TEXTLINE_MATH = 3;
declare type FV_TEXTLINE_RIGHT = 1;
declare type FV_THESAURUS = 10;
declare type FV_TR_BBOX = 0x03;
declare type FV_TR_CONTOUR = 0x02;
declare type FV_TR_NONE = 0x01;
declare type FV_TYPE_BINARY = 0x01;
declare type FV_TYPE_FILTER = 0xff;
declare type FV_TYPE_MIF = 0x02;
declare type FV_TYPE_SGML = 0x04;
declare type FV_TYPE_TEXT = 0x03;
declare type FV_TYPE_XML = 0x05;
declare type FV_TextFile_EOLisEOP = 12;
declare type FV_TextFile_EOLisNotEOP = 13;
declare type FV_TooManyWindows = 128;
declare type FV_TooManyWindowsUpdateBook = 98;
declare type FV_UPDATE_MAIN_PROGRESS_MESSAGE_SAVE_AS_PDF = 0;
declare type FV_UPDATE_PROGRESS_MESSAGE_SAVE_AS_PDF = 3;
declare type FV_UPDATE_PROGRESS_MESSAGE_WITH_FILENAME_SAVE_AS_PDF = 4;
declare type FV_URL_CHECKED_IN = 1;
declare type FV_URL_CHECKED_OUT = 2;
declare type FV_UndoAll = 3;
declare type FV_UnresolvedTextInsets = 50;
declare type FV_UnresolvedXRefs = 49;
declare type FV_Unstructured = 41;
declare type FV_UpdateAllAutomaticClientTi = 2;
declare type FV_UpdateAllClientTi = 1;
declare type FV_UpdateAllManualClientTi = 3;
declare type FV_UseCurrentSetting = 0;
declare type FV_UserCanceled = 112;
declare type FV_UserCanceledExport = 32;
declare type FV_UserCanceledImport = 37;
declare type FV_UserCanceledSave = 48;
declare type FV_UserCanceledUpdateBook = 35;
declare type FV_UserDictionary = 1;
declare type FV_VAR_CREATION_DATE_LONG = 7;
declare type FV_VAR_CREATION_DATE_SHORT = 8;
declare type FV_VAR_CURRENT_DATE_LONG = 3;
declare type FV_VAR_CURRENT_DATE_SHORT = 4;
declare type FV_VAR_CURRENT_PAGE_NUM = 1;
declare type FV_VAR_FILE_NAME_LONG = 9;
declare type FV_VAR_FILE_NAME_SHORT = 10;
declare type FV_VAR_HEADER_FOOTER_1 = 11;
declare type FV_VAR_HEADER_FOOTER_10 = 24;
declare type FV_VAR_HEADER_FOOTER_11 = 25;
declare type FV_VAR_HEADER_FOOTER_12 = 26;
declare type FV_VAR_HEADER_FOOTER_13 = 27;
declare type FV_VAR_HEADER_FOOTER_14 = 28;
declare type FV_VAR_HEADER_FOOTER_15 = 29;
declare type FV_VAR_HEADER_FOOTER_16 = 30;
declare type FV_VAR_HEADER_FOOTER_17 = 31;
declare type FV_VAR_HEADER_FOOTER_18 = 32;
declare type FV_VAR_HEADER_FOOTER_2 = 12;
declare type FV_VAR_HEADER_FOOTER_3 = 13;
declare type FV_VAR_HEADER_FOOTER_4 = 14;
declare type FV_VAR_HEADER_FOOTER_5 = 19;
declare type FV_VAR_HEADER_FOOTER_6 = 20;
declare type FV_VAR_HEADER_FOOTER_7 = 21;
declare type FV_VAR_HEADER_FOOTER_8 = 22;
declare type FV_VAR_HEADER_FOOTER_9 = 23;
declare type FV_VAR_MODIFICATION_DATE_LONG = 5;
declare type FV_VAR_MODIFICATION_DATE_SHORT = 6;
declare type FV_VAR_PAGE_COUNT = 2;
declare type FV_VAR_TABLE_CONTINUATION = 15;
declare type FV_VAR_TABLE_SHEET = 16;
declare type FV_VAR_USER_VARIABLE = 0;
declare type FV_VIEW_ALL = 7; // (0x01 | 0x02 | 0x04)
declare type FV_VIEW_AUTHOR = 0x02;
declare type FV_VIEW_WYSIWYG = 0x01;
declare type FV_VIEW_XML = 0x04;
declare type FV_VOS_NONE = 2;
declare type FV_VOS_USER_ONLY = 1;
declare type FV_VOS_YES = 3;
declare type FV_VOX_ALERT = 3;
declare type FV_VOX_GOTO_BEHAVIOR = 1;
declare type FV_VOX_NOT_ACTIVE = 0;
declare type FV_VOX_OPEN_BEHAVIOR = 2;
declare type FV_WIDE = 0;
declare type FV_WINDOW_ALL = 7; // (0x01 | 0x02 | 0x04)
declare type FV_WINDOW_BOOK = 0x02;
declare type FV_WINDOW_DITAMAP = 0x04;
declare type FV_WINDOW_DOC = 0x01;
declare type FV_WarnAlways = 1;
declare type FV_WarnNever = 0;
declare type FV_WarnOnce = 2;
declare type FV_WriteDictionaryToFile = 4;
declare type FV_WriteUnknownWordsToFile = 3;
declare type FV_XML_STANDALONE_NO = 2;
declare type FV_XML_STANDALONE_NODEC = 4;
declare type FV_XML_STANDALONE_NONE = 3;
declare type FV_XML_STANDALONE_YES = 1;
declare type FV_XML_USEBOM_NO = 2;
declare type FV_XML_USEBOM_UTF16BE = 4;
declare type FV_XML_USEBOM_UTF16LE = 5;
declare type FV_XML_USEBOM_UTF32BE = 6;
declare type FV_XML_USEBOM_UTF32LE = 7;
declare type FV_XML_USEBOM_UTF8 = 3;
declare type FV_XML_USEBOM_YES = 1;
declare type FV_XML_WELLFORMED_NO = 2;
declare type FV_XML_WELLFORMED_YES = 1;
declare type FV_ZOOM_TO_FIT_TO_WINDOW = -2;
