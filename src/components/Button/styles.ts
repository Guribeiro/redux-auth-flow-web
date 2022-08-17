import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.button`
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
    background-color: ${({ theme }) => darken(0.05, theme.colors.background)};
  }
`;
