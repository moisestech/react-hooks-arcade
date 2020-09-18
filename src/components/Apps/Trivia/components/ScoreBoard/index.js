import * as React from "react";

export default function ScoreBoard(props) {
  return (
    <div className="scoreboard">
      <div className="wrong">
        <strong>0</strong>
        <span>wrong</span>
      </div>

      <div className="correct">
        <strong>0</strong>
        <span>correct</span>
      </div>
    </div>
  );
}
