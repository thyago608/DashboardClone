import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root{
    height: 100vh;
  }
  
  body{
    font-family: Archivo, sans-serif;
  }
  @media(max-width: 400px){
    font-size:  87.5%;
  }

  @media(max-width: 820px){
    font-size: 93.75%;
  }

  ul{
    list-style: none;
  }

`;
