import * as React from "react";
import Gandalf from "../../public/images/gandalf.png";

export default function Home() {
  return (
    <div className="page home">
      <div>
        <img src={Gandalf} alt="Gandalft" />
        <h2>You Shall Not Pass!</h2>
      </div>
    </div>
  );
}
