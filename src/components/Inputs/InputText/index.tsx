import { InputHTMLAttributes, useCallback, useState } from 'react';

import { Container, InputContainer } from './styles';

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
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container focus={isFocused}>
      <label htmlFor={name}>
        <div>
          <span>{label}</span>
          {error && <strong>{error}</strong>}
        </div>
        <InputContainer focus={isFocused}>
          <input
            id={name}
            {...props}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
        </InputContainer>
      </label>
    </Container>
  );
}

export default Input;
