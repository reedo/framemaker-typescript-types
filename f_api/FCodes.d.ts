// Type definitions for FrameMaker FCodes object
// Definitions by Dan Reed <https://danreed.dev>

interface FCodes extends ESObject {
	readonly ALT_GFX_INSET: 0xb12;
	readonly ALT_TXT_INSET: 0xb11;

	readonly AMT_DEACTIVATION: 0x967;
	readonly AMT_REGISRATION: 0x965;
	readonly AMT_UPDATES: 0x968;

	readonly CHAR_APPLY_CAT_TO_SEL: 0xf3e;
	readonly CHAR_APPLY_TAG: 0xc11;
	readonly CHAR_DESIGNKIT_APPLY: 0xaab;
	readonly CHAR_DESIGNKIT_NEWFORMAT: 0xb01;
	readonly CHAR_DESIGNKIT_RESET: 0xabb;
	readonly CHAR_DESIGNKIT_UPDATEALL: 0xaae;
	readonly CHAR_DESIGNKIT_UPDATEOPTIONS: 0xb04;
	readonly CHAR_DESIGN_CAT: 0xf4f;

	readonly CMD_OPEN_DITAMAP_COMPONENT: 0xf14;

	readonly CONDTEXT_KIT_APPLY: 0xb09;

	readonly CSR_BEFORE_ELEMENT: 0x14b;
	readonly CSR_BOE: 0x149;
	readonly CSR_BOL: 0x105;
	readonly CSR_BOP: 0x10b;
	readonly CSR_BOS: 0x109;
	readonly CSR_BOT: 0x110;
	readonly CSR_BOTR: 0x10e;
	readonly CSR_BOW: 0x107;
	readonly CSR_DOWN: 0x102;
	readonly CSR_EOE: 0x14a;
	readonly CSR_EOL: 0x106;
	readonly CSR_EOP: 0x10c;
	readonly CSR_EOS: 0x10a;
	readonly CSR_EOW: 0x108;
	readonly CSR_FIRST_COL: 0x143;
	readonly CSR_HOME: 0x100;
	readonly CSR_INTO_CHILD: 0x14d;
	readonly CSR_LEFT: 0x104;
	readonly CSR_NEXT_BOP: 0x142;
	readonly CSR_NEXT_BOS: 0x141;
	readonly CSR_NEXT_BOW: 0x140;
	readonly CSR_NEXT_COL: 0x144;
	readonly CSR_NEXT_ELEMENT: 0x145;
	readonly CSR_PREV_ELEMENT: 0x146;
	readonly CSR_PREV_EOS: 0x937;
	readonly CSR_PREV_EOW: 0x938;
	readonly CSR_RIGHT: 0x103;
	readonly CSR_TOP: 0x10f;
	readonly CSR_TOTR: 0x10d;
	readonly CSR_UP: 0x101;

	readonly DEL_BOL: 0x119;
	readonly DEL_BOS: 0x163;
	readonly DEL_BOW: 0x114;
	readonly DEL_CHARBWD: 0x112;
	readonly DEL_CHARFWD: 0x113;
	readonly DEL_EOL: 0x116;
	readonly DEL_EOS: 0x117;
	readonly DEL_EOW: 0x115;
	readonly DEL_NEXT_SS: 0x162;
	readonly DEL_SEL: 0x118;
	readonly DEL_WORD_END: 0x161;
	readonly DEL_WORD_START: 0x160;

	readonly ELEM_BAM: 0xfdc;
	readonly ELEM_CHANGE_CAT_AT_SEL: 0xa12;
	readonly ELEM_INSERT_CUSTOM_1: 0xa21;
	readonly ELEM_INSERT_CUSTOM_2: 0xa22;
	readonly ELEM_INSERT_CUSTOM_3: 0xa23;
	readonly ELEM_INSERT_CUSTOM_4: 0xa24;
	readonly ELEM_INSERT_CUSTOM_5: 0xa25;
	readonly ELEM_INSERT_CUSTOM_6: 0xa26;
	readonly ELEM_INSERT_CUSTOM_7: 0xa27;
	readonly ELEM_INSERT_CUSTOM_8: 0xa28;
	readonly ELEM_INSERT_CUSTOM_9: 0xa29;
	readonly ELEM_INSERT_CUSTOM_10: 0xa2a;
	readonly ELEM_INS_CAT_AT_SEL: 0xa10;
	readonly ELEM_WRAP_CAT_AT_SEL: 0xa11;

	readonly END_DIALOG: 0xc200;
	readonly END_WINDOW: 0xc500;

	readonly EXTEND_SEL: 0x0002 | 0x0004 | 0x0008 | 0x0010 | 0x0800;

	readonly FM_RPT_CMDS_BY_SHORTCUT: 0xd01;
	readonly FM_RPT_CMDS_BY_TAG: 0xd00;

	readonly FM_SEPARATOR: 0xf12;
	readonly FM_TERMINATE: 0xfff;

	readonly FOCUS_INPUT_ATTREDITOR: 0x62f;
	readonly FOCUS_INPUT_CELLFMT: 0x62a;
	readonly FOCUS_INPUT_COND: 0x629;
	readonly FOCUS_INPUT_CUSTRS: 0x62b;
	readonly FOCUS_INPUT_DOC: 0x620;
	readonly FOCUS_INPUT_ELEM_CTX: 0xa32;
	readonly FOCUS_INPUT_FONTFMT: 0x627;
	readonly FOCUS_INPUT_HYPERTEXT: 0x624;
	readonly FOCUS_INPUT_MARKER: 0x622;
	readonly FOCUS_INPUT_PGFFMT: 0x626;
	readonly FOCUS_INPUT_SEARCH: 0x621;
	readonly FOCUS_INPUT_SPELL: 0x623;
	readonly FOCUS_INPUT_STRWIN: 0x62d;
	readonly FOCUS_INPUT_TBLFMT: 0x62c;
	readonly FOCUS_INPUT_VALIDATION: 0x62e;

	readonly HIGH_CHAR: 0x240;
	readonly HIGH_CHAR_NEXT: 0x510;
	readonly HIGH_CHAR_PREV: 0x410;
	readonly HIGH_CLEAR: 0x247;
	readonly HIGH_COL_BOT: 0x418;
	readonly HIGH_COL_TOP: 0x417;
	readonly HIGH_ELEMENT: 0x249;
	readonly HIGH_ELEMENT_NEXT: 0x421;
	readonly HIGH_ELEMENT_PREV: 0x420;
	readonly HIGH_FLOW: 0x248;
	readonly HIGH_FLOW_BEG: 0x419;
	readonly HIGH_FLOW_END: 0x41a;
	readonly HIGH_HYPERTEXT: 0x517;
	readonly HIGH_LINE: 0x242;
	readonly HIGH_LINE_BEG: 0x41b;
	readonly HIGH_LINE_DOWN: 0x416;
	readonly HIGH_LINE_END: 0x41c;
	readonly HIGH_LINE_NEXT: 0x512;
	readonly HIGH_LINE_PREV: 0x412;
	readonly HIGH_LINE_UP: 0x415;
	readonly HIGH_PARENT: 0x423;
	readonly HIGH_PGF: 0x244;
	readonly HIGH_PGF_NEXT: 0x514;
	readonly HIGH_PGF_PREV: 0x414;
	readonly HIGH_SAMECB: 0x515;
	readonly HIGH_SAMECOND: 0x516;
	readonly HIGH_SENT: 0x243;
	readonly HIGH_SENT_NEXT: 0x513;
	readonly HIGH_SENT_PREV: 0x413;
	readonly HIGH_SHL: 0x245;
	readonly HIGH_SHR: 0x246;
	readonly HIGH_SIBLINGS: 0x422;
	readonly HIGH_WORD: 0x241;
	readonly HIGH_WORD_NEXT: 0x511;
	readonly HIGH_WORD_PREV: 0x411;

	readonly INIT_DIALOG: 0xd80;

	readonly INLINE_TYPEIN: 0xdf3;

