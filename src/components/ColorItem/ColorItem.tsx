import React, { ChangeEvent, FC, FocusEvent, KeyboardEvent, useEffect, useRef, useState } from "react";

import { ReactComponent as BarsIcon } from "../../assets/icons/bars.svg";
import { ReactComponent as MinusIcon } from "../../assets/icons/minus-circle.svg";
import { Colors } from "../../interfaces";

import { ColorNameArea, ColorPickerArea, DragAndDropArea, Item, NameInput, RemoveColor } from "./styles";

interface ColorItemProps extends Colors {
  onBlur: (id: string, name: string) => void;
  onRemoveColor: (id: string) => void;
}

export const ColorItem: FC<ColorItemProps> = ({ hexCode, name, id, onBlur, onRemoveColor }) => {
  const [value, setValue] = useState("");
  const [inputIsShown, setInputIsShown] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [inputIsShown]);
  const handleNameClick = () => {
    setInputIsShown(true);
  };

  const handleKeyPress = (evt: KeyboardEvent<HTMLInputElement>) => {
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

  return (
    <Item>
      <DragAndDropArea>
        <BarsIcon />
      </DragAndDropArea>

      <ColorPickerArea bgColor={hexCode} />

      {inputIsShown ? (
        <NameInput
          ref={inputRef}
          inputIsShown={inputIsShown}
          onKeyDown={handleKeyPress}
          value={value}
          onBlur={handleOnBlur}
          onChange={handleOnChange}
        />
      ) : (
        <ColorNameArea onClick={handleNameClick} inputIsShown={inputIsShown}>
          {name}
        </ColorNameArea>
      )}

      <RemoveColor onClick={handleRemoveColorClick}>
        <MinusIcon />
      </RemoveColor>
    </Item>
  );
};
