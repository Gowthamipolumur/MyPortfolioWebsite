import styles from './App.module.css';
import { Hero } from './components/Hero/Hero.jsx';
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Contact } from "./components/Contact/Contact.jsx";
import { About } from "./components/About/About.jsx";
import { Experience } from "./components/Experience/Experience.jsx";
import { Projects } from './components/Projects/Projects.jsx';
function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main className={styles.mainContent}>
        <Hero />
        <About />
        <Experience/>
        <Projects/>
        {/* Add more sections like About, Experience, Projects, etc., if needed */}
      </main>
      <Contact />
    </div>
  );
}

export default App;
