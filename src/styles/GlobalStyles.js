import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }
        
  *, *::before, *::after {
    box-sizing: inherit;
  }
  
  ul, li, h1, h2, h3, h4, p, button {
    margin: 0;
    padding: 0 ;
  }

  ul {
    list-style: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }

  body {
    margin: 0 auto;
    overscroll-behavior: none;
    text-align: center ;
  }

  #root {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
`;
