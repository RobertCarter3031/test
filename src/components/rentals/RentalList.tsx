import React from 'react'
import { SearchData, Datum } from './types/SearchData'
import RentalCard from './RentalCard';
import Pagination from '../utils/Pagination';

type Props = {
  searchData: SearchData | undefined,
  setCurrentPage: Function,
  currentPage: number,
  currentSearchedTerm: string,
  totalPages: number,
}

const RentalList = (props: Props) => {
  const { searchData, currentPage, setCurrentPage, currentSearchedTerm, totalPages } = props;

  const data = searchData?.data.data;

  const pageData = data?.slice((currentPage-1) * 10, currentPage * 10);

  console.log('search data', searchData);
  return (
    <div>
      {data && pageData?.map((item: Datum) => {
        return <RentalCard item={item} dataset={searchData?.data} />
      })}
      <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
    </div>
  )
}

export default RentalList