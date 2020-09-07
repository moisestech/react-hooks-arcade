import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/pomodoro"></Route>
          <Route path="/markdown-editor"></Route>
          <Route path="/highlight-tabs"></Route>
          <Route path="/paper-rock-scissors"></Route>
          <Route path="/moving-boxes-zelda"></Route>
          <Route path="/infinite-image-gallery"></Route>
          <Route path="/trivia"></Route>
          <Route path="/authentication"></Route>
          <Route path="/web-speech-timers"></Route>
          <Route path="/calendar-picker"></Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("src"));
