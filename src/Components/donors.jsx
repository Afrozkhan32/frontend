import React, { useState } from "react";
import Pagination from "./pagination";
import styles from "./styles/donors.module.css";
import { paginate } from "../utills/paginate";

const Donated = ({ data = [], num }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 15;
  
  if (!data.length) return null;
  
  const handlePageChange = (page) => setCurrentPage(page);
  
  const donors = paginate([...data].reverse(), currentPage, pageSize);

  const hideTransactionId = (id) =>
    id.replace(/(?<=.{4}).(?=.{3})/g, "X");

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>List of Donations</h3>
      <p className={styles.num}>Number of people donated: <strong>{num}</strong></p>

      <div className={styles.tableWrapper}>
        <div className={styles.tableHeader}>
          <div className={styles.column}>Transaction ID</div>
          <div className={styles.column}>Amount (Rs.)</div>
          <div className={styles.column}>Status</div>
        </div>

        {donors.map((donor) => (
          <div className={styles.tableRow} key={donor._id}>
            <div className={styles.column}>{hideTransactionId(donor.transactionID)}</div>
            <div className={styles.column}>Rs. {donor.donationAmount}</div>
            <div className={`${styles.column} ${styles.success}`}>Successful</div>
          </div>
        ))}
      </div>

      <Pagination
        itemsCount={data.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Donated;
