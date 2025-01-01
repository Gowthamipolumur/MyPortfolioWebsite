import "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.greeting}>HELLO</p>
        <h1 className={styles.title}>I&apos;m Gowthami Polumuri</h1>
        <p className={styles.description}>
        Graduate student with outstanding academic achievements and experience in programming, 
        cloud technologies, and data engineering. Eager to apply my knowledge and skills to 
        contribute to innovative and transformative projects.
        </p>
        <a
          href="\assets\Gowthami_Polumuri_Resume.pdf"
          className={styles.downloadResume}
          download
        >
          <i className="fas fa-download"></i> Download Resume
        </a>
      </div>
      <img
        src="/assets/hero/heroImage.png"
        alt="Illustration of technology and teamwork"
        className={styles.heroImg}
      />
    </section>
  );
};
