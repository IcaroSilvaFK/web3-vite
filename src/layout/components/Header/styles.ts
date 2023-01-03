import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
export const ButtonLink = styled(Link)`
  padding: 12px 22px;

  border-radius: 4px;

  font-weight: bold;

  background: ${({ theme }) => theme.colors.green[500]};
  color: ${({ theme }) => theme.colors.gray[100]};

  transition: all linear 0.3s;

  &:hover {
    background: ${({ theme }) => theme.colors.green[700]};
    color: ${({ theme }) => theme.colors.gray[300]};
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
