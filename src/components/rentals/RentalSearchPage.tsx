import React, { useState } from 'react'

import { SearchData } from './types/SearchData'

import Searchbar from './Searchbar'
import RentalList from './RentalList'

type Props = {}

const RentalSearchPage = (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [currentSearchedTerm, setCurrentSearchedTerm] = useState("");
  const [searchData, setSearchData] = useState<SearchData | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  console.log(searchData);
  return (
    <div>
        <Searchbar searchText={searchText} setSearchText={setSearchText} setSearchData={setSearchData} setCurrentSearchedTerm={setCurrentSearchedTerm} />
        <RentalList searchData={searchData} setCurrentPage={setCurrentPage} currentSearchedTerm={currentSearchedTerm} />
    </div>
  )
}

export default RentalSearchPage