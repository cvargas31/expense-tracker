import styled, { createGlobalStyle } from "styled-components";

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
    background-color: #f8f8fa ;
  }

  #root {
    max-width: 500px;
    margin: 0 auto;
  }
`;

export const Wrapper = styled.div`
  padding: 2em;
  text-align: left ;
`

export const Title = styled.h2`
  color: #2f2d51;
`

export const Button = styled.button`
  cursor: pointer;
  background-color: #9c88ff;
  box-shadow: var(--box-shadow);
  color: #fff;
  border: 1px solid #9c88ff ;
  display: block;
  font-size: 16px;
  margin: 10px 0 30px;
  padding: 10px;
  width: 100%;
  transition: all 0.1s ease-in ;
  &:hover {
    color: #9c88ff ;
    background-color: white;
  }
`