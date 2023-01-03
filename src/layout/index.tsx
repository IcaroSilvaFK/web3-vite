import { Outlet } from 'react-router-dom'

import { Header } from './components/Header'
import { Container } from './styles'

export function Layout() {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}
