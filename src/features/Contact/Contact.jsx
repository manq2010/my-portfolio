import React from 'react';
import styled from 'styled-components';
// import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import contactsData from '../../data/contactsData';
import socialsData from '../../data/socialsData';

const ContactWrapper = styled.section`
    display: flex;
    flex-direction: column;
`;

const Contact = () => (
  <div>
    {
      contactsData && (
      <ContactWrapper>
        <h1>Contacts</h1>
        {/* <h3>Want me to build staff for you? Hit me on LinkedIn</h3> */}
        {/* <a href={`mailto:${contact.email}`} target="_blank" rel="noreferrer">
          <span type="button">
            <EmailIcon />
          </span>
        </a> */}

        <div>
          {/* <a href={contactsData.linkedin} target="_blank" rel="noreferrer">
          <span type="button">
            <LinkedInIcon />
          </span>
        </a> */}

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
