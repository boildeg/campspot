import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  /* padding: 2.1rem 1.2rem; */
  width: 23.2rem;
  height: 100%;
  border-right: 1px solid var(--color-grey-100);
  transition: all 0.3s ease;
  grid-row: 1/-1;

  &.collapse {
    width: 6.4rem;
  }
`;

const LogoWrapper = styled.div`
  position: relative;
  border-bottom: 1px solid var(--color-grey-100);
`;

function Sidebar({ isCollapsed }) {
  return (
    <StyledSidebar className={isCollapsed ? "collapse" : ""}>
      <LogoWrapper>
        <Logo isCollapsed={isCollapsed} />
      </LogoWrapper>
      <MainNav isCollapsed={isCollapsed} />
    </StyledSidebar>
  );
}

export default Sidebar;
