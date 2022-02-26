import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
} from "./SideBar.styles";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <SideBarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="about" onClick={toggle}>
            About
          </SideBarLink>

          <SideBarLink to="skills" onClick={toggle}>
            Skills
          </SideBarLink>
          <SideBarLink to="projects" onClick={toggle}>
            Projects
          </SideBarLink>
          <SideBarLink to="contact" onClick={toggle}>
            Contact
          </SideBarLink>
        </SideBarMenu>
      </SideBarWrapper>
    </SideBarContainer>
  );
};
export default SideBar;
