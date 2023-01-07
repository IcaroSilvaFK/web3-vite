import styled from 'styled-components'

export const Container = styled.button`
  position: fixed;
  right: -20px;
  top: 50%;
  transform: translate(-50%);

  padding: 10px;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  background: ${({ theme }) => theme.colors.yellow[500]};
  z-index: 1;
`
