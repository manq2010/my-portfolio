import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import { ThemeProvider } from 'styled-components';
import { GlobalStyle, theme } from './styles';
import Main from './pages/Main/Main';
import ProjectPage from './pages/Project/ProjectPage';
import ScrollToTop from './features/ScrollToTop/ScrollToTop';
import Resume from './features/Resume/Resume';

const App = () => (
  <div id="top">
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" exact element={<ProjectPage />} />
          <Route path="/resume" exact element={<Resume />} />
        </Routes>
        <ScrollToTop />
      </Router>
    </ThemeProvider>
  </div>
);

export default App;
