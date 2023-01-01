import React from 'react';
import styled from 'styled-components';
import { header } from '../../data/portfolio';
import Navbar from '../Navbar/Navbar';

const HeaderWrapper = styled.header`

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
