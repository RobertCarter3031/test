import React, { useState } from 'react'

import { SearchData } from './types/SearchData'

import Searchbar from './Searchbar'
import RentalList from './RentalList'

type Props = {}

const RentalSearchPage = (props: Props) => {
  const [searchText, setSearchText] = useState("");
  const [currentSearchedTerm, setCurrentSearchedTerm] = useState("");
  const [searchData, setSearchData] = useState<SearchData | undefined>();
  const [currentPage, setCurrentPage] = useState(1);

 const calculateTotalPages = (searchData: SearchData | undefined): number => {
    if (searchData) {
        return Math.ceil(searchData.data.data.length / 10)
    }

    return 0
 }

 const totalPages = calculateTotalPages(searchData);
  
  return (
    <div>
        <Searchbar searchText={searchText} setSearchText={setSearchText} setSearchData={setSearchData} setCurrentSearchedTerm={setCurrentSearchedTerm} />
        <RentalList searchData={searchData} currentPage={currentPage} setCurrentPage={setCurrentPage} currentSearchedTerm={currentSearchedTerm} totalPages={totalPages} />
    </div>
  )
}

export default RentalSearchPage