import * as React from "react";
import { NavLink } from "react-router-dom";
import AppBtnInfo from "../../Nav/components/AppBtnInfo";
import NavBarArray from "../../Nav/utils/navbar-array";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="app-body">
      <Carousel />
      <ul className="home-feed">
        {NavBarArray.map((nav, index) => {
          return (
            <li key={index}>
              <NavLink
                key={index}
                to={nav.to}
                className={nav.className}
                activeClassName="is-active"
              >
                <AppBtnInfo icon={nav.icon} title={nav.title} info={nav.info} />
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
