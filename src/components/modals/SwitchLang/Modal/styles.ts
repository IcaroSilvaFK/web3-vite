import { transparentize } from 'polished'
import styled, { keyframes } from 'styled-components'

const initialPosition = keyframes`
  0%{
    right: -100px;
    opacity: 0;
  }
  100%{
    right: 0;
    opacity: 1;
  }
`

export const Container = styled.div`
  position: fixed;

  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;

  background: ${({ theme }) => transparentize(0.6, theme.colors.gray[900])};
  backdrop-filter: blur(1px);

  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${initialPosition} 0.3s linear;
`
