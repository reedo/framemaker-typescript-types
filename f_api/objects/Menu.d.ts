// Type definitions for FrameMaker Menu object
// Definitions by Dan Reed <https://danreed.dev>

interface Menu extends FMNamedObject {
	FirstMenuItemInMenu: Command | Menu | MenuItemSeparator;

	Label: string;

	readonly MenuItemIsEnabled: boolean;

	readonly MenuType: number;

	NextMenuItemInMenu: Command | Menu | MenuItemSeparator;

	readonly NextMenuItemInSession: Command | Menu | MenuItemSeparator;

	ParentMenuId: Menu;

	PrevMenuItemInMenu: Command | Menu | MenuItemSeparator;

	View: number;

	AddCommandToMenu(command: Command): Command;

	AddMenuToMenu(menu: Menu): Menu;

	AnimateMenu(...args: any): unknown;

	DefineAndAddCommand(...args: any): unknown;

	DefineAndAddCommandEx(...args: any): unknown;

	DefineAndAddMenu(name: string, label: string): Menu;

	Delete(): FrameErrorCode;

	MenuItemInMenu(
		menuitem: Command | Menu | MenuItemSeparator,
		recursive: boolean
	): Menu;
}
