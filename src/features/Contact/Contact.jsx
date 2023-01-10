import React from 'react';
import styled from 'styled-components';
// import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import contactsData from '../../data/contactsData';
import socialsData from '../../data/socialsData';

const ContactWrapper = styled.section`
`;

const Contact = () => (
  <div id="contacts">
    <h1>Get In Touch</h1>
    {
      contactsData && (
      <ContactWrapper>

        <div>
          {socialsData.twitter && (
          <a
            href={socialsData.twitter}
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon aria-label="Twitter" />
          </a>
          )}

          {socialsData.github && (
          <a
            href={socialsData.github}
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon aria-label="github" />
          </a>
          )}

          {socialsData.linkedIn && (
          <a
            href={socialsData.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon aria-label="LinkedIn" />
          </a>
          )}
        </div>
      </ContactWrapper>
      )
}
  </div>
);

export default Contact;
