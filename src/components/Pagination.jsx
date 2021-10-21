import React from "react";

const Pagination = ({ maxPage, page, setPage }) => {
  return (
    <div className="pagination-wrapper">
      <button
        className="button"
        disabled={page <= 1}
        onClick={() => setPage((currPage) => currPage - 1)}
      >
        Prev
      </button>
      {Array(maxPage)
        .fill()
        .map((n, i) => i + 1)
        .map((pageNo) => {
          return (
            <button
              className={`button ${pageNo === page ? "current-page" : ""}`}
              key={`page_${pageNo}`}
              disabled={pageNo === page}
              onClick={() => setPage(pageNo)}
            >
              {pageNo}
            </button>
          );
        })}
      <button
        className="button"
        disabled={page === maxPage}
        onClick={() => setPage((currPage) => currPage + 1)}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
