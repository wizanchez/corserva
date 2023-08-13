import React, { FC } from 'react'

import { ISwitchPlan } from '../../interfaces'
import { SwitchOS } from '../../../../components'

export const SwitchPlan:FC<ISwitchPlan> = (props) => {
  const { isPerYear , handlePlanPerYear} = props
  const classMonth = !isPerYear ? 'selectPerYear__text__select' : ''
  const classYear = isPerYear ? 'selectPerYear__text__select' : ''

  return (
    <div className='selectPerYear'>
      <div className={`selectPerYear__text ${classMonth}`}>Monthly</div>
      <SwitchOS
        isChecked={isPerYear}
        onChange={handlePlanPerYear}
        className='selectPerYear__switch'
      />
      <div className={`selectPerYear__text ${classYear}`}>Yearly</div>
    </div>
  )
}

export default SwitchPlan
