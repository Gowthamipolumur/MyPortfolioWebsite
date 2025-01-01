import { useState } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Gowthami Polumuri
      </a>
      <img
        className={styles.menuBtn}
        src={
          isMenuOpen
            ? "/assets/nav/closeIcon.png"
            : "/assets/nav/menuIcon.jpg"
        }
        alt={isMenuOpen ? "Close menu" : "Open menu"}
        onClick={toggleMenu}
      />
      <div className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}>
        <ul
          className={styles.menuItems}
          onClick={() => setMenuOpen(false)} // Close menu when an item is clicked
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
