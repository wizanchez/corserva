import React, { FC } from 'react'

import { IContainer } from './interfaces'

export const Container:FC<IContainer> = (props) => {
  const { children } = props
  return (
    <div className='container'>
      {children}
    </div>
  )
}

export default Container