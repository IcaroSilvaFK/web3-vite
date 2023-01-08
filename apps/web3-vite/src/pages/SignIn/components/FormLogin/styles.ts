import styled, { css } from 'styled-components'

interface IRowProps {
  shadowColor?: 'red' | 'green'
}

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 22px;

  margin-top: 44px;

  footer {
    button {
      width: 100%;
      padding: 12px 0;
    }
  }

  &::after {
    content: '';
    display: block;
    width: 50%;
    height: 1px;
    background: ${({ theme }) => theme.colors.gray[300]};

    margin: 0 auto;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div<IRowProps>`
  display: flex;
  align-items: center;

  background: ${({ theme }) => theme.colors.white};

  min-width: 300px;
  height: 40px;
  border-radius: 4px;
  padding: 8px;

  input {
    background: transparent;
    box-shadow: none;
    flex: 1;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
  }

  button {
    background: transparent;
    cursor: pointer;
    box-shadow: none;
  }

  ${({ theme, shadowColor }) =>
    shadowColor === 'red' &&
    css`
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.red[500]};

      &:focus-within {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.red[500]};
      }
    `}
`
