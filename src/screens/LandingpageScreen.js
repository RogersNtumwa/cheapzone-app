import React from "react";
import { Link } from "react-router-dom";
import Sneaker from "..//images/landingShoe.jpg";
import {
  HeaderSection,
  HeaderText,
  HeaderImg,
} from "../components/LandingElements";

const LandingpageScreen = () => {
  return (
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
        <img src={Sneaker} alt="Sneaker" className="image" />
      </HeaderImg>
    </HeaderSection>
  );
};

export default LandingpageScreen;
