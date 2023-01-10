import { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeContext } from './contexts/theme';
import './App.css';

import Main from './pages/Main/Main';
import ProjectPage from './pages/Project/ProjectPage';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import Resume from './features/Resume/Resume';

const App = () => {
  const [{ themeName }] = useContext(ThemeContext);
  return (
    <div id="top" className={`${themeName} app`}>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" exact element={<ProjectPage />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </div>
  );
};

export default App;
