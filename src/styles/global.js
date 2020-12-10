import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #223388;
    --color-secondary: #eee;
    --color-light: #fff;
    --color-dark: #000;
    --color-red: #d00a01;
    --color-darkGrey: #212530;
    --color-light-transparent: rgba(255,255,255,.8);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    width: 100vw;
    min-height: 100vh;
    background-image: linear-gradient(to top, black 0%, rgba(128,128,128,.3) 100%),
      url('./background.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    color: var(--color-light);
    display: flex;
    justify-content: center;
    font-family: "Poppins", sans-serif;
  }

  button, input, textarea, select {
    outline: none;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    padding: 0px;
  }

  #root {
    width: 90%;
  }
`;
