import * as S from './styles'

export type TextFieldProps = {
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
} & React.InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  icon,
  iconPosition = 'right',
  ...props
}: TextFieldProps) => {
  return (
    <S.Wrapper iconPosition={iconPosition}>
      {!!icon && <S.Icon>{icon}</S.Icon>}
      <S.TextField {...props} />
    </S.Wrapper>
  )
}
export default TextField
