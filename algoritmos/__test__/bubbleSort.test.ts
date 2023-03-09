import bubbleSort from "../bubbleSort";

describe("bubbleSort", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [5, 2, 8, 1, 3, 7, 6, 4];
    bubbleSort(arr);
    expect(arr).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  it("should handle an empty array", () => {
    const arr: number[] = [];
    bubbleSort(arr);
    expect(arr).toEqual([]);
  });

  it("should handle an array with one element", () => {
    const arr = [42];
    bubbleSort(arr);
    expect(arr).toEqual([42]);
  });

  it("should handle an array with repeated elements", () => {
    const arr = [1, 2, 3, 1, 2, 3, 1, 2, 3];
    bubbleSort(arr);
    expect(arr).toEqual([1, 1, 1, 2, 2, 2, 3, 3, 3]);
  });
});
