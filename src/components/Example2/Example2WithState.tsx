import React, { useCallback, useState } from 'react'
import styles from 'src/styles/components/Example2.module.css'

const numberRegExp = /^[0-9]+$/

const validateName = (value: string) => {
  if (!value) return '必須項目です'
  if (value.length > 20) return '20文字以内で入力してください'
  return ''
}

const validateAge = (value: string) => {
  if (!value) return '必須項目です'
  if (!numberRegExp.test(value)) return '整数で入力してください'
  if (Number(value) < 18) return '18以上の数字を入力してください'
  if (Number(value) > 100) return '100以下の数字を入力してください'
  return ''
}

type FormState = {
  firstName: string
  lastName: string
  age: number
}

type ErrorMessages = Record<keyof FormState, string>

const defaultFormState: Readonly<FormState> = {
  firstName: '',
  lastName: '',
  age: 18,
}

const defaultErrorMessages: Readonly<ErrorMessages> = {
  firstName: '',
  lastName: '',
  age: '',
}

type Props = {}

export const Example2WithState: React.FC<Props> = () => {
  const [formState, setFormState] = useState<FormState>(defaultFormState)
  const [errorMessages, setErrorMessages] = useState<
    Record<keyof FormState, string>
  >(defaultErrorMessages)

  const onChangeFormState: (
    key: keyof FormState,
  ) => React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (key) => (event) => {
      const errorMessage =
        key === 'age'
          ? validateAge(event.target.value)
          : validateName(event.target.value)
      const value =
        key === 'age' ? Number(event.target.value) : event.target.value

      setErrorMessages({
        ...errorMessages,
        [key]: errorMessage,
      })
      setFormState({
        ...formState,
        [key]: value,
      })
      event.target.value = String(value)
    },
    [formState, errorMessages],
  )

  const validateAll = useCallback(() => {
    const newErrorMessages = {
      firstName: validateName(formState.firstName),
      lastName: validateName(formState.lastName),
      age: validateAge(String(formState.age)),
    }
    const isValid = !Object.entries(newErrorMessages).some(([, value]) => value)
    setErrorMessages(newErrorMessages)
    return {
      isValid: isValid,
      errorMessages: newErrorMessages,
    }
  }, [formState])

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
      if (validateAll().isValid) {
        console.log(formState)
      }
    },
    [formState],
  )

  const resetState = useCallback(() => {
    setFormState(defaultFormState)
    setErrorMessages(defaultErrorMessages)
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="flex-column">
          <span>first name</span>
          <input
            name="firstName"
            type="text"
            onChange={onChangeFormState('firstName')}
            value={formState.firstName}
          />
          <span className={styles['error-message']}>
            {errorMessages.firstName}
          </span>
        </div>
        <div className="flex-column">
          <span>last name</span>
          <input
            name="lastName"
            type="text"
            onChange={onChangeFormState('lastName')}
            value={formState.lastName}
          />
          <span className={styles['error-message']}>
            {errorMessages.lastName}
          </span>
        </div>
        <div className="flex-column">
          <span>age</span>
          <input
            name="age"
            type="number"
            onChange={onChangeFormState('age')}
            value={formState.age}
          />
          <span className={styles['error-message']}>{errorMessages.age}</span>
        </div>
        <button type="button" onClick={resetState}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
