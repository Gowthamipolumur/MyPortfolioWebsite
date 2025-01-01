import styles from './App.module.css';
import { Hero } from './components/Hero/Hero.jsx';
import { Navbar } from "./components/Navbar/Navbar.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import { About } from "./components/About/About.jsx";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <main className={styles.mainContent}>
        <Hero />
        <About />
        {/* Add more sections like About, Experience, Projects, etc., if needed */}
      </main>
      <Footer />
    </div>
  );
}

export default App;
