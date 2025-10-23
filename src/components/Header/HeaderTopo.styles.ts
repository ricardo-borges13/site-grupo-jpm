import styled from 'styled-components';

export const Header = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #001837;
  color: #ffffff;
  font-size: 0.9rem;
  z-index: 1100; /* acima do HeaderMain */
  caret-color: transparent; 
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 6px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.1rem;
    }
  }

  /* o texto à esquerda ocupa o máximo possível */
  > div:first-child {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0;
    font-size: 0.7rem;

    > div {
      justify-content: center;
    }

    > div:first-child {
      flex: unset;
    }
  }
`;
