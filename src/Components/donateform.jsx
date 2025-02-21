import React from "react";
import config from "../config.js";
import styles from "./styles/donateform.module.css";

const DonateForm = ({ id, isActivated, amount, onAmountChange }) => {
  const send_to = config.donateTo(id);

  return (
    <form className={styles.form} method="POST" action={send_to}>
      <div className={styles.inputGroup}>
        <span className={styles.icon}>
          <i className="fa fa-inr" aria-hidden="true"></i>
        </span>
        <input
          type="number"
          className={styles.input}
          name="amount"
          placeholder="Enter Amount"
          disabled={!isActivated}
          required
          value={amount}
          onChange={onAmountChange}
        />
      </div>
      <button
        type="submit"
        disabled={!isActivated}
        className={`${styles.button} ${isActivated ? styles.active : styles.disabled}`}
      >
        Donate Now <i className="fa fa-arrow-right" aria-hidden="true"></i>
      </button>
    </form>
  );
};

export default DonateForm;
