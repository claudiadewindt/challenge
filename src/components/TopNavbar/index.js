import React from "react";
// importing styled components
import {
  TopNav,
  TopNavLeft,
  TopNavLeftItem,
  TopNavCenterItem,
  TopNavRight,
  TopNavRightItem,
  TopNavWrapper,
} from "./TopNavbar.styles.js";
// importing the icon

import { ReactComponent as Cart } from "../../assets/icons/cart.svg";

const TopNavbar = () => {
  return (
    <TopNav>
      <TopNavWrapper>
        <TopNavLeft>
          <TopNavLeftItem>UK/GBP (£)</TopNavLeftItem>
          <TopNavLeftItem>|</TopNavLeftItem>
          <TopNavLeftItem>STORES</TopNavLeftItem>
          <TopNavLeftItem>|</TopNavLeftItem>
          <TopNavLeftItem>CUSTOMER SERVICE</TopNavLeftItem>
        </TopNavLeft>

        <TopNavCenterItem>
          Enjoy free delivery on all orders over £50
        </TopNavCenterItem>

        <TopNavRight>
          <TopNavRightItem>NEWSLETTER SIGN UP</TopNavRightItem>
          <TopNavRightItem>|</TopNavRightItem>
          <TopNavRightItem>SIGN IN / REGISTER</TopNavRightItem>
          <TopNavRightItem>|</TopNavRightItem>

          <Cart style={{ height: "22px", marginLeft: "10px", width: "24px" }} />
          <TopNavRightItem></TopNavRightItem>
        </TopNavRight>
      </TopNavWrapper>
    </TopNav>
  );
};

export default TopNavbar;
