import { Check, Eye, EyeSlash, X } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTheme } from 'styled-components'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslation } from 'react-i18next'

import { Button } from '../../../../components/Button'
import { isValidEmail } from '../../../../utils/asserts/isValidEmail'
import { Container, Row } from './styles'

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

interface IFormProps {
  email: string
  password: string
}
type InputType = 'password' | 'text'

export function FormLogin() {
  const { colors } = useTheme()
  const [inputType, setInputType] = useState<InputType>('password')
  const {
    register,
    watch,
    handleSubmit,
    reset,
    formState: { isValid },
  } = useForm<IFormProps>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: zodResolver(schema),
  })
  const isValidEmailFormField = watch('email')
    ? isValidEmail(watch('email'))
    : true
  const { t } = useTranslation()

  async function onSubmit(data: IFormProps) {
    try {
      console.log(data)
      reset()
    } catch (err) {
      console.log(err)
    }
    console.log({ data })
  }

  function handleChangeInputType() {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Row shadowColor={!isValidEmailFormField ? 'red' : 'green'}>
        <input
          type="text"
          placeholder={
            t('Inputs.Placeholders.loginPageEmailPlaceholder') as string
          }
          {...register('email')}
        />
        {isValidEmailFormField ? (
          <Check size={32} color={colors.green[500]} />
        ) : (
          <X size={32} color={colors.red[500]} />
        )}
      </Row>
      <Row>
        <input
          type={inputType}
          placeholder={
            t('Inputs.Placeholders.loginPagePasswordPlaceholder') as string
          }
          {...register('password')}
        />
        <button onClick={handleChangeInputType}>
          {inputType === 'password' ? (
            <Eye size={22} />
          ) : (
            <EyeSlash size={22} />
          )}
        </button>
      </Row>
      <footer>
        <Button variant="solid" disabled={!isValid}>
          {t('Buttons.loginPageSignIn')}
        </Button>
      </footer>
    </Container>
  )
}
