import { StyledButton } from './Button.styles';

type ButtonProps = {
  text: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  paddingHeight?: 'small' | 'large';
};

export const Button = ({
  text,
  onClick,
  variant = 'primary',
  paddingHeight = 'large',
}: ButtonProps) => {
  return (
    <StyledButton
      onClick={onClick}
      $variant={variant}
      $heightVariant={paddingHeight}
    >
      {text}
    </StyledButton>
  );
};
