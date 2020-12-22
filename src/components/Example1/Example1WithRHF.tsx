import React from 'react'
import { useForm } from 'react-hook-form'

type FormState = {
  firstName: string
  lastName: string
}

type Props = {}

export const Example1WithRHF: React.FC<Props> = () => {
  const { register, handleSubmit, reset } = useForm<FormState>({
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
        <div className="flex-column">
          <span>first name</span>
          <input name="firstName" type="text" ref={register} />
        </div>
        <div className="flex-column">
          <span>last name</span>
          <input name="lastName" type="text" ref={register} />
        </div>
        <button type="button" onClick={() => reset()}>
          リセット
        </button>
        <button>送信</button>
      </form>
    </div>
  )
}
