import { InputHTMLAttributes, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

import { Container } from './styles';

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

  return (
    <Container>
      <label htmlFor={name}>
        <span>{label}</span>
        <div>
          <input
            id={name}
            {...props}
            type={passwordVisibility ? 'text' : 'password'}
            autoCorrect="off"
            autoCapitalize="none"
          />
          <button
            type="button"
            onClick={() => setPasswordVisibility(prev => !prev)}
          >
            {passwordVisibility ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>
      </label>
    </Container>
  );
}

export default InputPassword;
