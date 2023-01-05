import {
  House,
  Path,
  Wallet,
  SignIn,
  CurrencyGbp,
  SignOut,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'

import { Button } from '../../../components/Button'

import { useWallet } from './hooks/useWallet'

import { Container, Navigation, SubContainer, Tag } from './styles'

export function Header() {
  const { handleRemoveWalletAndBalance, handleSetWallets, value } = useWallet()

  return (
    <Container>
      <SubContainer>
        <h2>
          {/* <span>safe</span>dex */}
          <span>LO</span>GO
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
              <NavLink to="/singin">
                <SignIn size={20} />
                SignIn
              </NavLink>
            </li>
          </ul>
        </Navigation>
        {value ? (
          <Tag onClick={handleSetWallets}>
            <CurrencyGbp size={22} />
            {value}
            <button
              onClick={handleRemoveWalletAndBalance}
              title="Sair da carteira"
            >
              <SignOut size={22} />
            </button>
          </Tag>
        ) : (
          <Button onClick={handleSetWallets}>
            <Wallet size={22} />
            Connect your wallet
          </Button>
        )}
      </SubContainer>
    </Container>
  )
}
