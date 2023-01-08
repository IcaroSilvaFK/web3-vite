import { ReactNode } from 'react'
import NextHead from 'next/head'

interface IHeadProps {
  children: ReactNode
}

export function Head(props: IHeadProps) {
  const { children } = props

  return (
    <NextHead>
      <title>{children}</title>
    </NextHead>
  )
}
