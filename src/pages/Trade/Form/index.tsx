import { useId, useState } from 'react'
import { CircleNotch, CurrencyEth, UserSwitch } from 'phosphor-react'
import { useTranslation } from 'react-i18next'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import { Button } from '../../../components/Button'
import { Column, Form as StyledForm, Row, ContainerDescription } from './styles'
import { useWallets } from '../../../store/wallet'
import { walletService } from '../../../services/metamask.service'
import { toastError } from '../../../utils/toasts/error'
import { toastSuccess } from '../../../utils/toasts/sucess'
import { toastInfo } from '../../../utils/toasts/info'

const schema = z.object({
  to: z.string(),
  amount: z.number().positive(),
  description: z.string().optional(),
})

type IFormProps = z.infer<typeof schema>

export function Form() {
  const { register, handleSubmit, watch, reset } = useForm<IFormProps>({
    defaultValues: {
      description: '',
      to: '',
    },
    resolver: zodResolver(schema),
  })
  const { wallets, setWalletValue } = useWallets((state) => state)
  const { t } = useTranslation()
  const toWalletId = useId()
  const [isLoading, setIsLoading] = useState(false)

  const submitIsNotAvailable = !watch('amount') && !watch('to')

  async function onSubmit(props: IFormProps) {
    try {
      const { amount, to } = props
      if (!wallets) {
        return toastInfo(t('Toasts.Infos.walletIsNotProvide'))
      }
      setIsLoading(true)
      const response = await walletService.createTransaction({
        amount,
        to,
        from: wallets[0],
      })
      if (!response) {
        toastInfo(t('Toasts.Success.newTransactionDeclined'))
      }
      if (response) {
        const newBalance = await walletService.getWalletsBalance(wallets[0])
        setWalletValue(newBalance)
        toastSuccess(t('Toasts.Success.newTransactionSuccess'))
      }
      reset()
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      toastError(t('Toasts.Errors.errorOnTransactionSend'))
      console.log(err)
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} isSubmitted={isLoading}>
      <Column>
        <label htmlFor={toWalletId}>{t('Inputs.Labels.walletAddress')} :</label>
        <Row>
          <UserSwitch size={32} />
          <input
            placeholder={t('Inputs.Placeholders.placeholderAddress') as string}
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
        <Button disabled={submitIsNotAvailable || isLoading}>
          {!isLoading ? t('send') : <CircleNotch size={32} />}
        </Button>
      </footer>
    </StyledForm>
  )
}
