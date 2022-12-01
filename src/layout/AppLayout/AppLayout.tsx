import React, { FC, ReactNode } from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: ReactNode;
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.color.mainBg};
`;
export const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};
