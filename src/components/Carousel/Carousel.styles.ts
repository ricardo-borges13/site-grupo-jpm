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

export const Caption2 = styled(Carousel.Caption)`
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

export const Caption3 = styled(Carousel.Caption)`
  h4 {
    font-size: 1.7rem;
    line-height: 1.5;
    color: #f1c40f;
    text-shadow: 4px 4px 4px black;
    max-width: 700px;
    margin: 0 auto;
    white-space: normal;
  }
`;
