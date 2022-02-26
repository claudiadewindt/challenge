import React from "react";
import logo from "../../assets/images/logo.png";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  SearchForm,
  SearchIcon,
  SearchInput,
} from "./NavBar.styles";

const NavBar = () => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo src={logo} alt="Tommy Hilfiger logo" />

          <NavMenu>
            <NavItem>WOMEN</NavItem>
            <NavItem>MEN</NavItem>
            <NavItem>KIDS</NavItem>
            <NavItem>LABELS</NavItem>
            <NavItem>SALE</NavItem>
          </NavMenu>

          <SearchForm>
            <SearchInput type="text" placeholder="Search" />
            <SearchIcon />
          </SearchForm>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
