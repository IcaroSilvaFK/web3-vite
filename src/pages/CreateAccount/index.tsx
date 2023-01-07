import {
  FormCreateAccount,
  HeaderCreateAccount,
  FooterCreateAccount,
} from './components'
import { Container, LeftSection, RightSection } from './styles'

export function CreateAccount() {
  return (
    <Container>
      <LeftSection>
        <img src="/assets/Newentries-pana.svg" alt="New Account image" />
      </LeftSection>
      <RightSection>
        <HeaderCreateAccount />
        <FormCreateAccount />
        <FooterCreateAccount />
      </RightSection>
    </Container>
  )
}
