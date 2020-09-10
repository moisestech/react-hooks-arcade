import React from "react";
import { NavLink } from "react-router-dom";
import AppBtnInfo from "./components/AppBtnInfo";
import NavBarArray from "./utils/navbar-array";

export default function Nav() {
  return (
    <div className="navbar">
      <NavLink exact to="/" activeClassName="is-active">
        <h1>React Hooks Arcade</h1>
        <span className="app-list-header">Interactive Apps</span>
      </NavLink>

      {NavBarArray.map((nav, index) => {
        return (
          <NavLink
            key={index}
            to={nav.to}
            className={nav.className}
            activeClassName="is-active"
          >
            <AppBtnInfo icon={nav.icon} title={nav.title} info={nav.info} />
          </NavLink>
        );
      })}
    </div>
  );
}
