import styled, { css } from 'styled-components';

type ButtonVariant = 'primary' | 'secondary';
type HeightVariant = 'small' | 'large';

export const StyledButton = styled.button<{
  variant: ButtonVariant;
  heightVariant?: HeightVariant;
}>`
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ heightVariant }) =>
    heightVariant === 'small'
      ? css`
          padding: 0.2rem 1.8rem;
        `
      : css`
          padding: 0.8rem 1.4rem;
        `}

  ${({ variant }) =>
    variant === 'primary'
      ? css`
          background: linear-gradient(
            32deg,
            rgb(237, 116, 50) 0%,
            rgb(254, 170, 18) 100%
          ) !important;
          color: #fff;

          &:hover {
            background: #f4c27b;
            color: #121212;
          }
        `
      : css`
          background-color: #001837;
          color: #fffbfb;

          &:hover {
            background-color: #064391;
          }
        `}
`;
