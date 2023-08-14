import React, { useContext, createContext } from 'react'

import useBarCode from '../hooks'
import { pageInitialContext } from '../constants'
import { IpageInitialContext, IPageProvider } from '../interfaces'

export const PageContext = createContext<IpageInitialContext>(pageInitialContext)

export const PageProvider: React.FC<IPageProvider> = ({ children }) => (
  <PageContext.Provider value={{ ...useBarCode() }}>{children}</PageContext.Provider>
)

export const usePageContext = () => {
  const context = useContext(PageContext)
  if (context === undefined) {
    throw new Error('PageCartContext must be used within a PageCartProvider')
  }
  return context
}
