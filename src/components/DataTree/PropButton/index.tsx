import { useState, useCallback, useEffect } from "react";

import { NestedObjectType } from "types/navigator";

import * as Styled from "./style";

type Props = {
  prop: string;
  value: string | NestedObjectType;
  id: string;
  selected: string | null;
  setSelected: (target: string | null) => void;
};

const INDENT = "20px";
const PropButton = ({ prop, value, id, selected, setSelected }: Props) => {
  const [showNestedObject, setShowNestedObject] = useState(false);
  const handleClick = useCallback(() => {
    setShowNestedObject(!showNestedObject);
    setSelected(id);
  }, [showNestedObject, setShowNestedObject]);
  const isRender = selected && selected.includes(id);

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
