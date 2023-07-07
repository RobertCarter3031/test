import React from "react";
import { SearchData, Datum } from "./types/SearchData";
import RentalCard from "./RentalCard";
import Pagination from "../utils/Pagination";

import '../styles/rentalList.css'

type Props = {
  searchData: SearchData | undefined;
  setCurrentPage: Function;
  currentPage: number;
  currentSearchedTerm: string;
  totalPages: number;
  itemsPerPage: number,
};

const RentalList = (props: Props) => {
  const {
    searchData,
    currentPage,
    setCurrentPage,
    currentSearchedTerm,
    totalPages,
    itemsPerPage
  } = props;

  const data = searchData?.data.data;

  const pageData = data?.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  console.log("search data", searchData);
  return (
    <div className="rental-list-container">
      <p className="total-page-counter">Total Pages: {totalPages}</p>
      {data &&
        pageData?.map((item: Datum) => {
          return <RentalCard item={item} dataset={searchData?.data} />;
        })}
      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default RentalList;
