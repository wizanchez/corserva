export interface IStepOne{
  step: number
  title: string
  subTitle: string
}

export interface IListStep {
  stepSelect: number
  listStep: IStepOne[]
}