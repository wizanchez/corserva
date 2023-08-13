import React, { FC } from 'react'

import ListStep from '../ListStep'
import { usePageContext } from '../../context'

export const StepXl = () => {
  const { listStep, page } = usePageContext()

  return (
    <div className='bgStepXl'>
      <ListStep listStep={listStep} stepSelect={page} />
    </div>
  )
}


export default StepXl