import { InputHTMLAttributes, useCallback, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container, InputContainer } from './styles';

interface InputPasswordProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder?: string;
  error?: string;
}

function InputPassword({
  label,
  name,
  placeholder,
  error,
  ...props
}: InputPasswordProps): JSX.Element {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
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
            type={passwordVisibility ? 'text' : 'password'}
            autoCorrect="off"
            autoCapitalize="none"
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
          />
          <button
            type="button"
            onClick={() => setPasswordVisibility(prev => !prev)}
          >
            {passwordVisibility ? <FiEye /> : <FiEyeOff />}
          </button>
        </InputContainer>
      </label>
    </Container>
  );
}

export default InputPassword;
