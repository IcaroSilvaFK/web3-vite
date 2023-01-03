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
import { WalletBalance } from '../../../services/metamask.service'
import { useWallets } from '../../../store/wallet'

import { Container, Navigation, SubContainer, Tag } from './styles'

export function Header() {
  const { setWallets, wallets, setWalletValue, value } = useWallets(
    (state) => state,
  )
  const web3 = new WalletBalance()

  async function handleSetWallets() {
    const wallets = await web3.getMetamaskWallet()
    const balance = await web3.getWalletsBalance(wallets[0])

    setWallets(wallets)
    setWalletValue(balance)
  }

  console.log(wallets)

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
        {wallets && value ? (
          <Tag onClick={handleSetWallets}>
            <CurrencyGbp size={22} />
            {value}
            <button>
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
