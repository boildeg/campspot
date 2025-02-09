import styled from "styled-components";
import { PanelLeft } from "lucide-react";

const StyledHeader = styled.header`
  background-color: var(--color-grey-0);
  padding: 1.2rem 4.8rem;
  border-bottom: 1px solid var(--color-grey-100);
  position: relative;
`;

const CollapseButton = styled.button`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0.6rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  &:hover {
    background-color: var(--color-grey-100);
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: none;
  }
`;

const CollapseIcon = styled.div`
  color: var(--color-grey-600);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Header({ isCollapsed, handleToggle }) {
  return (
    <StyledHeader>
      HEADER
      <CollapseButton onClick={handleToggle}>
        <CollapseIcon>
          <PanelLeft size={15} />
        </CollapseIcon>
      </CollapseButton>
    </StyledHeader>
  );
}

export default Header;
