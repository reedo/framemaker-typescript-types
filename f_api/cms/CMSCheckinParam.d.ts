// Type definitions for FrameMaker CMSCheckinParam object
// Definitions by: Dan Reed <https://danreed.dev>

interface CMSCheckinParam {
  version: number;

  versionLabel: string;

  description: string;

  checkinComment: string;

  makeThisCurrentVersion: boolean;
}
