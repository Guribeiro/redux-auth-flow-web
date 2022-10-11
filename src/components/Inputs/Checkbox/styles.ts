import styled, { css } from 'styled-components';

interface InputContainerProps {
  focus: boolean;
}

interface ContainerProps {
  focus: boolean;
}

export const Container = styled.section<ContainerProps>`
  display: flex;
  align-items: center;
  flex-direction: row;
  label {
    margin-left: 1rem;

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

  input {
    display: block;
    border-radius: 0.6rem;
    border: none;

    color: #151417;
  }
`;
