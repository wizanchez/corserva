import React, { FC } from 'react'
import { Button, styled } from '@material-ui/core'

import { IButtonNext } from '../../interfaces'

const BootstrapButtonNext = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 24px',
  border: '1px solid',
  borderRadius: 8,
  lineHeight: 1.5,
  backgroundColor: '#164A8A',
  borderColor: '#164A8A',
  color: 'white',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

const BootstrapButtonPrev = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 24px',
  border: '1px solid',
  borderRadius: 8,
  lineHeight: 1.5,
  backgroundColor: '#FFF',
  borderColor: '#FFF',
  color: '#9699AA',
  fontFamily: [
    '-apple-system',
    'BlinkMacSystemFont',
    '"Segoe UI"',
    'Roboto',
    '"Helvetica Neue"',
    'Arial',
    'sans-serif',
    '"Apple Color Emoji"',
    '"Segoe UI Emoji"',
    '"Segoe UI Symbol"',
  ].join(','),
  '&:hover': {
    backgroundColor: '#FFF',
    borderColor: '#FFF',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#FFF',
    borderColor: '#FFF',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
})

export const ButtonNextPrev: FC<IButtonNext> = (props) => {
  const {
    labelNext,
    labelPrev,
    classNext,
    onClickPrev,
    onClickNext,
  } = props

  return (
    <div className='formFooter'>
      <div className='formFooter__btn'>
        <div>
          {labelPrev && (
            <BootstrapButtonPrev
              variant="contained"
              className='btnPrev'
              onClick={onClickPrev}
            >
              {labelPrev}
            </BootstrapButtonPrev>
          )}
        </div>
        <BootstrapButtonNext
          variant="contained"
          className={`btnNext ${classNext}`}
          onClick={onClickNext}
        >
          {labelNext}
        </BootstrapButtonNext>
      </div>
    </div>
  )
}

export default ButtonNextPrev
