import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import testimonialsData from '../../data/testimonialsData';

const SliderContainer = styled.div`
background-color: blue;
height: 50vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
overflow: hidden;
`;

const Slide = styled.div`
background-color: ${(props) => props.color};
padding: 2rem;
width: 100%;
height: 500px;
position: relative;

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Title = styled.h3`
  /* Add your styles here */
`;

const Description = styled.p`
  /* Add your styles here */
  margin: 0 auto;
  width: 90%;
  height: 250px;
  border-radius: 200px;

  box-sizing: border-box;
  padding: 30px 40px;
  padding-top: 60px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Testimonials = () => {
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
    <SliderContainer>
      <Slider {...{ settings }}>
        {testimonialsData.map((item) => (
          <Slide color="#ff0000" key={item.id}>
            <Title>{item.title}</Title>
            <Description>{item.text}</Description>
          </Slide>
        ))}
      </Slider>
    </SliderContainer>
  );
};

export default Testimonials;
