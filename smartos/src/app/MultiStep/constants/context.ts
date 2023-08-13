import { PAGE_NAME } from './pages'
import { dataStep } from './dataStep'
import { planList } from './dataPlan'
import { IpageInitialState, IpageInitialContext } from '../interfaces'

export const pageInitialState: IpageInitialState = {
  planSelect: 0,
  stepSelect: 1,
  isPerYear: false,
  personalName: '',
  personalEmail: '',
  listStep: dataStep,
  listPlan: planList,
  personalPhoneNumber: '',
  personalNameError: false,
  personalEmailErrorMsg: '',
  personalEmailError: false,
  bannerInitialVisible: false,
  page: PAGE_NAME.SELECT_YOUR_PLAN,
  personalPhoneNumberError: false,
}

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    handlePlan: () => {},
    handleNext: () => {},
    actionInput: () => false,
    handlePlanPerYear: () => {},
  },
}
