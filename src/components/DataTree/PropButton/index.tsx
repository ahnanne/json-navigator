import { useState, useCallback } from "react";

import { NestedObjectType } from "types/navigator";

import * as Styled from "./style";

type Props = {
  prop: string;
  value: string | NestedObjectType;
};

const INDENT = "20px";
const PropButton = ({ prop, value }: Props) => {
  const [showNestedObject, setShowNestedObject] = useState(false);
  const handleClick = useCallback(() => {
    setShowNestedObject(!showNestedObject);
  }, [showNestedObject, setShowNestedObject]);

  return (
    <Styled.Wrap>
      <Styled.Button onClick={handleClick}>
        <Styled.Icon aria-hidden showNestedObject={showNestedObject}>
          ▶
        </Styled.Icon>
        {prop}
      </Styled.Button>
      {showNestedObject && (
        <>
          {typeof value === "string" ? (
            <Styled.Value indent={INDENT}>{value}</Styled.Value>
          ) : (
            <Styled.Wrap indent={INDENT}>
              {Object.keys(value).map((key) => (
                <PropButton key={key} prop={key} value={value[key]} />
              ))}
            </Styled.Wrap>
          )}
        </>
      )}
    </Styled.Wrap>
  );
};

export default PropButton;
