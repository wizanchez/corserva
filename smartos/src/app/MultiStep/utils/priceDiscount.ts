export const priceDiscount = (
  {price, freeMoth, isPerYear} :
  {price: number ,freeMoth: number, isPerYear: boolean}
) => isPerYear ? (price * (12 - freeMoth) )  : price