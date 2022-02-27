import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-width: 70%;
  margin: 0 auto;
`;

export const HeaderLeftSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`;

export const HeaderRightSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const HeaderImageContainer = styled.div`
  margin-top: 2rem;
  width: 1000px;
  height: 1050px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    right: 0;
    background-color: pink;
  }
  img {
    width: 1000px;
    position: absolute;
  }
`;

export const HeaderImage = styled.img`
  width: 600px;
  height: auto;
  margin-top: 2rem;
`;
