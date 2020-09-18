import React from "react";
import { useLocation } from "react-router-dom";
import NavBottom from "./components/NavBottom";
import NavLeft from "./components/NavLeft";

export default function Nav() {
  const { pathname } = useLocation();
  console.log(pathname, "location");

  return (
    <div className="navbar">
      {pathname === "/" ? null : <NavLeft path={pathname} />}
      <NavBottom />
    </div>
  );
}
