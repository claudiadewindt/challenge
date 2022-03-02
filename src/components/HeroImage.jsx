import React from "react";
import models from "../assets/images/tommy-header.jpg";

const HeroImage = () => {
  return (
    <>
      <div className="hero-image">
        <h3>24/7 live.</h3>
        <img src={models} alt="models" />
      </div>
    </>
  );
};

export default HeroImage;
