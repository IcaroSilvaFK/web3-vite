import { useTranslation } from 'react-i18next'

import { Container } from './styles'

export function HeaderLogin() {
  const { t } = useTranslation()

  return (
    <Container>
      <h3>
        Lo<span>go</span>
      </h3>
      <span>{t('Pages.Login.subTitle')}</span>
    </Container>
  )
}
