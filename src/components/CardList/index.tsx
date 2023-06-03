'use client'

import Cart from 'components/Card'

import * as S from './styles'
import { getProducts } from 'lib/graphql'

const CardList = () => {
  const { products } = getProducts({ page: 0, perPage: 12 })

  return (
    <S.Wrapper>
      {products.map((product) => (
        <Cart key={product.id} {...product} />
      ))}
    </S.Wrapper>
  )
}

export default CardList
