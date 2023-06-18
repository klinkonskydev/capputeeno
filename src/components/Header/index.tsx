'use client'

import SearchIcon from 'components/Icons/Search'
import TextField from 'components/TextField'

import * as S from './styles'
import CartIcon from 'components/CartIcon'
import MediaMatch from 'components/MediaMatch'
import { useState, useCallback, memo } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import createQueryString from 'utils/create-query-string'
import { createUrl } from 'utils/create-url'

const Header = () => {
  const searchParams = useSearchParams()
  const { push } = useRouter()

  const [search, setSearch] = useState('')


  const handleSearch = () => {
    const params = createQueryString({
      name: 'q',
      value: search,
      searchParams
    })

    const url = createUrl({ pathname: '/', params })
    push(url)
  }

  const onInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setSearch(newValue)
    !newValue.trim().length && handleSearch()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <S.Header>
      <S.Content>
        <S.Logo href="/" className={S.sairaStencilOne.className}>
          capputeeno
        </S.Logo>

        <S.TextFieldWrapper onSubmit={handleSubmit}>
          <MediaMatch greaterThan="medium">
            <TextField
              placeholder="Procurando por algo específico?"
              iconAriaLabel="Pesquisar"
              icon={<span onClick={handleSearch}><SearchIcon /></span>}
              value={search}
              onChange={onInputChange}
            />
          </MediaMatch>
          <CartIcon items={0} />
        </S.TextFieldWrapper>
      </S.Content>
    </S.Header>
  )
}

export default memo(Header)
