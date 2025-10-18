import { usePokeApiContext } from "../contexts/PokeApiContext";

export function GetRandomPokemonButton(){
    const [,,getRandomPokemon] = usePokeApiContext();
    return <button onClick={() => getRandomPokemon()}>
        Get a random Pokemon
    </button>
}