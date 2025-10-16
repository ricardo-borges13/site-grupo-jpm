import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 20px;
  font-size: 1.3rem;  
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: #E89119;
          color: #fff;

          &:hover {
            background-color: #F4C27B;
            color: #121212;
          }
        `
      : css`
          background-color: #001837;
          color: #FFFBFB;

          &:hover {
            background-color: #064391;
          }
        `}
`;
