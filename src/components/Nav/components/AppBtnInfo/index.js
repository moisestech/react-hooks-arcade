import * as React from "react";
import PropTypes from "prop-types";

export default function AppBtnInfo({
  icon,
  title,
  info,
  tag = "App Arcade",
  path,
}) {
  return (
    <div className="app-btn-info">
      <span className="icon">{icon}</span>
      <ul className="nav-app-info">
        {path === "/" ? <li className="tag">{tag}</li> : null}
        <li className="title">{title}</li>
        <li className="info">{info}</li>
      </ul>
    </div>
  );
}

AppBtnInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
