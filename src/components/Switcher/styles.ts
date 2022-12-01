import styled from "styled-components";

const PADDING_X = 28;
export const SWITCHER_MIN_HEIGHT = 48;

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 100%;
  min-height: ${SWITCHER_MIN_HEIGHT}px;
  padding: 0 ${PADDING_X}px;

  &:before {
    content: "";
    position: absolute;
    left: ${PADDING_X}px;
    right: 0;
    bottom: 0;
    width: calc(100% - (${PADDING_X}px * 2));
    height: 1px;
    background-color: ${({ theme }) => theme.color.grey25};
  }
`;
