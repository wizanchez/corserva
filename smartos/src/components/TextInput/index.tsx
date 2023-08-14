import React, { FC } from 'react'
import { TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ITextInput } from './interfaces'

const LABEL_ERROR = 'This field is required'

export const TextInput:FC<ITextInput> = (props) => {
  const {
    type,
    value,
    label,
    onChange,
    placeholder,
    error = false,
    errorText = LABEL_ERROR,
  } = props
  const classes = useStyles()

  return (
    <div className='textField'>
      <div className='textField__label'>
        {label && (<div className='textField__label__name'>{label}</div>)}
        {error && (<div className='textField__label__error'>{errorText}</div>)}
      </div>
      <TextField
        fullWidth
        hiddenLabel
        error={error}
        value={value}
        variant='outlined'
        id='outlined-basic'
        onChange={onChange}
        className={classes.root}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default TextInput

const useStyles = makeStyles({
  root: {
    // input label when focused
    // '& label.Mui-focused': {
    //   color: 'red',
    // },
    // focused color for input with variant='standard'
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: '#483EFF',
    // },
    // focused color for input with variant='filled'
    // '& .MuiFilledInput-underline:after': {
    //   borderBottomColor: 'blue',
    // },
    // focused color for input with variant='outlined'
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#483EFF',
      },
    },
  },
})
