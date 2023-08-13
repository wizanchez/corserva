import { IListStep } from './listStep'
import { IPlanOne } from './listPlan'
import { PAGE_NAME } from '../constants'

export interface IPageProvider {
  children: React.ReactNode;
}

export type TAction = 'SET' | 'GET' | 'ERROR'

export type TTAction = 'NEXT' | 'PREV'

export interface IpageInitialState extends IListStep {
  page: PAGE_NAME
  listPlan: IPlanOne[]
  personalName: string
  personalEmail: string
  personalNameError: boolean
  personalEmailError: boolean
  personalPhoneNumber: string
  bannerInitialVisible: boolean
  personalPhoneNumberError: boolean
}

export interface IpageInitialContext extends IpageInitialState{
	events: {
    handleNext: (type: PAGE_NAME, action: TTAction) => void
    actionInput: (action: TAction, inputName: string, value: string) => string | boolean
  }
}

export type TChange = React.ChangeEvent<HTMLInputElement>
