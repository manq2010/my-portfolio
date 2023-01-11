import React from 'react';
import styled from 'styled-components';
import headerData from '../../data/headerData';

const HeroWrapper = styled.div`
margin-top: 3rem;
height: 80vh;
`;

const Hero = () => {
  const {
    title, description, name, resumePdf, linkedIn,
  } = headerData;

  return (
    <HeroWrapper id="home">

      { name && (
      <div>
        <h4>
          Hi, my name is
        </h4>
        <h1>
          {name}
          .
        </h1>
      </div>

      )}
      { title && (
      <div>
        <h3>
          {title}
          .
        </h3>
      </div>

      )}
      { description && (
      <div>
        <p>
          {description}
        </p>
      </div>
      )}

      <div>
        <a
          href={linkedIn}
          download="resume"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button">
            Connect with me
          </button>
        </a>
        {headerData.resumePdf && (
          <a
            href={resumePdf}
            download="resume"
            target="_blank"
            rel="noreferrer"
          >
            <button type="button">
              Download CV
            </button>
          </a>
        )}
      </div>
    </HeroWrapper>
  );
};
export default Hero;
