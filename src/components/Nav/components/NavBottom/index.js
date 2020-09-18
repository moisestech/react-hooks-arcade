import React from "react";
import { NavLink } from "react-router-dom";
import {
  IoIosToday,
  IoIosRocket,
  IoIosApps,
  IoLogoGameControllerA,
  IoMdSearch,
} from "react-icons/io";

export default function NavBottom() {
  const iconSize = "2em";

  return (
    <div className="navbar-bottom">
      <NavLink exact to="/" activeClassName="is-active" className="link">
        <IoIosToday size={iconSize} />
        <span>Today</span>
      </NavLink>

      <NavLink to="/games" className="link">
        <IoIosRocket size={iconSize} />
        <span>Games</span>
      </NavLink>

      <NavLink to="/apps" className="link">
        <IoIosApps size={iconSize} />
        <span>Apps</span>
      </NavLink>

      <NavLink to="/arcade" className="link">
        <IoLogoGameControllerA size={iconSize} />
        <span>Arcade</span>
      </NavLink>

      <NavLink to="/search" className="link">
        <IoMdSearch size={iconSize} />
        <span>Search</span>
      </NavLink>
    </div>
  );
}
