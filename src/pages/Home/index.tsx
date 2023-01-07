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

  useEffect(
    () => {
      toastInfo(t('Toasts.Infos.providerWeb3Info') as string)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <Container>
      <ContainerFirstSection>
        <div>
          <h1>{t('Pages.Home.welcomeMessage')}</h1>
          <MetamaskLogo meshJson={metamask} />
        </div>

        <img src="/assets/E-Wallet-bro.svg" alt="" />
      </ContainerFirstSection>
      <ContainerSecondSection>
        <h3>{t('Pages.Home.joinRewards')}</h3>
        <div>
          <Info size={25} weight="bold" />
          <p>{t('Pages.Home.paragraphCryptocurrencies')}</p>
        </div>
        <strong>🛡 {t('Pages.Home.contractsPools')}</strong>
        <p>{t('Pages.Home.paragraphWithdraw')}</p>
      </ContainerSecondSection>
      <SecondSection>
        <h3>{t('Pages.Home.openYourMind')}</h3>
        <p>{t('Pages.Home.firstMindParagraph')}</p>
        <span>{t('Pages.Home.secondMindParagraph')}</span>
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
            <span>+12.592</span> {t('Pages.Home.peopleAlreadyUsing')}
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
