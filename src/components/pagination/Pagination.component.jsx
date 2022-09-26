import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ logsPerPage, totalLogs, paginate }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalLogs / logsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((n) => {
            return (
              <ul key={n} className="pagination">
                <Link onClick={() => paginate(n)} to="/" className="page-link">
                  {n}
                </Link>
              </ul>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
