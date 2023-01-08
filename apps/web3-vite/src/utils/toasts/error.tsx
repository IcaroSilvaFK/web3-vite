import { Bug } from 'phosphor-react'
import { toast } from 'react-toastify'

/**
 * @param {String} message
 */
export function toastError(message: string) {
  return toast.error(message, {
    position: toast.POSITION.TOP_CENTER,
    draggable: true,
    icon: <Bug size={25} />,
  })
}
