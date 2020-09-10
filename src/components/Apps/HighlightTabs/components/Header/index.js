import * as React from "react";
import { NavLink } from "react-router-dom";
import Tab from "../Tab";

export default function TabList(props) {
  return (
    <div className="tabs">
      <Tab>
        <NavLink exact to="/highlight-tabs/" activeClassName="is-active">
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/highlight-tabs/about" activeClassName="is-active">
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to="/highlight-tabs/features" activeClassName="is-active">
          Features
        </NavLink>
      </Tab>
    </div>
  );
}
