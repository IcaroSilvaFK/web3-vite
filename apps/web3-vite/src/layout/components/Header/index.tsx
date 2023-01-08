import {
  House,
  Path,
  Wallet,
  SignIn,
  CurrencyGbp,
  SignOut,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { Button } from '../../../components/Button'
import { useWallet } from './hooks/useWallet'

import { Container, Navigation, SubContainer, Tag } from './styles'

export function Header() {
  const { handleRemoveWalletAndBalance, handleSetWallets, value } = useWallet()
  const { t } = useTranslation()

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
                {t('Links.home')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/trade">
                <Path size={20} />
                {t('Links.trader')}
              </NavLink>
            </li>
            <li>
              <NavLink to="/signIn">
                <SignIn size={20} />
                {t('Links.signIn')}
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
              title={t('Buttons.walletButtonTitle') as string}
            >
              <SignOut size={22} />
            </button>
          </Tag>
        ) : (
          <Button onClick={handleSetWallets}>
            <Wallet size={22} />
            {t('Buttons.walletButton')}
          </Button>
        )}
      </SubContainer>
    </Container>
  )
}
