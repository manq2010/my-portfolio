import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../../features/Navbar/Navbar';
import About from '../../features/About/About';
import Hero from '../../features/Hero/Hero';
import Projects from '../../features/Projects/Projects';
import Skills from '../../features/Skills/Skills';
import Contact from '../../features/Contact/Contact';
import Experience from '../../features/Experience/Experience';
import headerData from '../../data/headerData';
import Education from '../../features/Education/Education';
import Achievements from '../../features/Achievements/Achievements';
import Footer from '../../features/Footer/Footer';

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
    {/* <Testimonials /> */}
    <Education />
    <Achievements />
    <Experience />
    <Contact />
    <Footer />
  </div>
);

export default Main;
