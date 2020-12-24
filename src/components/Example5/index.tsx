import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Example5WithRHFCode from '!!raw-loader!src/components/Example5/Example5WithRHF.tsx'
// eslint-disable-next-line import/no-unresolved
import TextFieldCode from '!!raw-loader!src/components/commons/TextField/TextField.tsx'
import { Example } from 'src/components/commons/Example'

import { Example5WithRHF } from 'src/components/Example5/Example5WithRHF'

type Props = {}

export const Example5: React.FC<Props> = () => {
  return (
    <Example
      withState={{
        // label: '例',
        sample: <Example5WithRHF />,
        code: Example5WithRHFCode,
      }}
      withRHF={{
        // label: 'TextFieldコンポーネント',
        sample: '',
        code: TextFieldCode,
      }}
    >
      TextFieldコンポーネントで実装したサンプルです。
    </Example>
  )
}
