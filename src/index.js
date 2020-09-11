import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";

import Home from "./components/Pages/Home";
import NotFound from "./components/Pages/NotFound";

import Pomodoro from "./components/Apps/Pomodoro";
import MarkdownEditor from "./components/Apps/MarkdownEditor";
import HighlightTabs from "./components/Apps/HighlightTabs";
import PaperRockScissors from "./components/Apps/PaperRockScissors";
import AdventureLink from "./components/Apps/AdventureLink";
import InfiniteImageGallery from "./components/Apps/InfiniteImageGallery";
import Trivia from "./components/Apps/Trivia";
import Authentication from "./components/Apps/Authentication";
import WebSpeechTimers from "./components/Apps/WebSpeechTimers";
import CalendarPicker from "./components/Apps/CalendarPicker";

// import AnimatedChat from "./components/Apps/AnimatedChat";
// import MultiForm from './components/Apps/MultiForm'

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/pomodoro">
            <Pomodoro />
          </Route>

          <Route path="/markdown-editor">
            <MarkdownEditor />
          </Route>

          <Route path="/highlight-tabs">
            <HighlightTabs />
          </Route>

          <Route path="/paper-rock-scissors">
            <PaperRockScissors />
          </Route>

          <Route path="/adventure-link">
            <AdventureLink />
          </Route>

          <Route path="/infinite-image-gallery">
            <InfiniteImageGallery />
          </Route>

          <Route path="/trivia">
            <Trivia />
          </Route>

          <Route path="/authentication">
            <Authentication />
          </Route>

          <Route path="/web-speech-timers">
            <WebSpeechTimers />
          </Route>

          <Route path="/calendar-picker">
            <CalendarPicker />
          </Route>

          {/* <Route path="/animated-chat">
            <AnimatedChat />
          </Route> */}

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("src"));
