import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export const GlobalStyle = createGlobalStyle`
    ${normalize}

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


       body, html {
        background-color: #F9FAFB;
        width: 100%;
        max-width: 100%;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: #1A1A1A;
        overflow-x: hidden; //trava” o layout horizontal e evita qualquer reflow quando o menu é aberto/fechado.
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

 /* Breakpoints para Galaxy Z Fold 5 e outros dispositivos móveis */
    /* Galaxy Z Fold 5 - Tela externa: 2316 x 904px */
    @media (max-width: 904px) {
      body {
        font-size: 14px;
      }
    }

    /* Galaxy Z Fold 5 - Tela interna: 2176 x 1812px */
    @media (max-width: 768px) {
      body {
        font-size: 13px;
      }
    }

    /* Dispositivos móveis pequenos */
    @media (max-width: 480px) {
      body {
        font-size: 12px;
      }

      .global-container {
        padding: 0 12px;
      }
    }

    /* Dispositivos muito pequenos */
    @media (max-width: 360px) {
      body {
        font-size: 11px;
      }

      .global-container {
        padding: 0 8px;
      }
    }


  `;
