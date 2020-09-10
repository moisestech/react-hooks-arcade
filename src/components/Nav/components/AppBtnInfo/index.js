import * as React from "react";
import PropTypes from "prop-types";

export default function AppBtnInfo({ icon, title, info }) {
  return (
    <>
      <span className="icon">{icon}</span>
      <ul className="nav-app-info">
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
