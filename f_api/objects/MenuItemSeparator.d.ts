// Type definitions for FrameMaker MenuItemSeparator object
// Definitions by Dan Reed <https://danreed.dev>

interface MenuItemSeparator extends FMNamedObject {
	Label: string;

	readonly MenuItemIsEnabled: boolean;

	NextMenuItemInMenu: Command | Menu | MenuItemSeparator;

	readonly NextMenuItemInSession: Command | Menu | MenuItemSeparator;

	ParentMenuId: Menu;

	PrevMenuItemInMenu: Command | Menu | MenuItemSeparator;

	Delete(): FrameErrorCode;
}
