import { IListStep } from './listStep'
import { IPlanOne } from './listPlan'
import { PAGE_NAME } from '../constants'
import { IlistPickOne } from './listPick'

export interface IPageProvider {
  children: React.ReactNode;
}

export type TAction = 'SET' | 'GET' | 'ERROR' | 'ERROR_MSG'

export type TTAction = 'NEXT' | 'PREV'

export interface IinfoSummary{
  planName : string
  planPrice: string
  granTotal: number
  totalPriceAddOn: number
  granTotalFormat: string
  priceTotalTitle: string
  infoPick: IlistPickOne[]
}
export interface IpageInitialState extends IListStep {
  page: PAGE_NAME
  isPerYear: boolean
  planSelect: number
  listPlan: IPlanOne[]
  listPick: IlistPickOne[]
  personalName: string
  personalEmail: string
  infoSummary: IinfoSummary
  personalNameError: boolean
  personalEmailError: boolean
  personalPhoneNumber: string
  personalEmailErrorMsg: string
  bannerInitialVisible: boolean
  personalPhoneNumberError: boolean
}

export interface IpageInitialContext extends IpageInitialState{
	events: {
    handleSelectAddOn:  (id: number) => void
    handlePlanPerYear: (isYear: boolean) => void
    handlePlan: (idPlan: number) => void
    handleNext: (type: PAGE_NAME, action: TTAction) => void
    actionInput: (action: TAction, inputName: string, value: string) => string | boolean
  }
}

export type TChange = React.ChangeEvent<HTMLInputElement>
