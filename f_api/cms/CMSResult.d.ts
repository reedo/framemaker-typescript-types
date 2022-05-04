// Type definitions for FrameMaker CMSResult object
// Definitions by: Dan Reed <https://danreed.dev>

interface CMSResult {
	status: number;

	opResult: number;

	message: String;

	cmsItems: CMSObject;
}
