import React, { FC, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { v4 as uuid } from "uuid";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ColorItem } from "../ColorItem";
import { Colors } from "../../interfaces";
import { useLocalStorage } from "../../hooks";

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
  const [savedColors, setSavedColors] = useLocalStorage<string>("savedColors", JSON.stringify(colors));
  const [colorsState, setColorsState] = useState<Colors[]>(JSON.parse(savedColors));
  const [colorPicker, setColorPicker] = useState({ show: false, id: "" });

  useEffect(() => {
    setSavedColors(JSON.stringify(colorsState));
  }, [colorsState]);

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

  const handleSelectColor = (id: string, hexCode: string) => {
    setColorsState((prev) => {
      return prev.map((p) => {
        if (p.id === id) {
          p.hexCode = hexCode;
          p.name = hexCode.replace("#", "");
        }

        return p;
      });
    });
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
            <ColorItem
              key={color.id}
              {...color}
              onBlur={handleOnBlur}
              onRemoveColor={handleRemoveColor}
              onColorPicker={setColorPicker}
              colorPicker={colorPicker}
              onSelectColor={handleSelectColor}
            />
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
