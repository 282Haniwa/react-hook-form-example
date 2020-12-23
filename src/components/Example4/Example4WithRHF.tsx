import React from 'react'
import { useForm, useFieldArray } from 'react-hook-form'
import styles from 'src/styles/components/Example4.module.css'

type User = {
  firstName: string
  lastName: string
}

type FormState = {
  users: User[]
}

type Props = {}

export const Example4WithRHF: React.FC<Props> = () => {
  const { register, control, handleSubmit, reset } = useForm<FormState>({
    mode: 'onChange',
    defaultValues: {
      users: [{ firstName: '太郎', lastName: '山田' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'users',
  })

  const onSubmit = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <div>
      <form onSubmit={onSubmit}>
        <ul className={styles['field-list']}>
          {fields.map((item, index) => (
            <li key={item.id} className={`flex-row ${styles['field-item']}`}>
              <div className={`flex-column ${styles.field}`}>
                <span>first name</span>
                <input
                  name={`users[${index}].firstName`}
                  ref={register()}
                  defaultValue={item.firstName} // make sure to set up defaultValue
                />
              </div>
              <div className={`flex-column ${styles.field}`}>
                <span>first name</span>
                <input
                  name={`users[${index}].lastName`}
                  ref={register()}
                  defaultValue={item.lastName} // make sure to set up defaultValue
                />
              </div>
              <button type="button" onClick={() => remove(index)}>
                削除
              </button>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={() => append({ firstName: '', lastName: '' })}
        >
          追加
        </button>
        <button type="button" onClick={() => reset()}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
