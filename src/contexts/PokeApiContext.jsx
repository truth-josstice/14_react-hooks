import { createContext, useContext } from "react";

// this can be sent to other places if it's a variable and not declared
export const defaultPokeApiContextData = {
  pokemonName: "",
  pokemonImage: "",
};

// contextVariable = createContext(defaultData)
export const PokeApiContext = createContext({ defaultPokeApiContextData });

// Custom hooks, just put use at the start :D
export function usePokeApiContext() {
  return useContext(PokeApiContext);
}
