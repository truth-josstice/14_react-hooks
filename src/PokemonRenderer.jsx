import { useContext, useEffect } from "react"
import { PokeApiContext } from "./contexts/PokeApiContext"

export function PokemonRenderer(){

    const [pokemonData, setPokemonData] = useContext(PokeApiContext)

    useEffect(() => {
        console.log(pokemonData.pokemonName)
        // ESlint will have issues with the empty array, but that's not an issue really. It can be ignored on a componentDidMount
    }, [])

    return <section className="pokemonRenderer">
        <h1>{pokemonData.pokemonName}</h1>
        <img src={pokemonData.pokemonImage} alt={`Sprite of Pokemon named ${pokemonData.pokemonName}.`} />
    </section>
}