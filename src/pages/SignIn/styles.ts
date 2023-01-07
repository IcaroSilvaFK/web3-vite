import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const RightContainer = styled.div`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
`
