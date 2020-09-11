import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import SiteHeader from "./components/SiteHeader";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

export default function Authentication() {
  return (
    <Router>
      <div className="authentication app-body">
        {/* Site Header */}
        <SiteHeader />

        {/* routes */}
        <Switch>
          <Route exact path="/authentication">
            <Home />
          </Route>
          <Route path="/authentication/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
