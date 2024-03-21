// import { duplicate } from "./complexUtils";

// describe('Test "duplicate" function', () => {
//   it("Check numbers duplication", () => {
//     expect(duplicate([1, 2, 3])).toEqual([2, 4, 6]);
//   });

//   it("Check strings duplication", () => {
//     expect(duplicate(["1", "2", "3"])).toEqual(["11", "22", "33"]);
//   });
// });

import { getItemTypes } from "./yourFileWithFunction";

describe("Test getItemTypes function", () => {
  it("Should correctly count numbers in the array", () => {
    expect(getItemTypes([1, 2, 3])).toEqual({ numberCnt: 3 });
  });

  it("Should correctly count strings in the array", () => {
    expect(getItemTypes(["a", "b", "c"])).toEqual({ strCnt: 3 });
  });

  it("Should correctly count arrays in the array", () => {
    expect(
      getItemTypes([
        [2, 3],
        ["a", "b"],
      ])
    ).toEqual({ arrayCnt: 2 });
  });
  
  it("Should correctly count other types in the array", () => {
    expect(getItemTypes([null, undefined, {}, true, false])).toEqual({
      otherCnt: 5,
    });
  });
});
