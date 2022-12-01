import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: SuisseIntl;
    src: url('../assets/fonts/SuisseIntl.woff2') format('woff2'),
    url('../assets/fonts/SuisseIntl.woff') format('woff');
    font-weight: 450;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    font-family: SuisseIntl, sans-serif;
    font-size: 16px;
    line-height: 21px;
    overflow-x: hidden;
  }

  button {
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    &:active,
    &:focus {
      border-color: transparent;
      outline: none;
    }
  }
`;
