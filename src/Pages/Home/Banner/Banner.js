import React from "react";
import { Carousel } from "react-bootstrap";
import { useState } from "react";
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="https://i.ibb.co/26mMH7G/baner3.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bike is ready for all time</h3>
          <p>Dont bring a broken bike in a date!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto"
          src="https://i.ibb.co/1J3svrX/baner2.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>No more chain Issue!</h3>
          <p>Stuck with chains? Here is the solutions</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 mx-auto "
          src="https://i.ibb.co/nf7JSym/baner1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Climb through the mountains!</h3>
          <p>
            we can customise your bike as it can ride in any surface
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
