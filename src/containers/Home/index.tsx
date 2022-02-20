import { useState, useEffect } from "react";

import Layout from "components/Layout";
import Heading from "components/Heading";
import FileUploader from "components/FileUploader";
// import AutoComplete from "components/AutoComplete";

import getMaxDepth from "utils/getMaxDepth";
import convertData from "utils/convertData";

import { NestedObjectType, ParsedDataType } from "types/navigator";

const HomeContainer = () => {
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState<ParsedDataType | null>(null);

  useEffect(() => {
    if (fileData) {
      const obj: NestedObjectType = {};

      for (const prop in fileData) {
        const spl = prop.split(".");
        convertData({
          fileData,
          depth: 0,
          maxDepth: getMaxDepth(fileData),
          obj,
          spl,
          prop,
        });
      }
    }
  }, [fileData]);

  return (
    <Layout>
      <Heading m="0 0 50px">json-navigator🧭</Heading>
      <FileUploader
        fileName={fileName}
        setFileName={setFileName}
        setFileData={setFileData}
      />
      {/* <AutoComplete /> */}
    </Layout>
  );
};

export default HomeContainer;
