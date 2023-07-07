import React, { useState } from "react";

import { SearchData } from "./types/SearchData";

import Searchbar from "./Searchbar";
import RentalList from "./RentalList";

import '../styles/rentalSearchPage.css'

type Props = {};

const RentalSearchPage = (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [currentSearchedTerm, setCurrentSearchedTerm] = useState("");
  const [searchData, setSearchData] = useState<SearchData | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE: number = 5;

  const calculateTotalPages = (searchData: SearchData | undefined): number => {
    if (searchData) {
      return Math.ceil(searchData.data.data.length / ITEMS_PER_PAGE);
    }

    return 0;
  };

  const totalPages = calculateTotalPages(searchData);

  return (
    <div className="rental-search-container">
      <Searchbar
        searchText={searchText}
        setSearchText={setSearchText}
        setSearchData={setSearchData}
        setCurrentSearchedTerm={setCurrentSearchedTerm}
      />
      <RentalList
        searchData={searchData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentSearchedTerm={currentSearchedTerm}
        totalPages={totalPages}
        itemsPerPage={ITEMS_PER_PAGE}
      />
    </div>
  );
};

export default RentalSearchPage;
