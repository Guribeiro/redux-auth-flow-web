import { InputHTMLAttributes, useCallback, useState } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
}

function Checkbox({
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
      <input
        id={name}
        {...props}
        type="checkbox"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      <label htmlFor={name}>
        <div>
          <span>{label}</span>
          {error && <strong>{error}</strong>}
        </div>
      </label>
    </Container>
  );
}

export default Checkbox;
