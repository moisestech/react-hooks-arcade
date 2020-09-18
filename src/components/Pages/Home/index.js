import * as React from "react";
import Carousel from "./components/Carousel";
import AppFeed from "./components/AppFeed";

export default function Home() {
  return (
    <div className="app-body">
      <div className="home-feed">
        <Carousel />
        <AppFeed />
      </div>
    </div>
  );
}
