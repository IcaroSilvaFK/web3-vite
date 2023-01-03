import { House, Path, Wallet, SignIn } from 'phosphor-react'

import { NavLink } from 'react-router-dom'
import { Button } from '../../../components/Button'

import { Container, Navigation, SubContainer } from './styles'

export function Header() {
  return (
    <Container>
      <SubContainer>
        <h2>
          <span>safe</span>dex
        </h2>
        <Navigation>
          <ul>
            <li>
              <NavLink to="/">
                <House size={20} />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/trade">
                <Path size={20} />
                Trade
              </NavLink>
            </li>
            <li>
              <NavLink to="/trade">
                <SignIn size={20} />
                SignIn
              </NavLink>
            </li>
          </ul>
        </Navigation>
        <Button>
          <Wallet size={22} />
          Connect your wallet
        </Button>
      </SubContainer>
    </Container>
  )
}
