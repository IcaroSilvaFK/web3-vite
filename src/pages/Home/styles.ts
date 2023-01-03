import { LineSegment } from 'phosphor-react'
import styled, { css } from 'styled-components'

export const Container = styled.main`
  margin-top: 40px;
`

export const ContainerPrincipal = styled.section`
  display: flex;
  justify-content: space-between;
`

export const ContainerText = styled.div`
  flex: 1;
  justify-content: flex-end;

  h2 {
    font-size: 2.75rem;
    text-transform: uppercase;

    span {
      color: ${({ theme }) => theme.colors.yellow[500]};
    }
  }

  > span {
    display: block;

    margin-top: 4px;

    position: relative;

    &::after {
      position: absolute;
      content: '';

      width: 20%;
      height: 4px;

      ${({ theme }) => css`
        background: linear-gradient(
          to right,
          ${theme.colors.green[500]},
          ${theme.colors.gray[100]}
        );
      `}

      border-radius: 20px;
      bottom: -20px;
      left: 0;
    }
  }
`

export const ContainerLockup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .ContainerLockup__text {
    padding: 34px 56px;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.gray[100]};
    background: ${({ theme }) => theme.colors.green[500]};
    text-align: center;

    max-width: 400px;
    width: 100%;

    font-size: 1.2rem;
    font-weight: bold;
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.openSans};
  }

  > div:last-child {
    display: flex;
    justify-content: center;

    max-width: 400px;
    width: 100%;

    gap: 22px;

    margin-top: -22px;
  }
`

export const LockupDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;

  max-width: 70px;
  width: 100%;

  border-radius: 14px;

  background: ${({ theme }) => theme.colors.gray[100]};
  color: ${({ theme }) => theme.colors.green[500]};
  padding: 6px 12px;
  font-weight: bold;

  span:first-child {
    font-size: 1.5rem;
  }

  span:last-child {
    font-size: 0.875rem;
  }
`
