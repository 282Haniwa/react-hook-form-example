import clsx from 'clsx'
import React, { forwardRef } from 'react'
import styles from 'src/styles/components/commons/TextField.module.css'

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string
  label?: string
  name: string
  errorMessage?: string
}

export const TextFieldComponent: React.ForwardRefRenderFunction<
  HTMLInputElement,
  Props
> = (props, ref) => {
  const { className, label, errorMessage, ...rest } = props

  return (
    <div className={clsx([styles.wrapper, className])}>
      {label && <span className={styles.label}>{label}</span>}
      <input className={styles.input} ref={ref} {...rest} />
      {errorMessage && (
        <span className={styles.errorMessage}>{errorMessage}</span>
      )}
    </div>
  )
}

TextFieldComponent.displayName = 'TextField'

export const TextField = forwardRef(TextFieldComponent)
