import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Example2WithRHFCode from '!!raw-loader!src/components/Example2/Example2WithRHF.tsx'
// eslint-disable-next-line import/no-unresolved
import Example2WithStateCode from '!!raw-loader!src/components/Example2/Example2WithState.tsx'
import { Example } from 'src/components/commons/Example'

import { Example2WithState } from 'src/components/Example2/Example2WithState'
import { Example2WithRHF } from 'src/components/Example2/Example2WithRHF'

type Props = {}

export const Example2: React.FC<Props> = () => {
  return (
    <Example
      left={{
        label: '従来の実装',
        sample: <Example2WithState />,
        code: Example2WithStateCode,
      }}
      right={{
        label: 'react-hook-formを使った実装',
        sample: <Example2WithRHF />,
        code: Example2WithRHFCode,
      }}
    >
      バリデーションありのフォームの実装です。
      <br />
      基本的なバリデーションに関してはロジックが用意してあるので、圧倒的に記述量が減ります。
      <br />
      値を引数にとってエラーメッセージを返り値とするカスタムバリデーション関数をregisterで設定することも可能です。
      <br />
      <br />
      また、useFormのmodeプロパティを設定することで、バリデーションの走るタイミングを制御することも可能です。
      <br />
      <a href="https://react-hook-form.com/api#useForm">
        https://react-hook-form.com/api#useForm
      </a>
    </Example>
  )
}
