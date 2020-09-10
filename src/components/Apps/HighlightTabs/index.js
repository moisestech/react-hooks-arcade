import * as React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import RoutesView from "./RoutesView";

export default function HighlightTabs() {
  return (
    <Router>
      <div className="highlight-tabs app-body">
        <div className="browser">
          <Header />

          <div className="viewport">
            <RoutesView />
          </div>
        </div>
      </div>
    </Router>
  );
}
