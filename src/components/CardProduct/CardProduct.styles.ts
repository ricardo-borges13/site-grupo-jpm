import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CardLink = styled(Link)`
  display: block;
  width: 60%;
  max-width: 500px;
  text-decoration: none;
  color: inherit;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.03);
    filter: brightness(1.1);
  }

  @media (max-width: 961px) {
    width: 100%;
    max-width: 500px;
  }
`;

export const Card = styled.div<{ $side: 'left' | 'right' }>`
  position: relative;
  overflow: hidden;
  border-radius: ${({ $side }) =>
    $side === 'right' ? '100% 0 0 100%' : '0 100% 100% 0'};
  box-shadow: 0 5px 18px rgba(0, 0, 0, 0.55);

  img {
    height: 270px;
    width: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 961px) {
    border-radius: 10px;
  }
`;

export const Content = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;

  h3 {
    margin-bottom: 8rem;
    font-size: 1.4rem;
    font-weight: bold;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 15px;
    border-radius: 8px;
  }
`;
