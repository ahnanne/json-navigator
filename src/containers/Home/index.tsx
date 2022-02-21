import { useState, useEffect } from "react";

import Layout from "components/Layout";
import Heading from "components/Heading";
import FileUploader from "components/FileUploader";
import Search from "components/Search";

import convertData from "utils/convertData";

import { NestedObjectType, ParsedDataType } from "types/navigator";
import DataTree from "components/DataTree";

const HomeContainer = () => {
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState<ParsedDataType | null>(null);
  const [dataTree, setDataTree] = useState<NestedObjectType | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    if (fileData) {
      const obj: NestedObjectType = {};
      const isSearching = !!keyword.length;

      for (const prop in fileData) {
        if (isSearching) {
          if (!prop.includes(keyword)) continue;
        }

        const spl = prop.split(".");
        convertData({
          fileData,
          depth: 0,
          obj,
          spl,
          prop,
        });
      }

      setDataTree(obj);
    }
  }, [fileData, keyword]);

  return (
    <Layout>
      <Heading m="0 0 50px">json-navigator🧭</Heading>
      <FileUploader
        fileName={fileName}
        setFileName={setFileName}
        setFileData={setFileData}
      />
      {dataTree && (
        <>
          <Search keyword={keyword} setKeyword={setKeyword} />
          <DataTree
            dataTree={dataTree}
            selected={selected}
            setSelected={setSelected}
            keyword={keyword}
          />
        </>
      )}
    </Layout>
  );
};

export default HomeContainer;
