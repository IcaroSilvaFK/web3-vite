import { createPortal } from 'react-dom'
import { useAtom } from 'jotai'

import { Modal } from './Modal'
import { switchLangIsOpen } from '../../../atoms/switchLangState'

export function SwitchLangModal() {
  const [isOpen] = useAtom(switchLangIsOpen)

  if (!isOpen) {
    return null
  }

  return createPortal(<Modal />, document.body)
}
