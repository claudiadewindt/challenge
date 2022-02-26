import styled from "styled-components";
import { RiHandbagFill } from "react-icons/ri";

export const TopNav = styled.nav`
  width: 100%;
  height: 35px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid #000;
`;

export const TopNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 70%;
  margin: 0 auto;
`;

export const TopNavLeft = styled.ul`
  display: flex;
  align-items: center;
`;

export const TopNavLeftItem = styled.li`
  list-style: none;
  margin-right: 10px;
  font-size: 11px;
  color: #000;
  &:not(:nth-of-type(1)) {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const TopNavCenterItem = styled.p`
  font-size: 12px;
  color: #000;
  font-style: italic;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const TopNavRight = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BagIcon = styled(RiHandbagFill)`
  font-size: 22px;
  color: #000;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TopNavRightItem = styled.li`
  list-style: none;
  margin-left: 10px;
  font-size: 11px;
  color: #000;
  &:nth-of-type(4) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
