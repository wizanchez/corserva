import { PAGE_NAME } from './pages'
import { dataStep } from './dataStep'
import { planList } from './dataPlan'
import { dataPick } from './dataPickAddOns'
import { IpageInitialState, IpageInitialContext } from '../interfaces'

export const DinfoSummary = {
  granTotal: 0,
  infoPick: [],
  planName : '',
  planPrice: '',
  totalPriceAddOn: 0,
  priceTotalTitle: '',
  granTotalFormat: '',
}

export const pageInitialState: IpageInitialState = {
  planSelect: 1,
  stepSelect: 1,
  isPerYear: false,
  personalName: '',
  personalEmail: '',
  listStep: dataStep,
  listPlan: planList,
  listPick: dataPick,
  personalPhoneNumber: '',
  personalNameError: false,
  personalEmailErrorMsg: '',
  personalEmailError: false,
  bannerInitialVisible: false,
  page: PAGE_NAME.PERSONAL_INFO,
  personalPhoneNumberError: false,
  infoSummary: DinfoSummary
}

export const pageInitialContext: IpageInitialContext = {
  ...pageInitialState,
  events: {
    handlePlan: () => {},
    handleNext: () => {},
    actionInput: () => false,
    handlePlanPerYear: () => {},
    handleSelectAddOn: () => {},
  },
}
