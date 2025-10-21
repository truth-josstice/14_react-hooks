// Imports aren't technically required due to globals set to true, but
// lint will give you red squigglies if not imported
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "../src/App.jsx";

describe("App renders static content", () => {
  test("App renders Vite + React text", async () => {
    // render the component that we want to test
    render(<App />);
    // search the component for specific data
    const appContentElementGET = screen.getByText("Vite + React");
    const appContentElementFIND = await screen.findByText("Vite + React");

    console.log(appContentElementGET);
    console.log(appContentElementFIND);

    // check if the found data matches expected test result data
    expect(appContentElementGET).toBeInTheDocument();
    expect(appContentElementFIND).toBeInTheDocument();
  });
});
