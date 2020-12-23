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
      withState={{
        sample: <Example2WithState />,
        code: Example2WithStateCode,
      }}
      withRHF={{
        sample: <Example2WithRHF />,
        code: Example2WithRHFCode,
      }}
    />
  )
}
