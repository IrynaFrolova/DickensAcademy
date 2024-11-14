import React from 'react';
import styles from './About.module.css';
import aboutImg from './about.png';
import buttonImg from './button.png';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.headerAboutContainer}>
        <h2 className={styles.text}>ABOUT US</h2>
        <div className={styles.headerAboutSubContainer}>
          <img src={buttonImg} alt="button" className={styles.aboutHeaderImg} />
          <span className={styles.learnMore}>LEARN MORE</span>
        </div>
      </div>

      <div className={styles.aboutSubContainer}>
        <img src={aboutImg} alt="Team" className={styles.aboutSubIMG} />

        <div className={styles.aboutAcademyContainer}>
          <div className={styles.cardContainer}>
          <h3 className={styles.paragraph}>Hi, WE’RE DICKENS EXECUTIVE COACHING ACADEMY</h3>
            <p className={styles.cardText}>
              Lorem ipsum dolor sit amet consectetur. Odio nec dictum tortor id proin rhoncus elit. 
              Orci lacus pellentesque ultrices ut aliquet non fusce faucibus dictumst. Massa sit aliquam 
              quam urna nam. Maecenas massa varius scelerisque pellentesque. Vestibulum ut rhoncus iaculis 
              eleifend. Euismod cras et tortor at pellentesque duis cursus donec.
            </p>
           
          </div>

          <div className={styles.cardTextContainer}>
            <div className={styles.infoCard}>
              <div className={styles.frame260}>
                <span className={styles.infoTitle}>1000+</span>
                <span className={styles.infoSubtitle}>successful graduates</span>
              </div>
              <div className={styles.rectangle4175}></div>
            </div>
            
            <div className={styles.infoCard}>
              <div className={styles.frame260}>
                <span className={styles.infoTitle}>5+</span>
                <span className={styles.infoSubtitle}>years on the educational market</span>
              </div>
              <div className={styles.rectangle4175}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
