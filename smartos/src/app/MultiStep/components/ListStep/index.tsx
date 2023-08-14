import React, { FC } from 'react'

import { IListStep, IStepOne } from '../../interfaces'

const ListStep: FC<IListStep> = (props) => {
  const { listStep, stepSelect } = props

  return(
    <>
      {
        listStep.map((item: IStepOne) => {
          const { step, title, subTitle } = item
          const classSelec5 = (step === 4 && stepSelect === 5) ? 'cicle__select' : ''
          const classSelect = step === stepSelect ? 'cicle__select' : classSelec5
          return (
            <div className='sectionCircle' key={step}>
              <div className={`cicle ${classSelect}`}>{step}</div>
              <div className='sectionCircle__content'>
                <div className='sectionCircle__content__title'>{title}</div>
                <div className='sectionCircle__content__subTitle'>{subTitle}</div>
              </div>
            </div>
          )
        })
      }
    </>
  )
}

export default ListStep