import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import './App.css';
import Footer from './features/Footer/Footer';
import Header from './features/Header/Header';
import About from './features/About/About';
import Projects from './features/Projects/Projects';
import Skills from './features/Skills/Skills';
import Contact from './features/Contact/Contact';
import Testimony from './features/Testimony/Testimony';
import Experience from './features/Experience/Experience';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Header />

      <main>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Testimony />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default App;
