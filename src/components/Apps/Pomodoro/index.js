import React from "react";

export default function Pomodoro() {
  const [tileLeft, setTimeLeft] = React.useState(25 * 60);

  const minutes = Math.floor(timeleft / 60);
  const seconds = Math.floor(timeleft - minutes * 60);

  return (
    <div className="app">
      <h2>Pomodoro!</h2>

      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>

      <div className="buttons">
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    </div>
  );
}
