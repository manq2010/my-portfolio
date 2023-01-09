/* eslint-disable react/jsx-props-no-spreading */
import React, { useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';
import Slider from 'react-slick';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import testimonialsData from '../../data/testimonialsData';
import TestimonialItem from './TestimonialItem';

const TestimonySection = styled.section`

`;

const SectionTitle = styled.h1`
    text-align: center;
    margin-bottom: 1rem;
    ;text-transform: uppercase;
`;

// const TestimonyGrid = styled.ul`
//     max-width: 1100px;
//     margin: 0 auto;
//     display: grid;
//     grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
//     grid-gap: 2rem;
// `;

const Button = styled.button`
 
  @media (min-width: 768px) {
      
    }
`;

const PrevBtn = styled(Button)`
 
`;

const NextBtn = styled(Button)`

`;

const Testimonials = () => {
  const sliderRef = useRef();

  const gotoNext = () => {
    sliderRef.current.slickNext();
  };

  const gotoPrev = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    adaptiveHeight: true,
    infinite: true,
    speed: 800,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    margin: 3,
    loop: true,
    autoplaySpeed: 3000,
    draggable: true,
    swipeToSlide: true,
    swipe: true,
  };

  return (
    <TestimonySection id="testimonials">
      { testimonialsData && (
      <>
        <SectionTitle>Testimonials</SectionTitle>
        <div>
          <FormatQuoteIcon />
          <div>
            <Slider {...settings} ref={sliderRef}>
              {testimonialsData.map((testimony) => (
                <TestimonialItem key={uuidv4()} testimony={testimony} />
              ))}
            </Slider>
            <PrevBtn
              type="button"
              className="prevBtn"
              onClick={gotoPrev}
            >
              <ArrowCircleLeftIcon
                aria-label="Previous testimonial"
              />
            </PrevBtn>
            <NextBtn
              type="button"
              className="nextBtn"
              onClick={gotoNext}
            >
              <ArrowCircleRightIcon
                aria-label="Next testimonial"
              />
            </NextBtn>
          </div>
        </div>
      </>
      )}
    </TestimonySection>
  );
};

export default Testimonials;
