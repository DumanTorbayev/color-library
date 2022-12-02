import React, { ChangeEvent, FC, FocusEvent, KeyboardEvent, useEffect, useRef, useState } from "react";
import { ChromePicker, ColorResult } from "react-color";
import { DraggableProvided } from "react-beautiful-dnd";

import { ReactComponent as BarsIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus-circle.svg";
import { ColorItemsMethods, Colors } from "../../interfaces";
import { useOnClickOutside } from "../../hooks";

import { ColorNameArea, ColorPicker, ColorPickerArea, DragAndDropArea, Item, NameInput, RemoveColor } from "./styles";

interface ColorItemProps extends Colors, ColorItemsMethods {
  provided: DraggableProvided;
}

export const ColorItem: FC<ColorItemProps> = ({
  hexCode,
  name,
  id,
  onBlur,
  onRemoveColor,
  onColorPicker,
  colorPicker,
  onSelectColor,
  provided,
}) => {
  const [value, setValue] = useState("");
  const [inputIsShown, setInputIsShown] = useState(false);
  const [color, setColor] = useState(hexCode);

  const inputRef = useRef<HTMLInputElement>(null);
  const colorPickerRef = useRef<HTMLDivElement>(null);

  const replacedHexCode = hexCode.replace("#", "");

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputIsShown]);

  const handleOnOutsideClick = () => {
    onColorPicker({ show: false, id: "" });
    onSelectColor(id, color);
  };

  useOnClickOutside(colorPickerRef, handleOnOutsideClick);

  const handleNameClick = () => {
    setInputIsShown(true);
  };

  const handleKeyDown = (evt: KeyboardEvent<HTMLInputElement>) => {
    if (evt.keyCode === 13) {
      const target = evt.target as HTMLInputElement;

      target.blur();
      if (!value) onBlur(id, value || name);
      setInputIsShown(false);
    }
  };

  const handleOnChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    setValue(value);
  };

  const handleOnBlur = (evt: FocusEvent<HTMLInputElement>) => {
    const value = evt.target.value;

    onBlur(id, value || name);
    setInputIsShown(false);
  };

  const handleRemoveColorClick = () => {
    onRemoveColor(id);
  };

  const handleColorPickerClick = () => {
    onColorPicker({ show: true, id });
  };

  const handleOnChangeComplete = (color: ColorResult) => {
    setColor(color.hex);
  };

  return (
    <Item ref={provided.innerRef} {...provided.draggableProps}>
      <DragAndDropArea {...provided.dragHandleProps}>
        <BarsIcon />
      </DragAndDropArea>

      <ColorPickerArea bgColor={hexCode} onClick={handleColorPickerClick} />

      {inputIsShown ? (
        <NameInput
          ref={inputRef}
          inputIsShown={inputIsShown}
          onKeyDown={handleKeyDown}
          value={value}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
      ) : (
        <ColorNameArea onClick={handleNameClick} inputIsShown={inputIsShown} isUppercase={replacedHexCode === name}>
          {name}
        </ColorNameArea>
      )}

      <RemoveColor onClick={handleRemoveColorClick}>
        <MinusIcon />
      </RemoveColor>

      {colorPicker.show && colorPicker.id === id && (
        <ColorPicker ref={colorPickerRef}>
          <ChromePicker color={color} disableAlpha={false} onChangeComplete={handleOnChangeComplete} />
        </ColorPicker>
      )}
    </Item>
  );
};
