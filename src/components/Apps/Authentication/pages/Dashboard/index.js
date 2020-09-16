import * as React from "react";
import Frodo from "../../public/images/frodo.png";

export default function Dashboard(props) {
  return (
    <div className="page dashboard">
      <div>
        <img src={Frodo} alt="Frodo" />
        <h2>Welcome Person</h2>
      </div>
    </div>
  );
}
