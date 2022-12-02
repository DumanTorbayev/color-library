import styled from "styled-components";

const NAME_HEIGHT = 21;

export const ColorNameArea = styled.div<{ inputIsShown: boolean; isUppercase: boolean }>`
  height: ${NAME_HEIGHT}px;
  color: ${({ theme }) => theme.color.darkGrey};
  cursor: pointer;
  text-transform: ${({ isUppercase }) => (isUppercase ? "uppercase" : "capitalize")};
`;

export const RemoveColor = styled.button`
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
  margin-left: auto;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;

  &:hover {
    svg {
      fill: ${({ theme }) => theme.color.coral};
    }
  }

  svg {
    width: 100%;
    height: 100%;
    fill: ${({ theme }) => theme.color.darkGrey};
  }
`;

export const Item = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0 12px;
  padding: 15.5px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey25};

  &:hover {
    ${RemoveColor} {
      opacity: 1;
      visibility: visible;
    }

    ${ColorNameArea} {
      color: ${({ theme }) => theme.color.dusk};
    }
  }
`;

export const DragAndDropArea = styled.div`
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ColorPickerArea = styled.button<{ bgColor: string }>`
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  border-radius: 50%;
  ${({ bgColor }) => `background-color: ${bgColor}`};
`;

export const NameInput = styled.input<{ inputIsShown: boolean }>`
  width: 100%;
  height: ${NAME_HEIGHT}px;
  padding: 0;
  color: ${({ theme }) => theme.color.darkGrey};
  background-color: transparent;
  border: none;

  &:focus,
  &:active {
    outline: none;
  }
`;

export const ColorPicker = styled.div`
  position: absolute;
  top: 46px;
  left: 28px;
  z-index: 2;
`;
