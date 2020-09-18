import * as React from "react";
import PropTypes from "prop-types";
import "./index.css";

export default function TextAnim({ phrase = "Cooming Soon" }) {
  return (
    <div className="text-anim app-body">
      <h1>
        <span>c</span>
        <span>o</span>
        <span>m</span>
        <span>i</span>
        <span>n</span>
        <span>g</span>
        <span>s</span>
        <span>o</span>
        <span>o</span>
        <span>o</span>
        <span>o</span>
        <span>n</span>
      </h1>
      <span className="phrase">{phrase}</span>
    </div>
  );
}

TextAnim.propTypes = {
  phrase: PropTypes.string.isRequired,
};
