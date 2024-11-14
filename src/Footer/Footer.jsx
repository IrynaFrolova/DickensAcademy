import React from 'react';
import styles from './Footer.module.css';
import logo from './logo.png';

const Footer = () => {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Logo" className={styles.logo} />
      </div>
      <p className={styles.copyright}>© 2024 Dickens Consulting Group, LLC</p>
      <div className={styles.menuContainer}>
        <div className={styles.menuItemContainer}>
          <a href="/course" className={styles.menuItem}>Course</a>
        </div>
        <div className={styles.menuItemContainer}>
          <a href="/about" className={styles.menuItem}>About</a>
        </div>
        <div className={styles.menuItemContainer}>
          <a href="/contact" className={styles.menuItem}>Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
