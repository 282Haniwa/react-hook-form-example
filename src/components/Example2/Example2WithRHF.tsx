import React from 'react'
import { useForm } from 'react-hook-form'
import styles from 'src/styles/components/Example2.module.css'

const numberRegExp = /^[0-9]+$/

type FormState = {
  firstName: string
  lastName: string
  age: number
}

type Props = {}

export const Example2WithRHF: React.FC<Props> = () => {
  const { register, handleSubmit, reset, errors } = useForm<FormState>({
    mode: 'onChange',
    defaultValues: {
      firstName: '',
      lastName: '',
      age: 18,
    },
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex-column">
          <span>first name</span>
          <input
            name="firstName"
            type="text"
            ref={register({
              required: '必須項目です',
              maxLength: {
                value: 20,
                message: '20文字以内で入力してください',
              },
            })}
          />
          <span className={styles['error-message']}>
            {errors.firstName?.message}
          </span>
        </div>
        <div className="flex-column">
          <span>last name</span>
          <input
            name="lastName"
            type="text"
            ref={register({
              required: '必須項目です',
              maxLength: {
                value: 20,
                message: '20文字以内で入力してください',
              },
            })}
          />
          <span className={styles['error-message']}>
            {errors.lastName?.message}
          </span>
        </div>
        <div className="flex-column">
          <span>age</span>
          <input
            name="age"
            type="number"
            ref={register({
              valueAsNumber: true,
              required: '必須項目です',
              pattern: {
                value: numberRegExp,
                message: '整数で入力してください',
              },
              min: {
                value: 18,
                message: '18以上の数字を入力してください',
              },
              max: {
                value: 100,
                message: '100以下の数字を入力してください',
              },
            })}
          />
          <span className={styles['error-message']}>{errors.age?.message}</span>
        </div>
        <button type="button" onClick={() => reset()}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
