import { SearchData } from "../rentals/types/SearchData";

/**
 * Calculates total number of pages for pagination based on input length and items per page.
 * 
 * @param lengthOfData can be undefined since the array may be undefined when passing arr.length
 * @param itemsPerPage the number of items per page for pagination
 * @returns number
 */
const calculateTotalPages = (
  lengthOfData: number | undefined,
  itemsPerPage: number
): number => {
  if (lengthOfData) {
    return Math.ceil(lengthOfData / itemsPerPage);
  }

  return 0;
};

export default calculateTotalPages;