import { CaretRight, CurrencyEth, UserSwitch } from 'phosphor-react'
import { useId } from 'react'
import { Link } from 'react-router-dom'
import { z } from 'zod'

import { Button } from '../../components/Button'

import { Column, Container, ContainerDescription, Form, Row } from './styles'

const schema = z.object({
  to: z.string(),
  amount: z.number(),
  description: z.string().optional(),
})

type IFormProps = z.

export function Trade() {
  const toWalletId = useId()

  return (
    <Container>
      <header>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <CaretRight size={18} />
          </li>
          <li>trade</li>
        </ul>
      </header>
      <Form>
        <Column>
          <label htmlFor={toWalletId}>Insert wallet address :</label>
          <Row>
            <UserSwitch size={32} />
            <input placeholder="Enter wallet address" id={toWalletId} />
          </Row>
        </Column>
        <Column>
          <label htmlFor={toWalletId}>
            Enter the amount to be transferred :
          </label>
          <Row>
            <CurrencyEth size={32} />
            <input
              placeholder="Enter the amount to be transferred"
              id={toWalletId}
            />
          </Row>
        </Column>
        <Column>
          <label htmlFor={toWalletId}>
            Add a description for your transaction :
          </label>
          <ContainerDescription>
            <textarea cols={100} rows={10} />
          </ContainerDescription>
        </Column>
        <footer>
          <Button>Send</Button>
        </footer>
      </Form>
    </Container>
  )
}
