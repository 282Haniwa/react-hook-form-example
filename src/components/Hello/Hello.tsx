import React from 'react'

type Props = {
  name: string
}

export const Hello: React.FC<Props> = (props) => {
  const { name } = props
  return <div>Hello {name}!</div>
}
