import React from "react";
import {
  TopNav,
  TopNavLeft,
  TopNavLeftItem,
  TopNavCenterItem,
  TopNavRight,
  TopNavRightItem,
  TopNavWrapper,
  BagIcon,
} from "./TopNavbar.styles.js";

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
          <BagIcon />
          <TopNavRightItem></TopNavRightItem>
        </TopNavRight>
      </TopNavWrapper>
    </TopNav>
  );
};

export default TopNavbar;
