import "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsContainer}>
        {projects.map((project, id) => (
          <div key={id} className={styles.projectCard}>
            <img
              src={project.imageSrc}
              alt={project.title}
              className={styles.projectImage}
            />
            <div className={styles.projectDetails}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>
                {project.description}
              </p>
              <div className={styles.projectSkills}>
                {project.skills.map((skill, index) => (
                  <span key={index} className={styles.skillBadge}>
                    {skill}
                  </span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Demo
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.projectLink}
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
