import { useAtom } from 'jotai'

import { ModalContent } from './Components'
import { switchLangIsOpen } from '../../../../atoms/switchLangState'

import { Container } from './styles'
import { useEffect } from 'react'

export function Modal() {
  const [_, setIsOpenModal] = useAtom(switchLangIsOpen)

  useEffect(
    () => {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsOpenModal(false)
        }
      })

      return () => {
        window.removeEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            setIsOpenModal(false)
          }
        })
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  )

  return (
    <Container onClick={() => setIsOpenModal(false)}>
      <ModalContent />
    </Container>
  )
}
