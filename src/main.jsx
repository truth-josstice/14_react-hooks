import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { PokeApiContextProvider } from "./contexts/PokeApiContextProvider.jsx";
import { GetRandomPokemonButton } from "./components/GetRandomPokemonButton.jsx";
import { PokemonRenderer } from "./PokemonRenderer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*  IF the context provider has some logic within it, we should wrap it as a custom component and use that 
    For instance API calls and such.*/}
    <PokeApiContextProvider>
      <App />
      {/* <GetRandomPokemonButton />
      <PokemonRenderer /> */}
    </PokeApiContextProvider>

    {/* If the context is basic and has no logic, you could use the provider directly */}
    {/* <PokeApiContext.Provider>
      <App />
    </PokeApiContext.Provider> */}
  </StrictMode>
);
