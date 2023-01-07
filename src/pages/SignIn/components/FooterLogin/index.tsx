import { Link } from 'react-router-dom'
import { GoogleLogo } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'
import { useTranslation } from 'react-i18next'

import { Container } from './styles'

export function FooterLogin() {
  const { colors } = useTheme()
  const { loginWithPopup } = useAuth0()
  const { t } = useTranslation()

  return (
    <Container>
      <Link to="/create">{t('Links.createAccount')}</Link>
      <div />
      <span>{t('Pages.Login.divider')}</span>
      <ul>
        <li>
          <button title="Google" onClick={loginWithPopup}>
            <GoogleLogo size={22} weight="bold" color={colors.red[500]} />
          </button>
        </li>
      </ul>
    </Container>
  )
}
