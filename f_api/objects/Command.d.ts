// Type definitions for FrameMaker Command object
// Definitions by Dan Reed <https://danreed.dev>

interface Command extends FMNamedObject {
	CanHaveCheckMark: boolean;

	CheckMarkIsOn: boolean;

	CommandNum: number;

	EnabledWhen: number;

	readonly ExpandOMaticParent: Command;

	readonly Fcode: number;

	readonly Fcodes: UInts;

	HasShiftOrUnshiftCommand: number;

	HelpLink: string;

	KeyboardShortcutLabel: string;

	KeyboardShortcuts: Strings;

	Label: string;

	Labels: Strings;

	readonly MenuItemIsEnabled: boolean;

	readonly MenuItemType: number;

	readonly Mode: number;

	readonly NextCommandInSession: Command;

	NextMenuItemInMenu: Command | Menu | MenuItemSeparator;

	readonly NextMenuItemInSession: Command | Menu | MenuItemSeparator;

	ParentMenuId: Menu;

	PrevMenuItemInMenu: Command | Menu | MenuItemSeparator;

	Product: number;

	ShiftOrUnshiftCommand: Command;

	View: number;

	Window: number;

	Delete(): FrameErrorCode;
}
