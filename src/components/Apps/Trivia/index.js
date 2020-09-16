import * as React from "react";
import "./index.css";
import Question from "./components/Question";
import CategorySelector from "./components/CategorySelector";
import ResultsModal from "./components/ResultModal";
import ScoreBoard from "./components/ScoreBoard";

export default function Trivia() {
  return (
    <div className="trivia app-body">
      {/* Show the result modela */}
      {/* <ResultModal /> */}

      {/* Question Header */}
      <div className="question-header">
        <CategorySelector />
        <ScoreBoard />
      </div>

      {/* Question itself */}
      <div className="question-main">
        <Question />
      </div>

      {/* Question Footer */}
      <div className="question-footer">
        <button>Go to next question 👉</button>
      </div>
    </div>
  );
}
