import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.button`
  margin-top: 2.6rem;
  padding: 1.2rem;
  width: 100%;
  font-size: 1.6rem;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.colors.background};

  background-color: ${({ theme }) => theme.colors.primary};

  border-radius: 0.6rem;
  transition: background-color ease 300ms;

  &:hover {
    background-color: ${({ theme }) => lighten(0.05, theme.colors.primary)};
  }
`;
