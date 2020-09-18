import * as React from "react";
import PropTypes from "prop-types";

export default function AppBtnInfo({ icon, title, info, tag = "App Arcade" }) {
  return (
    <>
      <span className="icon">{icon}</span>
      <ul className="nav-app-info">
        <li className="tag">{tag}</li>
        <li className="title">{title}</li>
        <li className="info">{info}</li>
      </ul>
    </>
  );
}

AppBtnInfo.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
};
