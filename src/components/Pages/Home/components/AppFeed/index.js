import { NavLink } from "react-router-dom";
import AppArray from "../../../../../utils/app-array";
import AppBtnInfo from "../../../../Nav/components/AppBtnInfo";

export default function AppFeed() {
  return (
    <ul className="app-feed">
      {AppArray.map((nav, index) => {
        return (
          <li key={index}>
            <NavLink
              key={index}
              to={nav.to}
              className={nav.className}
              activeClassName="is-active"
            >
              {/* <img className="app-img" src={nav.imgStatic} /> */}
              <img className="app-img" src={nav.imgGif} />
              <AppBtnInfo icon={nav.icon} title={nav.title} info={nav.info} />
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
