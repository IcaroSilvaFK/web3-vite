import { Info } from 'phosphor-react'
import { useEffect } from 'react'
import { Button } from '../../components/Button'

import { Footer } from '../../components/Footer'
import { MetamaskLogo } from '../../components/MetamaskLogo'
import { users } from '../../mocks/users'
import metamask from '../../utils/metamask/fox.json'
import { toastInfo } from '../../utils/toasts/info'

import {
  Container,
  ContainerFirstSection,
  ContainerSecondSection,
  SecondSection,
  LastSection,
  Form,
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
          <MetamaskLogo meshJson={metamask} />
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
      <SecondSection>
        <h3>Open your mind to the future</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          expedita, nihil eius praesentium laborum similique delectus animi
          consequatur tempora beatae a. Ad voluptate laboriosam suscipit ab aut
          explicabo adipisci sit!
        </p>
        <span>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos et
          inventore odit maiores mollitia rerum velit, veniam iste
          exercitationem neque atque beatae repellat. Veniam neque numquam rerum
          necessitatibus libero tempora.
        </span>
      </SecondSection>
      <LastSection>
        <div>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <img src={user.avatar} alt={user.email} />
              </li>
            ))}
          </ul>
          <span>
            <span>+12.592</span> people are already using
          </span>
        </div>
      </LastSection>
      <Form>
        <input placeholder="Enter your email to find out more" />
        <Button variant="solid">Contact</Button>
      </Form>
      <Footer />
    </Container>
  )
}
