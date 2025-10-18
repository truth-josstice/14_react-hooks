import { createContext } from "react";

// this can be sent to other places if it's a variable and not declared 
export const defaultPokeApiContextData = {
    pokemonName: "",
    pokemonImage: ""
};

// contextVariable = createContext(defaultData)
export const PokeApiContext = createContext({defaultPokeApiContextData});