import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 22px;

  display: flex;
  justify-content: center;

  gap: 55px;

  button {
    padding: 12px;
    flex: 1;

    background: ${({ theme }) => theme.colors.gray[500]};
    border-radius: 4px;
    img {
      width: 64px;
    }

    &.active {
      outline: 2px solid ${({ theme }) => theme.colors.green[500]};
      background: ${({ theme }) => transparentize(0.8, theme.colors.gray[500])};
    }
  }
`
