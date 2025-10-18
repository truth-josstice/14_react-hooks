import { useEffect, useState } from "react";
import { PokeApiContext, defaultPokeApiContextData } from "./PokeApiContext";

export function PokeApiContextProvider({ children }) {
  const [pokeApiData, setPokeApiData] = useState(defaultPokeApiContextData);

  async function getRandomPokemon() {
    let randomPokemonNumber = Math.floor(Math.random() * 1025);
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + randomPokemonNumber
    );
    let data = await response.json();

    setPokeApiData({
      pokemonName: data.name,
      pokemonImage: data.sprites.other.home.front_default,
    });
  }

  useEffect(() => {
    getRandomPokemon();
  }, []);

  return (
    <>
      <PokeApiContext.Provider
        value={[pokeApiData, setPokeApiData, getRandomPokemon]}
      >
        {children}
      </PokeApiContext.Provider>
    </>
  );
}
