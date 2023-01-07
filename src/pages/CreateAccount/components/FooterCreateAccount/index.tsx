import { CaretLeft } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from '../../../../components/Button'
import { Container } from './styles'

export function FooterCreateAccount() {
  const navigate = useNavigate()
  const { t } = useTranslation()

  return (
    <Container>
      <Button variant="link" onClick={() => navigate('/signIn')}>
        <CaretLeft size={22} />
        {t('Buttons.back')}
      </Button>
    </Container>
  )
}
