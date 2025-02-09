import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  HiOutlineCalendarDays,
  HiOutlineCog6Tooth,
  HiOutlineHome,
  HiOutlineHomeModern,
  HiOutlineUsers,
} from "react-icons/hi2";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    width: 100%;
    align-items: center;
    padding: 1.2rem 2rem;
    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    position: relative;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-800);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
    flex-shrink: 0;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }

  span {
    opacity: ${(props) => (props.isCollapsed ? 0 : 1)};
    transform: ${(props) =>
      props.isCollapsed ? "translateX(-10px)" : "translateX(0)"};
    transition: opacity 0.3s ease, transform 0.3s ease;
    white-space: nowrap;
    margin-left: 1.2rem;
    visibility: ${(props) => (props.isCollapsed ? "hidden" : "visible")};
  }
`;

function MainNav({ isCollapsed }) {
  return (
    <nav>
      <NavList>
        <li>
          <StyledNavLink to="/dashboard" isCollapsed={isCollapsed}>
            <HiOutlineHome />
            <span>Home</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/bookings" isCollapsed={isCollapsed}>
            <HiOutlineCalendarDays />
            <span>Bookings</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/cabins" isCollapsed={isCollapsed}>
            <HiOutlineHomeModern />
            <span>Cabins</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/users" isCollapsed={isCollapsed}>
            <HiOutlineUsers />
            <span>Users</span>
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/settings" isCollapsed={isCollapsed}>
            <HiOutlineCog6Tooth />
            <span>Settings</span>
          </StyledNavLink>
        </li>
      </NavList>
    </nav>
  );
}

export default MainNav;
