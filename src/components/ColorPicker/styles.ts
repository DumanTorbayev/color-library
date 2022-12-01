import styled from "styled-components";

import { SWITCHER_MIN_HEIGHT } from "../Switcher/styles";

export const Container = styled.div`
  height: calc(100% - ${SWITCHER_MIN_HEIGHT}px);
`;

export const ScrollbarVerticalTrack = styled.div`
  right: 4px;
  height: 100%;
`;

export const ScrollbarThumbVertical = styled.div`
  background-color: ${({ theme }) => theme.color.grey50};
  border-radius: 37px;
`;
export const ColorsWrapper = styled.div`
  padding: 24px 28px;
`;

export const ColorsTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.dusk};
`;

export const ColorAdd = styled.button`
  display: flex;
  align-items: center;
  gap: 0 8px;
  margin-top: 15.5px;
  color: ${({ theme }) => theme.color.grey};

  svg {
    width: 16px;
    height: 16px;
  }
`;
