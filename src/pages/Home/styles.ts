import styled from 'styled-components'

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const ContainerFirstSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  flex: 1;

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
  margin-top: 40px;
  border-radius: 4px;

  transition: all linear 0.3s;
  position: relative;
  z-index: 1;

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

export const SecondSection = styled.section`
  display: flex;
  flex-direction: column;

  padding: 22px;
  gap: 12px;

  margin-top: 22px;
  position: relative;

  color: ${({ theme }) => theme.colors.white};

  h3 {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.gray[100]};
    text-transform: uppercase;

    &::after {
      content: '';
      display: block;
      background: linear-gradient(
        to right,
        ${({ theme }) => theme.colors.gray[100]},
        ${({ theme }) => theme.colors.gray[400]}
      );
      width: 8%;
      height: 2px;
      border-radius: 100%;
    }
  }

  p,
  span {
    padding: 22px 0;

    font-size: 1.1rem;
    font-family: ${({ theme }) => theme.fonts.robotoMono};
  }

  &::before {
    content: '';
    display: block;
    position: absolute;

    top: -100px;
    right: -10px;

    width: 300px;
    height: 300px;

    background: ${({ theme }) => theme.colors.green[300]};
    filter: blur(100px);
    -webkit-filter: blur(100px);
    opacity: 0.2;
    border-radius: 50%;
  }
  &::after {
    content: '';
    display: block;
    position: absolute;

    bottom: -200px;
    left: -10px;

    width: 300px;
    height: 300px;

    background: ${({ theme }) => theme.colors.yellow[500]};
    filter: blur(100px);
    -webkit-filter: blur(100px);
    opacity: 0.2;
    border-radius: 50%;
  }
`
