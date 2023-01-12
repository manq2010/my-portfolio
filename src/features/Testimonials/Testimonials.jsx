import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
// import testimonialsData from '../../data/testimonialsData';
// import '~slick-carousel/slick/slick.css';
// import '~slick-carousel/slick/slick-theme.css';

const SliderContainer = styled.div`

`;

const Slide = styled.div`
`;

// const Title = styled.h3`
//   /* Add your styles here */
// `;

// const Description = styled.p`
//   /* Add your styles here */
//   margin: 0 auto;
//   width: 90%;
//   height: 250px;
//   border-radius: 200px;

//   box-sizing: border-box;
//   padding: 30px 40px;
//   padding-top: 60px;

//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `;

const Testimonials = () => {
  const settings = {
    // dots: true,
    // adaptiveHeight: true,
    // infinite: true,
    // speed: 800,
    // arrows: false,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // margin: 3,
    // loop: true,
    // autoplaySpeed: 3000,
    // draggable: true,
    // swipeToSlide: true,
    // swipe: true,
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,

    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <h2 className="numbered-heading">Where Other Say About my Work</h2>
      <SliderContainer>
        <h2> Single Item</h2>
        <Slider {...{ settings }}>
          <Slide>
            <h3>1</h3>
          </Slide>
          <Slide>
            <h3>2</h3>
          </Slide>
          <Slide>
            <h3>3</h3>
          </Slide>
          <Slide>
            <h3>4</h3>
          </Slide>
          <Slide>
            <h3>5</h3>
          </Slide>
          <Slide>
            <h3>6</h3>
          </Slide>
        </Slider>
      </SliderContainer>
    </section>
  );
};

export default Testimonials;
