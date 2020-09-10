import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Features from "../pages/Features";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/highlight-tabs">
        <Home />
      </Route>
      <Route path="/highlight-tabs/about">
        <About />
      </Route>
      <Route path="/highlight-tabs/features">
        <Features />
      </Route>
    </Switch>
  );
}
