import { useTranslation } from 'react-i18next'

import { Container } from './styles'

export function HeaderCreateAccount() {
  const { t } = useTranslation()

  return (
    <Container>
      <h3>{t('Pages.CreateAccount.title')}</h3>
    </Container>
  )
}
