import { memo } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  iconAriaLabel?: string
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'right',
  iconAriaLabel,
  ...props
}: TextFieldProps) => {
  return (
    <S.Wrapper iconPosition={iconPosition}>
      {!!icon && (
        <S.Icon type="submit" aria-label={iconAriaLabel}>
          {icon}
        </S.Icon>
      )}
      <S.TextField {...props} />
    </S.Wrapper>
  )
}
export default memo(TextField)
