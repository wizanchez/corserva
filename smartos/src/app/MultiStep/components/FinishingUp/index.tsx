import React from 'react'

import LabelTitle from '../LabelTitle'
import { PAGE_NAME } from '../../constants'
import ButtonNextPrev from '../ButtonNextPrev'
import { usePageContext } from '../../context'

export const FinishingUp = () => {
  const {
    page,
    infoSummary,
    events:{
      handleNext,
    }
  } = usePageContext()
  const pageName = PAGE_NAME.FINISHINGUP

  if (page !== pageName) {
    return null
  }

  const {
    infoPick,
    planName,
    planPrice,
    priceTotalTitle,
    granTotalFormat,
  } = infoSummary

  return (
    <div className='containerTask'>
      <LabelTitle
        title='Finishing up'
        subTitle='Double-check everything looks OK before confirming.'
      />
      <div>
        <div className='summary'>
          <div className='summary__plan'>
            <div>
              <div className='summary__plan__title'>
                {planName}
              </div>
              <div className='summary__plan__change' onClick={() => handleNext(PAGE_NAME.PICK_ADD_ONS, 'PREV')}>
                Change
              </div>
            </div>
            <div className='summary__plan__price'>
              {planPrice}
            </div>
          </div>
          {infoPick.length > 0 && (<div className='summary__line' />)}
          <>
            {
              infoPick.map(item => {
                const { id, title, priceTotalFormat } = item

                return (
                  <div className='summary__service' key={id}>
                    <div className='summary__service__title'>{title}</div>
                    <div className='summary__service__price'>{priceTotalFormat}</div>
                  </div>
                )
              })
            }
          </>
        </div>
        <div className='total'>
          <div className='total__title'>{priceTotalTitle}</div>
          <div className='total__price'>{granTotalFormat}</div>
        </div>
      </div>
      <ButtonNextPrev
        labelPrev='Go Back'
        onClickPrev={() => handleNext(pageName, 'PREV')}
        labelNext='Confirm'
        classNext='btnConfirm'
        onClickNext={() => handleNext(pageName, 'NEXT')}
      />
    </div>
  )
}

export default FinishingUp
