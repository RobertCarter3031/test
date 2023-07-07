import React from "react";
import "../styles/pagination.css";

type Props = {
  setCurrentPage: Function;
  currentPage: number;
  totalPages: number;
};

/**
 * Pagination component for navigating searched data more easily
 * @param props 
 * @returns Pagination component
 */
const Pagination = (props: Props) => {
  const { currentPage, setCurrentPage, totalPages } = props;

  if (totalPages > 0) {
    return (
      <div className="pagination-container">
        <div className="back-buttons">
          <button
            className="pagination-button"
            onClick={() => setCurrentPage(1)}
          >
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
        <div className="pagination-page-current">Page: {currentPage}</div>
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
  } else {
    return <></>;
  }
};

export default Pagination;
