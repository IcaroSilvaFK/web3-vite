import { Info } from 'phosphor-react'
import { useEffect } from 'react'
import { Footer } from '../../components/Footer'

import { MetamaskLogo } from '../../components/MetaLogo'
import metaMask from '../../utils/metamask/fox.json'
import { toastInfo } from '../../utils/toasts/info'

import {
  Container,
  ContainerFirstSection,
  ContainerSecondSection,
} from './styles'

export function Home() {
  useEffect(() => {
    toastInfo('we only use the metamask as a digital wallet')
  }, [])

  return (
    <Container>
      <ContainerFirstSection>
        <div>
          <h1>Connect your wallet and get started!</h1>
          <MetamaskLogo meshJson={metaMask} />
        </div>

        <img src="/assets/E-Wallet-bro.svg" alt="" />
      </ContainerFirstSection>
      <ContainerSecondSection>
        <h3>Join our Pool Rewards & Staking System</h3>
        <div>
          <Info size={25} weight="bold" />
          <p>
            Deposit Native Cryptocurrencies and Tokens (ERC-20) into our Pools
            and Generate Passive Cryptocurrency Revenue. Currently Danki Finance
            is a unique Brazilian Web3 platform with s elected contracts and
            security. And expanding internationally!
          </p>
        </div>
        <strong>
          🛡 All our contracts (pools, games and more) are audited and secure.
          Invest safely.
        </strong>
        <p>
          You can withdraw or deposit any time you want to any pool you choose
          to participate. Some pools have a fee to enter, others don&apos;t.
          Consult Pool details before Depositing.
        </p>
      </ContainerSecondSection>
      <Footer />
    </Container>
  )
}
