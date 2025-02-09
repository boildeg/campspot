import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";

const StyledLogo = styled.div`
  text-align: center;
  height: 6.4rem;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  gap: 1.6rem;
  padding-left: 1.6rem;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    color: var(--color-brand-600);
  }
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
        <HiOutlineHome />
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
