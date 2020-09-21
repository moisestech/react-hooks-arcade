import React, { useEffect, useState } from "react";
import "./index.css";

export default function CartoonSocial() {
  const [characters, setCharacters] = useState([]);
  const [openId, setOpenId] = useState(null);
  const [info, setInfo] = useState(null);

  // why does this need regenerator runtime?
  const getCharacters = async () => {
    const data = await fetch(
      `https://rickandmortyapi.com/api/character/?page=1`
    );
    const characters = await data.json();
    return characters.results;
  };

  const getCharacter = async (id) => {
    if (id) {
      const data = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`
      );
      const character = await data.json();
      return character;
    }
  };

  useEffect(() => {
    getCharacters().then((rsp) => setCharacters(rsp));
  }, []);

  useEffect(() => {
    getCharacter(openId).then((rsp) => setInfo(rsp));
  }, [openId]);

  return (
    <div className="cartoon-social app-body">
      <h1>Cartoon Social: Rick and Morty Characters</h1>
      <ul className="characters">
        {characters.map((character) => (
          <li key={character.id}>
            <img src={character.image} alt={character.name} />
            <div className="char-description">
              <div className="char-name">{character.name}</div>
              {openId === character.id && info ? (
                <div className="char-info">
                  <div>Status: {info.status}</div>
                  <div>Species: {info.species}</div>
                </div>
              ) : null}
              <button
                className="info-button"
                onClick={() => setOpenId(character.id)}
              >
                More Info
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
