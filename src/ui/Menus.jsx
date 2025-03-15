import { createContext, useContext, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { HiEllipsisVertical } from "react-icons/hi2";
import styled from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const Menu = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const StyledToggle = styled.button`
  background: none;
  border: none;
  padding: 0.4rem;
  border-radius: var(--border-radius-sm);
  transform: translateX(0.8rem);
  transition: all 0.2s;

  &:hover {
    background-color: var(--color-grey-100);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-700);
  }
`;

const StyledList = styled.ul`
  position: absolute;
  z-index: 1;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  right: 0;
  top: calc(100% + 8px);
  width: 20rem;
`;

const StyledButton = styled.button`
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 1.2rem 2.4rem;
  font-size: 1.4rem;
  transition: all 0.2s;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  &:hover {
    background-color: var(--color-grey-50);
  }

  & svg {
    width: 1.6rem;
    height: 1.6rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }
`;

const MenusContext = createContext();

export { MenusContext };

function Menus({ children }) {
  const [openId, setOpenId] = useState("");

  const close = () => setOpenId("");
  const open = setOpenId;

  return (
    <MenusContext.Provider value={{ openId, close, open }}>
      {children}
    </MenusContext.Provider>
  );
}

function Toggle({ id }) {
  const context = useContext(MenusContext);

  // If context is undefined, create a local state
  const [localOpenId, setLocalOpenId] = useState("");

  // Use either context values or local values
  const openId = context?.openId || localOpenId;
  const close = context?.close || (() => setLocalOpenId(""));
  const open = context?.open || setLocalOpenId;

  function handleClick() {
    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <StyledToggle onClick={handleClick}>
      <HiEllipsisVertical />
    </StyledToggle>
  );
}

function List({ id, children }) {
  const context = useContext(MenusContext);

  // If context is undefined, create a local state
  const [localOpenId, setLocalOpenId] = useState("");

  // Use either context values or local values
  const openId = context?.openId || localOpenId;
  const close = context?.close || (() => setLocalOpenId(""));

  const ref = useOutsideClick(close);

  // We don't need the scroll event listener anymore since position: absolute
  // will make the menu move with its parent when scrolling

  if (openId !== id) return null;

  return <StyledList ref={ref}>{children}</StyledList>;
}

function Button({ children, icon, onClick }) {
  const context = useContext(MenusContext);

  // If context is undefined, create a local state
  const [, setLocalOpenId] = useState("");

  // Use either context close or local close
  const close = context?.close || (() => setLocalOpenId(""));

  function handleClick() {
    onClick?.();
    close();
  }

  return (
    <li>
      <StyledButton onClick={handleClick}>
        {icon}
        <span>{children}</span>
      </StyledButton>
    </li>
  );
}

Menus.Menu = Menu;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
