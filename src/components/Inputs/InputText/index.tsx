import { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
}

function Input({
  label,
  name,
  placeholder,
  error,
  ...props
}: InputProps): JSX.Element {
  return (
    <Container>
      <label htmlFor={name}>
        <span>
          {label}
          {error && <strong>{error}</strong>}
        </span>
        <input id={name} {...props} />
      </label>
    </Container>
  );
}

export default Input;
