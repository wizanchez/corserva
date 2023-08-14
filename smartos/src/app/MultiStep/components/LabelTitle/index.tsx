import React, { FC } from 'react'

import { ILabelTitle } from '../../interfaces'

export const LabelTitle:FC<ILabelTitle> = (props) => {
  const { title, subTitle } = props
  return (
    <>
      <div className='labelTitle'>
        <div className='title'>
          {title}
        </div>
        <div className='title__subTitle'>
          {subTitle}
        </div>
      </div>
    </>
  )
}

export default LabelTitle