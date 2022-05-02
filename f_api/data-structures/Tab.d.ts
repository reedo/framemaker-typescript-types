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
	type: number;

	/** String that appears before the tab. */
	leader: string;

	/** Character to align the tab around (For example `,`). */
	decimal: number;
}

interface TabConstructor {
	new (): Tab;
	new (x: number, type: number, leader: string, decimal: number): Tab;
	readonly prototype: Tab;
}

declare const Tab: TabConstructor;
