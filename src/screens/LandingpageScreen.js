import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
  HeaderSection,
  HeaderText,
  HeaderImg,
  Logodiv,
  FooterSection,
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
      <FooterSection>
        <div className="Col">
          <h3>CheapZone</h3>
          <p>
            Be the first to find out about the axclusive deals, the lastest
            Sneaker trends{" "}
          </p>
          <ul>
            <li className="social">
              <a
                href="https://www.linkedin.com/in/rogers-ntumwa-a1376115b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin fa-3x"></i>
              </a>
            </li>
            <li>
              <a
                href=" https://github.com/RogersNtumwa"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="fab fa-github-square fa-3x"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="Col">
          <h3>Quick Links</h3>
          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/signin">Sign in</Link>
          </div>
        </div>
        <div className="Col">
          <h3>Contact Us</h3>
          <h4>Al Barsha 1</h4>
          <ul>
            <li>
              <i className="fas fa-phone-square-alt fa-2x"></i>: +971 558085053
            </li>
            <li>
              <i className="fas fa-envelope-square fa-2x"></i>:
              ntumwar@gmail.com
            </li>
          </ul>
        </div>
      </FooterSection>
    </Fragment>
  );
};

export default LandingpageScreen;
