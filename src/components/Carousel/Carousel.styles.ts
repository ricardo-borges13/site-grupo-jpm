import { Carousel } from 'react-bootstrap';
import styled from 'styled-components';

export const Caption = styled(Carousel.Caption)`
  h1 {
    color: white;
    text-shadow: 4px 4px 4px black;
    font-weight: 800;
  }
  h4 {
    color: black;
    text-shadow: 4px 4px 4px white;
    font-weight: 800;
  }
`;
