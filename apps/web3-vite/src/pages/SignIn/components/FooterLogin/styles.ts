import { transparentize } from 'polished'
import styled from 'styled-components'

export const Container = styled.footer`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;

  a {
    font-size: 1rem;
    text-decoration: underline;
  }

  ul {
    margin-top: 12px;
    width: 100%;

    li {
      button {
        width: 100%;
        background: ${({ theme }) =>
          transparentize(0.8, theme.colors.gray[700])};
        padding: 6px 0;
        border-radius: 4px;

        transition: all linear 0.3s;

        &:hover {
          background: ${({ theme }) =>
            transparentize(0.4, theme.colors.gray[700])};
        }
      }
    }
  }
`
