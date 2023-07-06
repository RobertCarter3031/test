import React, { useState } from 'react'
import axios from 'axios';

type Props = {}

const Searchbar = (props: Props) => {
  const [searchText, setSearchText] = useState("");

  const BASEURL: String = "https://search.outdoorsy.com/rentals"

  const handleSearch = async (searchFilters: String, pageLimit: Number, pageOffset: Number): Promise<Array<Object>> => {
    const data: Array<Object> = await axios.get(`${BASEURL}?filter[keywords]=${searchFilters}&page[limit]=${pageLimit}&page[offset]=${pageOffset}`);
    
    console.log('data', data);
    return data;
  }
  
  // TODO: Use state to track current page, needs to be passed from the RentalList, or RentalList is a child of search.
  // Then, set params here by current page.
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<Array<Object>> => {
    e.preventDefault();
    return handleSearch(searchText, 4, 0)
  }

  return (
    <div>
        <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor="search-rentals">Search Rentals: </label>
            <input name="search-rentals" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button type="submit">Go!</button>
        </form>
    </div>
  )
}

export default Searchbar