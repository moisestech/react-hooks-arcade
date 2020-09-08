import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AppBtnInfo({ icon, title, info }) {
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

export default function Nav() {
  return (
    <div className="navbar">
      <Link to="/">
        <h1>React Hooks Arcade</h1>
        <span className="app-list-header">Interactive Apps</span>
      </Link>
      <Link className="nav-links" to="/pomodoro">
        <AppBtnInfo icon={"🕒"} title="Pomodoro" info="Dynamic Timer" />
      </Link>
      <Link className="nav-links" to="/markdown-editor">
        <AppBtnInfo icon={"💻"} title="Markdown Editor" info="Text Editor" />
      </Link>
      <Link className="nav-links" to="/highlight-tabs">
        <AppBtnInfo icon={"🎫"} title="Highlight Tabs" info="Web Browser" />
      </Link>
      <Link className="nav-links" to="/paper-rock-scissors">
        <AppBtnInfo
          icon={"✂️"}
          title="Paper Rock Scissors"
          info="Classic Game"
        />
      </Link>
      <Link className="nav-links" to="/moving-boxes-zelda">
        <AppBtnInfo
          icon={"⚔️"}
          title="Moving Boxes Zelda"
          info="Adventure game"
        />
      </Link>
      <Link className="nav-links" to="/infinite-image-gallery">
        <AppBtnInfo
          icon={"🖼️"}
          title="Infinite Image Gallery"
          info="Photo viewer"
        />
      </Link>
      <Link className="nav-links" to="/trivia">
        <AppBtnInfo icon={"📖"} title="Trivia" info="Quiz and knowledge" />
      </Link>
      <Link className="nav-links" to="/authentication">
        <AppBtnInfo
          icon={"🔒"}
          title="Authentication"
          info="Login application"
        />
      </Link>
      <Link className="nav-links" to="/web-speech-timers">
        <AppBtnInfo
          icon={"💬"}
          title="Web Speech Timers"
          info="Chat and messaging"
        />
      </Link>
      <Link className="nav-links" to="/calendar-picker">
        <AppBtnInfo
          icon={"🗓️"}
          title="Calendar Picker"
          info="Scheduling & Time"
        />
      </Link>
    </div>
  );
}
