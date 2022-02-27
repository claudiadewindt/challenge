import React from "react";
import "../../styles/Style.css";
// importing the icon
import { ReactComponent as Cart } from "../../assets/icons/cart.svg";

const TopNavbar = () => {
  return (
    <nav className="top-Nav">
      <div className="top-nav-wrapper">
        <ul className="left-ul">
          <li className="left-li">UK/GBP (£)</li>
          <li className="left-li">|</li>
          <li className="left-li">STORES</li>
          <li className="left-li">|</li>
          <li className="left-li">CUSTOMER SERVICE</li>
        </ul>

        <p className="center-top-nav">
          Enjoy free delivery on all orders over £50
        </p>

        <ul className="right-ul">
          <li className="right-li">NEWSLETTER SIGN UP</li>
          <li className="right-li">|</li>
          <li className="right-li">SIGN IN / REGISTER</li>
          <li className="right-li">|</li>

          <Cart style={{ height: "22px", marginLeft: "10px", width: "24px" }} />
        </ul>
      </div>
    </nav>
  );
};

export default TopNavbar;
