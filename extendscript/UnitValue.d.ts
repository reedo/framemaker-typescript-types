// Type definitions for the UnitValue ExtendScript object
// Definitions by Dan Reed <https://danreed.dev>

/** A valid string for a UnitType type. */
type UnitValueUnit = 'in' | 'inch' | 'inches' | 'ft' | 'foot' | 'feet' | 'yd' | 'yard' | 'yards' | 'mi' | 'mile' | 'miles' | 'mm' | 'millimeter' | 'millimeters' | 'cm' | 'centimeter' | 'centimeters' | 'm' | 'meter' | 'meters' | 'km' | 'kilometer' | 'kilometers' | 'pt' | 'point' | 'points' | 'pc' | 'pica' | 'picas' | 'tpt' | 'traditional point' | 'traditional points' | 'tpc' | 'traditional pica' | 'traditional picas' | 'ci' | 'cicero' | 'ciceros' | 'px' | 'pixel' | 'pixels' | '%' | 'percent' | '?';

/** Represents measurement values that contain both the numeric magnitude and the unit of measurement. */
interface UnitValue {

	'~'(): UnitValue;

	'!'(): UnitValue;

	'%'(): UnitValue;

	'*'(): UnitValue;

	'+'(): UnitValue;

	'-'(): UnitValue;

	'/'(): UnitValue;

	'<'(): UnitValue;

	'<='(): UnitValue;

	'=='(): UnitValue;

	'==='(): UnitValue;

	/**
	 * Returns the numeric value of this object in the given unit. If the unit is unknown or cannot be computed, generates a run-time error.
	 * 
	 * @param unit The unit type in abbreviated form; for example, “cm” or “in”.
	 */
	as(unit: UnitValueUnit): number;

	/**
	 * A UnitValue object that defines the size of one pixel, or a total size to use as a base for percentage values. This is used as the base conversion unit for pixels and percentages.
	 * 
	 * Default is 0.013889 inches (1/72 in), which is the base conversion unit for pixels at 72 dpi. Set to null to restore the default.
	 */
	baseUnit: UnitValue | null;

	/**
	 * Converts this object to the given unit, resetting the type and value accordingly.
	 * 
	 * @param unit The unit type in abbreviated form; for example, “cm” or “in”.
	 * 
	 * @returns true if the conversion is successful. If the unit is unknown or the object cannot be converted, generates a run-time error and returns false.
	 */
	convert(unit: UnitValueUnit): boolean;

	/** The unit type in abbreviated form; for example, “cm” or “in”. */
	type: UnitValueUnit;

	/** The numeric measurement value. */
	value: number;

}

interface UnitValueConstructor {
	(): UnitValue;
	(value: number, unit: UnitValue): UnitValue;
	(value: number, unit: UnitValueUnit): UnitValue;
	(valueUnit: string): UnitValue;
	new(): UnitValue;
	new(value: number, unit: UnitValue): UnitValue;
	new(value: number, unit: UnitValueUnit): UnitValue;
	new(valueUnit: string): UnitValue;
	readonly prototype: UnitValue;

}

declare const UnitValue: UnitValueConstructor;