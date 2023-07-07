import calculateTotalPages from "../utils/calculateTotalPages";

const ITEMS_PER_PAGE: number = 5;

it("should return 0 if input is undefined", () => {
    const arr: undefined = undefined;

    const result = calculateTotalPages(arr, ITEMS_PER_PAGE);
    
    expect(result).toBe(0);
})

it("should return the length of the input divided by the number of items per page", () => {
    const arr: any = Array(100);

    const result = calculateTotalPages(arr.length, ITEMS_PER_PAGE);

    expect(result).toEqual(arr.length/ITEMS_PER_PAGE)
})

it("should return 1 even if there isn't enough for a full page", () => {
    const arr: any = Array(2);

    const result = calculateTotalPages(arr.length, ITEMS_PER_PAGE);

    expect(result).toEqual(1);
})
