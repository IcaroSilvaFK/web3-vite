import { useTranslation } from 'react-i18next'

import { Container } from './styles'

export function Footer() {
  const { t } = useTranslation()

  return (
    <Container>
      <div>
        <span>&copy;{t('Footer.copy')}.</span>
      </div>
    </Container>
  )
}
