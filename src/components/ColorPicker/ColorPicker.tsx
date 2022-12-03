import React, { FC, useEffect, useState } from "react";
import Scrollbars from "react-custom-scrollbars-2";
import { v4 as uuid } from "uuid";

import { DraggedColorItem } from "../DraggedColorItem";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { useLocalStorage } from "hooks";
import { Colors } from "types";

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
  onChange: (colors: Colors[]) => void;
}

const trackVerticalStyle = { width: "4px", position: "absolute" };
const STORAGE_KEY = "savedColors";

export const ColorPicker: FC<ColorPickerProps> = ({ colors, onChange }) => {
  const [savedColors, setSavedColors] = useLocalStorage<Colors[]>(STORAGE_KEY, colors);
  const [colorsState, setColorsState] = useState<Colors[]>(savedColors);
  const [colorPicker, setColorPicker] = useState({ show: false, id: "" });

  useEffect(() => {
    setSavedColors(colorsState);
  }, [colorsState]);

  useEffect(() => {
    onChange(colorsState);
  }, [colorsState, onChange]);

  const handleOnBlur = (id: string, name: string) => {
    setColorsState((prev) => {
      return prev.map((color) => {
        const clonedColor = structuredClone(color);

        if (clonedColor.id === id) {
          clonedColor.name = name;
        }

        return clonedColor;
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
      return prev.map((color) => {
        const clonedColor = structuredClone(color);

        if (clonedColor.id === id) {
          clonedColor.hexCode = hexCode;
          clonedColor.name = hexCode.replace("#", "");
        }

        return clonedColor;
      });
    });
  };

  const handleMoveColor = (items: Colors[]) => {
    setColorsState(items);
  };

  return (
    <Container>
      <Scrollbars
        renderTrackVertical={(props) => <ScrollbarVerticalTrack {...props} style={trackVerticalStyle} />}
        renderThumbVertical={(props) => <ScrollbarThumbVertical {...props} />}
      >
        <ColorsWrapper>
          <ColorsTitle>Color library</ColorsTitle>

          <DraggedColorItem
            colors={colorsState}
            onBlur={handleOnBlur}
            onRemoveColor={handleRemoveColor}
            onColorPicker={setColorPicker}
            colorPicker={colorPicker}
            onSelectColor={handleSelectColor}
            onMoveColor={handleMoveColor}
          />

          <ColorAdd onClick={handleAddColor}>
            <PlusIcon />
            <span>New color</span>
          </ColorAdd>
        </ColorsWrapper>
      </Scrollbars>
    </Container>
  );
};
