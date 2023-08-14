type TType = 'tel' | 'number' | 'password' | 'email'
export interface ITextInput{
  id: string
  type?: TType
  value: string
  label?: string
  error?: boolean
  errorText?: string
  placeholder?: string
  onChange: (vars: React.ChangeEvent<HTMLInputElement>) => void
}