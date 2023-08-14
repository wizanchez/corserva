import React from 'react'

import LabelTitle from '../LabelTitle'
import ButtonNextPrev from '../ButtonNextPrev'
import { TChange } from '../../interfaces'
import { PAGE_NAME } from '../../constants'
import { usePageContext } from '../../context'
import { TextInput } from '../../../../components'

export const PersonalInfo = () => {
  const {
    page,
    events:{
      handleNext,
      actionInput,
    }
  } = usePageContext()
  const pageName = PAGE_NAME.PERSONAL_INFO

  if (page !== pageName) {
    return null
  }
  const personalName = 'personalName'
  const personalEmail = 'personalEmail'
  const personalPhoneNumber = 'personalPhoneNumber'

  return (
    <div className='containerTask'>
      <LabelTitle
        title='Personal info'
        subTitle='Please provide your name, email address, and phone number.'
      />
      <div>
        <TextInput
          id=''
          value={actionInput('GET', personalName, '') as string}
          error={actionInput('ERROR', personalName, '' ) as boolean}
          label='Name'
          placeholder='e.g. Stephen King'
          onChange={(e: TChange ) => actionInput('SET', personalName, e.target.value )}
        />
        <TextInput
          id=''
          type='email'
          value={actionInput('GET', personalEmail, '') as string}
          error={actionInput('ERROR', personalEmail, '' ) as boolean}
          errorText= {actionInput('ERROR_MSG', personalEmail, '' ) as string}
          label='Email Address'
          placeholder='e.g. stephenking@lorem.com'
          onChange={(e: TChange ) => actionInput('SET', personalEmail, e.target.value )}
        />
        <TextInput
          id=''
          type='tel'
          value={actionInput('GET', personalPhoneNumber, '') as string}
          error={actionInput('ERROR', personalPhoneNumber, '' ) as boolean}
          label='Phone Number'
          placeholder='e.g. +1 234 567 890'
          onChange={(e: TChange ) => actionInput('SET', personalPhoneNumber, e.target.value )}
        />
      </div>
      <ButtonNextPrev
        labelNext='Next Step'
        onClickNext={() => handleNext(pageName, 'NEXT')}
      />
    </div>
  )
}

export default PersonalInfo
