import { render, screen } from '@testing-library/react'
import { pageInitialContext as initProps } from '../constants'

import { PageContext } from '../context'
import {
  ListPlan,
  PickAddOns,
  FinishingUp,
  PersonalInfo,
  SelectYourPlan,
} from '../components'

describe('::Component: load main Components', () => {
  it('Should render : Component<PersonalInfo> // STEP 1', () => {
    render(
      <PageContext.Provider
        value={{ ...initProps }}
      >
        <PersonalInfo />
      </PageContext.Provider>
    )
    const title = screen.getByTestId('id.PersonalInfo')
    expect(title).toBeInTheDocument()
  })

  it('Should render : Component<SelectYourPlan> // STEP 2', () => {
    render(
      <PageContext.Provider
        value={{ ...initProps, page: 2 }}
      >
        <SelectYourPlan />
      </PageContext.Provider>
    )
    const title = screen.getByTestId('id.SelectYourPlan')
    expect(title).toBeInTheDocument()
  })

  it('Should render : Component<PickAddOns> // STEP 3', () => {
    render(
      <PageContext.Provider
        value={{ ...initProps, page: 3 }}
      >
        <PickAddOns />
      </PageContext.Provider>
    )
    const title = screen.getByTestId('id.PickAddOns')
    expect(title).toBeInTheDocument()
  })

  it('Should render : Component<FinishingUp> // STEP 4', () => {
    render(
      <PageContext.Provider
        value={{ ...initProps, page: 4 }}
      >
        <FinishingUp />
      </PageContext.Provider>
    )
    const title = screen.getByTestId('id.FinishingUp')
    expect(title).toBeInTheDocument()
  })

  it('Should render : Component<ListPlan> // list Plan', () => {
    render(
      <PageContext.Provider
        value={{ ...initProps, page: 2 }}
      >
        <ListPlan
          listPlan={initProps.listPlan}
          isPerYear={initProps.isPerYear}
          planSelect={initProps.planSelect}
          clickSelect={() => {}}
        />
      </PageContext.Provider>
    )
    const title = screen.getByTestId('id.ListPlan')
    expect(title).toBeInTheDocument()
  })

})
