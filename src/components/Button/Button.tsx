import React from "react";
import { StyledButton } from "./Button.styles";

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
};

export const Button = ({ text, onClick, variant = "primary" }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant}>
      {text}
    </StyledButton>
  );
};
