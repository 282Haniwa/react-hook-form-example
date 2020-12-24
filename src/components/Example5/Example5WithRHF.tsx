import React from 'react'
import { useForm } from 'react-hook-form'

import { TextField } from 'src/components/commons/TextField'

type FormState = {
  firstName: string
  lastName: string
}

type Props = {}

export const Example5WithRHF: React.FC<Props> = () => {
  const { register, handleSubmit, reset, errors } = useForm<FormState>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <TextField
          label="first name"
          name="firstName"
          type="text"
          errorMessage={errors.firstName?.message}
          ref={register({
            required: '必須項目です',
            maxLength: {
              value: 10,
              message: '20文字以内で入力してください',
            },
          })}
        />
        <TextField
          label="last name"
          name="lastName"
          type="text"
          errorMessage={errors.lastName?.message}
          ref={register({
            required: '必須項目です',
            maxLength: {
              value: 10,
              message: '20文字以内で入力してください',
            },
          })}
        />
        <button type="button" onClick={() => reset()}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
