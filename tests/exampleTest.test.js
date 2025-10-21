// Imports aren't technically required due to globals set to true, but
// lint will give you red squigglies if not imported
import { describe, expect, test } from "vitest";


describe("Sample tests", () => {
  test("Example test of basic logic", () => {
    let result = 1 + 1;
    expect(result).toBe(2);
  });
});
