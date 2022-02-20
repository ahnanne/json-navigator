export type ParsedDataType = { [key: string]: string };

// Recursive Type References
export type NestedObjectType = {
  [key: string]: string | NestedObjectType;
};
