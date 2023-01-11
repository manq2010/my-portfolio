import React, { useRef } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
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

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = () => {
  const skillsRef = useRef();
  const aboutRef = useRef();
  const projectRef = useRef();
  const educationRef = useRef();
  const achievementsRef = useRef();
  const experienceRef = useRef();
  const contactRef = useRef();

  const handleSkillScroll = () => {
    window.scrollTo({
      top: skillsRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleProjectScroll = () => {
    window.scrollTo({
      top: projectRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleEducationScroll = () => {
    window.scrollTo({
      top: educationRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleAchievementsScroll = () => {
    window.scrollTo({
      top: achievementsRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleExperienceScroll = () => {
    window.scrollTo({
      top: experienceRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };
  const handleContactScroll = () => {
    window.scrollTo({
      top: contactRef.current.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (

    <MainContainer>
      <Helmet>
        <title>
          {headerData.name}
          {' '}
          - Portfolio
        </title>
      </Helmet>

      <Navbar
        handleSkillScroll={handleSkillScroll}
        handleAboutScroll={handleAboutScroll}
        handleProjectScroll={handleProjectScroll}
        handleEducationScroll={handleEducationScroll}
        handleAchievementsScroll={handleAchievementsScroll}
        handleExperienceScroll={handleExperienceScroll}
        handleContactScroll={handleContactScroll}
      />
      <Hero />
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>

      {/* <Testimonials /> */}

      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={achievementsRef}>
        <Achievements />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />
    </MainContainer>
  );
};

export default Main;