	readonly KBD_ABORT: 0x250;
	readonly KBD_ABORT_DLGS: 0x254;
	readonly KBD_ABOUTPRODUCT: 0x305;
	readonly KBD_ACCEPTALLCHANGE: 0x960;
	readonly KBD_ACCEPTCHANGE: 0x958;
	readonly KBD_ACCEPTCHANGEANDNEXT: 0x99b;
	readonly KBD_ACROBAT_SETUP: 0x36c;
	readonly KBD_ACTIVATE_IN_PDF_BYDEFAULT: 0x4fa;
	readonly KBD_ADDAUTOCORR: 0x3c5;
	readonly KBD_ADDDOCDICT: 0x3c4;
	readonly KBD_ADDMARKER: 0x41d;
	readonly KBD_ADDPAGE: 0x346;
	readonly KBD_ADDUSRDICT: 0x3c3;
	readonly KBD_ALIGN: 0x384;
	readonly KBD_ALIGN_BOTTOM: 0x292;
	readonly KBD_ALIGN_MIDDLE: 0x291;
	readonly KBD_ALIGN_TOP: 0x290;
	readonly KBD_ALLCAP: 0x33a;
	readonly KBD_ALLCAPH: 0x369;
	readonly KBD_ALLLOWER: 0x33b;
	readonly KBD_ALLLOWERH: 0x36a;
	readonly KBD_ALLSELECT: 0xf20;
	readonly KBD_ANCHOR: 0x350;
	readonly KBD_ANTIPUTINLINE: 0xf54;
	readonly KBD_API: 0xdf0;
	readonly KBD_API_SHORTCUT: 0xdf1;
	readonly KBD_ARCTOOL: 0x3a4;
	readonly KBD_ASC_ADDDOCDICT: 0x997;
	readonly KBD_ASC_ADDUSRDICT: 0x996;
	readonly KBD_ASC_CORRECT: 0x995;
	readonly KBD_ASC_ENABLE_AUTO_SPELL_CHECK: 0x999;
	readonly KBD_ASSIGN_ELEMENT_ID: 0xf16;
	readonly KBD_ATOMIZE_INSET: 0xfaa;
	readonly KBD_ATTRCOND: 0x954;
	readonly KBD_ATTREDITQUICK: 0xf4d;
	readonly KBD_ATTRIBUTE_EDIT: 0xfec;
	readonly KBD_ATTR_CONFIG_FILE_MAKER: 0xffa;
	readonly KBD_ATTR_DISP_OPTS: 0xfee;
	readonly KBD_BACK: 0x381;
	readonly KBD_BACKSTACK: 0xef0;
	readonly KBD_BACKTAB: 0x220;
	readonly KBD_BANNER_TEXT: 0x137;
	readonly KBD_BODYPAGE: 0x342;
	readonly KBD_BOOKADDFILE: 0x30a;
	readonly KBD_BOOKADDFOLDER: 0x601;
	readonly KBD_BOOKADDGROUP: 0x609;
	readonly KBD_BOOKADDLINKEDFOLDER: 0x602;
	readonly KBD_BOOKCOMP_EXCLUDE: 0x4e0;
	readonly KBD_BOOKCOMP_FILENAME: 0x607;
	readonly KBD_BOOKCOMP_TEXT: 0x608;
	readonly KBD_BOOKDISPLAYFILENAME: 0x30d;
	readonly KBD_BOOKDISPLAYTEXT: 0x30e;
	readonly KBD_BOOKEDITDEFINE: 0x30b;
	readonly KBD_BOOKRENAMEFILE: 0x30c;
	readonly KBD_BORDERS: 0x361;
	readonly KBD_BREADCRUMBS: 0x9ca;
	readonly KBD_BROWSE_URL: 0x9a0;
	readonly KBD_CACHE_STATS: 0xf05;
	readonly KBD_CAPITAL: 0x32b;
	readonly KBD_CAPTURE: 0x251;
	readonly KBD_CAPTURE_LIVE_DIALOG: 0xf78;
	readonly KBD_CBARPRO: 0x334;
	readonly KBD_CELLFMTQUICK: 0xf43;
	readonly KBD_CHANGEDICT: 0x3c9;
	readonly KBD_CHANGEQUICK: 0xf4c;
	readonly KBD_CHARFMT_DELETE: 0xb07;
	readonly KBD_CHARFMT_DELETE_UNUSED: 0xb14;
	readonly KBD_CHECKBATCH: 0x3ce;
	readonly KBD_CHECKDOC: 0x3c1;
	readonly KBD_CHECKPAGE: 0x3cb;
	readonly KBD_CHECKSEL: 0x3c0;
	readonly KBD_CLEAR: 0x324;
	readonly KBD_CLEARAUTO: 0x3c8;
	readonly KBD_CLOPWIN: 0x392;
	readonly KBD_CLOSEWIN: 0x390;
	readonly KBD_CLOSE_ATTREDITOR: 0x68b;
	readonly KBD_CLOSE_CHARACTER_CATALOG: 0xd22;
	readonly KBD_CLOSE_CHARACTER_DESIGNER: 0xd29;
	readonly KBD_CLOSE_COMPONENTS: 0x3eb;
	readonly KBD_CLOSE_COND: 0x686;
	readonly KBD_CLOSE_CUSTRS: 0x687;
	readonly KBD_CLOSE_ELEMENT_CATALOG: 0xd26;
	readonly KBD_CLOSE_ELEM_CTX: 0x68c;
	readonly KBD_CLOSE_EQUATIONS_PALETTE: 0xd24;
	readonly KBD_CLOSE_FONTFMT: 0x685;
	readonly KBD_CLOSE_HYPERTEXT: 0x68d;
	readonly KBD_CLOSE_MARKER: 0x682;
	readonly KBD_CLOSE_PARAGRAPH_CATALOG: 0xd21;
	readonly KBD_CLOSE_PARAGRAPH_DESIGNER: 0xd28;
	readonly KBD_CLOSE_PGFFMT: 0x684;
	readonly KBD_CLOSE_SEARCH: 0x681;
	readonly KBD_CLOSE_SPELL: 0x683;
	readonly KBD_CLOSE_STRWIN: 0x689;
	readonly KBD_CLOSE_TABLE_CATALOG: 0xfbd;
	readonly KBD_CLOSE_TABLE_DESIGNER: 0xd2a;
	readonly KBD_CLOSE_TBLFMT: 0x688;
	readonly KBD_CLOSE_TOOLS_PALETTE: 0xd23;
	readonly KBD_CLOSE_TOP_PALETTE: 0xd20;
	readonly KBD_CLOSE_VALIDATION: 0x68a;
	readonly KBD_CMS_CONNECTION_MGR: 0x802;
	readonly KBD_CMS_UPLOAD_DOC_OR_BOOK: 0x805;
	readonly KBD_COLLAPSE_ALL: 0x3fa;
	readonly KBD_COLLAYOUT: 0x348;
	readonly KBD_COLOR: 0x39f;
	readonly KBD_COMBINED_FONTS: 0x338;
	readonly KBD_COMPARE: 0x31f;
	readonly KBD_COMPONENT_PROPERTIES: 0x3ee;
	readonly KBD_CONDINDICATOR: 0x953;
	readonly KBD_CONDINQUICK: 0xf44;
	readonly KBD_CONDNOTINQUICK: 0xf45;
	readonly KBD_CONDTEXT: 0x357;
	readonly KBD_CONDTOGGLEOVERR: 0x368;
	readonly KBD_CONDVISIBILITY: 0x367;
	readonly KBD_CONDVISONLYQUICK: 0xf47;
	readonly KBD_CONFIGURE_TC_COLOR: 0x990;
	readonly KBD_CONNECT_TEXT_FRAME: 0x35b;
	readonly KBD_CONSTRAIN: 0x379;
	readonly KBD_CONTEXTMENU: 0x914;
	readonly KBD_CONTEXTMENU_SHORTCUT: 0x915;
	readonly KBD_COPY: 0x322;
	readonly KBD_COPYATTRS: 0xf9f;
	readonly KBD_COPYCELLFMT: 0xf9b;
	readonly KBD_COPYCOLW: 0xf9c;
	readonly KBD_COPYCOND: 0xf9d;
	readonly KBD_COPYFONT: 0x325;
	readonly KBD_COPYPGF: 0x326;
	readonly KBD_COPYRIGHT: 0x504;
	readonly KBD_CORRECT: 0x3c2;
	readonly KBD_COUNT_SBLOCKS: 0x653;
	readonly KBD_CREATE_MULTIMEDIA_LINK: 0x3e3;
	readonly KBD_CREATE_MULTIMEDIA_LINK_TBL: 0x3e4;
	readonly KBD_CREATE_PUBLISHER: 0x3d5;
	readonly KBD_CSHELPMODE: 0x304;
	readonly KBD_CURTAIL: 0x35d;
	readonly KBD_CUSTOMNEW: 0x2ff;
	readonly KBD_CUST_TEXT_FRAME: 0xa01;
	readonly KBD_CUT: 0x321;
	readonly KBD_CUTBOTH: 0xa04;
	readonly KBD_CUTHEAD: 0x35c;
	readonly KBD_DASH0: 0x404;
	readonly KBD_DASH1: 0x405;
	readonly KBD_DASHOPTION: 0x408;
	readonly KBD_DECDASH: 0x407;
	readonly KBD_DECFILL: 0x3b7;
	readonly KBD_DECPEN: 0x3b3;
	readonly KBD_DECWIDTH: 0x3af;
	readonly KBD_DELDOCDICT: 0x3c7;
	readonly KBD_DELETE: 0xd11;
	readonly KBD_DELETEMARKER: 0x969;
	readonly KBD_DELETEPAGE: 0x347;
	readonly KBD_DELETE_FILE: 0x30f;
	readonly KBD_DELETE_INLINE_TOC: 0xa60;
	readonly KBD_DELINKHOTSPOT: 0x507;
	readonly KBD_DELMARKER: 0x358;
	readonly KBD_DELUSRDICT: 0x3c6;
	readonly KBD_DEREFREF: 0xf08;
	readonly KBD_DFN_LIB_obsolete: 0x501;
	readonly KBD_DFN_WEB_obsolete: 0x500;
	readonly KBD_DIRECTION_LTR: 0x5e0;
	readonly KBD_DIRECTION_RTL: 0x5e1;
	readonly KBD_DISTRIBUTE: 0x385;
	readonly KBD_DOCINFO: 0x3da;
	readonly KBD_DOC_REPORT: 0xf10;
	readonly KBD_DONTHYPHEN: 0x226;
	readonly KBD_DOUBLE_QUOTE: 0x401;
	readonly KBD_DRE_MODE_M: 0xf7c;
	readonly KBD_DRE_MODE_W: 0xf7b;
	readonly KBD_DRE_MODE_X: 0xf7a;
	readonly KBD_DSEXIT: 0xf01;
	readonly KBD_DUMMY_FCODE: 0xffc;
	readonly KBD_DUMPHYPERTEXT: 0xc20;
	readonly KBD_ECAPTURE: 0x256;
	readonly KBD_EDITHOTSPOT: 0x4fe;
	readonly KBD_EDITLINKS: 0x912;
	readonly KBD_EDITMARKER: 0x409;
	readonly KBD_EDITVARIABLE: 0xa0c;
	readonly KBD_ELEMENTWIN: 0xf28;
	readonly KBD_ELEM_BORDER: 0xfd2;
	readonly KBD_ELEM_CAT_OPTS: 0xfd7;
	readonly KBD_ELEM_DEMOTE: 0xfdf;
	readonly KBD_ELEM_MERGE_1ST: 0xfd3;
	readonly KBD_ELEM_MERGE_LAST: 0xfd4;
	readonly KBD_ELEM_PROMOTE: 0xfde;
	readonly KBD_ELEM_SPLIT: 0xfd5;
	readonly KBD_ELEM_TAGS: 0xfdd;
	readonly KBD_ELEM_TRANSPOSE_NEXT: 0xff5;
	readonly KBD_ELEM_TRANSPOSE_PREV: 0xff4;
	readonly KBD_ELEM_UNWRAP: 0xfd6;
	readonly KBD_EMBEDDED00: 0x920;
	readonly KBD_EMBEDDED01: 0x921;
	readonly KBD_EMBEDDED02: 0x922;
	readonly KBD_EMBEDDED03: 0x923;
	readonly KBD_EMBEDDED04: 0x924;
	readonly KBD_EMBEDDED05: 0x925;
	readonly KBD_EMBEDDED06: 0x926;
	readonly KBD_EMBEDDED07: 0x927;
	readonly KBD_EMBEDDED08: 0x928;
	readonly KBD_EMBEDDED09: 0x92a;
	readonly KBD_EMBEDDED10: 0x92b;
	readonly KBD_EMBEDDED11: 0x92c;
	readonly KBD_EMBEDDED12: 0x92d;
	readonly KBD_EMBEDDED13: 0x92e;
	readonly KBD_EMBEDDED14: 0x92f;
	readonly KBD_EMBEDDED15: 0x930;
	readonly KBD_EMBEDDED16: 0x931;
	readonly KBD_EMBEDDED17: 0x932;
	readonly KBD_EMBEDDED18: 0x933;
	readonly KBD_EMBEDDED19: 0x934;
	readonly KBD_EMBEDDEDMAX: 0x94f;
	readonly KBD_EMSPACE: 0x22c;
	readonly KBD_ENSPACE: 0x22d;
	readonly KBD_EQUATION: 0x336;
	readonly KBD_EVACUATE: 0xf60;
	readonly KBD_EXPAND_ALL: 0x3fb;
	readonly KBD_EXPORT_DOCUMENT: 0xc16;
	readonly KBD_EXPORT_GRAPHIC: 0xc15;
	readonly KBD_EXPOSEWIN: 0x395;
	readonly KBD_FB_EDIT_PREFS: 0xfef;
	readonly KBD_FILL0: 0x3b4;
	readonly KBD_FILL1: 0x3b5;
	readonly KBD_FINDNEXT: 0x955;
	readonly KBD_FINDPREV: 0x956;
	readonly KBD_FIRSTPAGE: 0x340;
	readonly KBD_FIRSTTAB: 0x222;
	readonly KBD_FIT_FRAME: 0x0fd;
	readonly KBD_FIT_FRAME_PROPORTIONAL: 0x9c9;
	readonly KBD_FIT_IMAGE: 0xda6;
	readonly KBD_FLIPLR: 0x371;
	readonly KBD_FLIPUD: 0x370;
	readonly KBD_FNEXT: 0x231;
	readonly KBD_FONTDESIGN: 0x330;
	readonly KBD_FONTPOD: 0x966;
	readonly KBD_FONTQUICK: 0xf40;
	readonly KBD_FONTREPLACEPOD: 0x95c;
	readonly KBD_FONTWIN: 0xf24;
	readonly KBD_FOOTNOTE: 0x351;
	readonly KBD_FOOTNOTEPRO: 0x335;
	readonly KBD_FPREV: 0x230;
	readonly KBD_FRAMETOOL: 0x3aa;
	readonly KBD_FREETOOL: 0x3a9;
	readonly KBD_FREEZE: 0x34b;
	readonly KBD_FRONT: 0x380;
	readonly KBD_FULLRULERS: 0x3bd;
	readonly KBD_GBL_END: 0x1ff;
	readonly KBD_GBL_START: 0x100;
	readonly KBD_GENERATE: 0x3e1;
	readonly KBD_GETTRIGGER: 0x253;
	readonly KBD_GOTOIP: 0x96f;
	readonly KBD_GOTOLINEN: 0x970;
	readonly KBD_GOTOPAGE: 0x345;
	readonly KBD_GOTOPAGEN: 0x96e;
	readonly KBD_GRAPHIC_SET_NAME: 0x4fc;
	readonly KBD_GRAVITY: 0x37b;
	readonly KBD_GRAVITY_0: 0x482;
	readonly KBD_GRAVITY_1: 0x483;
	readonly KBD_GRID: 0x364;
	readonly KBD_GROUP: 0x382;
	readonly KBD_HARDHYPHEN: 0x227;
	readonly KBD_HARDRETURN: 0x229;
	readonly KBD_HARDSPACE: 0x228;
	readonly KBD_HEATREF: 0xf09;
	readonly KBD_HELP: 0x302;
	readonly KBD_HELP_INDEX: 0x2a0;
	readonly KBD_HELP_KEYS: 0x2a1;
	readonly KBD_HELP_ONLINEMANUALS: 0x2a4;
	readonly KBD_HELP_OVERVIEW: 0x2a3;
	readonly KBD_HELP_SAMPLES: 0x2a2;
	readonly KBD_HELP_WEBWORKS: 0x2a6;
	readonly KBD_HEROIC_OPEN: 0x306;
	readonly KBD_HIDEWIN: 0x396;
	readonly KBD_HIDE_BORDERS: 0x4f1;
	readonly KBD_HIDE_BREADCRUMBS: 0x9cb;
	readonly KBD_HIDE_COND_IND: 0x4f9;
	readonly KBD_HIDE_ELEM_BORDER: 0x4f6;
	readonly KBD_HIDE_GRAPHICS: 0x4f8;
	readonly KBD_HIDE_GRID: 0x4f4;
	readonly KBD_HIDE_HOTSPOTINDICATORS: 0x50a;
	readonly KBD_HIDE_LINK_BOUNDARIES: 0x4f5;
	readonly KBD_HIDE_RULERS: 0x4f3;
	readonly KBD_HIDE_SYMBOLS: 0x4f2;
	readonly KBD_HISHWIN: 0x397;
	readonly KBD_HIST: 0x936;
	readonly KBD_HOTSPOT: 0x4fd;
	readonly KBD_HOTSPOTINDICATORS: 0x508;
	readonly KBD_HOTSPOTSPOD: 0x4ff;
	readonly KBD_HSCROLL: 0xf38;
	readonly KBD_HYPERTEXT: 0x359;
	readonly KBD_HYPHENATE: 0x3cd;
	readonly KBD_HYPRTXT_SHTCUT: 0x41e;
	readonly KBD_IMAGE_IMPORT: 0x5ea;
	readonly KBD_IMPORT: 0x314;
	readonly KBD_INCDASH: 0x406;
	readonly KBD_INCFILL: 0x3b6;
	readonly KBD_INCPEN: 0x3b2;
	readonly KBD_INCWIDTH: 0x3ae;
	readonly KBD_INDENT_LIST: 0x5e4;
	readonly KBD_INDEX_AUTHOR: 0x2c1;
	readonly KBD_INDEX_MARKER: 0x2c3;
	readonly KBD_INDEX_REFERENCES: 0x2c4;
	readonly KBD_INDEX_STANDARD: 0x2c0;
	readonly KBD_INDEX_SUBJECT: 0x2c2;
	readonly KBD_INFO: 0x303;
	readonly KBD_INITCAP: 0x33c;
	readonly KBD_INITCAPH: 0x36b;
	readonly KBD_INLINE_ATTREDTR: 0x29b;
	readonly KBD_INLINE_TOC: 0xa59;
	readonly KBD_INPUT: 1;
	readonly KBD_INSERTOBJECT: 0x913;
	readonly KBD_INSERTQUICK: 0xf48;
	readonly KBD_INSERT_AFTER: 0xd13;
	readonly KBD_INSERT_BEFORE: 0xd12;
	readonly KBD_INSET: 0x354;
	readonly KBD_INSETPOD: 0x994;
	readonly KBD_Item1stLogical: 0xd60;
	readonly KBD_ItemDown: 0xd68;
	readonly KBD_ItemFirstFocus: 0xd6a;
	readonly KBD_ItemLeft: 0xd65;
	readonly KBD_ItemNextLogical: 0xd61;
	readonly KBD_ItemNextPhysical: 0xd63;
	readonly KBD_ItemPrevLogical: 0xd62;
	readonly KBD_ItemPrevPhysical: 0xd64;
	readonly KBD_ItemRight: 0xd66;
	readonly KBD_ItemSelect: 0xd69;
	readonly KBD_ItemUp: 0xd67;
	readonly KBD_JOINCURVES: 0x377;
	readonly KBD_KBMACRO: 0x317;
	readonly KBD_KEEPTOOL: 0x37c;
	readonly KBD_KERNDOWN: 0x11b;
	readonly KBD_KERNDOWN6: 0x122;
	readonly KBD_KERNHOME: 0x11e;
	readonly KBD_KERNLEFT: 0x11c;
	readonly KBD_KERNLEFT6: 0x123;
	readonly KBD_KERNRIGHT: 0x11d;
	readonly KBD_KERNRIGHT6: 0x124;
	readonly KBD_KERNUP: 0x11a;
	readonly KBD_KERNUP6: 0x121;
	readonly KBD_LASTPAGE: 0x341;
	readonly KBD_LASTTOOL: 0x3ab;
	readonly KBD_LGEQN: 0xf52;
	readonly KBD_LINELAYOUT: 0x332;
	readonly KBD_LINENUMPRO: 0x673;
	readonly KBD_LINENUMTOGGLE: 0x674;
	readonly KBD_LINETOOL: 0x3a0;
	readonly KBD_LINK_BOUNDARIES: 0x3d7;
	readonly KBD_LIST_FIGURE: 0x2b1;
	readonly KBD_LIST_MARKER: 0x2b5;
	readonly KBD_LIST_MARKER_ALPHA: 0x2b6;
	readonly KBD_LIST_PGF: 0x2b3;
	readonly KBD_LIST_PGF_ALPHA: 0x2b4;
	readonly KBD_LIST_REFERENCES: 0x2b7;
	readonly KBD_LIST_TABLE: 0x2b2;
	readonly KBD_MANCOND: 0x952;
	readonly KBD_MARKERS: 0x355;
	readonly KBD_MARKERSPOD: 0x96a;
	readonly KBD_MASTERPAGE: 0x343;
	readonly KBD_MATHML_EDIT: 0xf18;
	readonly KBD_MATHML_EQUATION: 0x3e5;
	readonly KBD_MATHWIN: 0xf26;
	readonly KBD_MATH_BASE: 0x1000;
	readonly KBD_MAXIMIZE: 0x910;
	readonly KBD_MEDEQN: 0xf51;
	readonly KBD_MEMFAIL: 0xf02;
	readonly KBD_MEM_STATS: 0xf04;
	readonly KBD_MENUBARFOCUS: 0x3f0;
	readonly KBD_MENUCOMPLETE: 0x33d;
	readonly KBD_MENUCUSTOM: 0x33f;
	readonly KBD_MENUMODIFY: 0x3d9;
	readonly KBD_MENUQUICK: 0x33e;
	readonly KBD_MENURESET: 0x3d8;
	readonly KBD_MINIMIZE: 0x90f;
	readonly KBD_MODE_ROTATE_TOOL: 0xfad;
	readonly KBD_MOVEWIN: 0x393;
	readonly KBD_MOVE_DOWN: 0x70b;
	readonly KBD_MOVE_LEFT: 0x70c;
	readonly KBD_MOVE_RIGHT: 0x70d;
	readonly KBD_MOVE_UP: 0x70a;
	readonly KBD_MUTATE: 0x37f;
	readonly KBD_NAMESPACES: 0xff8;
	readonly KBD_NAVIGATE_DOWN: 0x5e6;
	readonly KBD_NEW: 0x300;
	readonly KBD_NEWAFRAME: 0x96d;
	readonly KBD_NEWBOOK: 0x308;
	readonly KBD_NEWHYPERTEXT: 0x35e;
	readonly KBD_NEWMARKER: 0x356;
	readonly KBD_NEWMASTER: 0xa0a;
	readonly KBD_NEWPROJECT: 0x3fc;
	readonly KBD_NEWVAR: 0xf06;
	readonly KBD_NEW_XML: 0x803;
	readonly KBD_NEXTPAGE: 0x34d;
	readonly KBD_NOCHANGEDB: 0xf4a;
	readonly KBD_NORMALIZE_TAGS: 0xa33;
	readonly KBD_NUMBERING: 0x333;
	readonly KBD_NUMBERUTILITY_FTON: 0x5e9;
	readonly KBD_NUMBERUTILITY_ITON: 0x5e3;
	readonly KBD_NUMBERUTILITY_NTOF: 0x5e8;
	readonly KBD_NUMBERUTILITY_NTOI: 0x5e2;
	readonly KBD_NUMLOCK: 0x170;
	readonly KBD_NUMSPACE: 0x22a;
	readonly KBD_OBALIGN_BOTTOM: 0x12b;
	readonly KBD_OBALIGN_CENTER: 0x12c;
	readonly KBD_OBALIGN_LEFT: 0x12d;
	readonly KBD_OBALIGN_MIDDLE: 0x12a;
	readonly KBD_OBALIGN_RIGHT: 0x12e;
	readonly KBD_OBALIGN_TOP: 0x129;
	readonly KBD_OBJDOWN: 0x126;
	readonly KBD_OBJLEFT: 0x127;
	readonly KBD_OBJPROPS: 0x387;
	readonly KBD_OBJRIGHT: 0x128;
	readonly KBD_OBJSELECT: 0xf21;
	readonly KBD_OBJSELECT_NOPREF: 0xf2a;
	readonly KBD_OBJUP: 0x125;
	readonly KBD_OPEN: 0x301;
	readonly KBD_OPENALL: 0x31a;
	readonly KBD_OPENCONTAININGFOLDER: 0xd6d;
	readonly KBD_OPENLINE: 0x22e;
	readonly KBD_OPENWIN: 0x391;
	readonly KBD_OPEN_COMPONENTS: 0x3ea;
	readonly KBD_OPEN_IN_POPUP_WIN_IN_PDF: 0x4fb;
	readonly KBD_OPEN_REPOSITORY: 0x801;
	readonly KBD_OPTIONS: 0x360;
	readonly KBD_OUTDENT_LIST: 0x5e5;
	readonly KBD_OVALTOOL: 0x3a6;
	readonly KBD_OVERPRINT: 0x3d2;
	readonly KBD_OVERPRINT_NONE: 0x3d4;
	readonly KBD_PAGEBACK: 0x34a;
	readonly KBD_PAGEBREAK: 0x32f;
	readonly KBD_PAGELAYOUT: 0x503;
	readonly KBD_PAGESETUP: 0x319;
	readonly KBD_PAGESIZE: 0x349;
	readonly KBD_PAGESTATUS: 0xf37;
	readonly KBD_PAGEUPDATE: 0xa00;
	readonly KBD_PAGINATION: 0xa40;
	readonly KBD_PASTE: 0x323;
	readonly KBD_PASTESPECIAL: 0xd10;
	readonly KBD_PASTE_AFTER: 0xd15;
	readonly KBD_PASTE_BEFORE: 0xd14;
	readonly KBD_PASTE_RTF: 0x502;
	readonly KBD_PAUSE_0x01: 0x632;
	readonly KBD_PAUSE_0x10: 0x631;
	readonly KBD_PAUSE_1x00: 0x630;
	readonly KBD_PEN0: 0x3b0;
	readonly KBD_PEN1: 0x3b1;
	readonly KBD_PGFDESIGN: 0x331;
	readonly KBD_PGFFMT_DELETE: 0xb06;
	readonly KBD_PGFFMT_DELETE_UNUSED: 0xb13;
	readonly KBD_PGFQUICK: 0xf41;
	readonly KBD_PGFWIN: 0xf23;
	readonly KBD_PICKOBJPROPS: 0x388;
	readonly KBD_PODLOCATION: 0x31e;
	readonly KBD_POLYGTOOL: 0x3a2;
	readonly KBD_POLYLTOOL: 0x3a3;
	readonly KBD_POPUP_MENU: 0x39d;
	readonly KBD_PREVIEWFBA: 0xb16;
	readonly KBD_PREVIEW_ACCEPTALL: 0x962;
	readonly KBD_PREVIEW_OFF: 0x964;
	readonly KBD_PREVIEW_REJECTALL: 0x963;
	readonly KBD_PREVPAGE: 0x34c;
	readonly KBD_PRINT: 0x313;
	readonly KBD_PRINTSETUP: 0x90a;
	readonly KBD_PRINT_COMPONENTS: 0x3ec;
	readonly KBD_PROJECTADDLOCATION: 0x40a;
	readonly KBD_PROJECTCREATEFOLDER: 0x40b;
	readonly KBD_PROJECTDELETEFILE: 0x60a;
	readonly KBD_PROJECTEDITFILE: 0x40f;
	readonly KBD_PROJECTEXPLOREFILE: 0x40e;
	readonly KBD_PROJECTMANAGERVIEW: 0x40c;
	readonly KBD_PROJECTRENAMEFILE: 0x40d;
	readonly KBD_PROJECTSHOWFILENAME: 0x60b;
	readonly KBD_PROJECTSHOWFILEPATH: 0x60c;
	readonly KBD_PURIFY_ALL_LEAKS: 0x651;
	readonly KBD_PURIFY_CLEAR_LEAKS: 0x652;
	readonly KBD_PURIFY_NEW_LEAKS: 0x650;
	readonly KBD_PUTINLINE: 0xf53;
	readonly KBD_QUIETCLOSEWIN: 0x39c;
	readonly KBD_QUITALL: 0x31b;
	readonly KBD_QUITWIN: 0x399;
	readonly KBD_RANDF: 0x234;
	readonly KBD_RECORD: 0x252;
	readonly KBD_RECTTOOL: 0x3a1;
	readonly KBD_REDO: 0x935;
	readonly KBD_REFERENCE: 0x352;
	readonly KBD_REFORMATDOC: 0x3cf;
	readonly KBD_REFPAGE: 0x344;
	readonly KBD_REFRESHWIN: 0x398;
	readonly KBD_REFRESH_DITAMAP_RMVIEW: 0x807;
	readonly KBD_REJECTALLCHANGE: 0x961;
	readonly KBD_REJECTCHANGE: 0x959;
	readonly KBD_REJECTCHANGEANDNEXT: 0x99c;
	readonly KBD_REMOVEPOSTER: 0x3de;
	readonly KBD_REMOVE_STRUCT: 0xff0;
	readonly KBD_RENAMEFRAME: 0xf3b;
	readonly KBD_RENAMEMARKER: 0x35f;
	readonly KBD_RENAMEORPLAIN: 0x900;
	readonly KBD_RENAMEPAGE: 0xf3a;
	readonly KBD_REORDERMASTER: 0xa0b;
	readonly KBD_REPEAT: 0x939;
	readonly KBD_REPEATNEW: 0x31d;
	readonly KBD_REROTATE: 0x38e;
	readonly KBD_RESETDB: 0xf4b;
	readonly KBD_RESHAPE: 0x376;
	readonly KBD_RESIZEBOX: 0xf25;
	readonly KBD_RESIZEBOXM: 0xf27;
	readonly KBD_RESIZELOCK: 0x39a;
	readonly KBD_RESIZEUNLOCK: 0x39b;
	readonly KBD_RESTORE: 0x911;
	readonly KBD_RESTOREFONT: 0x505;
	readonly KBD_RESTORE_SESSION: 0xf17;
	readonly KBD_RETURN: 0x22f;
	readonly KBD_REVERT: 0x312;
	readonly KBD_REWRAP_INLINE_MATH: 0xfac;
	readonly KBD_RGLOBAL: 0x233;
	readonly KBD_RM_MODE: 0xf79;
	readonly KBD_RONCE: 0x232;
	readonly KBD_ROTATE: 0x38b;
	readonly KBD_ROTATE_AGAIN: 0x38c;
	readonly KBD_ROTATE_CCW: 0x372;
	readonly KBD_ROTATE_CCW_SMALL: 0x38a;
	readonly KBD_ROTATE_CW: 0x386;
	readonly KBD_ROTATE_CW_SMALL: 0x389;
	readonly KBD_ROTATE_NATURAL: 0x38d;
	readonly KBD_ROTATE_RESET0: 0x38f;
	readonly KBD_ROTPAGE_MINUS: 0x34f;
	readonly KBD_ROTPAGE_NORM: 0xa05;
	readonly KBD_ROTPAGE_PLUS: 0x34e;
	readonly KBD_ROT_MINUS: 0x386;
	readonly KBD_ROT_PLUS: 0x372;
	readonly KBD_ROUNDRECT: 0x3a5;
	readonly KBD_RUBIPROPS: 0x3dd;
	readonly KBD_RULERS: 0x363;
	readonly KBD_RUN_BBOX: 0x669;
	readonly KBD_RUN_CONTOUR: 0x668;
	readonly KBD_RUN_GAP: 0x671;
	readonly KBD_RUN_OFF: 0x670;
	readonly KBD_RUN_PROPS: 0x667;
	readonly KBD_SAVE: 0x310;
	readonly KBD_SAVEALL: 0x31c;
	readonly KBD_SAVEAS: 0x311;
	readonly KBD_SAVEASDBRE: 0xf70;
	readonly KBD_SAVEASPDF: 0x950;
	readonly KBD_SAVEASPDFREVIEW: 0x95a;
	readonly KBD_SAVEASPDFREVIEW2: 0x95b;
	readonly KBD_SAVEASPDFSHARE: 0x95f;
	readonly KBD_SAVEASPDFUBIQ: 0x95e;
	readonly KBD_SAVEASXML: 0x951;
	readonly KBD_SAVEDBRE: 0xf77;
	readonly KBD_SAVEFMX: 0xf76;
	readonly KBD_SAVEMETA: 0xf03;
	readonly KBD_SAVESAS: 0xf74;
	readonly KBD_SAVE_COMPONENTS: 0x3ed;
	readonly KBD_SCALE: 0x373;
	readonly KBD_SCREENMODE_FULLSCREEN: 0x97b;
	readonly KBD_SCREENMODE_FULLSCREEN_UI: 0x97a;
	readonly KBD_SCREENMODE_STANDARD: 0x979;
	readonly KBD_SCREENMODE_TOGGLE: 0x978;
	readonly KBD_SEARCH: 0x329;
	readonly KBD_SEARCHREFS: 0xb17;
	readonly KBD_SEARCH_COMMAND: 0x68e;
	readonly KBD_SELECTALL: 0x327;
	readonly KBD_SELECT_CHAPTER_COMPONENTS: 0x9d3;
	readonly KBD_SELECT_EXCLUDED_FILE: 0x9d1;
	readonly KBD_SELECT_FM_FILES: 0x315;
	readonly KBD_SELECT_FM_XMLAUTHOR_FILES: 0xa49;
	readonly KBD_SELECT_FRAME: 0x5ed;
	readonly KBD_SELECT_GENERATED_FILES: 0x32d;
	readonly KBD_SELECT_IMAGE: 0x19f;
	readonly KBD_SELECT_NONEXCLUDED_FILE: 0x9d2;
	readonly KBD_SELECT_NON_GENERATED_FILES: 0x32e;
	readonly KBD_SELECT_PRINTABLE_FILES: 0x9e2;
	readonly KBD_SELECT_SECTION_COMPONENTS: 0x9d4;
	readonly KBD_SELECT_SUBSECTION_COMPONENTS: 0x9d5;
	readonly KBD_SEPARATIONS: 0x365;
	readonly KBD_SESSION: 0x318;
	readonly KBD_SETALIGN_PROPS: 0x992;
	readonly KBD_SETCAP: 0x3bb;
	readonly KBD_SETCAP_0: 0x460;
	readonly KBD_SETCAP_1: 0x461;
	readonly KBD_SETCAP_2: 0x462;
	readonly KBD_SETCAP_3: 0x463;
	readonly KBD_SETCAP_OPTION: 0x46f;
	readonly KBD_SETDASH: 0x403;
	readonly KBD_SETDASH_0: 0x470;
	readonly KBD_SETDASH_1: 0x471;
	readonly KBD_SETDASH_2: 0x472;
	readonly KBD_SETDASH_3: 0x473;
	readonly KBD_SETDASH_4: 0x474;
	readonly KBD_SETDASH_5: 0x475;
	readonly KBD_SETDASH_6: 0x476;
	readonly KBD_SETDASH_7: 0x477;
	readonly KBD_SETDASH_8: 0x478;
	readonly KBD_SETDASH_OPTION: 0x47f;
	readonly KBD_SETDISTRIBUTE_PROPS: 0x993;
	readonly KBD_SETELCATALL: 0xfdb;
	readonly KBD_SETELCATCHILD: 0xfda;
	readonly KBD_SETELCATFREQ: 0xff7;
	readonly KBD_SETELCATLOOSE: 0xfd9;
	readonly KBD_SETELCATSTRICT: 0xfd8;
	readonly KBD_SETFILL: 0x3b8;
	readonly KBD_SETFILL_0: 0x430;
	readonly KBD_SETFILL_1: 0x431;
	readonly KBD_SETFILL_2: 0x432;
	readonly KBD_SETFILL_3: 0x433;
	readonly KBD_SETFILL_4: 0x434;
	readonly KBD_SETFILL_5: 0x435;
	readonly KBD_SETFILL_6: 0x436;
	readonly KBD_SETFILL_7: 0x437;
	readonly KBD_SETFILL_8: 0x438;
	readonly KBD_SETFILL_9: 0x439;
	readonly KBD_SETFILL_A: 0x43a;
	readonly KBD_SETFILL_B: 0x43b;
	readonly KBD_SETFILL_C: 0x43c;
	readonly KBD_SETFILL_D: 0x43d;
	readonly KBD_SETFILL_E: 0x43e;
	readonly KBD_SETFILL_F: 0x43f;
	readonly KBD_SETFROMCOLOR: 0x48c;
	readonly KBD_SETKNOCKOUT: 0x48a;
	readonly KBD_SETOVERPRINT: 0x48b;
	readonly KBD_SETPEN: 0x3b9;
	readonly KBD_SETPEN_0: 0x440;
	readonly KBD_SETPEN_1: 0x441;
	readonly KBD_SETPEN_2: 0x442;
	readonly KBD_SETPEN_3: 0x443;
	readonly KBD_SETPEN_4: 0x444;
	readonly KBD_SETPEN_5: 0x445;
	readonly KBD_SETPEN_6: 0x446;
	readonly KBD_SETPEN_7: 0x447;
	readonly KBD_SETPEN_8: 0x448;
	readonly KBD_SETPEN_9: 0x449;
	readonly KBD_SETPEN_A: 0x44a;
	readonly KBD_SETPEN_B: 0x44b;
	readonly KBD_SETPEN_C: 0x44c;
	readonly KBD_SETPEN_D: 0x44d;
	readonly KBD_SETPEN_E: 0x44e;
	readonly KBD_SETPEN_F: 0x44f;
	readonly KBD_SETPOSTER: 0x3db;
	readonly KBD_SETRUN_PROPS: 0x96c;
	readonly KBD_SETSEARCH: 0x235;
	readonly KBD_SETSEP: 0x3bc;
	readonly KBD_SETSEP_ALL: 0x3bf;
	readonly KBD_SETSEP_KEEP: 0x3be;
	readonly KBD_SETSEP_RESET_TINT_OVERPRINT: 0x3d1;
	readonly KBD_SETSIDES: 0x378;
	readonly KBD_SETSOLID: 0x402;
	readonly KBD_SETTINT: 0x48d;
	readonly KBD_SETWIDTH: 0x3ba;
	readonly KBD_SETWIDTH_0: 0x450;
	readonly KBD_SETWIDTH_1: 0x451;
	readonly KBD_SETWIDTH_2: 0x452;
	readonly KBD_SETWIDTH_3: 0x453;
	readonly KBD_SETWIDTH_OPTION: 0x45f;
	readonly KBD_SETWIDTH_SLIDE: 0x45e;
	readonly KBD_SET_TEXTFRAME_GRID: 0x666;
	readonly KBD_SHFTSPACE: 0x221;
	readonly KBD_SHOWCMSSEARCHPOD: 0xf9b;
	readonly KBD_SHOWFILELISTPOD: 0xa41;
	readonly KBD_SHOWNEXT: 0x971;
	readonly KBD_SHOWPREV: 0x972;
	readonly KBD_SHOW_BORDERS: 0x3f1;
	readonly KBD_SHOW_BREADCRUMBS: 0x9ca;
	readonly KBD_SHOW_COND_IND: 0x3f9;
	readonly KBD_SHOW_ELEM_BORDER: 0x3f6;
	readonly KBD_SHOW_ELEM_CTX: 0xa31;
	readonly KBD_SHOW_ELEM_TAGS: 0x3f7;
	readonly KBD_SHOW_GRAPHICS: 0x3f8;
	readonly KBD_SHOW_GRID: 0x3f4;
	readonly KBD_SHOW_HOTSPOTINDICATORS: 0x509;
	readonly KBD_SHOW_LINK_BOUNDARIES: 0x3f5;
	readonly KBD_SHOW_RULERS: 0x3f3;
	readonly KBD_SHOW_SYMBOLS: 0x3f2;
	readonly KBD_SILENT_OPEN: 0x307;
	readonly KBD_SINGLE_QUOTE: 0x400;
	readonly KBD_SLOW_0x00: 0x633;
	readonly KBD_SLOW_0x01: 0x636;
	readonly KBD_SLOW_0x10: 0x635;
	readonly KBD_SLOW_1x00: 0x634;
	readonly KBD_SMALLTOOLWIN: 0xf29;
	readonly KBD_SMEQN: 0xf50;
	readonly KBD_SMOOTH: 0x374;
	readonly KBD_SNAP: 0x37a;
	readonly KBD_SNAP_0: 0x480;
	readonly KBD_SNAP_1: 0x481;
	readonly KBD_SOFTHYPHEN: 0x225;
	readonly KBD_SPELLING: 0x32a;
	readonly KBD_SPELLRESET: 0x3ca;
	readonly KBD_SPLIT: 0x35a;
	readonly KBD_SPLITL: 0xa03;
	readonly KBD_SPLITR: 0xa02;
	readonly KBD_SPOPTIONS: 0x3cc;
	readonly KBD_STRIP_FLOWSTRUCTURE: 0xa30;
	readonly KBD_STRWIN: 0xfd1;
	readonly KBD_STRWIN_LEFTANCHOR: 0x3df;
	readonly KBD_STUFF: 0x328;
	readonly KBD_STUFF_ITEM: 0xf73;
	readonly KBD_STYLEFMT_DELETE: 0xbb0;
	readonly KBD_STYLEFMT_DELETE_UNUSED: 0xb10;
	readonly KBD_STYLEQUICK: 0xbb3;
	readonly KBD_STYLE_CATALOG: 0xbb1;
	readonly KBD_STYLE_DESIGNER: 0xbb2;
	readonly KBD_SUBSCRIBE_TO: 0x3d6;
	readonly KBD_SWAP_RED_BLUE: 0xfab;
	readonly KBD_SYMBOLS: 0x362;
	readonly KBD_SYMFONT: 0x506;
	readonly KBD_TAB: 0x219;
	readonly KBD_TABLEWIN: 0xfbb;
	readonly KBD_TABLE_ADDRC: 0xf87;
	readonly KBD_TABLE_CELLFMT: 0xf84;
	readonly KBD_TABLE_CONVERT: 0xf8a;
	readonly KBD_TABLE_CUSTRS: 0xf86;
	readonly KBD_TABLE_DEBUG: 0xf8b;
	readonly KBD_TABLE_EXIT_IP: 0xfc0;
	readonly KBD_TABLE_FORMAT: 0xf81;
	readonly KBD_TABLE_INS: 0xf80;
	readonly KBD_TABLE_RESIZECOL: 0xf88;
	readonly KBD_TABLE_ROTATE_CC: 0xf8e;
	readonly KBD_TABLE_ROWFMT: 0xf85;
	readonly KBD_TABLE_RULES: 0xf8c;
	readonly KBD_TABLE_STRADDLE: 0xf89;
	readonly KBD_TABLE_TAB: 0x223;
	readonly KBD_TABLE_VARS: 0xf8d;
	readonly KBD_TAB_CENTER: 0x907;
	readonly KBD_TAB_DECIMAL: 0x909;
	readonly KBD_TAB_LEFT: 0x906;
	readonly KBD_TAB_RIGHT: 0x908;
	readonly KBD_TAGSTATUS: 0xf36;
	readonly KBD_TBLFMT_DELETE: 0xb08;
	readonly KBD_TBLFMT_DELETE_UNUSED: 0xb15;
	readonly KBD_TBLIP_ABOVE: 0xfb3;
	readonly KBD_TBLIP_BELOW: 0xfb4;
	readonly KBD_TBLIP_BOTTOM: 0xfba;
	readonly KBD_TBLIP_LEFT: 0xfb2;
	readonly KBD_TBLIP_LEFTMOST: 0xfb5;
	readonly KBD_TBLIP_NEXT: 0xfb7;
	readonly KBD_TBLIP_PREV: 0xfb8;
	readonly KBD_TBLIP_RIGHT: 0xfb1;
	readonly KBD_TBLIP_RIGHTMOST: 0xfb6;
	readonly KBD_TBLIP_TOP: 0xfb9;
	readonly KBD_TBLIP_TOPLEFT: 0xfb0;
	readonly KBD_TBLSEL_CELL: 0xfa0;
	readonly KBD_TBLSEL_CELLTEXT: 0xfa4;
	readonly KBD_TBLSEL_COL: 0xfa2;
	readonly KBD_TBLSEL_COLBODY: 0xfa5;
	readonly KBD_TBLSEL_ROW: 0xfa1;
	readonly KBD_TBLSEL_TABLE: 0xfa3;
	readonly KBD_TBL_DLG_ADD_ABOVE: 0xf92;
	readonly KBD_TBL_DLG_ADD_BELOW: 0xf93;
	readonly KBD_TBL_DLG_ADD_LEFT: 0xf94;
	readonly KBD_TBL_DLG_ADD_RIGHT: 0xf95;
	readonly KBD_TBL_DLG_CLEAR_EMPTY: 0xf96;
	readonly KBD_TBL_DLG_CLEAR_X: 0xf97;
	readonly KBD_TBL_DLG_PASTE_AFTER: 0xf9a;
	readonly KBD_TBL_DLG_PASTE_BEFORE: 0xf99;
	readonly KBD_TBL_DLG_PASTE_REPL: 0xf98;
	readonly KBD_TBL_DLG_SHRINKWRAP: 0xfd0;
	readonly KBD_TBL_DLG_UNIFY_CF: 0xf91;
	readonly KBD_TBL_DLG_UNIFY_TF: 0xf90;
	readonly KBD_TC_SEARCH_BOOK: 0x134;
	readonly KBD_TC_SEARCH_DITAMAP: 0x135;
	readonly KBD_TC_SEARCH_DOC: 0x133;
	readonly KBD_TC_SEARCH_SEL: 0x136;
	readonly KBD_TC_USER_NAME: 0x991;
	readonly KBD_TEST_MODAL: 0xf71;
	readonly KBD_TEST_MODELESS: 0xf72;
	readonly KBD_TEST_PRINTDBRE: 0xf75;
	readonly KBD_TEXTCOLPRO: 0x339;
	readonly KBD_TEXTLTOOL: 0x3a7;
	readonly KBD_TEXTRTOOL: 0x3a8;
	readonly KBD_TEXT_OPTIONS: 0x337;
	readonly KBD_THESAURUS: 0x3d0;
	readonly KBD_THESAURUS_REPLACE: 0x3d3;
	readonly KBD_THINSPACE: 0x22b;
	readonly KBD_TOC: 0x2b0;
	readonly KBD_TOGGLEDRAW: 0x366;
	readonly KBD_TOGGLE_COLLAPSE: 0xff2;
	readonly KBD_TOGGLE_COLLAPSE_ALL: 0xff3;
	readonly KBD_TOGGLE_COLLAPSE_CHILDREN: 0xa0d;
	readonly KBD_TOGGLE_INCLUSION: 0xff1;
	readonly KBD_TOGGLE_STRUCT_AND_DOCWIN: 0xff9;
	readonly KBD_TOOLBAR_BASE: 0x98f;
	readonly KBD_TOOLBAR_HIDEALL: 0x98a;
	readonly KBD_TOOLBAR_SHOWALL: 0x989;
	readonly KBD_TOOLWIN: 0xf22;
	readonly KBD_TRACKCHANGE: 0x957;
	readonly KBD_TRACKCHANGEDISABLE: 0x95d;
	readonly KBD_UIALERTSTRINGS_PREF: 0x981;
	readonly KBD_UI_PREFERENCE: 0x980;
	readonly KBD_UNCOND: 0xf46;
	readonly KBD_UNDO: 0x320;
	readonly KBD_UNGROUP: 0x383;
	readonly KBD_UNICODE_CHAR: 0xffb;
	readonly KBD_UNSMOOTH: 0x375;
	readonly KBD_UPDATEREF: 0xf07;
	readonly KBD_UPSTACK: 0xef1;
	readonly KBD_USEELTDEFSFROM: 0xf9e;
	readonly KBD_USEFMTFROM: 0x316;
	readonly KBD_VALIDATEFILE: 0xf15;
	readonly KBD_VALIDATE_HYPERTEXT: 0xf13;
	readonly KBD_VALIDATION: 0xfe0;
	readonly KBD_VAL_ALLOW: 0xfe6;
	readonly KBD_VAL_CLEAR: 0xfe7;
	readonly KBD_VAL_DOC: 0xfe3;
	readonly KBD_VAL_ELEM: 0xfe1;
	readonly KBD_VAL_FLOW: 0xfe2;
	readonly KBD_VAL_IGNORE: 0xfe4;
	readonly KBD_VAL_IGNORE_ATTR: 0xff6;
	readonly KBD_VAL_START: 0xfe5;
	readonly KBD_VARCURDATE: 0xa08;
	readonly KBD_VARCURPG: 0xa06;
	readonly KBD_VARIABLE: 0x353;
	readonly KBD_VAROTHER: 0xa09;
	readonly KBD_VARPGCOUNT: 0xa07;
	readonly KBD_VARQUICK: 0xf42;
	readonly KBD_VERIFYCONTEXT: 0xf61;
	readonly KBD_VIDEO_IMPORT: 0x5eb;
	readonly KBD_VIEWER: 0xf00;
	readonly KBD_VIEWER_MAKE_DOCUMENT: 0xd50;
	readonly KBD_VIEWER_MAKE_MODELESSDIALOG: 0xd52;
	readonly KBD_VIEWER_MAKE_PALETTE: 0xd51;
	readonly KBD_VIEWSEP1: 0x36d;
	readonly KBD_VIEWSEP2: 0x36e;
	readonly KBD_VIEWSEP3: 0x36f;
	readonly KBD_VIEWSEP4: 0x37d;
	readonly KBD_VIEWSEP5: 0x37e;
	readonly KBD_VIEWSEP6: 0x39e;
	readonly KBD_VIEW_API: 0xdf4;
	readonly KBD_VIEW_API_SHORTCUT: 0xdf5;
	readonly KBD_VIEW_CONSOLE: 0x5e7;
	readonly KBD_VIEW_SWITCH: 0xdf6;
	readonly KBD_VSCROLL: 0xf39;
	readonly KBD_WAIT_DLGS: 0x255;
	readonly KBD_WIDTH0: 0x3ac;
	readonly KBD_WIDTH1: 0x3ad;
	readonly KBD_WINDOWFULL_DOWN: 0xd41;
	readonly KBD_WINDOWFULL_UP: 0xd40;
	readonly KBD_WIN_CASCADE: 0x903;
	readonly KBD_WIN_CONSOLIDATE: 0x806;
	readonly KBD_WIN_TILE: 0x904;
	readonly KBD_WIN_UI_TOGGLE: 0x807;
	readonly KBD_WRAPQUICK: 0xf49;
	readonly KBD_XCHARS: 0x224;
	readonly KBD_XREFSPOD: 0x96b;
	readonly KBD_XYZZQ: 0xee1;
	readonly KBD_XYZZY: 0xfed;
	readonly KBD_XYZZZ: 0xee0;
	readonly KBD_YANK: 0x32c;
	readonly KBD_ZOOM: 0xf34;
	readonly KBD_ZOOM100: 0xf35;
	readonly KBD_ZOOMIN: 0xf30;
	readonly KBD_ZOOMOUT: 0xf31;
	readonly KBD_ZOOM_AUTOFIT_AFTER_ZOOM: 0xf1a;
	readonly KBD_ZOOM_FIT_PAGE: 0xf32;
	readonly KBD_ZOOM_FIT_TEXTFRAME: 0xf3f;
	readonly KBD_ZOOM_FIT_WINDOW: 0xf33;
	readonly KBD_ZOOM_SET: 0xf3c;

