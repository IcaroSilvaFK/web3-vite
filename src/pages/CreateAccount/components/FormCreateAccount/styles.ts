import styled, { css } from 'styled-components'

type RowProps = {
  outlineColor?: 'red' | 'green'
}

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;

  footer {
    width: 100%;
    margin-top: 12px;

    button {
      width: 100%;
    }
  }
`

export const Row = styled.div<RowProps>`
  display: flex;

  background: ${({ theme }) => theme.colors.white};
  padding: 8px;
  border-radius: 4px;

  min-width: 300px;
  min-height: 40px;

  button {
    background: transparent;
  }
  svg {
    color: ${({ theme }) => theme.colors.gray[900]};
  }
  input {
    background: transparent;
    box-shadow: none;
    flex: 1;
  }

  &:focus-within {
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.green[500]};
  }

  ${({ outlineColor, theme }) =>
    outlineColor === 'red' &&
    css`
      box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.red[500]};
      &:focus-within {
        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.red[500]};
      }
    `}
`
