import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
// import { makeStyles } from '@mui/core/styles';
// import { Button } from '@mui/core';

import about from '../../data/aboutData';
import { srConfig } from '../../utils/config';
import sr from '../../utils/sr';

// const Button = styled.button`
//     display: block;
//     cursor: pointer;
//     padding: 0.8em 1.4em;
//     font-weight: 500;
//     font-size: 0.9rem;
//     text-transform: lowercase;
//     transition: transform 0.2s ease-in-out;

//     color: #2978b5;
//     border: 2px solid #2978b5;
//     position: relative;
//     overflow: hidden;
//     z-index: 1;

//     &::before {
//         content: '';
//         position: absolute;
//         background-color: #2978b5;
//         right: 100%;
//         bottom: 0;
//         left: 0;
//         top: 0;
//         z-index: -1;
//         transition: right 0.2s ease-in-out;
//       }

//       &:hover::before,
//       &:focus::before, {
//           color: #23283e;
//       }

// `;

const AboutWrapper = styled.section`
display: flex;
flex-direction: column;
gap: 1rem;

`;

const AboutItems = styled.div`
display: flex;
flex-direction: column;

`;

const About = () => {
  const revealContainer = useRef(null);
  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);
  const {
    description1, description2, description3, image, stack,
  } = about;
  return (
    <AboutWrapper id="about" ref={revealContainer}>
      <h1>About Me</h1>
      <AboutItems>
        <div>
          <div>
            <p>{description1}</p>
            <br />
            <p>{description2}</p>
            <br />
            <p>{description3}</p>
          </div>

          <div>
            {stack}
          </div>
        </div>

        <div>
          <img
            src={image}
            alt=""
            className="landing--img"
            style={{ width: '300px' }}
          />

        </div>
      </AboutItems>
    </AboutWrapper>
  );
};

export default About;
