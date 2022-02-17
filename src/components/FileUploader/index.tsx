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
          onChange={handleChange}
        />
      </Styled.Wrap>
    </Styled.Container>
  );
};

export default FileUploader;
