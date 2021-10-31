import React from "react";
import { Carousel } from "react-bootstrap";


const Banner = () => {
  return (
    <div>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="/bannerImage/banner-3.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Your Journey Begins</h3>
            <p>A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="/bannerImage/banner-1.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Your Journey Begins</h3>
            <p>A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 "
            src="/bannerImage/banner-2.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Your Journey Begins</h3>
            <p>
            A journey of a 1000 miles starts with a single step. Import the full demo content with 1 click and create a head-turning website for your travel agency.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
