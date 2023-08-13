export interface ITextInput{
  id: string
  value: string
  label?: string
  error?: boolean
  errorText?: string
  placeholder?: string
  onChange: (vars: React.ChangeEvent<HTMLInputElement>) => void
}