	readonly LEAVE_DOC: 0xc600;

	readonly MENU_BARSTART: 0xc301;
	readonly MENU_DONE: 0xc30f;
	readonly MENU_DOWN: 0xc304;
	readonly MENU_DOWNWAIT: 0xc312;
	readonly MENU_EXPOSE_WIN: 0xc12;
	readonly MENU_HYPERTEXT: 0xc18;
	readonly MENU_IMPORT_FILE: 0xc14;
	readonly MENU_RIGHT: 0xc305;
	readonly MENU_RIGHTWAIT: 0xc313;
	readonly MENU_WAITBIT: 0x0010;

	readonly MIF_SAVE_AFMS: 0x000020;
	readonly MIF_SAVE_BANNERTEXT: 0x1000000;
	readonly MIF_SAVE_CCAT: 0x000400;
	readonly MIF_SAVE_COLORCAT: 0x040000;
	readonly MIF_SAVE_DATALINKS: 0x100000;
	readonly MIF_SAVE_DICT: 0x001000;
	readonly MIF_SAVE_ECAT: 0x010000;
	readonly MIF_SAVE_ELEMENTS: 0x020000;
	readonly MIF_SAVE_FCAT: 0x000100;
	readonly MIF_SAVE_FMTS: 0x000004;
	readonly MIF_SAVE_FONTS: 0x000008;
	readonly MIF_SAVE_FPLCAT: 0x200000;
	readonly MIF_SAVE_INLINECOMPONENTS: 0x2000000;
	readonly MIF_SAVE_LAYT: 0x000040;
	readonly MIF_SAVE_MKRS: 0x000010;
	readonly MIF_SAVE_MPAGE: 0x000080;
	readonly MIF_SAVE_PCAT: 0x000200;
	readonly MIF_SAVE_RUBIS: 0x800000;
	readonly MIF_SAVE_TABLECATS: 0x004000;
	readonly MIF_SAVE_TABLES: 0x008000;
	readonly MIF_SAVE_TAGS: 0x000002;
	readonly MIF_SAVE_TEXT: 0x000001;
	readonly MIF_SAVE_TEXTINSETS: 0x400000;
	readonly MIF_SAVE_TMPLT: 0x000800;
	readonly MIF_SAVE_VARS: 0x002000;
	readonly MIF_SAVE_VIEWSET: 0x080000;

