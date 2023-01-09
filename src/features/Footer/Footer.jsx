import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`

`;

const FooterParagraph = styled.p`

`;

const Footer = () => (
  <FooterWrapper id="footer">
    <div>
      <FooterParagraph>Created by Mancoba Sihlongonyane</FooterParagraph>
    </div>
    <div>
      <FooterParagraph>
        Copyright &copy;
        {' '}
        {new Date().getFullYear()}
      </FooterParagraph>
    </div>

  </FooterWrapper>
);

export default Footer;
