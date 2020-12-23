import React from 'react'

// eslint-disable-next-line import/no-unresolved
import Example3WithRHFCode from '!!raw-loader!src/components/Example3/Example3WithRHF.tsx'
// eslint-disable-next-line import/no-unresolved
import Example3WithStateCode from '!!raw-loader!src/components/Example3/Example3WithState.tsx'
import { Example } from 'src/components/commons/Example'

import { Example3WithState } from 'src/components/Example3/Example3WithState'
import { Example3WithRHF } from 'src/components/Example3/Example3WithRHF'

type Props = {}

export const Example3: React.FC<Props> = () => {
  return (
    <Example
      withState={{
        sample: <Example3WithState />,
        code: Example3WithStateCode,
      }}
      withRHF={{
        sample: <Example3WithRHF />,
        code: Example3WithRHFCode,
      }}
    >
      react-hook-formは入力値の状態をstateで管理していないので、入力値が更新されるたびにレンダリングが走るということがありません。
      <br />
      これによって、コンポーネントの再描画のコストが減ります。
    </Example>
  )
}
