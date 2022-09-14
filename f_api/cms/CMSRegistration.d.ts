// Type definitions for FrameMaker CMSRegistration object
// Definitions by: Dan Reed <https://danreed.dev>

interface CMSRegistration {
  CMSRegistration: any;

  CMSGetCMSInfo(cmsId: number): CMSInfo;

  CMSConfigLoginUI(
    cmsId: number,
    userFields: Strings,
    userLoginUI: boolean
  ): void;
}
