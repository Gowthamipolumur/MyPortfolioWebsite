import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/assets/about/my_image.jpg"
          alt="My photo"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/assets/about/DEicon.png" alt="DE icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Engineer</h3>
              <p>
              I bring robust experience in designing and optimizing end-to-end data pipelines 
              using AWS and PostgreSQL. With a strong focus on data extraction, validation, 
              and transformation, I ensure accuracy and efficiency in handling large-scale 
              datasets while implementing cost-efficient strategies.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/cloudIcon.png" alt="Cloud icon" />
            <div className={styles.aboutItemText}>
              <h3>Cloud Solutions Architect</h3>
              <p>
              I specialize in architecting and implementing cost-effective cloud solutions, 
              leveraging AWS services like Lambda, Glue ETL, RDS, S3, and SES. 
              My expertise includes automating workflows, optimizing cloud resource usage, 
              and enhancing data processing efficiency.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/assets/about/fullstack.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Full-Stack Developer</h3>
              <p>
              I develop seamless web and mobile applications with expertise in frameworks 
              like ReactJS, Spring Boot, and Flask. My skills span front-end technologies 
              (HTML5, CSS3, JavaScript, TypeScript) and back-end technologies (Java, Python, SQL) 
              to deliver end-to-end solutions.
              </p>
            </div>
          </li>
        </ul>
      </div>




    </section>
  );
};
