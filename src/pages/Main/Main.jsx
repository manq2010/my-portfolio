import React from 'react';
import { Helmet } from 'react-helmet';

// import Footer from '../../features/Footer/Footer';
// // import Header from '../../features/Header/Header';
import About from '../../features/About/About';
import Hero from '../../features/Hero/Hero';
import Projects from '../../features/Projects/Projects';
import Skills from '../../features/Skills/Skills';
import Contact from '../../features/Contact/Contact';
// // import Testimony from '../../features/Testimony/Testimony';
// import Experience from '../../features/Experience/Experience';
// // import ScrollToTop from '../../features/ScrollToTop/ScrollToTop';
import Navbar from '../../features/Navbar/Navbar';
import headerData from '../../data/headerData';

const Main = () => (
  <div>
    <Helmet>
      <title>
        {headerData.name}
        {' '}
        - Portfolio
      </title>
    </Helmet>

    <Navbar />

    <About />
    <Hero />
    <Skills />
    <Projects />
    {/* <Education /> */}
    {/* <Achievement /> */}
    {/* <Experience /> */}
    <Contact />
    {/* <Footer /> */}
  </div>
);

export default Main;
