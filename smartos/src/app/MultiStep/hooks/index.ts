import { useEffect, useState } from 'react'

import { pageInitialState, PAGE_NAME } from '../constants'
import {
  type TAction,
  type TTAction,
  type IpageInitialState,
} from '../interfaces'

const MSG = {
  CODEFOUND: 'Código encontrado',
  CODENOTFOUND: 'Código NO encontrado',
  PLEASECODE: 'Favor digite el codigo de la compañia'
}

const useMultiStep = () => {
  const [state, setState] = useState<IpageInitialState>(pageInitialState)

  const changeState = (states: object) => {
    setState((prevState) => ({
      ...prevState,
      ...states,
    }))
  }

  const actionInput = (action: TAction, inputName: string, value?: string) => {
    const isSet = action === 'SET'
    const isGet = action === 'GET'
    const isError = action === 'ERROR'
    if (isSet) {
      changeState({ [`${inputName}Error`]: false })
      changeState({ [inputName]: value })
      return true
    }

    switch (inputName) {
    case 'personalName':
      if (isGet) {
        return state.personalName
      }
      if (isError) {
        return state.personalNameError
      }
      break
    case 'personalEmail':
      if (isGet) {
        return state.personalEmail
      }
      if (isError) {
        return state.personalEmailError
      }
      break
    case 'personalPhoneNumber':
      if (isGet) {
        return state.personalPhoneNumber
      }
      if (isError) {
        return state.personalPhoneNumberError
      }
      break

    default:
      return false
      break
    }

    return false
  }

  const ValidField = (ListField: string[]) => new Promise((resolve, reject) => {
    ListField.forEach( item => {
      const personalEmail = actionInput('GET',item)
      if (!personalEmail) {
        changeState({[`${item}Error`]: true})
        resolve(false)
        return false
      }
    })
    resolve(true)
  })

  const handleNext = async (type: PAGE_NAME, action: TTAction) => {
    const isPrev = action === 'PREV'

    switch (type) {
    case PAGE_NAME.PERSONAL_INFO:
      if (isPrev) {

      }
      const isValid = await ValidField([
        'personalName',
        'personalEmail',
        'personalPhoneNumber',
      ])

      if (isValid) {
        changeState({page: PAGE_NAME.SELECT_YOUR_PLAN})
      }
      break
    case PAGE_NAME.SELECT_YOUR_PLAN:
      if (isPrev) {
        changeState({page: PAGE_NAME.PERSONAL_INFO})
      }
      break
    }
  }

  const run = () => {
    changeState({bannerInitialVisible: true})
  }

  useEffect(() => {
    run()
  }, [])

  return {
    ...state,
    events:{
      handleNext,
      actionInput,
    }
  }
}

export default useMultiStep