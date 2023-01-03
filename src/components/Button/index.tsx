import { HTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'
import { ButtonVariants } from './types'

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: ButtonVariants
}

export function Button(props: IButtonProps) {
  const { children, variant, ...rest } = props

  return (
    <Container variant={variant || 'solid'} {...rest}>
      {children}
    </Container>
  )
}
