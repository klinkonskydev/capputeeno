import { useEffect, useState } from 'react'
import * as S from './styles'

type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset'

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Title onMouseDown={() => setIsOpen(!isOpen)} aria-expanded={isOpen}>
        {title}
      </S.Title>

      <S.Content aria-hidden={!isOpen} role="menu">
        {children}
      </S.Content>
      <S.Overlay aria-hidden={!isOpen} onMouseDown={() => setIsOpen(!isOpen)} />
    </S.Wrapper>
  )
}

export default Dropdown