	readonly MRU_SELECT_FILE: 0xc13;

	readonly NULLINPUT: -1;

	readonly OBJ_SEL_EXTEND_NEXT: 0x602;
	readonly OBJ_SEL_FIRST: 0x600;
	readonly OBJ_SEL_LAST: 0x606;
	readonly OBJ_SEL_NEXT: 0x601;
	readonly OBJ_SEL_NEXT_WRAP: 0x604;
	readonly OBJ_SEL_PREV: 0x603;
	readonly OBJ_SEL_PREV_WRAP: 0x605;

	readonly OPEN_MRU_FILES: 0xc23;

	readonly PGF_ANYPLACE: 0x28e;
	readonly PGF_APPLY_CAT_TO_SEL: 0xf3d;
	readonly PGF_APPLY_TAG: 0xc10;
	readonly PGF_BAM: 0x286;
	readonly PGF_CENTER: 0x282;
	readonly PGF_COLTOP: 0x28b;
	readonly PGF_DECLINE: 0x281;
	readonly PGF_DESIGNKIT_APPLY: 0xaaa;
	readonly PGF_DESIGNKIT_NEWFORMAT: 0xb00;
	readonly PGF_DESIGNKIT_RESET: 0xaba;
	readonly PGF_DESIGNKIT_UPDATEALL: 0xaad;
	readonly PGF_DESIGNKIT_UPDATEOPTIONS: 0xb03;
	readonly PGF_DESIGN_CAT: 0xf4e;
	readonly PGF_DOUBLE_SPACE: 0x295;
	readonly PGF_FULL: 0x285;
	readonly PGF_HYPHENOFF: 0x27f;
	readonly PGF_HYPHENON: 0x27e;
	readonly PGF_INCLINE: 0x280;
	readonly PGF_KBD_BODYSTRADDLE: 0xfcf;
	readonly PGF_KBD_FULLSTRADDLE: 0xfce;
	readonly PGF_KBD_RUN_IN: 0xfcd;
	readonly PGF_KBD_SIDEBODY: 0xfc9;
	readonly PGF_KBD_SIDEHEAD_FIRST_BASELINE: 0xfca;
	readonly PGF_KBD_SIDEHEAD_LAST_BASELINE: 0xfcb;
	readonly PGF_KBD_SIDEHEAD_TOP: 0xfcc;
	readonly PGF_LEFT: 0x283;
	readonly PGF_LEFTTOP: 0x28c;
	readonly PGF_LINEFIX: 0x287;
	readonly PGF_LINEFLOAT: 0x288;
	readonly PGF_LINE_SPACE: 0x297;
	readonly PGF_NEW_FORMAT: 0x299;
	readonly PGF_ONEANDAHALF_SPACE: 0x294;
	readonly PGF_PAGETOP: 0x28a;
	readonly PGF_RIGHT: 0x284;
	readonly PGF_RIGHTTOP: 0x28d;
	readonly PGF_SINGLE_SPACE: 0x293;
	readonly PGF_SPACE_BETWEEN: 0x296;
	readonly PGF_UNIFY: 0x289;
	readonly PGF_UPDATE_ALL: 0x298;

