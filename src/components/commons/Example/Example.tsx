import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from 'src/styles/components/commons/Example.module.css'

export type ExampleItem = {
  label?: string
  sample: React.ReactNode
  code: React.ReactNode
}

type Props = {
  left: ExampleItem
  right: ExampleItem
}

export const Example: React.FC<Props> = (props) => {
  const { children, left, right } = props
  const [showCode, setShowCode] = useState<boolean>(false)

  const onClickShowCodeButton: React.MouseEventHandler = useCallback(() => {
    setShowCode(!showCode)
  }, [showCode])

  return (
    <div>
      {children && (
        <>
          <p className={styles.comment}>{children}</p>
          <hr className={styles.divider} />
        </>
      )}
      <button
        className={clsx({
          [styles['show-code-button']]: true,
          [styles['show-code-button--active']]: showCode,
        })}
        onClick={onClickShowCodeButton}
      >
        <span>&lt;&gt;</span>
      </button>
      <div className={styles['example-wrapper']}>
        <div className={styles['example-item']}>
          <h3>{left.label}</h3>
          {!showCode && left.sample}
          {showCode && (
            <div className={styles['code-wrapper']}>
              <SyntaxHighlighter
                showLineNumbers
                language="typescript"
                style={a11yDark}
              >
                {left.code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className={styles['example-item']}>
          <h3>{right.label}</h3>
          {!showCode && right.sample}
          {showCode && (
            <div className={styles['code-wrapper']}>
              <SyntaxHighlighter
                showLineNumbers
                language="typescript"
                style={a11yDark}
              >
                {right.code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
