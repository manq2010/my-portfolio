import React from 'react';
import styled from 'styled-components';
import socialsData from '../../data/socialsData';
// import Icon from '../Icons/icon';
import SideBar from '../SideBar/SideBar';

const SocialListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }

    a {
      padding: 10px;

      &:hover,
      &:focus {
        transform: translateY(-3px);
      }

      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

const SocialSideBar = () => (
  <SideBar orientation="left">
    <SocialListWrapper>
      {socialsData
        && socialsData.slice(0, 1).map(({ url, name, id }) => (
          <li key={id}>
            <a href={url} aria-label={name} target="_blank" rel="noreferrer">
              {/* <Icon name={name} /> */}
              test
            </a>
          </li>
        ))}
    </SocialListWrapper>
  </SideBar>
);

export default SocialSideBar;
