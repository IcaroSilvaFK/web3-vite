import { House, Path, Wallet } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

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
              <NavLink to="/farm">
                <Wallet size={20} />
                Farm
              </NavLink>
            </li>
          </ul>
        </Navigation>
        <button>Connect</button>
      </SubContainer>
    </Container>
  )
}
