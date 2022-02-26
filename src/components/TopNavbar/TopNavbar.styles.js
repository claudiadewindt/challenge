import styled from "styled-components";

export const TopNav = styled.nav`
  width: 100%;
  height: 35px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  border-bottom: 1px solid #d7d9de;
`;

export const TopNavWrapper = styled.div`
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

export const TopNavLeft = styled.ul`
  display: flex;
  align-items: center;
`;

export const TopNavLeftItem = styled.li`
  list-style: none;
  margin-right: 10px;
  font-size: 11px;
  color: var(--primary-color);
  &:not(:nth-of-type(1)) {
    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

export const TopNavCenterItem = styled.p`
  font-size: 13px;
  color: var(--primary-color);
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

export const TopNavRightItem = styled.li`
  list-style: none;
  margin-left: 10px;
  font-size: 11px;
  color: var(--primary-color);
  &:nth-of-type(4) {
    font-size: 22px;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
