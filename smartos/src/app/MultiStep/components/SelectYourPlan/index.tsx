import React from 'react'

import LabelTitle from '../LabelTitle'
import ButtonNextPrev from '../ButtonNextPrev'
import { TChange } from '../../interfaces'
import { PAGE_NAME } from '../../constants'
import { usePageContext } from '../../context'
import { TextInput } from '../../../../components'

import arcade from '../../../../assets/images/ico/arcade.svg'

export const SelectYourPlan = () => {
  const {
    page,
    listPlan,
    events:{
      handleNext,
      actionInput,
    }
  } = usePageContext()
  const pageName = PAGE_NAME.SELECT_YOUR_PLAN
  console.log('page', page)
  if (page !== pageName) {
    return null
  }
  const personalName = 'personalName'
  const personalEmail = 'personalEmail'
  const personalPhoneNumber = 'personalPhoneNumber'
  console.log('listPlan', listPlan)
  return (
    <div className='containerTask'>
      <LabelTitle
        title='Select your plan'
        subTitle='You have the option of monthly or yearly billing.'
      />
      <div>
        <div className='cardPlan'>
          {
            listPlan.map(plan => {
              const { price, uriIcon, title, priceFormat} = plan
              return (
                <div key={price} className='cardPlan__card'>
                  <div>
                    <img src={uriIcon} alt={title} width={40} />
                  </div>
                  <div>
                    <div>{title}</div>
                    <div>{priceFormat}</div>
                  </div>
                </div>
              )
            })
          }
        </div>
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
