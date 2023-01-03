import { Info } from 'phosphor-react'
import { toast } from 'react-toastify'

export function toastInfo(message: string) {
  return toast.info(message, {
    position: 'top-center',
    draggable: true,
    progressStyle: {
      background: '#fba94c',
    },
    icon: <Info size={32} weight="bold" color="#fba94c" />,
  })
}
