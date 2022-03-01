import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { IoMdSearch } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
import "../styles/Style.css";

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <IoIosMenu
          className="nav-bar-menu-icon"
          onClick={() => setShowLinks(!showLinks)}
        />
        <img className="nav-logo" src={logo} alt="Tommy Hilfiger logo" />

        <div className="nav-menu" id={showLinks ? "hidden" : ""}>
          <a href="/women" className="link-menu">
            WOMEN
          </a>
          <a href="/men" className="link-menu">
            MEN
          </a>
          <a href="/kids" className="link-menu">
            KIDS
          </a>
          <a href="/labels" className="link-menu">
            LABELS
          </a>
          <a href="/sale" className="link-menu">
            SALE
          </a>
        </div>

        <form>
          <input type="text" placeholder="Search" />
          <IoMdSearch fontSize="25px" color="#9ba1b9" />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
