import React, { useState, useEffect } from "react";
import "./index.css";

import Paper from "./public/icons/Paper.js";
import Rock from "./public/icons/Rock.js";
import Scissors from "./public/icons/Scissors";

import ChoicesArray from "./utils/ChoicesArray.js";
import ScoreBoard from "./components/ScoreBoard";
import Result from "./components/Result";

// 1. Handle wins + losses
// 2. Determine the winner based on choices
// 3. Reset the game

export default function PaperRockScissors() {
  const [wins, setWins] = useState(0);
  const [losses, setLosses] = useState(0);
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoicse] = useState("");
  const [gameState, setGameState] = useState(""); // win, lose, draw

  // useReducer possibly?

  // breakdown useEffect vars
  useEffect(() => {
    restartGame();
  }, []);

  // breakdown restartGame
  function restartGame() {
    setGameState("");
    setUserChoice("");

    const randomChoice =
      ChoicesArray[Math.floor(Math.random() * ChoicesArray.length)];
    setComputerChoicse(randomChoice);
  }

  // breakdown function
  function handleUserChoice(choice) {
    const chosenChoice = ChoicesArray.find((c) => c.id === choice);
    setUserChoice(chosenChoice);

    // determine the winner
    // computed effect paper, rock, scissors
    if (chosenChoice.lossesTo === computerChoice.id) {
      // lose
      setLosses((losses) => losses + 1);
      setGameState("lose");
    } else if (computerChoice.lossesTo === chosenChoice.id) {
      // win
      setWins((wins) => wins + 1);
      setGameState("win");
    } else if (computerChoice.id === chosenChoice.id) {
      // draw
      setGameState("draw");
    }
  }

  function renderComponent(choice) {
    const Component = choice.component; // Paper, Rock, Scissors
    return <Component />;
  }

  return (
    <div className="paper-rock-scissors app-body">
      <div className="info">
        <h2>Rock, Paper, Scissors</h2>

        {/* wins vs losses stats */}

        <ScoreBoard wins={wins} losses={losses} />
      </div>

      {/* conditionally shown if game state */}
      {/* the popup to show win/lose/draw */}
      {/* <Result
        gameState={gameState}
        userChoiceComponent={() => renderComponent(userChoice)}
        computerChoiceComponent={() => renderComponent(computerChoice)}
        restartGame={restartGame}
      /> */}

      {gameState && (
        <div
          className={`game-state ${gameState}`}
          onClick={() => restartGame()}
        >
          <div>
            <div className="game-state-content">
              <p>{renderComponent(userChoice)}</p>
              {/* <p>you {gameState}!</p> */}
              {gameState === "win" && <p>Congrats! You won!</p>}
              {gameState === "lose" && <p>Sorry! You lost!</p>}
              {gameState === "draw" && <p>You drew!</p>}

              <p>{renderComponent(computerChoice)}</p>
            </div>

            <button>Play Again</button>
          </div>
        </div>
      )}

      {/* <Choices handleUserChoice={() => handleUserChoice} /> */}

      <div className="choices">
        {/* choices captions */}
        <div>You</div>
        <div />
        <div>Computer</div>

        {/* buttons for my choice */}
        <div>
          <button className="paper" onClick={(e) => handleUserChoice(1)}>
            <Paper />
          </button>
          <button className="rock" onClick={(e) => handleUserChoice(2)}>
            <Rock />
          </button>
          <button className="scissors" onClick={(e) => handleUserChoice(3)}>
            <Scissors />
          </button>
        </div>

        <div className="vs">vs</div>

        {/* show the computer's choice */}
        <div>
          <button className="computer-choice">?</button>
        </div>
      </div>
    </div>
  );
}
