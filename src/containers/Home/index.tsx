import { useState } from "react";

import Layout from "components/Layout";
import Heading from "components/Heading";
import FileUploader from "components/FileUploader";

const HomeContainer = () => {
  const [fileName, setFileName] = useState("");
  const [fileData, setFileData] = useState<{ [key: string]: string } | null>(
    null
  );

  console.log(fileData);

  return (
    <Layout>
      <Heading m="0 0 50px">json-navigator🧭</Heading>
      <FileUploader
        fileName={fileName}
        setFileName={setFileName}
        setFileData={setFileData}
      />
    </Layout>
  );
};

export default HomeContainer;
