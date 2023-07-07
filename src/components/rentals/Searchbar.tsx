import React, { useState } from "react";
import axios from "axios";

import "../styles/searchBar.css";

type Props = {
  searchText: string;
  setSearchText: Function;
  setSearchData: Function;
  setCurrentSearchedTerm: Function;
};

/**
 * Searchbar component that displays a search bar and allows the user the search for keywords
 * @param props 
 * @returns Searchbar component
 */
const Searchbar = (props: Props) => {
  const { searchText, setSearchText, setSearchData, setCurrentSearchedTerm } =
    props;

  const BASEURL: string = "https://search.outdoorsy.com/rentals";

  const handleSearch = async (
    searchFilters: string,
    pageLimit: number,
    pageOffset: number
  ): Promise<void> => {
    const data: Array<Object> = await axios.get(
      `${BASEURL}?filter[keywords]=${searchFilters}&page[limit]=${pageLimit}&page[offset]=${pageOffset}`
    );

    setSearchData(data);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSearch(searchText, 100, 0);
    setCurrentSearchedTerm(searchText);
  };

  return (
    <div className="rental-searchbar-container">
      <form className="rental-search-form" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="search-rentals"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="rental-search-bar"
        />
      </form>
    </div>
  );
};

export default Searchbar;
