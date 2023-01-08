import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 1.375rem;
    color: ${({ theme }) => theme.colors.white};
  }

  button {
    background: transparent;
    color: ${({ theme }) => theme.colors.red[500]};

    display: flex;
    align-items: center;
    justify-content: center;

    padding: 8px;
    border-radius: 4px;
    transition: all linear 0.3s;

    &:hover {
      background: ${({ theme }) => transparentize(0.9, theme.colors.red[700])};
    }
  }
`
