import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background:#f0f2f5;
    --red: #E52E4d;
    --blue: #5429CC;
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cn3;
    --shape: #ffffff;
  }

  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  html {
    @media (max-width:1080px){
      font-size:93.75%;
    }
    @media (max-width:729px){
      font-size:87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing:antialiased;
  }

  button {
    cursor:pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }


`
