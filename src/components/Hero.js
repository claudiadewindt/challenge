import React from "react";
import heroImage from "../assets/images/tommy-header.jpg";
import "../styles/Style.css";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        {/*   left section */}
        <div className="hero-text">
          <div className="hero-text-bottom">
            <h2 className="hero-text-spring">SPRING</h2>
            <h2 className="hero-text-2017">2017</h2>
            <h3 className="hero-text-with">WITH ANWARD HADID & SOFIA RICHIE</h3>
            <p class="hero-text-paragraph">
              Engineered for perfect form and exceptional fit - whatever you do
              in them.
            </p>
          </div>
        </div>

        {/*   top text */}
        <div className="hero-text-live">24/7 LIVE</div>
        <div className="hideLive"></div>

        {/*   image */}
        <img className="hero-mainImg" src={heroImage} alt="models" />
        <div className="white-top"></div>
        <div className="white-bottom"></div>
      </div>
    </div>
  );
};

export default Hero;
