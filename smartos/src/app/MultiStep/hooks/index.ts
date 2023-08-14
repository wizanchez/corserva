import { useEffect, useState } from 'react'

import { pageInitialState, PAGE_NAME } from '../constants'
import {
  type TAction,
  type TTAction,
  type IpageInitialState,
} from '../interfaces'

import { testValidateEmail } from '../../../utils'
import {
  priceDiscount,
  getPrefixPlan,
  getPrefixIsYear,
  getPrefixPlanName,
} from '../utils'

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
    const isMsgError = action === 'ERROR_MSG'

    if (isSet) {
      changeState({ [`${inputName}Error`]: false })
      changeState({ [`${inputName}ErrorMsg`]: '' })
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
      if (isMsgError) {
        return state.personalEmailErrorMsg || 'This field is required'
      }
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

  const checKPersonalMail = () => {
    const isMailValid = testValidateEmail(state.personalEmail)
    if (!isMailValid) {
      changeState({
        personalEmailError: true,
        personalEmailErrorMsg: 'The email is invalid'
      })
      return false
    }
    return true
  }

  const calculateAllPlan = () => {
    const { isPerYear, listPlan, listPick } = state
    const infoPlan = listPlan.filter( item => item.id === state.planSelect)[0]
    const planMode = getPrefixPlanName(isPerYear)
    const planModeShort = getPrefixPlan(isPerYear)
    const perYear = getPrefixIsYear(isPerYear)
    const planPrice = priceDiscount({
      price: infoPlan.price,
      freeMoth: infoPlan.freeMonthPerYear,
      isPerYear
    })

    const infoPick = listPick
      .filter( item => item.isSelect)
      .map(item1 => {
        const pickPrice = priceDiscount({
          price: item1.price,
          freeMoth: item1.freeMonthPerYear,
          isPerYear
        })
        return {
          ...item1,
          priceTotal: pickPrice,
          priceTotalFormat: `+$${pickPrice}/${planModeShort}`,
        }
      })

    const totalPriceAddOn = infoPick.reduce((ucc, curren) => ucc + curren.priceTotal, 0)
    const granTotal = totalPriceAddOn + planPrice
    const infoSummary = {
      infoPick,
      granTotal,
      totalPriceAddOn,
      priceTotalTitle: `Total (${perYear})`,
      planPrice: `$${planPrice}/${planModeShort}`,
      planName : `${infoPlan.title} (${planMode})`,
      granTotalFormat: `$${granTotal}/${planModeShort}`,
    }
    changeState({ infoSummary })
  }

  const handleNext = async (type: PAGE_NAME, action: TTAction) => {
    const isPrev = action === 'PREV'
    const isNext = action === 'NEXT'

    switch (type) {
    case PAGE_NAME.PERSONAL_INFO:
      if (isPrev) { }
      const isValid = await ValidField([
        'personalName',
        'personalEmail',
        'personalPhoneNumber',
      ])

      if (isValid) {
        const isMailValid = checKPersonalMail()
        if (isMailValid) {
          changeState({page: PAGE_NAME.SELECT_YOUR_PLAN})
        }
      }
      break
    case PAGE_NAME.SELECT_YOUR_PLAN:
      if (isPrev) {
        changeState({page: PAGE_NAME.PERSONAL_INFO})
      }
      if (isNext) {
        changeState({page: PAGE_NAME.PICK_ADD_ONS})
      }
      break
    case PAGE_NAME.PICK_ADD_ONS:
      if (isPrev) {
        changeState({page: PAGE_NAME.SELECT_YOUR_PLAN})
      }
      calculateAllPlan()
      if (isNext) {
        changeState({page: PAGE_NAME.FINISHINGUP})
      }
      break
    case PAGE_NAME.FINISHINGUP:
      if (isPrev) {
        changeState({page: PAGE_NAME.PICK_ADD_ONS})
      }
      break
    }
  }

  const handleSelectAddOn = (idSelect: number) => {
    const newList = state.listPick.map(item => {
      const { isSelect, id } = item
      const newSelect = id === idSelect ? !isSelect : isSelect
      return {
        ...item,
        isSelect: newSelect
      }
    })
    changeState({listPick: newList})
  }

  const run = () => {  }

  const handlePlan = (planSelect: number) => changeState({ planSelect })
  const handlePlanPerYear = (isYear: boolean) => changeState({ isPerYear: isYear })

  useEffect(() => {
    run()
  }, [])

  return {
    ...state,
    events:{
      handlePlan,
      handleNext,
      actionInput,
      handlePlanPerYear,
      handleSelectAddOn,
    }
  }
}

export default useMultiStep
