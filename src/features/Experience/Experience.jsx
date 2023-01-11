import React, { useState, useEffect, useRef } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import experienceData from '../../data/experienceData';
// import ExperienceItem from './ExperienceItem';

const ExperienceSection = styled.section`
margin-top: 2rem;
// display: flex;
`;

const ExperinceList = styled.div`
position: relative;
z-index: 3;
width: max-content;
padding: 0;
margin: 0;
list-style: none;

@media (max-width: 600px) {
  display: flex;
  overflow-x: auto;
  width: calc(100% + 100px);
  padding-left: 50px;
  margin-left: -50px;
  margin-bottom: 30px;
}
@media (max-width: 480px) {
  width: calc(100% + 50px);
  padding-left: 25px;
  margin-left: -25px;
}

li {
  &:first-of-type {
    @media (max-width: 600px) {
      margin-left: 50px;
    }
    @media (max-width: 480px) {
      margin-left: 25px;
    }
  }
  &:last-of-type {
    @media (max-width: 600px) {
      padding-right: 50px;
    }
    @media (max-width: 480px) {
      padding-right: 25px;
    }
  }
}
`;

const StyledTabButton = styled.button`
display: flex;
align-items: center;
width: 100%;
height: var(--tab-height);
padding: 0 20px 2px;
border-left: 2px solid var(--lightest-navy);
background-color: transparent;
color: ${({ isActive }) => (isActive ? 'var(--green)' : 'var(--slate)')};
font-family: var(--font-mono);
font-size: var(--fz-xs);
text-align: left;
white-space: nowrap;

@media (max-width: 768px) {
  padding: 0 15px 2px;
}
@media (max-width: 600px) {

  min-width: 120px;
  padding: 0 15px;
  border-left: 0;
  border-bottom: 2px solid blue;
  text-align: center;
}

&:hover,
&:focus {
  background-color: green;
}
`;

const SectionTitle = styled.h1`

`;

const ExperienceGrid = styled.div`

`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  useEffect(() => {

  }, []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
      return;
    }
    // If we're at the end, go to the start
    if (tabFocus >= tabs.current.length) {
      setTabFocus(0);
    }
    // If we're at the start, move to the end
    if (tabFocus < 0) {
      setTabFocus(tabs.current.length - 1);
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  return (
    <ExperienceSection id="jobs" ref={revealContainer}>
      <SectionTitle>Where I&apos;ve Worked</SectionTitle>
      <div id="experience" className="inner">
        <ExperinceList>
          { experienceData && (
          <ExperienceGrid>
            {experienceData.map((companyName) => (
              // <ExperienceItem key={uuidv4()} experience={experience} />
              <StyledTabButton
                key={companyName.id}
                isActive={activeTabId === companyName.id}
                onClick={() => setActiveTabId(companyName.id)}
                // eslint-disable-next-line no-return-assign
                ref={(el) => (tabs.current[companyName.id] = el)}
                id={`tab-${companyName.id}`}
                role="tab"
                tabIndex={activeTabId === companyName.id ? '0' : '-1'}
                aria-selected={activeTabId === companyName.id}
                aria-controls={`panel-${companyName.id}`}
              >
                <span>{companyName.company}</span>
              </StyledTabButton>

            ))}
          </ExperienceGrid>
          )}

        </ExperinceList>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
