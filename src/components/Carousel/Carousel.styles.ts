import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const Caption = styled(Carousel.Caption)`
  h1 {
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 4px 4px 4px black;
    font-weight: 400;
  }
  h4 {
    color: black;
    text-shadow: 4px 4px 4px white;
    font-weight: 800;
  }
`;

export const Caption1 = styled(Carousel.Caption)`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* 🔹 alinha conteúdo à direita */
  text-align: right; /* 🔹 texto alinhado à direita */
  right: 5%; /* 🔹 dá um espaçamento lateral do canto direito */
  left: auto; /* 🔹 evita sobreposição do logo à esquerda */
  bottom: 20%; /* 🔹 sobe um pouco o bloco se quiser mais equilíbrio */

  h1 {
    font-size: 2.6rem;
    line-height: 1.4;
    color: #f1c40f;
    text-shadow: 4px 4px 4px black;
    max-width: 700px;
    margin-bottom: 0.8rem;
  }

  h3 {
    font-size: 1.6rem;
    color: white;
    text-shadow: 4px 4px 4px black;
    max-width: 650px;
    margin-bottom: 0.6rem;
  }

  h4 {
    font-size: 1.3rem;
    color: #f1c40f;
    text-shadow: 4px 4px 4px black;
    margin-top: 10px;
  }

  /* Responsividade */
  @media (max-width: 991px) {
    align-items: center;
    text-align: center;
    right: 0;
    left: 0;
    bottom: 10%;
  }

  /* Responsividade */
  @media (max-width: 490px) {
    h1 {
      font-size: 2rem;
    }

    h3 {
      font-size: 1.2rem;
    }
  }
`;

export const Caption2 = styled(Carousel.Caption)`
  h1 {
    font-size: 2.6rem;
    color: #f1c40f;
    text-shadow: 4px 4px 4px black;
  }
  h4 {
    font-size: 1.3rem;
    line-height: 1.5;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 3px 3px 4px black;
    max-width: 700px;
    margin: 0 auto;
    white-space: normal;
  }
`;

export const Caption3 = styled(Carousel.Caption)`
  h1 {
    font-size: 2.3rem;
    font-weight: 700;
    color: #f1c40f;
    text-shadow: 4px 4px 4px black;
  }
  h4 {
    font-size: 1.5rem;
    line-height: 1.5;
    color: rgba(239, 248, 247, 1);
    text-shadow: 3px 3px 4px black;
    max-width: 700px;
    margin: 0 auto;
    white-space: normal;
  }
`;
