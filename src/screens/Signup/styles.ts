import styled from 'styled-components';

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
    justify-content: space-between;

    svg {
      font-size: 2rem;
      color: ${({ theme }) => theme.colors.text_primary};
    }
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
    form {
      margin: 0 auto;
      max-width: 460px;

      padding: 1.6rem;

      fieldset {
        border: none;

        margin-bottom: 1.6rem;
      }
    }
  }
`;
