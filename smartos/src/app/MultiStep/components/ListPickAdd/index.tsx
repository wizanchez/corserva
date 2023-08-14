import React, { FC } from 'react'

import { getPrefixPlan, priceDiscount } from '../../utils'
import { IlistPick } from '../../interfaces'
import { CheckBoxOS } from '../../../../components'

export const ListPickAdd: FC<IlistPick> = (props) => {
  const { listPick, isPerYear, clickSelect } = props

  return (
    <div className='cardPick'>
      {
        listPick.map(item => {
          const {
            id,
            price,
            title,
            subTitle,
            isSelect,
            freeMonthPerYear
          } = item

          const classSelect = isSelect ? 'cardPick__card__select' : ''
          const freeMoth = freeMonthPerYear
          const newPrice = priceDiscount({price, freeMoth, isPerYear})
          const prefPrice = getPrefixPlan(isPerYear)

          return (
            <div key={id} className={`cardPick__card ${classSelect}`} onClick={() => clickSelect(id)}>
              <div className='cardPick__card__check'>
                <CheckBoxOS checked={isSelect || false} onChange={()=>{}} />
              </div>
              <div className='cardPick__card__content'>
                <div className='cardPick__card__title'>{title}</div>
                <div className='cardPick__card__subTitle'>{subTitle}</div>
              </div>
              <div className='cardPick__card__price'>{`+$${newPrice}/${prefPrice}`}</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default ListPickAdd