import styled from 'styled-components';

export const Container = styled.section`
  label {
    margin-bottom: 1rem;

    span {
      display: inline-block;
      margin-bottom: 0.5rem;
      font-size: 1.4rem;
      font-weight: 400;
      color: ${({ theme }) => theme.colors.text_primary};
    }

    input {
      display: block;
      width: 100%;
      line-height: 2.5rem;
      padding: 0.8rem;
      font-size: 1.6rem;
      border-radius: 0.6rem;
      border: none;

      color: #151417;
    }
  }
`;
