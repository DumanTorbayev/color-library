import React, { FC } from "react";

import { Switcher } from "../Switcher";
import { ColorPicker } from "../ColorPicker";

import { switcherItems } from "mock";
import { Colors } from "types";

import { Container } from "./styles";

interface WidgetProps {
  colors: Colors[];
  onChange: (colors: Colors[]) => void;
}

export const Widget: FC<WidgetProps> = ({ colors, onChange }) => (
  <Container>
    <Switcher items={switcherItems} />
    <ColorPicker colors={colors} onChange={onChange} />
  </Container>
);
