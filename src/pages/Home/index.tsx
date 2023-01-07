import { Info } from 'phosphor-react'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

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
  const { t } = useTranslation()

  useEffect(() => {
    toastInfo('we only use the metamask as a digital wallet')
  }, [])

  return (
    <Container>
      <ContainerFirstSection>
        <div>
          <h1>{t('Home.welcomeMessage')}</h1>
          <MetamaskLogo meshJson={metamask} />
        </div>

        <img src="/assets/E-Wallet-bro.svg" alt="" />
      </ContainerFirstSection>
      <ContainerSecondSection>
        <h3>{t('Home.joinRewards')}</h3>
        <div>
          <Info size={25} weight="bold" />
          <p>{t('Home.paragraphCryptocurrencies')}</p>
        </div>
        <strong>🛡 {t('Home.contractsPools')}</strong>
        <p>{t('Home.paragraphWithdraw')}</p>
      </ContainerSecondSection>
      <SecondSection>
        <h3>{t('Home.openYourMind')}</h3>
        <p>{t('Home.firstMindParagraph')}</p>
        <span>{t('Home.secondMindParagraph')}</span>
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
            <span>+12.592</span> {t('Home.peopleAlreadyUsing')}
          </span>
        </div>
      </LastSection>
      <Form>
        <input
          placeholder={
            t('Inputs.Placeholders.findOutMorePlaceholder') as string
          }
        />
        <Button variant="solid">{t('Buttons.contact')}</Button>
      </Form>
      <Footer />
    </Container>
  )
}
