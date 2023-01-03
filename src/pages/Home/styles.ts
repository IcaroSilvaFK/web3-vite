import styled from 'styled-components'

export const Container = styled.main``

export const ContainerFirstSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;

  h1 {
    font-family: ${({ theme }) => theme.fonts.robotoMono};
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.yellow[500]};
  }

  img {
    max-width: 500px;
    margin-right: -80px;
  }
`

export const ContainerSecondSection = styled.section`
  background: ${({ theme }) => theme.colors.gray[700]};
  padding: 12px 22px;

  border-radius: 4px;

  transition: all linear 0.3s;

  &:hover {
    box-shadow: 0 0 10px ${({ theme }) => theme.colors.gray[800]};
  }

  h3 {
    color: ${({ theme }) => theme.colors.yellow[500]};
    text-transform: uppercase;
  }

  div {
    display: flex;
    align-items: center;
    max-width: 1000px;

    p {
      display: flex;
      align-items: flex-start;

      margin-top: 12px;
      color: ${({ theme }) => theme.colors.gray[300]};
    }
    svg {
      margin-right: 12px;
      color: ${({ theme }) => theme.colors.yellow[500]};
      flex-shrink: 0;
    }
  }

  strong {
    margin-top: 22px;
    display: block;
  }

  > p {
    margin-top: 12px;
    max-width: 1000px;
  }
`
