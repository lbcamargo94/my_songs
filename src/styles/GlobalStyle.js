import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
  }
  
  html{
    background-color: #1a202c;
    color: #f0f8ff;
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    width: 100%;
  }

  #root {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 100%;
  }
`