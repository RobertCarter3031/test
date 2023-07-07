import { SearchData } from "../rentals/types/SearchData";

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