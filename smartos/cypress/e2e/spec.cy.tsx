import { pageInitialContext as initProps } from '../../src/app/MultiStep/constants'
import { PageContext } from '../../src/app/MultiStep/context'
import {
  ListPlan,
  PickAddOns,
  FinishingUp,
  PersonalInfo,
  SelectYourPlan,
} from '../../src/app/MultiStep/components'
describe('template spec', () => {
  // it('passes', () => {
  //   cy.visit('https://example.cypress.io')
  // })

  it('All Test', () => {
    cy.visit('http://localhost:3000/')

    render(
      <PageContext.Provider
        value={{ ...initProps }}
      >
        <PersonalInfo />
      </PageContext.Provider>
    )
    const title = screen.getByTestId('id.PersonalInfo')
    expect(title).toBeInTheDocument()
    // expect(true).to.equal(true)
  })
})