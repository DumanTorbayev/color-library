import React, { FC } from "react";
import styled from "styled-components";

import { Switcher } from "../Switcher";
import { ColorPicker } from "../ColorPicker";

import { switcherItems, colors } from "../../mock";

const Container = styled.div`
  position: relative;
  width: 25%;
  height: 100vh;
  margin-left: auto;
  padding: 10px 0;
  background-color: ${({ theme }) => theme.color.lightGreyBg};
  overflow: hidden;
`;
export const Widget: FC = () => (
  <Container>
    <Switcher items={switcherItems} />
    <ColorPicker colors={colors} />
  </Container>
);
