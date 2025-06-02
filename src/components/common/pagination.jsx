import React from 'react';
import "../../styles/pagination.css";

const Pagination = ({ currentPage, setCurrentPage, totalPages = 50 }) => {
  const pages = [];

  for (let i = 1; i <= Math.min(totalPages, 8); i++) {
    pages.push(i);
  }

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleNext = () => {
    setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="pagination-container">

      {currentPage > 1 && (
        <button 
          className="pagination-button"
          onClick={handlePrev}
        >
          « Previous
        </button>
      )}

      {pages.map((page) => (
        <button
          key={page}
          className={`pagination-button ${currentPage === page ? 'active' : ''}`}
          onClick={() => handlePageClick(page)}
        >
          {page}
        </button>
      ))}

      {totalPages > 8 && (
        <>
          <span className="pagination-dots">...</span>

          {/* Show Next only if NOT on last page */}
          {currentPage < totalPages && (
            <button 
              className="pagination-button"
              onClick={handleNext}
            >
              Next »
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Pagination;
