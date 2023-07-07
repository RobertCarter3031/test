import React from 'react'
import { SearchData, Datum } from './types/SearchData'
import RentalCard from './RentalCard';

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
      {data && data.map((item: Datum) => {
        return <RentalCard item={item} dataset={searchData?.data} />
      })}
    </div>
  )
}

export default RentalList