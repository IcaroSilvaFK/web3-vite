import { useAtom } from 'jotai'

import { ModalContent } from './Components'
import { switchLangIsOpen } from '../../../../atoms/switchLangState'

import { Container } from './styles'
import { useEffect } from 'react'

export function Modal() {
  const [isOpen, setIsOpenModal] = useAtom(switchLangIsOpen)

  useEffect(
    () => {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIsOpenModal(false)
        }
      })

      if (isOpen) {
        document.body.setAttribute('aria-hidden', 'true')
      }

      return () => {
        window.removeEventListener('keydown', (e) => {
          if (e.key === 'Escape') {
            setIsOpenModal(false)
          }
        })
        document.body.removeAttribute('aria-hidden')
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen],
  )

  return (
    <Container onClick={() => setIsOpenModal(false)} aria-hidden="false">
      <ModalContent />
    </Container>
  )
}
