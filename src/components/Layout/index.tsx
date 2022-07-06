import React, { useState, useEffect } from "react";

import * as Styled from "./style";

const Layout: React.FC = ({ children }) => {
  const [wasm, setWasm] = useState<null | any>(null); // TODO:

  useEffect(() => {
    (async () => {
      const snowflakes = await import("./snowflakes");
      console.log(snowflakes);
      setWasm(snowflakes);
    })();
  }, []);

  console.log(wasm);

  return <Styled.Section>{children}</Styled.Section>;
};

export default Layout;
