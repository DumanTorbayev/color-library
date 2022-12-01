import styled, { css } from "styled-components";

export const IconWrap = styled.div`
  svg {
    width: 20px;
    height: 20px;
    fill: ${({ theme }) => theme.color.grey};
  }
`;
export const Item = styled.button<{ itemsLength: number; active: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ itemsLength }) => `calc(100% / ${itemsLength})`};
  border-bottom: 2px solid ${({ theme, active }) => (active ? theme.color.dusk : "transparent")};

  ${({ active }) =>
    active &&
    css`
      ${IconWrap} {
        svg {
          fill: ${({ theme }) => theme.color.dusk};
        }
      }
    `}
`;
