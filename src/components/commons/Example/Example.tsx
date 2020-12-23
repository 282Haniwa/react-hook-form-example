import React, { useCallback, useState } from 'react'
import clsx from 'clsx'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { a11yDark } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import styles from 'src/styles/components/commons/Example.module.css'

export type ExampleItem = {
  sample: React.ReactNode
  code: React.ReactNode
}

type Props = {
  withRHF: ExampleItem
  withState: ExampleItem
}

export const Example: React.FC<Props> = (props) => {
  const { children, withRHF, withState } = props
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
          <h3>従来の実装</h3>
          {!showCode && withState.sample}
          {showCode && (
            <div className={styles['code-wrapper']}>
              <SyntaxHighlighter
                showLineNumbers
                language="typescript"
                style={a11yDark}
              >
                {withState.code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
        <div className={styles['example-item']}>
          <h3>react-hook-formを使った実装</h3>
          {!showCode && withRHF.sample}
          {showCode && (
            <div className={styles['code-wrapper']}>
              <SyntaxHighlighter
                showLineNumbers
                language="typescript"
                style={a11yDark}
              >
                {withRHF.code}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
