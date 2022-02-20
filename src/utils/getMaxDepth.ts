import { ParsedDataType } from "types/navigator";

const getMaxDepth = (parsedData: ParsedDataType) => {
  const keyList = Object.keys(parsedData);
  const ls = keyList.map((v) => v.split(".").length);

  return ls.length ? Math.max(...ls) : 0;
};

export default getMaxDepth;
