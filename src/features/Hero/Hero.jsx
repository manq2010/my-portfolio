import React from 'react';
import { NavLink } from 'react-router-dom';
// import { makeStyles } from '@mui/core/styles';
// import { Button } from '@mui/core';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import styled from 'styled-components';
import socialsData from '../../data/socialsData';
import headerData from '../../data/headerData';

const HeroWrapper = styled.div`

`;

const Hero = () => (
  <HeroWrapper id="home">
    <div>
      {socialsData.linkedIn && (
        <a
          href={socialsData.linkedIn}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedInIcon
            className="landing--social"
            aria-label="LinkedIn"
          />
        </a>
      )}
      {socialsData.github && (
        <a
          href={socialsData.github}
          target="_blank"
          rel="noreferrer"
        >
          <GitHubIcon
            className="landing--social"
            // style={{ color: theme.secondary }}
            aria-label="GitHub"
          />
        </a>
      )}
    </div>

    <img
      src={headerData.image}
      alt=""
      className="landing--img"
    />

    <div
      className="landing--container-right"
    >
      <div
        className="lcr--content"
      >
        <h6>{headerData.title}</h6>
        <h1>{headerData.name}</h1>
        <p>{headerData.desciption}</p>

        <div className="lcr-buttonContainer">
          {headerData.resumePdf && (
            <a
              href={headerData.resumePdf}
              download="resume"
              target="_blank"
              rel="noreferrer"
            >
              <button type="button">
                Download CV
              </button>
            </a>
          )}
          <NavLink
            to="/#contacts"
            smooth
            spy="true"
            duration={2000}
          >
            <button type="button">
              Contact
            </button>
          </NavLink>
        </div>
      </div>
    </div>

  </HeroWrapper>
);
export default Hero;
