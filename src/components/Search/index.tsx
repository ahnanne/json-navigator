import React, { useState } from "react";

import * as Styled from "./style";

type Props = {
  keyword: string;
  setKeyword: (keyword: string) => void;
};

const Search = (props: Props) => {
  const [input, setInput] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") props.setKeyword(input);
  };

  return (
    <Styled.Container>
      <Styled.HiddenLabel htmlFor="search-input">검색</Styled.HiddenLabel>
      <Styled.Input
        id="search-input"
        value={input}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
      <Styled.Button
        disabled={input === ""}
        onClick={() => props.setKeyword(input)}
      >
        property 검색
      </Styled.Button>
      <Styled.Button
        disabled={props.keyword === ""}
        onClick={() => {
          props.setKeyword("");
          setInput("");
        }}
      >
        검색어 초기화
      </Styled.Button>
    </Styled.Container>
  );
};

export default Search;
