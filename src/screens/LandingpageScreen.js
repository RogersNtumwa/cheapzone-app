import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
  HeaderSection,
  HeaderText,
  HeaderImg,
  Logodiv,
} from "../components/LandingElements";
import { responsive } from "../utils/Carousel";
import Carousel from "react-multi-carousel";

const LandingpageScreen = () => {
  return (
    <Fragment>
      <HeaderSection>
        <HeaderText>
          <h2>
            Leading Sneeker
            <br /> Store in Town
          </h2>
          <p>
            It is a long established fact that finding genuine and durable
            sneekers in Town has been a myth. And Now here comes Cheapzone
          </p>
          <p>Pick your Sneaker today</p>
          <Link to="/shop">
            <button className="btn-large">Shop Now</button>
          </Link>
        </HeaderText>
        <HeaderImg>
          <img
            src="https://res.cloudinary.com/dlloahxji/image/upload/v1609322229/landingShoe_nkfb4x.jpg"
            alt="Sneaker"
            className="image"
          />
        </HeaderImg>
      </HeaderSection>
      <Logodiv>
        <Carousel
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          centerMode={true}
          className="carausel"
        >
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dlloahxji/image/upload/v1609322208/puma_jekigi.png"
              alt="Sneaker1"
              className=""
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dlloahxji/image/upload/v1609322175/fila_gkdvsb.png"
              alt="Sneaker2"
              className=""
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dlloahxji/image/upload/v1609322193/Nike_zku0cb.png"
              alt="Sneaker3"
              className=""
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dlloahxji/image/upload/v1609322164/asics_nlh2cp.png"
              alt="Sneaker4"
              className=""
            />
          </div>
          <div className="slide">
            <img
              src="https://res.cloudinary.com/dlloahxji/image/upload/v1609322152/adidas_nfac3f.jpg"
              alt="Sneaker4"
              className="image"
            />
          </div>
        </Carousel>
      </Logodiv>
    </Fragment>
  );
};

export default LandingpageScreen;
