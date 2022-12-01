import React, { FC, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { v4 as uuid } from "uuid";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ColorItem } from "../ColorItem";
import { Colors } from "../../interfaces";

import {
  ColorAdd,
  ColorsTitle,
  ColorsWrapper,
  Container,
  ScrollbarThumbVertical,
  ScrollbarVerticalTrack,
} from "./styles";

interface ColorPickerProps {
  colors: Colors[];
}

const trackVerticalStyle = { width: "4px", position: "absolute" };

export const ColorPicker: FC<ColorPickerProps> = ({ colors }) => {
  const [colorsState, setColorsState] = useState(colors);

  useEffect(() => {
    setColorsState(colors);
  }, [colors]);

  const handleOnBlur = (id: string, name: string) => {
    setColorsState((prev) => {
      return prev.map((p) => {
        if (p.id === id) {
          p.name = name;
        }

        return p;
      });
    });
  };

  const handleAddColor = () => {
    const unique_id = uuid();

    setColorsState((prev) => [...prev, { id: unique_id, hexCode: "#ffffff", name: "FFFFFF" }]);
  };

  const handleRemoveColor = (id: string) => {
    setColorsState((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <Container>
      <Scrollbars
        renderTrackVertical={(props) => <ScrollbarVerticalTrack {...props} style={trackVerticalStyle} />}
        renderThumbVertical={(props) => <ScrollbarThumbVertical {...props} />}
      >
        <ColorsWrapper>
          <ColorsTitle>Color library</ColorsTitle>

          {colorsState.map((color) => (
            <ColorItem key={color.id} {...color} onBlur={handleOnBlur} onRemoveColor={handleRemoveColor} />
          ))}

          <ColorAdd onClick={handleAddColor}>
            <PlusIcon />
            <span>New color</span>
          </ColorAdd>
        </ColorsWrapper>
      </Scrollbars>
    </Container>
  );
};
