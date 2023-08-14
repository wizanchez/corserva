export interface IlistPickOne{
  id: number
  price: number
  title: string
  subTitle: string
  isSelect?: boolean
  priceTotal?: number
  freeMonthPerYear: number
  priceTotalFormat?: string
}

export interface IlistPick {
  clickSelect: (id: number) => void
  isPerYear: boolean
  listPick: IlistPickOne[]
}