// Type definitions for FrameMaker CMSProperty object
// Definitions by: Dan Reed <https://danreed.dev>

interface CMSProperty {
  prop: number;

  label: string;

  isMultiValue: boolean;

  isEditable: boolean;

  values: TypedVals;
}

type CMSProperties = FMObjectArray<CMSProperty>;
