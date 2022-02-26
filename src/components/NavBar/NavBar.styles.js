import styled from "styled-components";
import { IoMdSearch } from "react-icons/io";

export const Nav = styled.nav`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  width: 100%;
  color: var(--primary-color);
  background-color: #fff;
  border-bottom: 1px solid #d7d9de;

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

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    width: 80%;
  }

  @media screen and (max-width: 768px) {
    transition: 0.8s all ease;
    width: 95%;
  }
`;

export const NavLogo = styled.img`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 200px;

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
  color: var(--primary-color);

  &::last-child {
    margin-right: 0;
  }
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
`;

export const SearchInput = styled.input`
  width: 158px;
  height: 30px;
  border: 1px solid #d7d9de;
  padding: 0 10px;
  font-size: 0.7rem;
  outline: none;
`;

export const SearchIcon = styled(IoMdSearch)`
  font-size: 1.2rem;
  margin-left: 10px;
  margin-right: 10px;
  color: var(--primary-color);
  @media screen and (max-width: 960px) {
    margin-right: 0;
  }
`;
