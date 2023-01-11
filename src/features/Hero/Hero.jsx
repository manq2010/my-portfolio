import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import headerData from '../../data/headerData';
// import { navDelay, loaderDelay } from '../../utils/delays';

const HeroWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .linkedin-link {
    margin-top: 50px;
  }

  .resume-link {
    // margin-top: 50px;
    margin-top: 70px;
  }
`;

export const navDelay = 1000;
export const loaderDelay = 2000;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const {
    title, description, name, resumePdf, linkedIn,
  } = headerData;

  const one = <h1>Hi, my name is</h1>;
  const two = <h2 className="big-heading">{name}</h2>;
  const three = <h3 className="big-heading">{title}</h3>;
  const four = (
    <>
      <p>
        {description}
      </p>
    </>
  );
  const five = (
    <a
      className="linkedin-link"
      href={linkedIn}
      download="resume"
      target="_blank"
      rel="noreferrer"
    >
      <button type="button">
        Connect with me
      </button>
    </a>
  );

  const six = (
    <a
      className="resume-link"
      href={resumePdf}
      download="resume"
      target="_blank"
      rel="noreferrer"
    >
      <button type="button">
        Download CV
      </button>
    </a>
  );

  const items = [one, two, three, four, five, six];

  return (
    <HeroWrapper id="home">

      <TransitionGroup component={null}>
        {isMounted
            && items.map((item, i) => (
              <CSSTransition key={uuidv4()} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
      </TransitionGroup>
    </HeroWrapper>
  );
};
export default Hero;
