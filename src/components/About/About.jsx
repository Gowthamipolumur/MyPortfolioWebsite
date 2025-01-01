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

      <div className={styles.skills}>
        <h3 className={styles.skillsTitle}>Technical Skills</h3>
        <div className={styles.skillsContainer}>
          <div className={styles.skillsCategory}>
            <h4>Programming Languages</h4>
            <div className={styles.skillsIcons}>
                <div className={styles.skill}>
                    <img src="/assets/skills/java.png" alt="Java" />
                    <p>Java</p>
                </div>
                <div className={styles.skill}>
                    <img src="/assets/skills/python.png" alt="Python" />
                    <p>Python</p>
                </div>
                <div className={styles.skill}>
                    <img src="/assets/skills/sql.png" alt="SQL" />
                    <p>SQL</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/c-programming.png" alt="C" />
                    <p>C</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/PHP.png" alt="PHP" />
                    <p>PHP</p>
                </div>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h4>Frameworks & Libraries</h4>
            <div className={styles.skillsIcons}>
                <div className={styles.skill}>
                    <img src="/assets/skills/springboot.png" alt="Spring Boot" />
                    <p>Spring Boot</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/react.png" alt="ReactJS" />
                    <p>React JS</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/flask.jpg" alt="Flask" />
                    <p>Flask</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/bootstrap.png" alt="Bootstrap" />
                    <p>Bootstrap</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/nodejs.png" alt="Node.js" />
                    <p>Node JS</p>
                </div>
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h4>Cloud & DevOps</h4>
            <div className={styles.skillsIcons}>
                <div className={styles.skill}>
                    <img src="/assets/skills/aws.png" alt="AWS" />
                    <p>AWS</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/docker.png" alt="Docker" />
                    <p>Docker</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/kubernetes.png" alt="Kubernetes" />
                    <p>Kubernetes</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/jenkins.png" alt="Jenkins" />
                    <p>Jenkins</p>
                </div>

                <div className={styles.skill}>
                    <img src="/assets/skills/terraform.png" alt="Terraform" />
                    <p>Terraform</p>
                </div>            
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h4>Database & Big Data</h4>
            <div className={styles.skillsIcons}>
                <div className={styles.skill}>
                    <img src="/assets/skills/Postgresql.png" alt="PostgreSQL" />
                    <p>PostgreSQL</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/mysql.png" alt="MySQL" />
                    <p>MySQL</p>
                </div>
                <div className={styles.skill}>
                    <img src="/assets/skills/mongodb.png" alt="MongoDB" />
                    <p>MongoDB</p>
                </div>
                <div className={styles.skill}>
                    <img src="/assets/skills/apache_spark.png" alt="Apache Spark" />
                    <p>Apache Spark</p>
                </div>
                <div className={styles.skill}>
                    <img src="/assets/skills/athena.png" alt="Athena" />
                    <p>Athena</p>
                </div> 
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h4>Web & Core</h4>
            <div className={styles.skillsIcons}>
                <div className={styles.skill}>
                    <img src="/assets/skills/html-5.png" alt="HTML5" />
                    <p>HTML5</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/css.png" alt="CSS3" />
                    <p>CSS3</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/javascript.png" alt="JavaScript" />
                    <p>JavaScript</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/typescript.png" alt="TypeScript" />
                    <p>TypeScript</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/data_structure.png" alt="Data Structures" />
                    <p>Data Structures</p>
                </div> 
            </div>
          </div>
          <div className={styles.skillsCategory}>
            <h4>Tools & Applications</h4>
            <div className={styles.skillsIcons}>
                <div className={styles.skill}>
                    <img src="/assets/skills/git.png" alt="Git" />
                    <p>Git</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/jira.png" alt="Jira" />
                    <p>Jira</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/postman.png" alt="Postman" />
                    <p>Postman</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/anaconda.png" alt="Anaconda" />
                    <p>Anaconda</p>
                </div> 
                <div className={styles.skill}>
                    <img src="/assets/skills/linux.png" alt="Linux" />
                    <p>Linux</p>
                </div>             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
