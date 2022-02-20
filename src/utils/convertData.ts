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

// obj[spl[0]] =
//   spl.length > 1
//     ? obj[spl[0]]
//       ? { ...obj[spl[0]] }
//       : {}
//     : fileData[prop];

// if (spl.length > 1) {
//   obj[spl[0]][spl[1]] =
//     spl.length > 2
//       ? obj[spl[0]][spl[1]]
//         ? { ...obj[spl[0]][spl[1]] }
//         : {}
//       : fileData[prop];
// }

// if (spl.length > 2) {
//   obj[spl[0]][spl[1]][spl[2]] =
//     spl.length > 3
//       ? obj[spl[0]][spl[1]][spl[2]]
//         ? { ...obj[spl[0]][spl[1]][spl[2]] }
//         : {}
//       : fileData[prop];
// }
