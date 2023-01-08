import { z } from 'zod'

export function isValidEmail(email: string) {
  try {
    z.string().email().parse(email)
    return true
  } catch (err) {
    console.log(err)
    return false
  }
}
