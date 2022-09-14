// Type definitions for FrameMaker FilterArgs object
// Definitions by Dan Reed <https://danreed.dev>

/** Describes a FilterArgs. */
interface FilterArgs {
  /** The file to filter. */
  infile: string;

  /** The filter output file. */
  outfile: string;

  /** The registered name of the filter. */
  clname: string;

  /** The registered incoming format. */
  informat: string;

  /** The registered output format. */
  outformat: string;

  /** The name of the filter client file. */
  binname: string;

  /** Currently NULL. */
  args: Strings | null;
}

interface FilterArgsConstructor {
  new (): FilterArgs;
  new (
    infile: string,
    outfile: string,
    clname: string,
    informat: string,
    outformat: string,
    binname: string,
    args: Strings | null
  ): FilterArgs;
  readonly prototype: FilterArgs;
}

declare const FilterArgs: FilterArgsConstructor;
