import React from 'react'

import ListPlan from '../ListPlan'
import LabelTitle from '../LabelTitle'
import { SwitchPlan } from '../SwitchPlan'
import { PAGE_NAME } from '../../constants'
import ButtonNextPrev from '../ButtonNextPrev'
import { usePageContext } from '../../context'

export const SelectYourPlan = () => {
  const {
    page,
    listPlan,
    isPerYear,
    planSelect,
    events:{
      handlePlan,
      handleNext,
      handlePlanPerYear,
    }
  } = usePageContext()
  const pageName = PAGE_NAME.SELECT_YOUR_PLAN
  console.log('page', page)
  if (page !== pageName) {
    return null
  }

  return (
    <div className='containerTask'>
      <LabelTitle
        title='Select your plan'
        subTitle='You have the option of monthly or yearly billing.'
      />
      <div>
        <ListPlan
          listPlan={listPlan}
          isPerYear={isPerYear}
          planSelect={planSelect}
          clickSelect={handlePlan}
        />
        <SwitchPlan
          isPerYear={isPerYear}
          handlePlanPerYear={handlePlanPerYear}
        />
      </div>
      <ButtonNextPrev
        labelPrev='Go Back'
        onClickPrev={() => handleNext(pageName, 'PREV')}
        labelNext='Next Step'
        onClickNext={() => handleNext(pageName, 'NEXT')}
      />
    </div>
  )
}

export default SelectYourPlan
