import React from 'react';
import styled from 'styled-components';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import EmailIcon from '@mui/icons-material/Email';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import GitHubIcon from '@mui/icons-material/GitHub';
import { contact } from '../../data/portfolio';

const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const Contact = () => (
  <>
    { contact && (
      <ContactWrapper>
        <h2>Want me to build staff for you? Hit me on LinkedIn</h2>
        {/* <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <span type="button">
            <EmailIcon />
          </span>
        </a> */}

        <a href={contact.linkedin} target="_blank" rel="noreferrer">
          <span type="button">
            <LinkedInIcon />
          </span>
        </a>
        {/*
        <a href={contact.twitter} target="_blank" rel="noreferrer">
          <span type="button">
            <TwitterIcon />
          </span>
        </a>

        <a href={contact.github} target="_blank" rel="noreferrer">
          <span type="button">
            <GitHubIcon />
          </span>
        </a> */}
      </ContactWrapper>
    )}
  </>
);

export default Contact;
