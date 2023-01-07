import { Translate } from 'phosphor-react'
import { createPortal } from 'react-dom'
import { useAtom } from 'jotai'
import { useTranslation } from 'react-i18next'

import { switchLangIsOpen } from '../../atoms/switchLangState'

import { Container } from './styles'

export function I18NButton() {
  const [_, setModalIsOpen] = useAtom(switchLangIsOpen)
  const { t } = useTranslation()

  return createPortal(
    <Container
      onClick={() => setModalIsOpen(true)}
      title={t('Buttons.switchLangModal') as string}
    >
      <Translate size={22} />
    </Container>,
    document.body,
  )
}
