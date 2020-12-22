import React, { useCallback, useState } from 'react'

type FormState = {
  firstName: string
  lastName: string
}

const defaultFormState: Readonly<FormState> = {
  firstName: '',
  lastName: '',
}

type Props = {}

export const Example1WithState: React.FC<Props> = () => {
  const [formState, setFormState] = useState<FormState>(defaultFormState)

  const onChangeFormState: (
    key: keyof FormState,
  ) => React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (key) => (event) => {
      setFormState({
        ...formState,
        [key]: event.target.value,
      })
    },
    [formState],
  )

  const onSubmit: React.FormEventHandler<HTMLFormElement> = useCallback(
    (event) => {
      event.preventDefault()
      console.log(formState)
    },
    [formState],
  )

  const resetState = useCallback(() => {
    setFormState(defaultFormState)
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
        </div>
        <div className="flex-column">
          <span>last name</span>
          <input
            name="lastName"
            type="text"
            onChange={onChangeFormState('lastName')}
            value={formState.lastName}
          />
        </div>
        <button type="button" onClick={resetState}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
