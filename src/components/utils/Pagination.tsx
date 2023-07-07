import React from "react";
import "../styles/pagination.css";

type Props = {
  setCurrentPage: Function;
  currentPage: number;
  totalPages: number;
};

const Pagination = (props: Props) => {
  const { currentPage, setCurrentPage, totalPages } = props;
  return (
    <div className="pagination-container">
      <div className="back-buttons">
        <button className="pagination-button" onClick={() => setCurrentPage(1)}>
          first
        </button>
        <button
          className="pagination-button"
          onClick={() =>
            setCurrentPage(currentPage - 1 < 1 ? 1 : currentPage - 1)
          }
        >
          prev
        </button>
      </div>
      <div className='pagination-page-current'>Page: {currentPage}</div>
      <div className="next-buttons">
        <button
          className="pagination-button"
          onClick={() =>
            setCurrentPage(
              currentPage + 1 > totalPages ? totalPages : currentPage + 1
            )
          }
        >
          next
        </button>
        <button
          className="pagination-button"
          onClick={() => setCurrentPage(totalPages)}
        >
          last
        </button>
      </div>
    </div>
  );
};

export default Pagination;
