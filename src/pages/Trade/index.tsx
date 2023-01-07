import { CaretRight, CurrencyEth, UserSwitch } from 'phosphor-react'
import { useId } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

import { walletService } from '../../services/metamask.service'
import { Button } from '../../components/Button'

import { Column, Container, ContainerDescription, Form, Row } from './styles'
import { useWallets } from '../../store/wallet'

const schema = z.object({
  to: z.string(),
  amount: z.number().positive(),
  description: z.string().optional(),
})

type IFormProps = z.infer<typeof schema>

export function Trade() {
  const toWalletId = useId()
  const { t } = useTranslation()
  const { wallets, setWalletValue } = useWallets((state) => state)
  const { register, handleSubmit, watch, reset } = useForm<IFormProps>({
    defaultValues: {
      description: '',
      to: '',
    },
    resolver: zodResolver(schema),
  })

  const submitIsNotAvailable = !watch('amount') && !watch('to')

  async function onSubmit(props: IFormProps) {
    try {
      const { amount, to } = props
      if (!wallets) {
        return
      }
      const response = await walletService.createTransaction({
        amount,
        to,
        from: wallets[0],
      })
      const newBalance = await walletService.getWalletsBalance(wallets[0])
      setWalletValue(newBalance)
      console.log(response)
      reset()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <Container>
      <header>
        <ul>
          <li>
            <Link to="/">{t('Links.home')}</Link>
          </li>
          <li>
            <CaretRight size={18} />
          </li>
          <li>{t('Links.trader')}</li>
        </ul>
      </header>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Column>
          <label htmlFor={toWalletId}>
            {t('Inputs.Labels.walletAddress')} :
          </label>
          <Row>
            <UserSwitch size={32} />
            <input
              placeholder={
                t('Inputs.Placeholders.placeholderAddress') as string
              }
              id={toWalletId}
              {...register('to')}
            />
          </Row>
        </Column>
        <Column>
          <label htmlFor={toWalletId}>
            {t('Inputs.Labels.amountTransferred')} :
          </label>
          <Row>
            <CurrencyEth size={32} />
            <input
              type="number"
              placeholder={
                t('Inputs.Placeholders.amountTransferredPlaceholder') as string
              }
              id={toWalletId}
              {...register('amount', { valueAsNumber: true })}
            />
          </Row>
        </Column>
        <Column>
          <label htmlFor={toWalletId}>
            {t('Inputs.Labels.transactionTransaction')} :
          </label>
          <ContainerDescription>
            <textarea
              cols={100}
              rows={10}
              {...register('description')}
              disabled
            />
          </ContainerDescription>
        </Column>
        <footer>
          <Button disabled={submitIsNotAvailable}>{t('send')}</Button>
        </footer>
      </Form>
    </Container>
  )
}
