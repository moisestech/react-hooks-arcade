import * as React from "react";

// image for the pokemon
// https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png

const pokemon = [
  { id: 4, name: "charizard" },
  { id: 10, name: "caterpie" },
  { id: 77, name: "ponyta" },
  { id: 108, name: "lickitung" },
  { id: 132, name: "ditto" },
  { id: 133, name: "eevee" },
];

export default function MemoryGame() {
  return (
    <div className="memory-game app-body">
      <div>MemoryGame</div>
    </div>
  );
}
