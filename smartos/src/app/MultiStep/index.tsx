import React from 'react'

import { PageProvider } from './context'
import { Box, Container } from '../../components'
import {
  StepXl,
  StepXs,
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
        </Box>
      </Container>
    </PageProvider>
  )
}

export default MultiStep
