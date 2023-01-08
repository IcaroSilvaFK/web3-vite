import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

export const LeftSection = styled.section`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  align-content: center;
  justify-content: center;

  img {
    max-width: 500px;
  }
`
export const RightSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
