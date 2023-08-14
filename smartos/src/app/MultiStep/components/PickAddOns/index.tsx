import React from 'react'

import ListPlan from '../ListPlan'
import LabelTitle from '../LabelTitle'
import { SwitchPlan } from '../SwitchPlan'
import { PAGE_NAME } from '../../constants'
import ButtonNextPrev from '../ButtonNextPrev'
import { usePageContext } from '../../context'

import { ListPickAdd } from '../ListPickAdd'

export const PickAddOns = () => {
  const {
    page,
    listPick,
    isPerYear,
    events:{
      handleNext,
      handleSelectAddOn,
    }
  } = usePageContext()
  const pageName = PAGE_NAME.PICK_ADD_ONS

  if (page !== pageName) {
    return null
  }

  return (
    <div className='containerTask'>
      <LabelTitle
        title='Pick add-ons'
        subTitle='Add-ons help enhance your gaming experience.'
      />
      <div>
        <ListPickAdd
          listPick={listPick}
          isPerYear={isPerYear}
          clickSelect={handleSelectAddOn}
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

export default PickAddOns
