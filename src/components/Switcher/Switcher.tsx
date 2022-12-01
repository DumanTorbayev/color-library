import React, { FC } from "react";

import { SwitcherItem as SwitcherItemInterface } from "../../interfaces";
import { SwitcherItem } from "./SwitcherItem";

import { Container } from "./styles";

interface SwitcherProps {
  items: SwitcherItemInterface[];
}

export const Switcher: FC<SwitcherProps> = ({ items }) => (
  <Container>
    {items.map((item) => (
      <SwitcherItem key={item.id} {...item} itemsLength={items.length} />
    ))}
  </Container>
);
