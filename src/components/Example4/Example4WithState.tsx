import React, { useCallback, useState } from 'react'
import styles from 'src/styles/components/Example4.module.css'

type User = {
  firstName: string
  lastName: string
}

type FormState = {
  users: User[]
}

const defaultFormState: Readonly<FormState> = {
  users: [{ firstName: '太郎', lastName: '山田' }],
}

type Props = {}

export const Example4WithState: React.FC<Props> = () => {
  const [formState, setFormState] = useState<FormState>(defaultFormState)

  const onChangeUser: (
    index: number,
  ) => (
    key: keyof User,
  ) => React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (targetIndex) => (key) => (event) => {
      setFormState({
        ...formState,
        users: formState.users.map((item, index) => {
          if (index === targetIndex) {
            return {
              ...item,
              [key]: event.target.value,
            }
          }
          return item
        }),
      })
    },
    [formState, formState.users],
  )

  const appendUser: React.MouseEventHandler<HTMLButtonElement> = useCallback(() => {
    setFormState({
      ...formState,
      users: [...formState.users, { firstName: '', lastName: '' }],
    })
  }, [formState, formState.users])

  const removeUser: (
    index: number,
  ) => React.MouseEventHandler<HTMLButtonElement> = useCallback(
    (targetIndex) => () => {
      setFormState({
        ...formState,
        users: formState.users.filter((item, index) => index !== targetIndex),
      })
    },
    [formState, formState.users],
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
        <ul className={styles['field-list']}>
          {formState.users.map((item, index) => (
            <li key={index} className={`flex-row ${styles['field-item']}`}>
              <div className={`flex-column ${styles.field}`}>
                <span>first name</span>
                <input
                  name={`users[${index}].firstName`}
                  onChange={onChangeUser(index)('firstName')}
                  value={item.firstName}
                />
              </div>
              <div className={`flex-column ${styles.field}`}>
                <span>last name</span>
                <input
                  name={`users[${index}].lastName`}
                  onChange={onChangeUser(index)('lastName')}
                  value={formState.users[index].lastName}
                />
              </div>
              <button type="button" onClick={removeUser(index)}>
                削除
              </button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={appendUser}>
          追加
        </button>
        <button type="button" onClick={resetState}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
