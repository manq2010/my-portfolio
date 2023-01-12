import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// import EmailIcon from '@mui/icons-material/Email';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { srConfig } from '../../utils/config';
import sr from '../../utils/sr';
import socialsData from '../../data/socialsData';

const ContactWrapper = styled.section`
max-width: 600px;
margin: 0 auto 100px;
text-align: center;

@media (max-width: 768px) {
  margin: 0 auto 50px;
}

.overline {
  display: block;
  margin-bottom: 20px;
  color: var(--green);
  font-family: var(--font-mono);
  font-size: var(--fz-md);
  font-weight: 400;

  &:before {
    bottom: 0;
    font-size: var(--fz-sm);
  }

  &:after {
    display: none;
  }
}

.title {
  font-size: clamp(40px, 5vw, 60px);
}

.link {
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 50px;
}
`;

const Contact = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
  }, []);

  return (
    <ContactWrapper id="contacts" ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>
      <h2 className="title">Get In Touch</h2>
      {socialsData.twitter && (
      <a
        className="link"
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
    </ContactWrapper>
  );
};

export default Contact;
