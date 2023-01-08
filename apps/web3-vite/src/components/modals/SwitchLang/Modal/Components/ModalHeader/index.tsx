import { X } from 'phosphor-react'
import { useAtom } from 'jotai'

import { switchLangIsOpen } from '../../../../../../atoms/switchLangState'

import { Container } from './styles'

interface IModalHeaderStyles {
  title: string
}

export function ModalHeader({ title }: IModalHeaderStyles) {
  const [_, setModalIsOpen] = useAtom(switchLangIsOpen)

  return (
    <Container>
      <strong>{title}</strong>
      <button onClick={() => setModalIsOpen(false)}>
        <X size={22} />
      </button>
    </Container>
  )
}
