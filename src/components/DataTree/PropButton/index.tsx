import { useState, useCallback, useEffect } from "react";

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
}: Props & DataTreeControlProps) => {
  const [showNestedObject, setShowNestedObject] = useState(false);
  const handleClick = useCallback(() => {
    setShowNestedObject(!showNestedObject);
    setSelected(id);
  }, [showNestedObject, setShowNestedObject]);
  const isRender = selected && (selected.includes(id + ".") || selected === id);

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
        {prop}
      </Styled.Button>
      {showNestedObject && isRender && (
        <>
          {typeof value === "string" ? (
            <Styled.Value indent={INDENT}>{value}</Styled.Value>
          ) : (
            <Styled.Wrap indent={INDENT}>
              {Object.keys(value).map((key) => (
                <PropButton
                  key={key}
                  prop={key}
                  value={value[key]}
                  id={id + "." + key}
                  depth={depth + 1}
                  selected={selected}
                  setSelected={setSelected}
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
