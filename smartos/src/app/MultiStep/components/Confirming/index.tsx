import React from 'react'

import { PAGE_NAME } from '../../constants'
import { usePageContext } from '../../context'
import uriIcon from '../../../../assets/images/ico/check.svg'

export const Confirming = () => {
  const { page } = usePageContext()
  const pageName = PAGE_NAME.CONFIRMING

  if (page !== pageName) {
    return null
  }

  return (
    <div className='containerTask'>
      <div className='confirm'>
        <div className='confirm__img'>
          <img src={uriIcon} alt='thanks' width={80} />
        </div>
        <div className='confirm__title'>Thank you!</div>
        <div className='confirm__subTitle'>
          Thanks for confirming your subscription! We hope you have fun
          using our platform. If you ever need support, please feel free
          to email us at support@loremgaming.com.
        </div>
      </div>

    </div>
  )
}

export default Confirming