	readonly SEARCH_CB: 0x518;
	readonly SEARCH_CBOVERRIDE: 0x51b;
	readonly SEARCH_CBTAG: 0x519;
	readonly SEARCH_COND: 0x51a;

	readonly SERVER_CANCEL: 0xc001;
	readonly SERVER_QUERY: 0xc002;

	readonly SHOW_STRUCT_TEXT: 0x804;

	readonly START_DIALOG: 0xc100;
	readonly START_WINDOW: 0xc400;

	readonly STYLE_APPLY_CAT_TO_SEL: 0x808;

	readonly SUPPRESS_INSETS: 0x3e2;

	readonly SWITCH_TO_DOCUMENTVIEW: 0x9eb;
	readonly SWITCH_TO_RESOURCEMANAGER: 0x9ea;

	readonly SW_CSR_DOWN: 0xfe9;
	readonly SW_CSR_LEFT: 0xfeb;
	readonly SW_CSR_RIGHT: 0xfea;
	readonly SW_CSR_UP: 0xfe8;

	readonly TBL_APPLY_CAT_TO_SEL: 0xfbc;
	readonly TBL_APPLY_TAG: 0xfbe;
	readonly TBL_DESIGNKIT_APPLY: 0xaac;
	readonly TBL_DESIGNKIT_NEWFORMAT: 0xb02;
	readonly TBL_DESIGNKIT_RESET: 0xabc;
	readonly TBL_DESIGNKIT_UPDATEALL: 0xaaf;
	readonly TBL_DESIGNKIT_UPDATEOPTIONS: 0xb05;
	readonly TBL_DESIGN_CAT: 0xf5f;

