import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Example4WithRHFCode from '!!raw-loader!src/components/Example4/Example4WithRHF.tsx'
// eslint-disable-next-line import/no-unresolved
import Example4WithStateCode from '!!raw-loader!src/components/Example4/Example4WithState.tsx'
import { Example } from 'src/components/commons/Example'

import { Example4WithState } from 'src/components/Example4/Example4WithState'
import { Example4WithRHF } from 'src/components/Example4/Example4WithRHF'

type Props = {}

export const Example4: React.FC<Props> = () => {
  return (
    <Example
      withState={{
        sample: <Example4WithState />,
        code: Example4WithStateCode,
      }}
      withRHF={{
        sample: <Example4WithRHF />,
        code: Example4WithRHFCode,
      }}
    >
      フィールドのリストを実装するサンプルです。
      <br />
      ほとんどの配列操作のメソッドが定義されているので、値の配列をstateで管理してそれを操作するメソッドを実装する必要がありません。
      <br />
      <a href="https://react-hook-form.com/api#useFieldArray">
        https://react-hook-form.com/api#useFieldArray
      </a>
    </Example>
  )
}
