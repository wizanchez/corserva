export const getPrefixPlan = (isPerYear: boolean) => isPerYear ? 'yr' : 'mo'
export const getPrefixPlanName = (isPerYear: boolean) => isPerYear ? 'Yearly' : 'Monthly'
export const getPrefixIsYear = (isPerYear: boolean) => isPerYear ? 'per year' : 'per month'