	readonly TEXTSEL_DRAGGING: 0x2000;
	readonly TEXTSEL_ELEMENT: 0x1000;
	readonly TEXTSEL_EXTEND: 0x0002;
	readonly TEXTSEL_EXTEND_ELEMENT: 0x0800;
	readonly TEXTSEL_EXTEND_LINE: 0x0008;
	readonly TEXTSEL_EXTEND_PGF: 0x0010;
	readonly TEXTSEL_EXTEND_SENT: 0x0200;
	readonly TEXTSEL_EXTEND_WORD: 0x0004;
	readonly TEXTSEL_LINE: 0x0040;
	readonly TEXTSEL_PGF: 0x0080;
	readonly TEXTSEL_QUICK_COPY: 0x0001;
	readonly TEXTSEL_SELECT_ONLY: 0x0100;
	readonly TEXTSEL_SENT: 0x0400;
	readonly TEXTSEL_WORD: 0x0020;

	readonly TEXT_INSET_PROPS: 0x3e0;

	readonly TOGGLE_FLUID_VIEW: 0x500;

	readonly TXT_7: 0xc00;
	readonly TXT_9: 0xc01;
	readonly TXT_10: 0xc02;
	readonly TXT_12: 0xc03;
	readonly TXT_14: 0xc04;
	readonly TXT_18: 0xc05;
	readonly TXT_24: 0xc06;
	readonly TXT_BAM: 0x26b;
	readonly TXT_BOLD: 0x260;
	readonly TXT_CHANGEBAR: 0x26f;
	readonly TXT_DBLUNDERLINE: 0x278;
	readonly TXT_DECSIZE: 0x268;
	readonly TXT_DEFAULT: 0x26d;
	readonly TXT_FAMILY_AND_VARIATION: 0xc09;
	readonly TXT_FAMILY_AND_VARIATION_PLATFORM: 0xc0a;
	readonly TXT_FONT: 0xc17;
	readonly TXT_INCSIZE: 0x267;
	readonly TXT_INITCAPS: 0x274;
	readonly TXT_ITALIC: 0x261;
	readonly TXT_KERN: 0x270;
	readonly TXT_LESSSTRETCH: 0x131;
	readonly TXT_LOWERCASE: 0x276;
	readonly TXT_MINICAPS: 0x273;
	readonly TXT_MORESTRETCH: 0x132;
	readonly TXT_NORMAL: 0x266;
	readonly TXT_NORMALCASE: 0x277;
	readonly TXT_NOSTRETCH: 0x130;
	readonly TXT_NUMUNDERLINE: 0x279;
	readonly TXT_OTHERSIZE: 0xc08;
	readonly TXT_OUTLINE: 0x271;
	readonly TXT_OVERLINE: 0x26e;
	readonly TXT_PLAIN: 0x263;
	readonly TXT_SELBOLD: 0x27a;
	readonly TXT_SELDECSIZE: 0x120;
	readonly TXT_SELINCSIZE: 0x11f;
	readonly TXT_SELITALIC: 0x27b;
	readonly TXT_SELPLAIN: 0x27d;
	readonly TXT_SELUNDERLINE: 0x27c;
	readonly TXT_SHADOW: 0x272;
	readonly TXT_SPREAD: 0x26a;
	readonly TXT_SQUEEZE: 0x269;
	readonly TXT_STRIKEOUT: 0x26c;
	readonly TXT_STRUCTURED_BOLD: 0x2d0;
	readonly TXT_STRUCTURED_ITALIC: 0x2d1;
	readonly TXT_STRUCTURED_UNDERLINE: 0x2d2;
	readonly TXT_SUB: 0x265;
	readonly TXT_SUPER: 0x264;
	readonly TXT_TSUME: 0x2a5;
	readonly TXT_UNDERLINE: 0x262;
	readonly TXT_UPPERCASE: 0x275;
	readonly TXT_USIZE: 0xc07;

	readonly TYPEIN: 0xdf2;

	readonly UPDATE_INSETS: 0x3e1;

	readonly WEB_ADOBEHELP: 0xc22;
	readonly WEB_ADOBE_BOOKMARKS: 0xc21;
	readonly WEB_CORPORATENEWS: 0xc1d;
	readonly WEB_FRAME_BOOKMARKS: 0xc1f;
	readonly WEB_GOTOADOBE: 0xc19;
	readonly WEB_PREFERENCES: 0xc1a;
	readonly WEB_REGISTRATION: 0xc1e;
	readonly WEB_TOPISSUES: 0xc1b;
}

declare const FCodes: FCodes;
