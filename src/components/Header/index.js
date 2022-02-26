import React, { useRef, useEffect } from "react";
import tommyHeader from "../../assets/images/tommy-header.jpg";
import "./Header.css";

import CSSRulePlugin from "gsap/CSSRulePlugin";

const Header = () => {
  let imageContainer = useRef(null);
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    console.log(imageContainer, image, imageReveal);
  });

  return (
    <div className="hero-container">
      <section className="left"></section>
      <section className="right">
        <div className="img-container" ref={(el) => (imageContainer = el)}>
          <img
            className="hero-img"
            src={tommyHeader}
            alt="models"
            ref={(el) => (image = el)}
          />
        </div>
      </section>
    </div>
  );
};

export default Header;
