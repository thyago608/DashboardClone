import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  
    font-size: 62.5%;
  }

  #root{
    height: 100vh;
  }
  
  body{
    font-family: Archivo, sans-serif;
    background: #f5f6fa;
  }
  

  ul{
    list-style: none;
  }

`;
