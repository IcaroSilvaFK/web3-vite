import { Head } from '@title'

import { Container, Header } from 'styles/pages/home.styles'

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Container>
        <Header>
          <h1>Pools</h1>
        </Header>
      </Container>
    </>
  )
}
