import { Container } from './styles'
import { Link } from 'react-router-dom'
import { GoogleLogo } from 'phosphor-react'
import { useTheme } from 'styled-components'
import { useAuth0 } from '@auth0/auth0-react'

export function FooterLogin() {
  const { colors } = useTheme()
  const { loginWithPopup } = useAuth0()

  return (
    <Container>
      <Link to="/create">Or create an account</Link>
      <div />
      <span>or</span>
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
