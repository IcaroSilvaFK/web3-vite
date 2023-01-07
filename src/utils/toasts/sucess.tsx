import { Checks } from 'phosphor-react'
import { toast } from 'react-toastify'

export function toastSuccess(message: string) {
  return toast.success(message, {
    position: toast.POSITION.TOP_CENTER,
    draggable: true,
    progressStyle: {
      background: '#00875f',
    },
    icon: <Checks size={32} color="#00875f" />,
  })
}
