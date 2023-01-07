import { At, Eye, EyeSlash, User } from 'phosphor-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '../../../../components/Button'
import { Container, Row } from './styles'
import { isValidEmail } from '../../../../utils/asserts/isValidEmail'

const schema = z.object({
  email: z.string().email(),
  username: z.string().min(4),
  password: z.string().min(6),
})

type InputType = 'password' | 'text'
type FormProps = z.infer<typeof schema>

export function FormCreateAccount() {
  const [inputType, setInputType] = useState<InputType>('password')
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isValid },
  } = useForm<FormProps>({
    defaultValues: {
      email: '',
      password: '',
      username: '',
    },
    resolver: zodResolver(schema),
  })
  const isValidEmailFormState = watch('email')
    ? isValidEmail(watch('email'))
    : true

  function handleChangeInputType() {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'))
  }

  function onSubmit(data: FormProps) {
    console.log(data)
    reset()
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <Row outlineColor={isValidEmailFormState ? 'green' : 'red'}>
        <input
          type="email"
          placeholder="Typing your email"
          {...register('email')}
        />
        <At size={22} />
      </Row>
      <Row>
        <input
          type="text"
          placeholder="Typing your username"
          {...register('username')}
        />
        <User size={22} />
      </Row>
      <Row>
        <input
          type={inputType}
          placeholder="Typing your password"
          {...register('password')}
        />
        <button type="button" onClick={handleChangeInputType}>
          {inputType === 'password' ? (
            <Eye size={22} />
          ) : (
            <EyeSlash size={22} />
          )}
        </button>
      </Row>

      <footer>
        <Button variant="ghost" disabled={!isValid}>
          Create Account
        </Button>
      </footer>
    </Container>
  )
}
