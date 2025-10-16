import styled, { css } from "styled-components";

type ButtonVariant = "primary" | "secondary";

export const StyledButton = styled.button<{ variant: ButtonVariant }>`
  padding: 0.8rem 1.4rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  ${({ variant }) =>
    variant === "primary"
      ? css`
          background-color: #007bff;
          color: #fff;

          &:hover {
            background-color: #0069d9;
          }
        `
      : css`
          background-color: #e0e0e0;
          color: #333;

          &:hover {
            background-color: #d5d5d5;
          }
        `}
`;
