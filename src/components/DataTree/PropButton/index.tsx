import { useState, useEffect } from "react";

import { NestedObjectType } from "types/navigator";
import { DataTreeControlProps } from "types/props";

import * as Styled from "./style";

type Props = {
  prop: string;
  value: string | NestedObjectType;
  id: string;
  depth: number;
};

const INDENT = "20px";
const PropButton = ({
  prop,
  value,
  id,
  depth,
  selected,
  setSelected,
  keyword,
}: Props & DataTreeControlProps) => {
  const [showNestedObject, setShowNestedObject] = useState(false);

  const handleClick = () => {
    setShowNestedObject(!showNestedObject);
    setSelected(id);
  };

  const isRender = selected && (selected.includes(id + ".") || selected === id);
  const isSearching = !!keyword.length;

  useEffect(() => {
    if (!isRender) {
      setShowNestedObject(false);
    }
  }, [selected]);

  return (
    <Styled.Wrap>
      <Styled.Button onClick={handleClick}>
        <Styled.Icon aria-hidden showNestedObject={showNestedObject}>
          ▶
        </Styled.Icon>
        <Styled.Text isHighlighted={isSearching && prop.includes(keyword)}>
          {prop}
        </Styled.Text>
      </Styled.Button>
      {showNestedObject && isRender && (
        <>
          {typeof value === "string" ? (
            <Styled.Value indent={INDENT}>
              <Styled.Text
                isSmall
                isHighlighted={isSearching && value.includes(keyword)}
              >
                {value}
              </Styled.Text>
            </Styled.Value>
          ) : (
            <Styled.Wrap indent={INDENT}>
              {Object.keys(value).map((key) => (
                <PropButton
                  key={id + "." + key}
                  prop={key}
                  value={value[key]}
                  id={id + "." + key}
                  depth={depth + 1}
                  selected={selected}
                  setSelected={setSelected}
                  keyword={keyword}
                />
              ))}
            </Styled.Wrap>
          )}
        </>
      )}
    </Styled.Wrap>
  );
};

export default PropButton;
