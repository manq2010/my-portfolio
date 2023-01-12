import React, { useState, useEffect, useRef } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import { CSSTransition } from 'react-transition-group';
import keyCodes from '../../utils/keyCode';
import sr from '../../utils/sr';
import { srConfig } from '../../utils/config';
import experienceData from '../../data/experienceData';

const ExperienceSection = styled.section`
max-width: 700px;

.inner {
  display: flex;

  @media (max-width: 600px) {
    display: block;
  }

  // Prevent container from jumping
  @media (min-width: 700px) {
    min-height: 340px;
  }
}
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
height: 42px;
padding: 0 20px 2px;
border-left: 2px solid #233554;
background-color: transparent;
color: ${({ isActive }) => (isActive ? '#64ffda' : '#8892b0')};
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
  border-bottom: 2px solid #233554;
  text-align: center;
}

&:hover,
&:focus {
  background-color: #112240;
}
`;

const StyledHighlight = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 2px;
  height: 42px;
  border-radius: 4px;
  background: #64ffda;
  transform: translateY(calc(${({ activeTabId }) => activeTabId} * 42px ));
  transition: transform 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition-delay: 0.1s;

  @media (max-width: 600px) {
    top: auto;
    bottom: 0;
    width: 100%;
    max-width: 42px;
    height: 2px;
    margin-left: 50px;
    transform: translateX(calc(${({ activeTabId }) => activeTabId} * 120px));
  }
  @media (max-width: 480px) {
    margin-left: 25px;
  }
`;

const TabPanels = styled.div`
position: relative;
width: 100%;
margin-left: 20px;

@media (max-width: 600px) {
  margin-left: 0;
}
`;

const TabPanel = styled.div`
width: 100%;
height: auto;
padding: 10px 5px;

ul {
  ${({ theme }) => theme.mixins.fancyList};
}

h3 {
  margin-bottom: 2px;
  font-size: var(--fz-xxl);
  font-weight: 500;
  line-height: 1.3;

  .company {
    color: var(--green);
  }
}

.range {
  margin-bottom: 25px;
  color: var(--light-slate);
  font-family: var(--font-mono);
  font-size: var(--fz-xs);
}
`;

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, srConfig());
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

  // Focus on tabs when using up & down arrow keys
  const onKeyDown = (e) => {
    switch (e.key) {
      case keyCodes.ARROW_UP: {
        e.preventDefault();
        setTabFocus(tabFocus - 1);
        break;
      }

      case keyCodes.ARROW_DOWN: {
        e.preventDefault();
        setTabFocus(tabFocus + 1);
        break;
      }

      default: {
        break;
      }
    }
  };

  return (
    <ExperienceSection id="jobs" ref={revealContainer}>
      <h2 className="numbered-heading">Where I&apos;ve Worked</h2>
      <div className="inner">
        <ExperinceList
          role="tablist"
          aria-label="Job tabs"
          onKeyDown={(e) => onKeyDown(e)}
        >
          { experienceData
    && experienceData.map((companyName) => (
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
          <StyledHighlight activeTabId={activeTabId} />
        </ExperinceList>

        <TabPanels>
          {experienceData
          && experienceData.map((experience) => (
            <CSSTransition key={experience.id} in={activeTabId === experience.id} timeout={250} classNames="fade">
              <TabPanel
                id={`panel-${experience.id}`}
                role="tabpanel"
                tabIndex={activeTabId === experience.id ? '0' : '-1'}
                aria-labelledby={`tab-${experience.id}`}
                aria-hidden={activeTabId !== experience.id}
                hidden={activeTabId !== experience.id}
              >
                <h3>
                  <span>{experience.jobtitle}</span>
                  <span className="company">
                  &nbsp;@&nbsp;
                    <a href={experience.url} className="inline-link">
                      {experience.company}
                    </a>
                  </span>
                </h3>
                <p className="range">{experience.range}</p>

                <div>
                  {experience.points}
                </div>
              </TabPanel>
            </CSSTransition>
          ))}
        </TabPanels>
      </div>
    </ExperienceSection>
  );
};

export default Experience;
