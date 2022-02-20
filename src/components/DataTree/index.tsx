import PropButton from "./PropButton";

import { NestedObjectType } from "types/navigator";

import * as Styled from "./style";

type Props = {
  dataTree: NestedObjectType;
};

const DataTree = ({ dataTree }: Props) => {
  return (
    <Styled.Container>
      {Object.keys(dataTree).map((key) => (
        <PropButton key={key} prop={key} value={dataTree[key]} />
      ))}
    </Styled.Container>
  );
};

export default DataTree;
