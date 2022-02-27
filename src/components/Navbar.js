import React from "react";
import logo from "../assets/images/logo.png";
import { IoMdSearch } from "react-icons/io";
import "../styles/Style.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-bar-container">
        <img className="nav-logo" src={logo} alt="Tommy Hilfiger logo" />

        <ul className="nav-menu">
          <li className="li-menu">WOMEN</li>
          <li className="li-menu">MEN</li>
          <li className="li-menu">KIDS</li>
          <li className="li-menu">LABELS</li>
          <li className="li-menu">SALE</li>
        </ul>

        <form>
          <input type="text" placeholder="Search" />
          <IoMdSearch fontSize="1.3rem" color="$darkblue" />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;
