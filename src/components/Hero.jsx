import React from "react";
import heroImage from "../assets/images/tommy-header.jpg";
import "../styles/Style.css";
//import { ReactComponent as Heart } from "../assets/icons/heart.svg";
import { RiHeart3Line } from "react-icons/ri";

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero">
        {/*   top text */}
        <div className="hero-text-topText">24/7 LIVE.</div>
        <div className="hideTopText"></div>

        {/*   love letters */}
        <h1 className="letter-l">L</h1>
        <RiHeart3Line className="heart" />
        <h1 className="letter-v">V</h1>
        <h1 className="letter-e">E</h1>
        <h1 className="dot1">.</h1>
        <h1 className="letter-l2">L</h1>
        <h1 className="dot2">.</h1>
        <h1 className="letter-a">A</h1>
        <h1 className="dot3">.</h1>

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

        {/*   love */}

        {/* <div className="heart">
          <Heart />
        </div>
        <h1 className="letter-v">V</h1>
        <h1 className="letter-e">E</h1>
        <h1 className="letter-dot">.</h1>
        <h1 className="letter-l-2">L</h1>
        <h1 className="letter-dot-2">.</h1>
        <h1 className="letter-a">A</h1>
        <h1 className="letter-dot-3">.</h1> */}
      </div>
    </div>
  );
};

export default Hero;
