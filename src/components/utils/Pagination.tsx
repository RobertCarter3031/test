import React from 'react'

type Props = {
    setCurrentPage: Function,
    currentPage: number,
    totalPages: number,
}

const Pagination = (props: Props) => {
  const { currentPage, setCurrentPage, totalPages } = props;
  return (
    <div>
        <button onClick={() => setCurrentPage(1)}>first</button>
        <button onClick={() => setCurrentPage((currentPage-1 < 1) ? 1 : currentPage -1)}>prev</button>
        <button onClick={() => setCurrentPage((currentPage + 1 > totalPages) ? totalPages : currentPage + 1)}>next</button>
        <button onClick={() => setCurrentPage(totalPages)}>last</button>
    </div>
  )
}

export default Pagination