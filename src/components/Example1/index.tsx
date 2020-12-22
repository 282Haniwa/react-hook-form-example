import React from 'react'

// eslint-disable-next-line import/no-unresolved
import example1WithRHFCode from '!!raw-loader!src/components/Example1/Example1WithRHF.tsx'
// eslint-disable-next-line import/no-unresolved
import example1WithStateCode from '!!raw-loader!src/components/Example1/Example1WithState.tsx'
import { Example } from 'src/components/commons/Example'

import { Example1WithState } from 'src/components/Example1/Example1WithState'
import { Example1WithRHF } from 'src/components/Example1/Example1WithRHF'

type Props = {}

export const Example1: React.FC<Props> = () => {
  return (
    <Example
      withState={{
        sample: <Example1WithState />,
        code: example1WithStateCode,
      }}
      withRHF={{
        sample: <Example1WithRHF />,
        code: example1WithRHFCode,
      }}
    />
  )
}
