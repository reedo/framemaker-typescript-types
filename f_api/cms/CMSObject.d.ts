// Type definitions for FrameMaker CMSObject object
// Definitions by: Dan Reed <https://danreed.dev>

interface CMSObject {
	CMSSetProperty(
		cmsSessionId: CMSSession,
		cmsObjectId: CMSObject,
		propVal: PropVal
	): void;

	CMSSetProperties(
		cmsSessionId: CMSSession,
		cmsObjectId: CMSObject,
		propVals: PropVals
	): void;

	CMSGetProperty(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		propertyId: PropIdent
	): PropVals;

	CMSGetProperties(cmsSessionId: CMSSession, objectId: CMSObject): PropVals;

	CMSEnableCommand(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		commandId: number
	): void;

	CMSDisableCommand(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		commandId: number
	): void;

	CMSShowCheckoutUI(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		hideUiItems: number
	): boolean;

	CMSShowCheckinUI(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		hideUiItems: number
	): boolean;

	CMSShowCancelCheckoutUI(cmsSessionId: CMSSession, objectId: CMSObject): void;

	CMSShowDeleteUI(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		hideUiItems: number
	): CMSDeleteParam;

	CMSShowCommonListUI(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		commandId: number,
		title: string,
		columnProperties: number
	): boolean;

	CMSShowPropertyUI(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		props: CMSProperties
	): CMSProperties;

	CMSShowPropertyUIWithTitle(
		cmsSessionId: CMSSession,
		objectId: CMSObject,
		props: CMSProperties,
		title: string
	): CMSProperties;
}
