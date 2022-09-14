// Type definitions for FrameMaker TiApiClient object
// Definitions by Dan Reed <https://danreed.dev>

interface TiApiClient extends FMTiObject {
  TiClientData: string;

  TiClientName: string;

  TiClientSource: string;

  TiClientType: string;

  TiIsUnresolved: boolean;

  readonly TiMacEdition: number;
}
