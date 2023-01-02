import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import './App.css';

import Main from './pages/Main/Main';

// import Footer from './features/Footer/Footer';
// import Header from './features/Header/Header';
// import About from './features/About/About';
// import Projects from './features/Projects/Projects';
// import Skills from './features/Skills/Skills';
// import Contact from './features/Contact/Contact';
// import Testimony from './features/Testimony/Testimony';
// import Experience from './features/Experience/Experience';
// import ScrollToTop from './features/ScrollToTop/ScrollToTop';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Router>

        {/* <Header />

      <main>
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Testimony />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer /> */}
        <Routes>
          <Route path="/" element={<Main />} />
          {/* <Route path="/projects" component={Projects} />
        <Route path="/skills" component={Skills} />
        <Route path="/experience" component={Experience} /> */}
        </Routes>
      </Router>
    </div>
  );
};

export default App;
