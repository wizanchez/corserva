import React from 'react'
import { render, screen } from '@testing-library/react'
import { PageProvider, PageContext } from './smartos/src/app/MultiStep/context'
import {
  StepXs,
  PersonalInfo,
  SelectYourPlan,
} from './smartos/src/app/MultiStep/components'



describe('Component: load main Components', () => {

  it('Should render : Tag <PersonalInfo> // STEP 1', () => {
    render(<PersonalInfo />)
    const title = screen.getByTestId('id.PersonalInfo')
    expect(title).toBeInTheDocument()
  })
})
