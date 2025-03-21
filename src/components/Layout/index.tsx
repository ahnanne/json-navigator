import * as Styled from "./style";

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return <Styled.Section>{children}</Styled.Section>;
};

export default Layout;
