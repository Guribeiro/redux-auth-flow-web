import styled from 'styled-components';
import { darken } from 'polished';

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  max-width: 980px;
  margin: 0 auto;

  header {
    margin: 0 auto;
    max-width: 460px;

    height: 5rem;

    padding: 5rem 1.6rem;

    display: flex;
    align-items: center;
    justify-content: end;
  }

  div {
    margin: 0 auto;
    max-width: 460px;
    padding: 1.6rem;

    h1 {
      text-align: center;
      font-size: 4.2rem;

      margin-bottom: 3rem;

      color: ${({ theme }) => theme.colors.text_primary};
    }

    p {
      text-align: center;
      font-size: 1.4rem;

      color: ${({ theme }) => theme.colors.text_primary};
    }
  }

  section {
    margin: 0 auto;
    max-width: 460px;
    padding: 1.6rem;

    button {
      margin-top: 2.6rem;
      border: 1px solid red;
      line-height: 2.5rem;
      padding: 0.8rem;
      width: 100%;
      font-size: 1.6rem;
      text-align: center;
      color: ${({ theme }) => theme.colors.text_primary};

      border: 1px solid #222;
      border-radius: 0.6rem;
      transition: background-color ease 300ms;

      &:hover {
        background-color: ${({ theme }) =>
          darken(0.05, theme.colors.background)};
      }
    }
  }
`;
