import React from 'react'

import ListStep from '../ListStep'
import { usePageContext } from '../../context'

export const StepXs = () => {
  const { listStep, page } = usePageContext()

  return (
    <div className='bgStepXs'>
      <div className='stepXsList'>
        <ListStep listStep={listStep} stepSelect={page} />
      </div>
    </div>
  )
}

export default StepXs