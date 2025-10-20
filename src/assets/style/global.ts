import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

       body {
        background-color: #F9FAFB;
        width: 100%;
        max-width: 100%;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: #1A1A1A;
    }

    .global-container {
      width: 100%;
      max-width: clamp(320px, 90vw, 1200px);
      margin: 0 auto;
      padding: 0 16px;
}

.icon {
  font-size: 150px;
}

  `
