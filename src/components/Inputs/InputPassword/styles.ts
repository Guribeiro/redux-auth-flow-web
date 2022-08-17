import styled from 'styled-components';

export const Container = styled.section`
  label {
    span {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.text_primary};
    }

    div {
      border: 1px solid red;

      display: flex;
      align-items: center;

      width: 100%;
      line-height: 2.5rem;
      padding: 0.8rem;
      font-size: 1.6rem;
      border-radius: 0.6rem;
      border: none;
      background-color: #fff;

      input {
        width: 100%;
        border: none;
        font-size: 1.6rem;
        line-height: 2.5rem;
        color: #151417;
      }

      button {
        margin: none;
        padding: none;

        align-items: center;
        justify-content: center;
        display: flex;

        svg {
          font-size: 1.6rem;
        }
      }
    }
  }
`;
