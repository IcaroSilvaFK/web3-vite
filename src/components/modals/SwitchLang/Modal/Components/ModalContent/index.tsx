import { useTranslation } from 'react-i18next'

import { ModalBody } from '../ModalBody'
import { ModalHeader } from '../ModalHeader'
import { Container } from './styles'

export function ModalContent() {
  const { t } = useTranslation()

  return (
    <Container>
      <ModalHeader title={t('Modals.ChangeLangModal.title')} />
      <ModalBody />
    </Container>
  )
}
