import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
padding: 2rem;
margin-top: 3rem;
display: flex;
justify-content: space-around;
align-items: center;

@media (min-width: 768px) {
  padding: 3rem 1rem;
  margin-top: 4em;
}
`;

const FooterParagraph = styled.p`
font-size: 0.9rem;
font-weight: 600;
color: #2978b5;
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
