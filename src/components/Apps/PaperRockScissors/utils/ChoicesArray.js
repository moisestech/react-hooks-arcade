import Paper from "../public/icons/Paper";
import Rock from "../public/icons/Rock";
import Scissors from "../public/icons/Scissors";

export default [
  { id: 1, name: "paper", component: Paper, lossesTo: 3 },
  { id: 2, name: "rock", component: Rock, lossesTo: 1 },
  { id: 3, name: "scissors", component: Scissors, lossesTo: 2 },
];

// duplicating imports possibly?
