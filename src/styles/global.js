import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    --color-primary: #223388;
    --color-secondary: #eee;
    --color-light: #fff;
    --color-dark: #000;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--color-primary);
    color: var(--color-light)
  }
`;
