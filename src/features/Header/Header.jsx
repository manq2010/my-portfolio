import React from 'react';
import styled from 'styled-components';
import { header } from '../../data/portfolio';
import Navbar from '../Navbar/Navbar';

const HeaderWrapper = styled.header`
  max-width: 1100px;
  width: 95%;
  margin: 0 auto;
//   display: flex;
  justify-content: space-between;
  height: 6rem;

  @media (min-width: 600px){
    height: 8rem;
  }
`;
const Header = () => {
  const { homepage, title } = header;
  return (
    <HeaderWrapper>
      <h3>
        {homepage ? (
          <a href={homepage} className="link">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </HeaderWrapper>
  );
};

export default Header;
