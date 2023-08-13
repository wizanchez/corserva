import React, { FC } from 'react'

import { IListPlan, IPlanOne } from '../../interfaces'

const ListPlan: FC<IListPlan> = (props) => {
  const { listPlan, planSelect, isPerYear, clickSelect } = props

  return(
    <div className='cardPlan'>
      {
        listPlan.map((item: IPlanOne) => {
          const {
            id,
            price,
            title,
            uriIcon,
            priceFormat,
            freeMonthPerYear,
          } = item
          const classSelect = planSelect === id ? 'cardPlan__card__select' : ''

          return (
            <div key={price} className={`cardPlan__card ${classSelect}`} onClick={() => clickSelect(id)}>
              <div className='cardPlan__card__img'>
                <img src={uriIcon} alt={title} width={40} />
              </div>
              <div className='cardPlan__card__body'>
                <div className='cardPlan__card__title'>{title}</div>
                <div className='cardPlan__card__subTitle'>{priceFormat}</div>
                {isPerYear && (<div className='cardPlan__card__free'>{`${freeMonthPerYear} months free`}</div>)}
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListPlan