import React from "react";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section id="experience" className={styles.experienceSkillsSection}>
      {/* Experience Section */}
      <div className={styles.experienceSection}>
        <h2 className={styles.title}>Experience</h2>
        <div className={styles.experienceContainer}>
          {history.map((job, index) => (
            <div key={index} className={styles.experienceCard}>
              <img
                src={job.imageSrc}
                alt={job.organisation}
                className={styles.experienceLogo}
              />
              <div className={styles.experienceDetails}>
                <h3 className={styles.role}>{job.role}</h3>
                <p className={styles.organisation}>{job.organisation}</p>
                <p className={styles.duration}>
                  {job.startDate} - {job.endDate}
                </p>
                <ul className={styles.experiencesList}>
                  {job.experiences.map((item, idx) => (
                    <li key={idx} className={styles.experienceItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      <div className={styles.skillsSection}>
        <h2 className={styles.title}>Technical Skills</h2>
        <div className={styles.skillsContainer}>
          {skills.map((category, categoryIndex) => (
            <div key={categoryIndex} className={styles.skillsCategory}>
              <h3 className={styles.categoryTitle}>{category.category}</h3>
              <div className={styles.skillsList}>
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className={styles.skillItem}>
                    <img
                      src={skill.imageSrc}
                      alt={skill.title}
                      className={styles.skillIcon}
                    />
                    <p className={styles.skillTitle}>{skill.title}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.certifications}>
        <h3 className={styles.certificationsTitle}>Certifications</h3>
          <div className={styles.certificationsGrid}>
            <div className={styles.certificationItem}>
              <img
                src="/assets/skills/developer.png"
                alt="AWS certified Developer Associate"
                className={styles.certificationImage}
              />
              <div className={styles.certificationText}>
                <strong>AWS certified Developer Associate  – AWS, 2025</strong>
                  <a
                    href="https://www.credly.com/badges/your-google-badge-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certificationLink}
                  >
                  View Achievement
                  </a>
              </div>
            </div>
                  <div className={styles.certificationItem}>
                    <img
                      src="/assets/skills/aws_solutions_cert.png"
                      alt="AWS Certified Solutions Architect"
                      className={styles.certificationImage}
                    />
                    <div className={styles.certificationText}>
                      <strong>AWS Certified Solutions Architect – AWS, 2024</strong>
                      <a
                        href="https://www.credly.com/badges/your-aws-badge-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certificationLink}
                      >
                        View Achievement
                      </a>
                    </div>
                  </div>
                
                  <div className={styles.certificationItem}>
                    <img
                      src="/assets/skills/google_data_analytics.png"
                      alt="Google Data Analyst Certificate"
                      className={styles.certificationImage}
                    />
                    <div className={styles.certificationText}>
                      <strong>Google Data Analyst Certificate – Coursera, 2024</strong>
                      <a
                        href="https://www.credly.com/badges/your-google-badge-link"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.certificationLink}
                      >
                        View Achievement
                      </a>
                    </div>
                  </div>
      
              </div>
      </div>
    </section>
  );
};
