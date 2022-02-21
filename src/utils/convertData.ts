import { NestedObjectType, ParsedDataType } from "types/navigator";

type Params = {
  fileData: ParsedDataType;
  depth: number;
  obj: NestedObjectType;
  spl: string[];
  prop: string;
};

const convertData = ({ fileData, depth, obj, spl, prop }: Params) => {
  obj[spl[depth]] =
    spl.length > depth + 1
      ? obj[spl[depth]]
        ? Object.assign(obj[spl[depth]], {})
        : {}
      : fileData[prop];

  if (spl[depth + 1]) {
    convertData({
      fileData,
      depth: depth + 1,
      obj: obj[spl[depth]] as NestedObjectType,
      spl,
      prop,
    });
  }
};

export default convertData;
