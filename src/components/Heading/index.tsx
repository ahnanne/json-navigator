import React from "react";

import * as Styled from "./style";

type Props = {
  m?: string;
};

const Heading: React.FC<Props> = ({ m, children }) => {
  return <Styled.H1 style={{ margin: m }}>{children}</Styled.H1>;
};

export default Heading;
