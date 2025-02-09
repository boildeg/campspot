import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";
import styled from "styled-components";
import { useState } from "react";

const StyledAppLayout = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const Main = styled.main`
  background-color: var(--color-grey-50);
  padding: 4rem 4.8rem 6.4rem;
`;

function AppLayout() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggle = () => {
    setIsCollapsed((prev) => !prev);
  };
  return (
    <StyledAppLayout>
      <Header isCollapsed={isCollapsed} handleToggle={handleToggle} />
      <Sidebar isCollapsed={isCollapsed} handleToggle={handleToggle} />
      <Main>
        <Outlet />
      </Main>
    </StyledAppLayout>
  );
}

export default AppLayout;
