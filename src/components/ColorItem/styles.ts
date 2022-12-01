import styled from "styled-components";

const NAME_HEIGHT = 21;

export const RemoveColor = styled.button`
  width: 16px;
  min-width: 16px;
  height: 16px;
  min-height: 16px;
  margin-left: auto;
  visibility: hidden;
  opacity: 0;
  transition: all 0.2s;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Item = styled.div`
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
  }
`;

export const DragAndDropArea = styled.div`
  width: 16px;
  height: 16px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const ColorPickerArea = styled.div<{ bgColor: string }>`
  width: 18px;
  min-width: 18px;
  height: 18px;
  min-height: 18px;
  border-radius: 50%;
  ${({ bgColor }) => `background-color: ${bgColor}`};
`;

export const ColorNameArea = styled.div<{ inputIsShown: boolean }>`
  height: ${NAME_HEIGHT}px;
  color: ${({ theme }) => theme.color.darkGrey};
  cursor: pointer;
`;

export const NameInput = styled.input<{ inputIsShown: boolean }>`
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
