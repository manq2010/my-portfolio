import React, { useEffect, useState } from 'react';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styled from 'styled-components';

const ScrollTop = styled.div`
    display: none;

    @media ( min-width: 768px ){
        display: block;
        position: fixed;
        bottom: 2em;
        right: 4em;
        background-color: transparent;
}
`;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => (
      window.pageYOffset > 500 ? setIsVisible(true) : setIsVisible(false)
    );

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <>
      {
        isVisible ? (
          <ScrollTop>
            <a href="#top">
              <ArrowUpwardIcon fontSize="large" />
            </a>
          </ScrollTop>
        ) : null
    }

    </>
  );
};

export default ScrollToTop;
