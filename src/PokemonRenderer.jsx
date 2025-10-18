import { useEffect } from "react";
import { usePokeApiContext } from "./contexts/PokeApiContext";

export function PokemonRenderer() {
  // const [pokemonData, setPokemonData] = useContext(PokeApiContext)

  const [{ pokemonName, pokemonImage }] = usePokeApiContext();

  useEffect(() => {
    console.log(pokemonName);
    // ESlint will have issues with the empty array, but that's not an issue really. It can be ignored on a componentDidMount
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="pokemonRenderer">
      <h1>{pokemonName}</h1>
      <img
        src={pokemonImage}
        alt={`Sprite of Pokemon named ${pokemonName}.`}
      />
    </section>
  );
}
