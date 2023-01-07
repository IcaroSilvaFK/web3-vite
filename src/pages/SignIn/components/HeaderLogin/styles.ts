import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 1.375rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.green[500]};
    span {
      color: ${({ theme }) => theme.colors.yellow[500]};
    }
  }
  > span {
    font-size: 1.125rem;
    font-family: ${({ theme }) => theme.fonts.openSans};
  }
`
