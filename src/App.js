import { useContext } from 'react';
import { ThemeContext } from './contexts/theme';
import './App.css';
import Footer from './features/Footer/Footer';
import Header from './features/Header/Header';
import About from './features/About/About';
import Projects from './features/Projects/Projects';
import Skills from './features/Skills/Skills';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default App;
