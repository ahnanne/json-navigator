import React, { useState } from "react";

import * as Styled from "./style";

const FileUploader = () => {
  const [fileName, setFileName] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;

    if (file) {
      setFileName(file[0].name);
    } else {
      setFileName("");
    }
  };

  const handleFileReader = (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    const file = e.target.files;

    if (file) {
      reader.readAsText(file[0], "UTF-8");
      reader.onload = (e: ProgressEvent<FileReader>) => {
        console.log(JSON.parse((e.target?.result as string) || ""));
      };
    }
  };

  return (
    <Styled.Container>
      <Styled.FileName>
        <p>{fileName || "파일을 선택해주세요.."}</p>
      </Styled.FileName>
      <Styled.Wrap>
        <Styled.Label htmlFor="file-uploader">JSON 파일 업로드</Styled.Label>
        <Styled.Input
          type="file"
          accept=".json"
          id="file-uploader"
          onChange={(e) => {
            handleChange(e);
            handleFileReader(e);
          }}
        />
      </Styled.Wrap>
    </Styled.Container>
  );
};

export default FileUploader;
