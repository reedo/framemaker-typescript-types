// Type definitions for FrameMaker KeyCatalog object
// Definitions by Dan Reed <https://danreed.dev>

interface KeyCatalog extends FMNamedObject {
	readonly IsDefault: boolean;

	IsStale: boolean;

	KeyCatalogClientName: string;

	readonly KeyCount: number;

	readonly NextKeyCatalogInSession: KeyCatalog;

	NotLoaded: boolean;

	Source: string;

	SourceType: number;

	Delete(): FrameErrorCode;

	DeleteAllKeyDefinitions(): FrameErrorCode;

	GetAllKeyDefinitions(
		filterType: FV_KeyDefFieldsTypePrimary | FV_KeyDefFieldsTypeAll
	): TypedVals;

	GetAllKeys(): Strings;

	GetKeyDefinition(key: string, keyField: number): TypedVal;

	NewKeyDefinition(
		key: string,
		href: string,
		srcType: FV_KeySrcTypeNone | FV_KeySrcTypeDitamap,
		srcFile: string,
		flags: number
	): FrameErrorCode;

	UpdateKeyDefinition(
		key: string,
		keyField: number,
		valuep: string | number | AttributesEx
	): FrameErrorCode;
}
