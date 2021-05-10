// Type definitions for the Tab FMObject
// Definitions by: Dan Reed <http://danreed.dev>

/**
 * Describes an individual tab.
 * 
 * Note that the character specified by decimal must be a single byte character.
 */
interface Tab {

	/** Offset from the left margin. */
	x: number;

	/** Type of tab. */
	type: FV_TAB_Constant;

	/** String that appears before the tab. */
	leader: string;

	/** Character to align the tab around (For example `,`). */
	decimal: number;
}

interface TabConstructor {
	new(): Tab;
	new(x: number, type: FV_TAB_Constant, leader: string, decimal: number): Tab;
	readonly prototype: Tab;
}

declare const Tab: TabConstructor;

/**
 * Can be one of:
 * * Constants.FV_TAB_LEFT (1)
 * * Constants.FV_TAB_CENTER (2)
 * * Constants.FV_TAB_RIGHT (3)
 * * Constants.FV_TAB_DECIMAL (4)
 * * Constants.FV_TAB_RELATIVE_LEFT (5)
 * * Constants.FV_TAB_RELATIVE_CENTER (6)
 * * Constants.FV_TAB_RELATIVE_RIGHT (7)
 * * Constants.FV_TAB_RELATIVE_DECIMAL (8)
 */
type FV_TAB_Constant =
	Constants['FV_TAB_LEFT'] |
	Constants['FV_TAB_CENTER'] |
	Constants['FV_TAB_RIGHT'] |
	Constants['FV_TAB_DECIMAL'] |
	Constants['FV_TAB_RELATIVE_LEFT'] |
	Constants['FV_TAB_RELATIVE_CENTER'] |
	Constants['FV_TAB_RELATIVE_RIGHT'] |
	Constants['FV_TAB_RELATIVE_DECIMAL'];