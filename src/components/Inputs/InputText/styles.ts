import styled, { css } from 'styled-components';

interface InputContainerProps {
  focus: boolean;
}

interface ContainerProps {
  focus: boolean;
}

export const Container = styled.section<ContainerProps>`
  label {
    margin-bottom: 1rem;

    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: baseline;

      span {
        display: inline-block;
        margin-bottom: 0.5rem;
        font-size: 1.4rem;
        font-weight: 400;

        color: ${({ theme }) => theme.colors.text_primary};

        ${({ focus, theme }) =>
          focus &&
          css`
            color: ${theme.colors.primary};
          `}
      }

      strong {
        color: #983628;
        font-weight: 700;
        font-size: 1rem;
      }
    }
  }
`;
export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  align-items: center;

  padding: 1.2rem;
  width: 100%;
  border-radius: 0.6rem;
  border: none;
  background-color: #fff;

  border: 2px solid ${({ theme }) => theme.colors.background};

  ${({ theme, focus }) =>
    focus &&
    css`
      border: 2px solid ${theme.colors.primary};
    `}

  input {
    display: block;
    width: 100%;
    border-radius: 0.6rem;
    border: none;

    color: #151417;
  }
`;
