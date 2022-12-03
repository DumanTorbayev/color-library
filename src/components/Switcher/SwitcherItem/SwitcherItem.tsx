import React, { FC } from "react";

import { SwitcherItem as SwitcherItemInterface } from "types";
import { ReactComponent as SliderSimpleIcon } from "assets/icons/sliders-simple.svg";
import { ReactComponent as PaletteIcon } from "assets/icons/palette.svg";
import { ReactComponent as ClockIcon } from "assets/icons/clock-rotate-left.svg";
import { ReactComponent as FilesIcon } from "assets/icons/files.svg";

import { IconWrap, Item } from "./styles";

interface SwitcherItemProps extends SwitcherItemInterface {
  itemsLength: number;
}

enum IconIdentifications {
  SliderSimple = "slider_simple",
  Palette = "palette",
  Clock = "clock",
  Files = "files",
}

export const SwitcherItem: FC<SwitcherItemProps> = ({ iconIdentification, active, itemsLength }) => {
  const renderIcon = (identification: string) => {
    switch (identification) {
      case IconIdentifications.SliderSimple: {
        return <SliderSimpleIcon />;
      }
      case IconIdentifications.Palette: {
        return <PaletteIcon />;
      }
      case IconIdentifications.Clock: {
        return <ClockIcon />;
      }
      case IconIdentifications.Files: {
        return <FilesIcon />;
      }
    }
  };

  return (
    <Item itemsLength={itemsLength} active={active}>
      <IconWrap>{renderIcon(iconIdentification)}</IconWrap>
    </Item>
  );
};
