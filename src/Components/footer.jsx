import React from "react";
import logo from "./assets/RotaractIcon.png";
import styles from "./styles/footer.module.css";

const Footer = () => {
  return (
    <footer className={`p-5 ${styles.footer}`}>
      <div className="container">
        <div className="row">
          
          {/* Left Section - Logo & Club Name */}
          <div className={`col-12 col-sm-6 col-md-4 text-center ${styles.left}`}>
            <a href="/">
              <img className={styles.logo} src={logo} alt="ROTARACT LOGO" />
            </a>
            <p className={`${styles.caption} mt-3`}>
              <strong>Rotaract Club</strong> <br /> IIITM Gwalior
            </p>
          </div>

          {/* Middle Section - Social Media & Links */}
          <div className={`col-12 col-sm-6 col-md-4 text-center ${styles.middle}`}>
            <p><strong>Follow Us</strong></p>
            <div className={`${styles.socialIcons}`}>
              <a href="https://www.facebook.com/rotaractiiitm/" target="_blank" rel="noreferrer">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="https://in.linkedin.com/company/rotaract-club-abv-iiitm" target="_blank" rel="noreferrer">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>

            <div className={`${styles.links} mt-3`}>
              <a href="/about-us">About</a>
              <a href="/contact-us">Contact Us</a>
              <a href="https://www.iiitm.ac.in/index.php/en/" target="_blank" rel="noreferrer">
                ABV-IIITM
              </a>
            </div>
          </div>

          {/* Right Section - Developers & Contact */}
          <div className={`col-12 col-md-4 text-center ${styles.right}`}>
            <p className={styles.names}>
              <strong>Developed By</strong> <br />
              <a href="https://in.linkedin.com/in/swatik-paul-1218b3136" target="_blank" rel="noreferrer">
                Swatik Paul
              </a>
              <br />
              <a href="https://www.linkedin.com/in/vivekkamboj1/" target="_blank" rel="noreferrer">
                Vivek Kamboj
              </a>
            </p>
            
            <p className={styles.names}>
              <strong>Designed By</strong> <br />
              <a href="https://in.linkedin.com/in/manish-mavi-05" target="_blank" rel="noreferrer">
                Manish Mavi
              </a>
            </p>

            <p className="mt-3">
              <strong>Contact Us:</strong> <br />
              <a href="mailto:rotaract@iiitm.ac.in">rotaract@iiitm.ac.in</a>
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className={`${styles.footerBottom} mt-4`}>
        <hr className={styles.line} />
        <p className="text-center">
          &copy; 2021 ROTARACT CLUB IIITM. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
