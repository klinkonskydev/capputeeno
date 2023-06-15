import React from 'react'

import * as S from './styles'
import { useSearchParams, useRouter, usePathname } from 'next/navigation'
import { createUrl } from 'utils/create-url'
import createQueryString from 'utils/create-query-string'

type PaginationProps = {
  totalProduct: number
  numberOfProductsPerPage?: number
}

export default function Pagination({
  totalProduct,
  numberOfProductsPerPage = 12
}: PaginationProps) {
  const searchParams = useSearchParams()!
  const pathname = usePathname()
  const { push } = useRouter()

  const currentPage = searchParams.get('page') ?? 1
  const numberOfPages = Math.ceil(totalProduct / numberOfProductsPerPage)
  const arrayOfButtons = Array.from({ length: numberOfPages }, (_, i) => i + 1)

  const handleClick = (value: number) => {
    if (currentPage === value) return
    const params = createQueryString({ name: 'page', value, searchParams })
    const url = createUrl({ pathname, params })
    push(url)
  }

  return (
    <S.Wrapper>
      {arrayOfButtons.map((item) => (
        <S.Button
          data-state={
            String(currentPage) === String(item) ? 'active' : 'unactive'
          }
          onClick={() => handleClick(item)}
          key={item}
        >
          {item}
        </S.Button>
      ))}
    </S.Wrapper>
  )
}
