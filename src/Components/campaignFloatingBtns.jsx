import React, { useState } from "react";
import { Link } from "react-scroll";
import Share from "./shareComponent";
import DonateIcon from "./assets/donateIcon.png";
import styles from "./styles/floatingBtns.module.css";
import useHover from "../utills/useHover";

const FloatBtn = ({ campaign }) => {
  const [ref, hovered] = useHover();
  const [showShare, setShowShare] = useState(false);

  return (
    <div className={styles.floatingContainer}>
      {/* Share Button */}
      <div className={`${styles.btnWrapper} ${styles.shareWrapper}`}>
        {showShare && (
          <Share url={window.location.href} title={campaign.title} description={campaign.description} />
        )}
        <button className={styles.btn} onClick={() => setShowShare(!showShare)}>
          <i className={`fa ${showShare ? "fa-times" : "fa-share-alt"}`} aria-hidden="true"></i>
        </button>
      </div>

      {/* Donate Button */}
      <div className={`${styles.btnWrapper} ${styles.donateWrapper}`}>
        <Link to="DonateForm" activeClass="active" spy smooth offset={-100} duration={500}>
          <button className={`btn ${styles.btn}`} ref={ref}>
            <span className={hovered ? styles.showText : styles.hideText}>Donate Now {"> "}</span>
            <img className={styles.img} src={DonateIcon} alt="Donate Icon" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FloatBtn;
