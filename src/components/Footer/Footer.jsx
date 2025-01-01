import "react";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <h3 className={styles.title}>CONTACT ME</h3>
        <div className={styles.socialIcons}>
          <a href="https://linkedin.com/in/gowthamipolumuri" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/gowthamipolumur" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-github"></i>
          </a>
          <a href="mailto:gowthamipolumuri9@gmail.com" className={styles.icon}>
            <i className="fas fa-envelope"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.icon}>
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
      <p className={styles.copyright}>
        © 2024 Copyright: Gowthami Polumuri
      </p>
    </footer>
  );
};
