import * as React from "react";
import PropTypes from "prop-types";

import Paper from "../../public/icons/Paper";
import Rock from "../../public/icons/Rock";
import Scissors from "../public/icons/Scissors";

export default function Choices({ handleUserChoice }) {
  return (
    <div className="choices">
      {/* choices captions */}

      <div>You</div>
      <div />
      <div>Computer</div>

      {/* buttons for my choice 
        onClick call anonymous function before handleUserChange */}
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
  );
}

Choices.propTypes = {
  handleUserChoice: PropTypes.func.isRequired,
};
