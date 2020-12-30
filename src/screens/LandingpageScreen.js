import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
  HeaderSection,
  HeaderText,
  HeaderImg,
  Logodiv,
  BestCollection,
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
      <BestCollection>
        <div className="sectionheader">
          <h2 className="h2">Best Collection</h2>
          <p>
            E-commerce is massively competitive with so many different marketing
            tactics nowdays,
            <br />
            It's a confusing landscape and it;s hard to know waht's best
          </p>
        </div>
        <div className="sectionbody">
          <div className="photo">
            <img
              src="https://res.cloudinary.com/dlloahxji/image/upload/v1609327583/melvin-buezo_a3pr6a.jpg"
              alt="bestcollection"
              className="image"
            />
          </div>
          <div className="text">
            <h2>
              Summer Collection
              <br />
              <span>On Best Fashion Collection Products</span>
            </h2>
            <p>
              Consumers expext to buy now receive tomorrow.
              <br />
              Or Buy now and collect from the store tomorrow
              <ul>
                <li>-50% on online shopping.</li>
                <li>50% of online shoppers have used</li>
                <li>Delivered in less than 48 hours</li>
              </ul>
            </p>
            <Link to="/shop">
              <button className="btn-large">Shop Now</button>
            </Link>
            <span>$47.20</span>
          </div>
        </div>
      </BestCollection>
    </Fragment>
  );
};

export default LandingpageScreen;
