import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;

  display: flex;
  justify-content: center;

  padding: 22px 0;
`

export const SubContainer = styled.div`
  max-width: 1200px;
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow[500]};

    span {
      color: ${({ theme }) => theme.colors.green[500]};
    }
  }
`

export const Navigation = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: 22px;

    li {
      text-transform: uppercase;

      a {
        gap: 4px;

        padding: 4px 0;
        transition: all linear 0.3s;

        display: flex;
        align-items: center;

        &.active {
          color: ${({ theme }) => theme.colors.green[500]};
        }
      }
    }
  }
`

export const Tag = styled.div`
  background: ${({ theme }) => transparentize(0.9, theme.colors.gray[500])};
  color: ${({ theme }) => theme.colors.yellow[500]};
  border-radius: 4px;

  display: flex;
  align-items: center;
  font-style: italic;
  padding: 4px 12px;

  button {
    margin-left: 12px;
    background: transparent;
    color: ${({ theme }) => theme.colors.red[500]};

    display: flex;
    align-items: center;
  }
`
