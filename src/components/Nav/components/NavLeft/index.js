import * as React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import AppBtnInfo from "../AppBtnInfo";
import NavBarArray from "../../../../utils/app-array";

export default function NavLeft({ path }) {
  return (
    <div className="navleft">
      <NavLink exact to="/" activeClassName="is-active">
        <h1>React Arcade</h1>
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
            <AppBtnInfo
              icon={nav.icon}
              title={nav.title}
              info={nav.info}
              path={path}
            />
          </NavLink>
        );
      })}
    </div>
  );
}

NavLeft.propTypes = {
  path: PropTypes.string.isRequired,
};
