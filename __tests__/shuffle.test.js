const shuffle = require("../src/shuffle.js");

describe("shuffle should...", () => {
  // CODE HERE
  test("check that shuffle returns an array", () => {
    const result = shuffle();
    expect(Array.isArray(result)).toBe(true);
  });

  test("check that shuffle returns an array of the same length as teh argument sent in", () => {
    const testArray = [1, 2, 3, 4, 5];
    const shuffledArray = shuffle(testArray);
    expect(shuffledArray.length).toBe(testArray.length);
  });
});
