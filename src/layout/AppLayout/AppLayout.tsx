import React, { FC, ReactNode } from "react";

import { Container } from "./styles";

interface AppLayoutProps {
  children: ReactNode;
}

export const AppLayout: FC<AppLayoutProps> = ({ children }) => <Container>{children}</Container>;
