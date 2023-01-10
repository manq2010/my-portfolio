import React, { useRef } from 'react';
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
// import Testimonials from '../../features/Testimonials/Testimonials';

const Main = () => {
  const skillsRef = useRef();
  const handleScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  return (

    <div>
      <Helmet>
        <title>
          {headerData.name}
          {' '}
          - Portfolio
        </title>
      </Helmet>

      <Navbar handleScroll={handleScroll} />
      <About />
      <Hero />
      <div ref={skillsRef}>
        <Skills />
      </div>
      <Projects />
      {/* <Testimonials /> */}
      <Education />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
};

export default Main;
