import React, { useState } from 'react'
import clsx from 'clsx'
import styles from 'src/styles/components/commons/Accordion.module.css'

type Props = {
  label: string
}

export const Accordion: React.FC<Props> = (props) => {
  const { label, children } = props
  const [open, setOpen] = useState(false)

  const onClickLabel = () => {
    setOpen(!open)
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.label} onClick={onClickLabel}>
        {label}
      </button>
      <div
        className={clsx({
          [styles.content]: true,
          [styles['content--open']]: open,
        })}
      >
        {children}
      </div>
    </div>
  )
}
