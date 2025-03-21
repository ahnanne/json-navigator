import { ReactNode } from "react";
import * as Styled from "./style";

import Snowfall from "./Snowfall";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Styled.Section>
      {children}
      <Snowfall />
    </Styled.Section>
  );
};

export default Layout;
