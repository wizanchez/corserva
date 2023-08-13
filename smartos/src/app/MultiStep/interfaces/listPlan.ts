export interface IPlanOne{
  id: number
  price: number
  title: string
  uriIcon: string
  priceFormat: string
  freeMonthPerYear: number
}

export interface IListPlan {
  isPerYear: boolean
  planSelect: number
  listPlan: IPlanOne[]
  clickSelect: (idPlan: number) => void
}