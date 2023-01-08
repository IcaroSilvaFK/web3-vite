import { CaretRight } from 'phosphor-react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Container } from './styles'
import { Form } from './Form'

export function Trade() {
  const { t } = useTranslation()

  return (
    <Container>
      <header>
        <ul>
          <li>
            <Link to="/">{t('Links.home')}</Link>
          </li>
          <li>
            <CaretRight size={18} />
          </li>
          <li>{t('Links.trader')}</li>
        </ul>
      </header>
      <Form />
    </Container>
  )
}
