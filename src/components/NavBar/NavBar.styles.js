import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid #000;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 70%;
  margin: 0 auto;
`;

export const NavLogo = styled.img`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 230px;

  @media screen and (max-width: 960px) {
    width: 150px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  font-size: 0.8rem;
  margin-right: 35px;

  &::last-child {
    margin-right: 0;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  padding: 10px;
`;

export const SearchInput = styled.input`
  width: 150px;
  height: 30px;
  border: 1px solid #000;
  padding: 0 10px;
  font-size: 0.8rem;
  outline: none;
`;

export const SearchIcon = styled(IoMdSearch)`
  font-size: 1.2rem;
  margin-left: 10px;
`;
