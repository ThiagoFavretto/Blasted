import React from "react";
import { Switch, Route } from "react-router-dom";

import Game from "./pages/Game";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Game} />
      <Route path="/blasted" component={Game} />
    </Switch>
  );
}
