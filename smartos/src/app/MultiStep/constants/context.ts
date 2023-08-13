import { PAGE_NAME } from './pages'
import { dataStep } from './dataStep'
import { planList } from './dataPlan'
import { IpageInitialState, IpageInitialContext } from '../interfaces'

export const pageInitialState: IpageInitialState = {
  stepSelect: 1,
  personalName: '',
  personalEmail: '',
  listStep: dataStep,
  listPlan: planList,
  personalPhoneNumber: '',
  personalNameError: false,
  personalEmailError: false,
  bannerInitialVisible: false,
  page: PAGE_NAME.SELECT_YOUR_PLAN,
  personalPhoneNumberError: false,

}

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    handleNext: () => {},
    actionInput: () => false,
  },
}
