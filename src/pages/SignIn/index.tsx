import { FooterLogin, FormLogin, HeaderLogin } from './components'

import { Container, LeftContainer, RightContainer } from './styles'

export function SignIn() {
  return (
    <Container>
      <LeftContainer>
        <HeaderLogin />
        <FormLogin />
        <FooterLogin />
      </LeftContainer>
      <RightContainer>
        <img src="/assets/BitcoinP2P-cuate.svg" alt="Trade in Crypto coin" />
      </RightContainer>
    </Container>
  )
}
