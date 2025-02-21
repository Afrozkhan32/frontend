import React from "react";
import classNames from "classnames";
import styles from "./styles/paginate.module.css";

const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

  return (
    <div className={styles.paginateSection}>
      <nav className={styles.nav}>
        <ul className={`pagination flex space-x-2 ${styles.ul}`}>
          {pages.map((page) => (
            <li key={page} className="page-item">
              <button
                className={classNames(
                  "px-4 py-2 rounded-lg text-white transition duration-300",
                  {
                    "bg-blue-600 hover:bg-blue-700": page !== currentPage,
                    "bg-green-500 hover:bg-green-600 font-bold": page === currentPage,
                  }
                )}
                onClick={() => onPageChange(page)}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
