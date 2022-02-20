import PropButton from "./PropButton";

import { NestedObjectType } from "types/navigator";
import { DataTreeControlProps } from "types/props";

import * as Styled from "./style";

type Props = {
  dataTree: NestedObjectType;
};

const DataTree = ({
  dataTree,
  selected,
  setSelected,
}: Props & DataTreeControlProps) => {
  return (
    <Styled.Container>
      {Object.keys(dataTree).map((key) => (
        <PropButton
          key={key}
          prop={key}
          value={dataTree[key]}
          id={key}
          depth={0}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </Styled.Container>
  );
};

export default DataTree;
