import React from "react";

import * as Styled from "./style";

const Layout: React.FC = ({ children }) => {
  return <Styled.Section>{children}</Styled.Section>;
};

export default Layout;
