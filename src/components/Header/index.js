import React, { useRef, useEffect } from "react";
import tommyHeader from "../../assets/images/tommy-header.jpg";
import "./Header.css";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { gsap } from "gsap";
import { Power2 } from "gsap/all";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  let imageContainer = useRef(null);
  // eslint-disable-next-line no-unused-vars
  let image = useRef(null);
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  let tl = gsap.timeline();

  useEffect(() => {
    tl.to(".img-container", 1.2, { css: { visibility: "visible" } }).to(
      imageReveal,
      1,
      { width: "0%", ease: Power2.easeInOut },
    );
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
      <div className="big-text">
        <h1>
          <span className="hide-text love-text">LOVE.</span>
        </h1>
        <h1>
          <span className="hide-text la-text">L.A.</span>
        </h1>
      </div>
    </div>
  );
};

export default Header;
