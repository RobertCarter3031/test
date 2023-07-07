import React, { useState } from 'react'
import axios from 'axios';

type Props = {
    searchText: string,
    setSearchText: Function,
    setSearchData: Function,
    setCurrentSearchedTerm: Function
    }

const Searchbar = (props: Props) => {

  const { searchText, setSearchText, setSearchData, setCurrentSearchedTerm } = props;

  const BASEURL: string = "https://search.outdoorsy.com/rentals"

  const handleSearch = async (searchFilters: string, pageLimit: number, pageOffset: number): Promise<void> => {
    const data: Array<Object> = await axios.get(`${BASEURL}?filter[keywords]=${searchFilters}&page[limit]=${pageLimit}&page[offset]=${pageOffset}`);
    
    setSearchData(data);
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    handleSearch(searchText, 4, 0);
    setCurrentSearchedTerm(searchText);
  }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="search-rentals">Search Rentals: </label>
            <input type="text" name="search-rentals" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button type="submit">Go!</button>
        </form>
    </div>
  )
}

export default Searchbar