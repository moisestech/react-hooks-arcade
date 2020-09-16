import * as React from "react";
import "./index.css";

import Tabs from "./components/Tabs";
import AddressBar from "./components/AdressBar";

export default function Browser() {
  return (
    <div className="browser app-body">
      <div>Browser</div>
      <Tabs />

      <AddressBar />

      <div className="viewport">New Tab Page</div>
    </div>
  );
}
