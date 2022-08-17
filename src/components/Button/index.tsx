import { ReactNode, ButtonHTMLAttributes } from 'react';
import { Container } from './styles';

interface ButtonsProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
}

function Button({ children, ...props }: ButtonsProps): JSX.Element {
  return <Container {...props}>{children}</Container>;
}

export default Button;
