// Imports aren't technically required due to globals set to true, but
// lint will give you red squigglies if not imported
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import userEvent from "@testing-library/user-event";
import App from "../src/App.jsx";
import { PokeApiContextProvider } from "../src/contexts/PokeApiContextProvider.jsx";
import { PokeApiContext } from "../src/contexts/PokeApiContext.jsx";

let pikachuData = {
  pokemonName: "pikachu",
  pokemonImage: "some url to figure out later",
};

describe("App renders static content", () => {
  test("App renders Vite + React text", async () => {
    // render the component that we want to test
    render(
      <PokeApiContext.Provider
        value={[
          // {
          //   pokemonName: "pikachu",
          //   pokemonImage: "some url to figure out later",
          // },
          pikachuData,
          () => {
            console.log("mocked setPokemonData function");
          },
          () => {
            console.log("mocked getRandomPokemon");
          },
        ]}
      >
        <App />
      </PokeApiContext.Provider>
      // <PokeApiContextProvider>
      //   <App />
      // </PokeApiContextProvider>
    );
    // search the component for specific data
    // synchronously get content on the page and move on in the test
    const appContentElementGET = screen.getByText("Vite + React");
    // wait for the desired content to appear on the page and then move on in the test
    const appContentElementFIND = await screen.findByText("Vite + React");

    const pikachuOnPage = screen.getByText(pikachuData.pokemonName);
    // console.log(appContentElementGET);
    // console.log(appContentElementFIND);

    // check if the found data matches expected test result data
    expect(pikachuOnPage).toBeInTheDocument();
    expect(appContentElementGET).toBeInTheDocument();
    expect(appContentElementFIND).toBeInTheDocument();
  });

  test("App has a button that increases number by one on click", async () => {
    // render the component that we want to test
    render(
      <PokeApiContext.Provider
        value={[
          pikachuData,
          () => {
            console.log("mocked setPokemonData function");
          },
          () => {
            console.log("mocked getRandomPokemon");
          },
        ]}
      >
        <App />
      </PokeApiContext.Provider>
      // <PokeApiContextProvider>
      //  <App />
      // </PokeApiContextProvider>
    );
    // search for text on screen that says "count is 0"
    let countOf0 = screen.getByText("count is 0");
    expect(countOf0).toBeInTheDocument();

    // simulate a click on the button that has that text
    // set up a test user
    const user = userEvent.setup()

    // instruct the test user to click on the button
    await user.click(countOf0);

    // search for text on screen that says "count is 1"
    let countOf1 = screen.getByText("count is 1");
    expect (countOf1).toBeInTheDocument();
  });
});
