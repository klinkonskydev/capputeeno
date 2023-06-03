'use client'

import SearchIcon from 'components/Icons/Search'
import TextField from 'components/TextField'

import * as S from './styles'
import CartIcon from 'components/CartIcon'
import MediaMatch from 'components/MediaMatch'

const Header = () => {
  return (
    <S.Header>
      <S.Logo href="/" className={S.sairaStencilOne.className}>
        capputeeno
      </S.Logo>

      <S.TextFieldWrapper>
        <MediaMatch greaterThan="medium">
          <TextField
            placeholder="Procurando por algo específico?"
            icon={<SearchIcon />}
          />
        </MediaMatch>
        <CartIcon items={0} />
      </S.TextFieldWrapper>
    </S.Header>
  )
}

export default Header
