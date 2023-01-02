import React from 'react';
import { Helmet } from 'react-helmet';

// import Footer from '../../features/Footer/Footer';
// // import Header from '../../features/Header/Header';
// import About from '../../features/About/About';
// import Projects from '../../features/Projects/Projects';
// import Skills from '../../features/Skills/Skills';
// import Contact from '../../features/Contact/Contact';
// // import Testimony from '../../features/Testimony/Testimony';
// import Experience from '../../features/Experience/Experience';
// // import ScrollToTop from '../../features/ScrollToTop/ScrollToTop';
import Navbar from '../../features/Navbar/Navbar';
// import Header from '../../features/Header/Header';

const Main = () => (
  <div>
    <Helmet>
      <title>My - Portfolio</title>
    </Helmet>

    <Navbar />
    {/* <Header /> */}
    {/* <Navbar />
    <main>
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Experience />
      <Footer />
    </main> */}
  </div>
);

export default Main;
