import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
  ${reset};

  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: 'Noto Sans KR', sans-serif;
  }

  button{
    display: flex;
    cursor: pointer;
    outline: none;
  }
  
  input{
    display: flex;
    outline: none;
  }
  `;
