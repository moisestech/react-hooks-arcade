import * as React from "react";
import PropTypes from "prop-types";

function WinLoseDraw(gameState) {
  return gameState === "win" ? (
    <p>Congrats! You won!</p>
  ) : gameState === "lose" ? (
    <p>Sorry! You lost!</p>
  ) : gameState === "draw" ? (
    <p>You drew!</p>
  ) : (
    <p>Aliens conquered!</p>
  );
}

WinLoseDraw.propTypes = {
  gameState: PropTypes.string.isRequired,
};

export default function Result({
  gameState,
  userChoiceComponent,
  computerChoiceComponent,
  restartGame,
}) {
  return (
    gameState && (
      <div className={`game-state ${gameState}`} onClick={() => restartGame()}>
        <div>
          <div className="game-state-content">
            <span>
              <p>{userChoiceComponent}</p>
              <p>You Chose</p>
            </span>
            <WinLoseDraw gameState={gameState} />
            <span>
              <p>{computerChoiceComponent}</p>
              <p>Computer Chose</p>
            </span>
          </div>

          <button onClick={() => restartGame()}>Play Again</button>
        </div>
      </div>
    )
  );
}

Result.propTypes = {
  gameState: PropTypes.string,
  userChoiceComponent: PropTypes.element,
  computerChoiceComponent: PropTypes.element,
  restartGame: PropTypes.func,
};
