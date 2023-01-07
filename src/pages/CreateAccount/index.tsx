import { FormCreateAccount, HeaderCreateAccount } from './components'
import { Container, LeftSection, RightSection } from './styles'

export function CreateAccount() {
  return (
    <Container>
      <LeftSection>
        <img src="" alt="" />
      </LeftSection>
      <RightSection>
        <HeaderCreateAccount />
        <FormCreateAccount />
      </RightSection>
    </Container>
  )
}
