import React from 'react'
import { SearchData } from './types/SearchData'

type Props = {
  searchData: SearchData | undefined,
  setCurrentPage: Function,
  currentSearchedTerm: string,
}

const RentalList = (props: Props) => {
  const { searchData, setCurrentPage, currentSearchedTerm } = props;

  const data = searchData?.data.data;

  return (
    <div>
      <h1>Item list</h1>
    </div>
  )
}

export default RentalList