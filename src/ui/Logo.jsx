import styled from "styled-components";
import logo from "../assets/logo.png";

const StyledLogo = styled.div`
  text-align: center;
  height: 7rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 1.6rem;
  padding-left: 1.6rem;

  img {
    height: 3rem;
    width: 3rem;
  }
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.h1`
  font-size: 2.4rem;
  font-weight: 600;
  color: var(--color-grey-700);
  position: relative;
  opacity: ${({ isCollapsed }) => (isCollapsed ? 0 : 1)};
  transition: opacity 0.5s ease;

  span {
    color: var(--color-brand-600);
  }
`;

function Logo({ isCollapsed }) {
  return (
    <StyledLogo isCollapsed={isCollapsed}>
      <Icon>
        <img src={logo} alt="Logo" />
      </Icon>

      {!isCollapsed && (
        <Text>
          Holi<span>vana</span>
        </Text>
      )}
    </StyledLogo>
  );
}

export default Logo;
