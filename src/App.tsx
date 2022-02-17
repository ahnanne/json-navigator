import React from "react";
import { Route, Switch } from "react-router-dom";
import GlobalStyles from "GlobalStyles";

import HomePage from "pages/home/HomePage";

function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </>
  );
}

export default App;
