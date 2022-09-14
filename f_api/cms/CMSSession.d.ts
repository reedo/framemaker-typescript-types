// Type definitions for FrameMaker CMSSession object
// Definitions by: Dan Reed <https://danreed.dev>

interface CMSSession {
  CMSSession: any;

  CMSLogout(): void;

  GetCMSObjectFromPath(urlPath: string): CMSObject;

  CMSShowBrowseRepositoryUI(showContainerOnly: boolean): CMSObject;

  CMSCreateObject(): CMSObject;

  CMSGetCmsIdFromSession(): CMSRegistration;
}
