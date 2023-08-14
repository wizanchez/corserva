import React from 'react'

import { PageProvider } from './context'
import { Box, Container } from '../../components'
import {
  StepXl,
  StepXs,
  PickAddOns,
  Confirming,
  FinishingUp,
  PersonalInfo,
  SelectYourPlan,
} from './components'

export const MultiStep = () => {
  return (
    <PageProvider>
      <Container>
        <StepXs />
        <Box>
          <StepXl />
          <PersonalInfo />
          <SelectYourPlan />
          <PickAddOns />
          <FinishingUp />
          <Confirming />
        </Box>
      </Container>
    </PageProvider>
  )
}

export default MultiStep
