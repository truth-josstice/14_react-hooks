import { useEffect, useState } from "react";
import { PokeApiContext, defaultPokeApiContextData } from "./PokeApiContext";
import { useLocalStorage } from "react-use";

export function PokeApiContextProvider({ children }) {
  const [storedPokeId, setStoredPokeId] = useLocalStorage(
    "pokeId",
    25
  );
  const [pokeApiData, setPokeApiData] = useState(defaultPokeApiContextData);

  async function getRandomPokemon() {
    let randomPokemonNumber = Math.floor(Math.random() * 1025);
    getSpecificPokemon(randomPokemonNumber);
  }

  async function getSpecificPokemon(targetPokemonId) {
    let response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/" + targetPokemonId
    );
    let data = await response.json();

    // Fetch worked, all is good, ID was valid
    setStoredPokeId(targetPokemonId);

    setPokeApiData({
      pokemonName: data.name,
      pokemonImage: data.sprites.other.home.front_default,
    });
  }

  useEffect(() => {
    if (storedPokeId) {
      getSpecificPokemon(storedPokeId);
    } else {
      getRandomPokemon();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
