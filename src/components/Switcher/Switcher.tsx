import React, { FC } from "react";

import { SwitcherItem as SwitcherItemInterface } from "types";
import { SwitcherItem } from "./SwitcherItem";

import { Container } from "./styles";

interface SwitcherProps {
  items: SwitcherItemInterface[];
}

export const Switcher: FC<SwitcherProps> = ({ items }) => (
  <Container>
    {items.map((item) => (
      <SwitcherItem
        key={item.id}
        id={item.id}
        iconIdentification={item.iconIdentification}
        active={item.active}
        itemsLength={items.length}
        alt={item.alt}
      />
    ))}
  </Container>
);
