import PropButton from "./PropButton";

import { NestedObjectType } from "types/navigator";

import * as Styled from "./style";

type Props = {
  dataTree: NestedObjectType;
  selected: string | null;
  setSelected: (target: string | null) => void;
};

const DataTree = ({ dataTree, selected, setSelected }: Props) => {
  return (
    <Styled.Container>
      {Object.keys(dataTree).map((key) => (
        <PropButton
          key={key}
          prop={key}
          value={dataTree[key]}
          id={key}
          selected={selected}
          setSelected={setSelected}
        />
      ))}
    </Styled.Container>
  );
};

export default DataTree;
