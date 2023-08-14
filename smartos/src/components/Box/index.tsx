import React, { FC } from 'react'

import { IBox } from './interfaces'

export const Box:FC<IBox> = (props) => {
  const { children } = props
  return (
    <div className='box box__dimension'>
      {children}
    </div>
  )
}

export default Box