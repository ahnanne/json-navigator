import React, { useState, useEffect } from "react";
// import initSwc, { transformSync } from '@swc/wasm-web';
import { SnowCanvas } from "@yein/snowflakes";

import * as Styled from "./style";

const Layout: React.FC = ( { children } ) => {
  const [ snowCanvas, setSnowCanvas ] = useState<null | SnowCanvas>( null );

  // TODO: detect browser
  useEffect( () => {
    const instantiateStreaming = async () => {
      const wasm = await fetch( 'snowflakes_bg.wasm' );
      const arrayBuffer = await wasm.arrayBuffer();
      const instantiatedObject = await WebAssembly.instantiate( arrayBuffer );
      const exportedFunc = instantiatedObject.instance.exports.exported_func as CallableFunction;
      const test = exportedFunc();

      console.log(test)
    };

    instantiateStreaming();
  }, [] );

  return <Styled.Section>{children}</Styled.Section>;
};

export default Layout;
