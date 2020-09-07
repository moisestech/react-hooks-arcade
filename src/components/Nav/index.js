import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div className="nav">
      <Link to="/pomodoro"></Link>
      <Link to="/markdown-editor"></Link>
      <Link to="/highlight-tabs"></Link>
      <Link to="/paper-rock-scissors"></Link>
      <Link to="/moving-boxes-zelda"></Link>
      <Link to="/infinite-image-gallery"></Link>
      <Link to="/trivia"></Link>
      <Link to="/authentication"></Link>
      <Link to="/web-speech-timers"></Link>
      <Link to="/calendar-picker"></Link>
    </div>
  );
}
