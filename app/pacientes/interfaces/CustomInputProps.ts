import { Control, FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export interface CustomInputProps {
  name: string
  error?: Merge<FieldError, FieldErrorsImpl<{}>> | null
  control: Control<any, any> | undefined
}
