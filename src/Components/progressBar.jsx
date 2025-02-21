import React, { useState, useEffect } from "react";
import DonateForm from "./donateform";
import { percentCompleted } from "../utills/math";
import styles from "./styles/progressBar.module.css";

const ProgressBar = (props) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(() => percentCompleted(props.fundRaised, props.fundRequired));
  }, [props.fundRaised, props.fundRequired]);

  return (
    <div className={`p-3 col-11 ${styles.progressBarContainer}`}>
      <div className="row justify-content-between align-items-center">
        <div className="col-4">
          <p className={styles.label}>Raised:</p>
          <div className={styles.amountContainer}>
            <i className="fa fa-inr" aria-hidden="true"></i>
            <span className={styles.value}>{props.fundRaised}</span>
          </div>
        </div>
        <div className="col-4 text-right">
          <p className={styles.label}>Goal:</p>
          <div className={styles.amountContainer}>
            <i className="fa fa-inr" aria-hidden="true"></i>
            <span className={styles.value}>{props.fundRequired}</span>
          </div>
        </div>
      </div>

      <div className={`progress ${styles.progressWrapper}`}>
        <div
          className={`progress-bar progress-bar-animated ${styles.progressBar}`}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <DonateForm
        id={props.id}
        amount={props.amount}
        onAmountChange={props.onAmountChange}
        isActivated={props.isActivated}
      />
    </div>
  );
};

export default ProgressBar;