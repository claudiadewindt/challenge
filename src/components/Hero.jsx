import React from "react";
import heroImage from "../assets/images/tommy-header.jpg";
import "../styles/Style.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        {/*   top text */}
        <div className="hero-text-topText">24/7 LIVE.</div>
        <div className="hideTopText"></div>

        {/*   left section */}
        <div className="hero-text">
          <div className="hero-text-bottom">
            <h2 className="hero-text-spring">SPRING</h2>
            <h2 className="hero-text-2017">2017</h2>
            <h3 className="hero-text-with">WITH ANWAR HADID & SOFIA RICHIE</h3>
            <p className="hero-text-paragraph">
              Engineered for perfect form and exceptional fit - whatever you do
              in them.
            </p>
          </div>
        </div>

        {/*   image */}
        <img className="hero-models-pic" src={heroImage} alt="models" />
        <div className="white-top-box"></div>
        <div className="white-bottom-box"></div>
      </div>
    </div>
  );
};

export default Hero;
